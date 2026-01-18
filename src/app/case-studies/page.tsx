import { caseStudies } from "@/data/case-studies";
import { CaseStudiesList } from "@/components/shared/case-studies-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "A collection of my work and case studies.",
};

export default function CaseStudiesPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-24">
      <h1 className="text-4xl font-bold tracking-tight">Case Studies</h1>
      <p className="mt-4 text-muted-foreground">
        A collection of my work and projects.
      </p>
      <div className="mt-12">
        <CaseStudiesList caseStudies={caseStudies} />
      </div>
    </div>
  );
}
