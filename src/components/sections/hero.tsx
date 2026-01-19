import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient gradient orbs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/15 blur-[120px] dark:bg-primary/10" />
        <div className="absolute -bottom-20 -left-40 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[100px] dark:bg-primary/5" />
      </div>

      <div className="container relative mx-auto max-w-5xl px-4 py-32 md:py-40">
        <div className="flex flex-col items-start gap-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Lead Product Designer{" "}
            <span className="text-primary whitespace-nowrap">who ships</span>.
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            From strategy to front-end code. Currently leading design for
            DataCamp&apos;s millions of learners. Co-founder of invoo.es, where
            I own product end-to-end. Most teams lose weeks in handoffs. I
            compress that gap by bringing PM thinking, design leadership, and
            code execution to the work.
          </p>

          <div className="flex items-center gap-4 pt-4">
            <Button size="lg" asChild>
              <Link href="/case-studies">Case Studies</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/about-me">About Me</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
