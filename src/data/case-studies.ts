import { CaseStudy, CaseStudyCategory } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "case-study-1",
    title: "Case Study One",
    description: "Brief description of the case study and its impact.",
    role: "Founder",
    year: 2024,
    category: "built",
    featured: true,
    sections: [
      {
        id: "context",
        title: "Context",
        content: "Background and context for this project.",
      },
      {
        id: "challenge",
        title: "Challenge",
        content: "The main challenges faced during this project.",
      },
      {
        id: "solution",
        title: "Solution",
        content: "How the challenges were addressed.",
      },
      {
        id: "outcome",
        title: "Outcome",
        content: "The results and impact of the project.",
      },
    ],
  },
  {
    slug: "case-study-2",
    title: "Case Study Two",
    description: "Brief description of another case study.",
    role: "Head of Product",
    year: 2023,
    category: "led",
    featured: true,
    sections: [
      {
        id: "context",
        title: "Context",
        content: "Background and context for this project.",
      },
      {
        id: "challenge",
        title: "Challenge",
        content: "The main challenges faced during this project.",
      },
      {
        id: "solution",
        title: "Solution",
        content: "How the challenges were addressed.",
      },
      {
        id: "outcome",
        title: "Outcome",
        content: "The results and impact of the project.",
      },
    ],
  },
  {
    slug: "case-study-3",
    title: "Case Study Three",
    description: "Brief description of a third case study.",
    role: "Senior Product Designer",
    year: 2023,
    category: "designed",
    featured: true,
    sections: [
      {
        id: "context",
        title: "Context",
        content: "Background and context for this project.",
      },
      {
        id: "challenge",
        title: "Challenge",
        content: "The main challenges faced during this project.",
      },
      {
        id: "solution",
        title: "Solution",
        content: "How the challenges were addressed.",
      },
      {
        id: "outcome",
        title: "Outcome",
        content: "The results and impact of the project.",
      },
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getFeaturedCaseStudies(limit?: number): CaseStudy[] {
  const featured = caseStudies.filter((cs) => cs.featured);
  return limit ? featured.slice(0, limit) : featured;
}

export function getCaseStudiesByCategory(
  category: CaseStudyCategory
): CaseStudy[] {
  return caseStudies.filter((cs) => cs.category === category);
}

export function getOtherCaseStudies(currentSlug: string): CaseStudy[] {
  return caseStudies.filter((cs) => cs.slug !== currentSlug);
}

export function getAllCategories(): CaseStudyCategory[] {
  return ["built", "led", "designed"];
}
