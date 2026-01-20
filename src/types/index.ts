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
  built: "Products I shipped end-to-end",
  led: "Teams and systems I drove",
  designed: "Solutions that moved metrics",
};

export interface CaseStudyCallout {
  label?: string;
  content: string;
  variant?: "insight" | "lesson";
}

export interface CaseStudySection {
  id: string;
  title: string;
  content: string;
  pullQuote?: string;
  callout?: CaseStudyCallout;
  imageDark?: string;
  imageLight?: string;
  imageCaption?: string;
}

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  role: string;
  year: number;
  category: CaseStudyCategory;
  image?: string;
  imageDark?: string;
  imageLight?: string;
  imageCaption?: string;
  featured?: boolean;
  sections: CaseStudySection[];
  metrics?: CaseStudyMetric[];
}

export interface Value {
  title: string;
  description: string;
}
