"use client";

import { useState } from "react";
import { CaseStudy, CaseStudyCategory, categoryLabels } from "@/types";
import { getAllCategories } from "@/data/case-studies";
import { CategoryFilter } from "./category-filter";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface CaseStudiesListProps {
  caseStudies: CaseStudy[];
}

export function CaseStudiesList({ caseStudies }: CaseStudiesListProps) {
  const [activeCategory, setActiveCategory] =
    useState<CaseStudyCategory | null>(null);

  const filteredCaseStudies = activeCategory
    ? caseStudies.filter((cs) => cs.category === activeCategory)
    : caseStudies;

  const categories = getAllCategories();

  return (
    <div>
      <div className="mb-8">
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {filteredCaseStudies.map((caseStudy) => (
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
      {filteredCaseStudies.length === 0 && (
        <p className="text-center text-muted-foreground py-12">
          No case studies found in this category.
        </p>
      )}
    </div>
  );
}
