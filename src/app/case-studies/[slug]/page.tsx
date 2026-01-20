import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import {
  caseStudies,
  getCaseStudyBySlug,
  getOtherCaseStudies,
} from "@/data/case-studies";
import { categoryLabels, CaseStudySection, CaseStudyMetric } from "@/types";
import { CaseStudyNav } from "@/components/shared/case-study-nav";
import { MoreCaseStudies } from "@/components/shared/more-case-studies";
import { StatHighlight } from "@/components/shared/stat-highlight";
import { PullQuote } from "@/components/shared/pull-quote";
import { Callout } from "@/components/shared/callout";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

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

  const ogImage = caseStudy.imageDark || caseStudy.imageLight || caseStudy.image;

  return {
    title: caseStudy.title,
    description: caseStudy.description,
    alternates: {
      canonical: `/case-studies/${slug}`,
    },
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.description,
      type: "article",
      publishedTime: `${caseStudy.year}-01-01`,
      authors: ["Manuel Rocco"],
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630 }] : [],
    },
  };
}

function generateArticleSchema(caseStudy: NonNullable<ReturnType<typeof getCaseStudyBySlug>>) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `https://manuelrocco.com/case-studies/${caseStudy.slug}`,
    headline: caseStudy.title,
    description: caseStudy.description,
    author: {
      "@id": "https://manuelrocco.com/#person",
    },
    publisher: {
      "@id": "https://manuelrocco.com/#person",
    },
    datePublished: `${caseStudy.year}-01-01`,
    dateModified: `${caseStudy.year}-01-01`,
    image: caseStudy.imageDark || caseStudy.imageLight || caseStudy.image,
    keywords: [
      "product design",
      "ux case study",
      caseStudy.category,
      caseStudy.role,
    ],
  };
}

function generateBreadcrumbSchema(caseStudy: NonNullable<ReturnType<typeof getCaseStudyBySlug>>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://manuelrocco.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Case Studies",
        item: "https://manuelrocco.com/case-studies",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: caseStudy.title,
        item: `https://manuelrocco.com/case-studies/${caseStudy.slug}`,
      },
    ],
  };
}

function SectionContent({ section, metrics }: { section: CaseStudySection; metrics?: CaseStudyMetric[] }) {
  const isResult = section.id === "result";

  return (
    <section
      id={section.id}
      className={cn(
        "scroll-mt-24 relative",
        isResult && "py-8 -mx-4 px-4 md:-mx-8 md:px-8"
      )}
    >
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
        {section.title}
      </h2>

      <div className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-prose space-y-4">
        {section.content.split("\n\n").map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      {/* Section image after content */}
      {(section.imageDark || section.imageLight) && (
        <figure className="mt-8">
          <div className="overflow-hidden rounded-2xl ring-1 ring-border/50">
            {section.imageDark && section.imageLight ? (
              <>
                <Image
                  src={section.imageLight}
                  alt={section.title}
                  width={1200}
                  height={630}
                  className="w-full object-cover dark:hidden"
                />
                <Image
                  src={section.imageDark}
                  alt={section.title}
                  width={1200}
                  height={630}
                  className="hidden w-full object-cover dark:block"
                />
              </>
            ) : null}
          </div>
          {section.imageCaption && (
            <figcaption className="mt-3 text-center text-sm text-muted-foreground">
              {section.imageCaption}
            </figcaption>
          )}
        </figure>
      )}

      {/* Pull quote after content */}
      {section.pullQuote && <PullQuote>{section.pullQuote}</PullQuote>}

      {/* Callout box */}
      {section.callout && (
        <Callout label={section.callout.label} variant={section.callout.variant}>
          {section.callout.content}
        </Callout>
      )}

      {/* Metrics inside result section */}
      {isResult && metrics && metrics.length > 0 && (
        <StatHighlight metrics={metrics} />
      )}
    </section>
  );
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  const otherCaseStudies = getOtherCaseStudies(slug);
  const articleSchema = generateArticleSchema(caseStudy);
  const breadcrumbSchema = generateBreadcrumbSchema(caseStudy);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    <div className="container mx-auto max-w-5xl px-4 py-24">
      {/* Hero */}
      <header className="mb-20">
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <Badge variant="secondary" className="text-xs uppercase tracking-wider">
            {categoryLabels[caseStudy.category]}
          </Badge>
          <span className="text-border">|</span>
          <span>{caseStudy.role}</span>
          <span className="text-border">|</span>
          <span>{caseStudy.year}</span>
        </div>

        <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          {caseStudy.title}
        </h1>

        <p className="mt-6 text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
          {caseStudy.description}
        </p>
      </header>

      {/* Cover Image */}
      {(caseStudy.imageDark || caseStudy.imageLight || caseStudy.image) && (
        <figure className="mb-20">
          <div className="overflow-hidden rounded-3xl shadow-2xl shadow-black/10 dark:shadow-black/30 ring-1 ring-border/50">
            {caseStudy.imageDark && caseStudy.imageLight ? (
              <>
                <Image
                  src={caseStudy.imageLight}
                  alt={caseStudy.title}
                  width={1200}
                  height={630}
                  className="w-full object-cover dark:hidden"
                  priority
                />
                <Image
                  src={caseStudy.imageDark}
                  alt={caseStudy.title}
                  width={1200}
                  height={630}
                  className="hidden w-full object-cover dark:block"
                  priority
                />
              </>
            ) : caseStudy.image ? (
              <Image
                src={caseStudy.image}
                alt={caseStudy.title}
                width={1200}
                height={630}
                className="w-full object-cover"
                priority
              />
            ) : null}
          </div>
          {caseStudy.imageCaption && (
            <figcaption className="mt-4 text-center text-sm text-muted-foreground">
              {caseStudy.imageCaption}
            </figcaption>
          )}
        </figure>
      )}

      {/* Content with Sticky Nav */}
      <div className="grid gap-12 lg:grid-cols-[200px_1fr]">
        {/* Sticky Vertical Nav */}
        <aside className="hidden lg:block">
          <CaseStudyNav sections={caseStudy.sections} />
        </aside>

        {/* Content Sections */}
        <div className="space-y-20 lg:space-y-24">
          {caseStudy.sections.map((section, index) => (
            <div key={section.id}>
              <SectionContent section={section} metrics={section.id === "result" ? caseStudy.metrics : undefined} />

              {/* Gradient divider between major sections */}
              {index > 0 &&
                index < caseStudy.sections.length - 1 &&
                index % 2 === 1 && (
                  <div className="mt-20 lg:mt-24 h-px bg-gradient-to-r from-transparent via-border dark:via-muted-foreground/30 to-transparent" />
                )}
            </div>
          ))}
        </div>
      </div>

      {/* More Case Studies */}
      <MoreCaseStudies caseStudies={otherCaseStudies} />
    </div>
    </>
  );
}
