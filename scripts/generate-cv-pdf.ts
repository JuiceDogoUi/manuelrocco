#!/usr/bin/env tsx
/**
 * CV PDF Generator - Two Column Layout
 *
 * Converts markdown CVs with YAML front-matter to polished two-column PDFs.
 *
 * Usage:
 *   npm run cv:pdf <company>     # Generate PDF for specific company
 *   npm run cv:pdf --base        # Generate PDF from base CV template
 *
 * Examples:
 *   npm run cv:pdf stripe
 *   npm run cv:pdf datacamp
 *   npm run cv:pdf --base
 */

import puppeteer from "puppeteer";
import { marked } from "marked";
import matter from "gray-matter";
import * as fs from "fs";
import * as path from "path";

// Paths
const ROOT = process.cwd();
const APPLICATIONS_DIR = path.join(ROOT, "applications");
const TEMPLATES_DIR = path.join(APPLICATIONS_DIR, "_templates");
const TEMPLATE_HTML = path.join(TEMPLATES_DIR, "cv-template.html");
const TEMPLATE_CSS = path.join(TEMPLATES_DIR, "cv-style.css");

// Types
interface CVFrontMatter {
  name: string;
  title: string;
  summary?: string;
  contact?: string[];
  skills?: Record<string, string[]>;
  education?: Array<{
    institution: string;
    degree: string;
    year?: string;
  }>;
  certifications?: string[];
  languages?: string[];
  compact?: boolean;
}

interface CVOptions {
  company?: string;
  useBase?: boolean;
}

function parseArgs(): CVOptions {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.error("Usage: npm run cv:pdf <company> or npm run cv:pdf --base");
    process.exit(1);
  }

  if (args.includes("--base") || args.includes("-b")) {
    return { useBase: true };
  }

  return { company: args[0] };
}

function findCVFile(options: CVOptions): { mdPath: string; outputPath: string } {
  if (options.useBase) {
    const mdPath = path.join(TEMPLATES_DIR, "base-cv.md");
    const outputPath = path.join(TEMPLATES_DIR, "base-cv.pdf");
    return { mdPath, outputPath };
  }

  if (!options.company) {
    throw new Error("Company name required");
  }

  const companyDir = path.join(APPLICATIONS_DIR, options.company);

  if (!fs.existsSync(companyDir)) {
    throw new Error(
      `Company directory not found: ${companyDir}\n` +
        `Create it first with: mkdir -p applications/${options.company}`
    );
  }

  const cvPath = path.join(companyDir, "cv.md");
  if (!fs.existsSync(cvPath)) {
    throw new Error(
      `CV file not found: ${cvPath}\n` +
        `Create the CV markdown file first.`
    );
  }

  const outputPath = path.join(companyDir, `${options.company}-cv.pdf`);
  return { mdPath: cvPath, outputPath };
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function buildSidebar(data: CVFrontMatter): string {
  const sections: string[] = [];

  // Contact
  if (data.contact && data.contact.length > 0) {
    sections.push(`
      <section class="sidebar-section">
        <h2>Contact</h2>
        <ul class="contact-list">
          ${data.contact.map((item) => `<li>${escapeHtml(item)}</li>`).join("\n          ")}
        </ul>
      </section>
    `);
  }

  // Skills
  if (data.skills && Object.keys(data.skills).length > 0) {
    const skillGroups = Object.entries(data.skills)
      .map(
        ([category, items]) => `
        <div class="skill-group">
          <h3>${escapeHtml(category)}</h3>
          <ul>
            ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("\n            ")}
          </ul>
        </div>
      `
      )
      .join("\n");

    sections.push(`
      <section class="sidebar-section">
        <h2>Skills</h2>
        ${skillGroups}
      </section>
    `);
  }

  // Education
  if (data.education && data.education.length > 0) {
    const eduItems = data.education
      .map(
        (edu) => `
        <div class="education-item">
          <strong>${escapeHtml(edu.institution)}</strong>
          <p>${escapeHtml(edu.degree)}</p>
          ${edu.year ? `<p class="year">${escapeHtml(edu.year)}</p>` : ""}
        </div>
      `
      )
      .join("\n");

    sections.push(`
      <section class="sidebar-section">
        <h2>Education</h2>
        ${eduItems}
      </section>
    `);
  }

  // Certifications
  if (data.certifications && data.certifications.length > 0) {
    sections.push(`
      <section class="sidebar-section">
        <h2>Certifications</h2>
        <ul>
          ${data.certifications.map((item) => `<li>${escapeHtml(item)}</li>`).join("\n          ")}
        </ul>
      </section>
    `);
  }

  // Languages
  if (data.languages && data.languages.length > 0) {
    sections.push(`
      <section class="sidebar-section">
        <h2>Languages</h2>
        <ul>
          ${data.languages.map((item) => `<li>${escapeHtml(item)}</li>`).join("\n          ")}
        </ul>
      </section>
    `);
  }

  return sections.join("\n");
}

async function generatePDF(mdPath: string, outputPath: string): Promise<void> {
  console.log(`Reading: ${mdPath}`);

  // Read files
  const fileContent = fs.readFileSync(mdPath, "utf-8");
  const template = fs.readFileSync(TEMPLATE_HTML, "utf-8");
  const css = fs.readFileSync(TEMPLATE_CSS, "utf-8");

  // Parse front-matter
  const { data, content: markdownContent } = matter(fileContent);
  const frontMatter = data as CVFrontMatter;

  // Validate required fields
  if (!frontMatter.name) {
    throw new Error("Missing required field in front-matter: name");
  }
  if (!frontMatter.title) {
    throw new Error("Missing required field in front-matter: title");
  }

  console.log(`Generating CV for: ${frontMatter.name}`);

  // Parse markdown body to HTML
  const bodyHtml = await marked.parse(markdownContent, {
    gfm: true,
    breaks: false,
  });

  // Build sidebar
  const sidebarHtml = buildSidebar(frontMatter);

  // Build summary if present
  const summaryHtml = frontMatter.summary
    ? `<p class="summary">${escapeHtml(frontMatter.summary)}</p>`
    : "";

  // Container class for compact mode
  const containerClass = frontMatter.compact ? "cv-container compact" : "cv-container";

  // Build final HTML (use replaceAll for variables that may appear multiple times)
  let html = template
    .replaceAll("{{name}}", escapeHtml(frontMatter.name))
    .replaceAll("{{title}}", escapeHtml(frontMatter.title))
    .replaceAll("{{summary}}", summaryHtml)
    .replaceAll("{{content}}", bodyHtml)
    .replaceAll("{{sidebar}}", sidebarHtml)
    .replaceAll("{{styles}}", css);

  // Replace container class if compact
  if (frontMatter.compact) {
    html = html.replace('class="cv-container"', `class="${containerClass}"`);
  }

  console.log("Launching browser...");

  // Launch Puppeteer
  const browser = await puppeteer.launch({
    headless: true,
  });

  const page = await browser.newPage();

  // Set content
  await page.setContent(html, {
    waitUntil: "networkidle0",
  });

  console.log("Generating PDF...");

  // Generate PDF
  await page.pdf({
    path: outputPath,
    format: "A4",
    printBackground: true,
    margin: {
      top: "0",
      right: "0",
      bottom: "0",
      left: "0",
    },
  });

  await browser.close();

  console.log(`\nPDF generated: ${outputPath}`);
}

async function main(): Promise<void> {
  console.log("\n📄 CV PDF Generator (Two-Column Layout)\n");

  try {
    const options = parseArgs();
    const { mdPath, outputPath } = findCVFile(options);

    await generatePDF(mdPath, outputPath);

    console.log("\n✅ Done!\n");
  } catch (error) {
    console.error(`\n❌ Error: ${error instanceof Error ? error.message : error}\n`);
    process.exit(1);
  }
}

main();
