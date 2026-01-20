import { caseStudies } from "@/data/case-studies";
import { CaseStudiesList } from "@/components/shared/case-studies-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real projects, real outcomes. Each case study walks through the problem, the decisions, and what I learned.",
};

export default function CaseStudiesPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-24">
      <header className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          Case Studies
        </h1>

        <p className="mt-6 text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
          Here&apos;s what I&apos;ve been working on and how it came together.
        </p>
      </header>

      {/* Case studies list with filter */}
      <CaseStudiesList caseStudies={caseStudies} />
    </div>
  );
}
