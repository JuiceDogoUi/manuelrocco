"use client";

import { CaseStudySection } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";

interface CaseStudyNavProps {
  sections: CaseStudySection[];
}

export function CaseStudyNav({ sections }: CaseStudyNavProps) {
  const [activeSection, setActiveSection] = useState<string>(
    sections[0]?.id || ""
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -80% 0px",
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="sticky top-24">
      <ul className="space-y-2 border-l">
        {sections.map((section) => (
          <li key={section.id}>
            <Link
              href={`#${section.id}`}
              className={`block py-1 pl-4 text-sm transition-colors ${
                activeSection === section.id
                  ? "border-l-2 border-primary -ml-px font-medium text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {section.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
