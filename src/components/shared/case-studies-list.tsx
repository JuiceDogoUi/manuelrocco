"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CaseStudy, CaseStudyCategory, categoryLabels } from "@/types";
import { getAllCategories } from "@/data/case-studies";
import { CategoryFilter } from "./category-filter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CaseStudiesListProps {
  caseStudies: CaseStudy[];
}

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

export function CaseStudiesList({ caseStudies }: CaseStudiesListProps) {
  const [activeCategory, setActiveCategory] =
    useState<CaseStudyCategory | null>(null);

  const filteredCaseStudies = activeCategory
    ? caseStudies.filter((cs) => cs.category === activeCategory)
    : caseStudies;

  const categories = getAllCategories();

  return (
    <div>
      <div className="mb-12">
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>
      <div className="grid gap-20 lg:gap-24">
        {filteredCaseStudies.map((caseStudy) => (
          <CaseStudyItem key={caseStudy.slug} caseStudy={caseStudy} />
        ))}
      </div>
      {filteredCaseStudies.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="text-muted-foreground/20 text-8xl mb-6">0</div>
          <p className="text-lg text-muted-foreground">
            No case studies found in this category.
          </p>
          <button
            className="mt-4 text-sm text-primary hover:underline"
            onClick={() => setActiveCategory(null)}
          >
            View all case studies
          </button>
        </div>
      )}
    </div>
  );
}
