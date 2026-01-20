import { CaseStudy, categoryLabels } from "@/types";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface MoreCaseStudiesProps {
  caseStudies: CaseStudy[];
}

export function MoreCaseStudies({ caseStudies }: MoreCaseStudiesProps) {
  if (caseStudies.length === 0) return null;

  return (
    <section className="mt-24 border-t pt-16">
      <h2 className="text-2xl font-bold tracking-tight">More Case Studies</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {caseStudies.slice(0, 2).map((caseStudy) => (
          <Link
            key={caseStudy.slug}
            href={`/case-studies/${caseStudy.slug}`}
            className="group"
          >
            <Card className="h-full transition-colors group-hover:border-primary">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{caseStudy.role}</span>
                    <span>•</span>
                    <span>{caseStudy.year}</span>
                  </div>
                  <Badge variant="secondary">
                    {categoryLabels[caseStudy.category]}
                  </Badge>
                </div>
                <CardTitle className="text-xl">
                  {caseStudy.title}
                </CardTitle>
                <CardDescription>{caseStudy.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
