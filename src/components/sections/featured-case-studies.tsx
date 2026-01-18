import { getFeaturedCaseStudies } from "@/data/case-studies";
import { categoryLabels } from "@/types";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function FeaturedCaseStudies() {
  const featuredCaseStudies = getFeaturedCaseStudies(3);

  return (
    <section className="border-t">
      <div className="container mx-auto max-w-5xl px-4 py-24">
        <h2 className="text-3xl font-bold tracking-tight">Case Studies</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredCaseStudies.map((caseStudy) => (
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
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {caseStudy.title}
                  </CardTitle>
                  <CardDescription>{caseStudy.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
