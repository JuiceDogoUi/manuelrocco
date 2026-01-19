import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="container mx-auto max-w-5xl px-4 py-24 md:py-32">
      <div className="flex flex-col items-start gap-6">
        <h1 className="text-4xl font-bold tracking-normal sm:text-5xl md:text-6xl">
          Lead Product Designer who ships: from strategy to front-end code.
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          Currently leading design for DataCamp&apos;s millions of learners. Co-founder of invoo.es, where I own product end-to-end. Most teams lose weeks in handoffs. I compress that gap by bringing PM thinking, design leadership, and code execution to the work.
        </p>
        <div className="flex items-center gap-4 pt-4">
          <Button size="lg" asChild>
            <Link href="/case-studies">See Case Studies</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/about-me">About Me</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
