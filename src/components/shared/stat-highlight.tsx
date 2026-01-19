import { CaseStudyMetric } from "@/types";

interface StatHighlightProps {
  metrics: CaseStudyMetric[];
}

export function StatHighlight({ metrics }: StatHighlightProps) {
  return (
    <div className="my-12 grid gap-4 sm:grid-cols-3">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="rounded-2xl bg-primary/5 dark:bg-primary/10 border border-primary/10 dark:border-primary/20 p-6 text-center transition-colors"
        >
          <div className="text-3xl md:text-4xl font-bold text-primary">
            {metric.value}
          </div>
          <div className="mt-2 text-sm text-muted-foreground">
            {metric.label}
          </div>
        </div>
      ))}
    </div>
  );
}
