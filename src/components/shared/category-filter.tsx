"use client";

import { CaseStudyCategory, categoryLabels, categoryDescriptions } from "@/types";
import { Button } from "@/components/ui/button";

interface CategoryFilterProps {
  categories: CaseStudyCategory[];
  activeCategory: CaseStudyCategory | null;
  onCategoryChange: (category: CaseStudyCategory | null) => void;
}

export function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      <Button
        variant={activeCategory === null ? "default" : "outline"}
        onClick={() => onCategoryChange(null)}
      >
        All
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          title={categoryDescriptions[category]}
        >
          {categoryLabels[category]}
        </Button>
      ))}
    </div>
  );
}
