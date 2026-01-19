import Image from "next/image";
import Link from "next/link";
import { getFeaturedCaseStudies } from "@/data/case-studies";
import { categoryLabels, CaseStudy } from "@/types";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function FeaturedCaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  const hasImage =
    caseStudy.imageDark || caseStudy.imageLight || caseStudy.image;

  return (
    <Link href={`/case-studies/${caseStudy.slug}`} className="group">
      <Card className="h-full overflow-hidden rounded-2xl transition-all duration-300 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-black/5 dark:group-hover:shadow-black/20">
        {/* Image Section */}
        {hasImage ? (
          <div className="relative aspect-[16/9] overflow-hidden bg-muted">
            {caseStudy.imageDark && caseStudy.imageLight ? (
              <>
                <Image
                  src={caseStudy.imageLight}
                  alt={caseStudy.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 dark:hidden"
                />
                <Image
                  src={caseStudy.imageDark}
                  alt={caseStudy.title}
                  fill
                  className="hidden object-cover transition-transform duration-500 group-hover:scale-105 dark:block"
                />
              </>
            ) : caseStudy.image ? (
              <Image
                src={caseStudy.image}
                alt={caseStudy.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : null}
          </div>
        ) : (
          /* Placeholder for cards without images */
          <div className="relative aspect-[16/9] bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
            <div className="text-muted-foreground/20 text-6xl font-bold tracking-tighter">
              {caseStudy.title.charAt(0)}
            </div>
          </div>
        )}

        {/* Content Section */}
        <CardHeader className="pt-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{caseStudy.role}</span>
              <span className="text-border">|</span>
              <span>{caseStudy.year}</span>
            </div>
            <Badge variant="secondary" className="text-xs uppercase tracking-wider">
              {categoryLabels[caseStudy.category]}
            </Badge>
          </div>
          <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">
            {caseStudy.title}
          </CardTitle>
          <CardDescription className="line-clamp-2">
            {caseStudy.description}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}

export function FeaturedCaseStudies() {
  const featuredCaseStudies = getFeaturedCaseStudies(3);

  return (
    <section className="border-t">
      <div className="container mx-auto max-w-5xl px-4 py-24">
        <h2 className="text-3xl font-bold tracking-tight">Case Studies</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredCaseStudies.map((caseStudy) => (
            <FeaturedCaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
          ))}
        </div>
      </div>
    </section>
  );
}
