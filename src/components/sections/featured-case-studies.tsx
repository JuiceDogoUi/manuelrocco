import Image from "next/image";
import Link from "next/link";
import { getFeaturedCaseStudies } from "@/data/case-studies";
import { categoryLabels, CaseStudy } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function CaseStudyItem({ caseStudy }: { caseStudy: CaseStudy }) {
  const hasImage =
    caseStudy.imageDark || caseStudy.imageLight || caseStudy.image;

  return (
    <Link href={`/case-studies/${caseStudy.slug}`} className="group block">
      {/* Image */}
      {hasImage ? (
        <div className="overflow-hidden rounded-2xl shadow-2xl shadow-black/10 dark:shadow-black/30 ring-1 ring-border/50 bg-muted">
          {caseStudy.imageDark && caseStudy.imageLight ? (
            <>
              <Image
                src={caseStudy.imageLight}
                alt={caseStudy.title}
                width={1200}
                height={630}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02] dark:hidden"
              />
              <Image
                src={caseStudy.imageDark}
                alt={caseStudy.title}
                width={1200}
                height={630}
                className="hidden w-full h-auto transition-transform duration-500 group-hover:scale-[1.02] dark:block"
              />
            </>
          ) : caseStudy.image ? (
            <Image
              src={caseStudy.image}
              alt={caseStudy.title}
              width={1200}
              height={630}
              className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
            />
          ) : null}
        </div>
      ) : (
        <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
          <div className="text-muted-foreground/20 text-7xl font-bold tracking-tighter">
            {caseStudy.title.charAt(0)}
          </div>
        </div>
      )}

      {/* Content */}
      <div className="mt-6">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <Badge variant="secondary" className="text-xs uppercase tracking-wider">
            {categoryLabels[caseStudy.category]}
          </Badge>
          <span className="text-border">|</span>
          <span>{caseStudy.role}</span>
          <span className="text-border">|</span>
          <span>{caseStudy.year}</span>
        </div>
        <h3 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight group-hover:text-primary transition-colors">
          {caseStudy.title}
        </h3>
        <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
          {caseStudy.description}
        </p>
        <div className="mt-6">
          <Button size="lg">
            Read
          </Button>
        </div>
      </div>
    </Link>
  );
}

export function FeaturedCaseStudies() {
  const featuredCaseStudies = getFeaturedCaseStudies(3);

  return (
    <section className="border-t">
      <div className="container mx-auto max-w-5xl px-4 py-24">
        <h2 className="text-3xl font-bold tracking-tight">Case Studies</h2>
        <div className="mt-12 grid gap-20 lg:gap-24">
          {featuredCaseStudies.map((caseStudy) => (
            <CaseStudyItem key={caseStudy.slug} caseStudy={caseStudy} />
          ))}
        </div>
      </div>
    </section>
  );
}
