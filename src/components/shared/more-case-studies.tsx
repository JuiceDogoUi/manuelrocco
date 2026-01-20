import { CaseStudy, categoryLabels } from "@/types";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface MoreCaseStudiesProps {
  caseStudies: CaseStudy[];
}

export function MoreCaseStudies({ caseStudies }: MoreCaseStudiesProps) {
  if (caseStudies.length === 0) return null;

  return (
    <section className="mt-32">
      {/* Section divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="pt-20">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          More Case Studies
        </h2>
        <p className="mt-2 text-muted-foreground">
          Explore other projects I&apos;ve worked on
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {caseStudies.map((caseStudy) => (
            <Link
              key={caseStudy.slug}
              href={`/case-studies/${caseStudy.slug}`}
              className="group"
            >
              <Card className="h-full overflow-hidden transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/5 group-hover:-translate-y-1">
                {/* Cover Image */}
                {(caseStudy.imageDark || caseStudy.imageLight || caseStudy.image) && (
                  <div className="relative aspect-[16/9] overflow-hidden">
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
                )}

                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge
                      variant="secondary"
                      className="text-xs uppercase tracking-wider"
                    >
                      {categoryLabels[caseStudy.category]}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {caseStudy.year}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <CardTitle className="text-lg leading-tight">
                      {caseStudy.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2 text-sm leading-relaxed">
                      {caseStudy.description}
                    </CardDescription>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                    <span className="truncate">{caseStudy.role}</span>
                    <ArrowRight className="h-4 w-4 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
