import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  caseStudies,
  getCaseStudyBySlug,
  getOtherCaseStudies,
} from "@/data/case-studies";
import { categoryLabels } from "@/types";
import { CaseStudyNav } from "@/components/shared/case-study-nav";
import { MoreCaseStudies } from "@/components/shared/more-case-studies";
import { Badge } from "@/components/ui/badge";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: caseStudy.title,
    description: caseStudy.description,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  const otherCaseStudies = getOtherCaseStudies(slug);

  return (
    <div className="container mx-auto max-w-5xl px-4 py-24">
      {/* Hero */}
      <header className="mb-16">
        <div className="flex items-center gap-3">
          <Badge variant="secondary">{categoryLabels[caseStudy.category]}</Badge>
          <span className="text-sm text-muted-foreground">
            {caseStudy.role} • {caseStudy.year}
          </span>
        </div>
        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          {caseStudy.title}
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">
          {caseStudy.description}
        </p>
      </header>

      {/* Content with Sticky Nav */}
      <div className="grid gap-12 lg:grid-cols-[200px_1fr]">
        {/* Sticky Vertical Nav */}
        <aside className="hidden lg:block">
          <CaseStudyNav sections={caseStudy.sections} />
        </aside>

        {/* Content Sections */}
        <div className="space-y-16">
          {caseStudy.sections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2 className="text-2xl font-bold tracking-tight">
                {section.title}
              </h2>
              <div className="mt-4 text-muted-foreground">
                <p>{section.content}</p>
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* More Case Studies */}
      <MoreCaseStudies caseStudies={otherCaseStudies} />
    </div>
  );
}
