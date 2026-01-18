export interface NavItem {
  name: string;
  href: string;
}

export type CaseStudyCategory = "built" | "led" | "designed";

export const categoryLabels: Record<CaseStudyCategory, string> = {
  built: "Built",
  led: "Led",
  designed: "Designed",
};

export const categoryDescriptions: Record<CaseStudyCategory, string> = {
  built: "Products I strategized, built and shipped",
  led: "Strategy and leadership work",
  designed: "Redesigns that moved metrics",
};

export interface CaseStudySection {
  id: string;
  title: string;
  content: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  role: string;
  year: number;
  category: CaseStudyCategory;
  image?: string;
  featured?: boolean;
  sections: CaseStudySection[];
}

export interface Value {
  title: string;
  description: string;
}
