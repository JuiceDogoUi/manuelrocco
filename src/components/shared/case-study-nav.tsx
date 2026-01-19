"use client";

import { CaseStudySection } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

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
      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
        On this page
      </div>
      <ul className="space-y-1 border-l border-border/50">
        {sections.map((section) => (
          <li key={section.id}>
            <Link
              href={`#${section.id}`}
              className={cn(
                "block py-2 pl-4 text-sm transition-all duration-200",
                activeSection === section.id
                  ? "-ml-px border-l-2 border-primary font-medium text-foreground"
                  : "text-muted-foreground hover:text-foreground hover:translate-x-0.5"
              )}
            >
              {section.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
