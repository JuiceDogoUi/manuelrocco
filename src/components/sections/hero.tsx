import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Starfield } from "@/components/shared/starfield";
import { LightBlobs } from "@/components/shared/light-blobs";

export function Hero() {
  return (
    <section className="relative h-[calc(85vh-5rem)] mt-20 flex items-center justify-center">
      {/* Background Effects Container */}
      <div
        className="pointer-events-none absolute -top-20 -left-20 -right-20 -bottom-40 blob-fade-in"
        aria-hidden="true"
      >
        {/* Light mode: Interactive gradient blobs */}
        <LightBlobs />

        {/* Dark mode: Deep space starfield */}
        <Starfield />
      </div>

      <div className="container relative mx-auto max-w-5xl px-4">
        <div className="flex flex-col items-center text-center gap-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl hero-fade-up">
            Lead Product Designer{" "}
            <span className="text-primary whitespace-nowrap relative inline-block">
              <span className="relative z-10">who ships</span>
              {/* Animated underline */}
              <span className="absolute bottom-0 left-0 h-[3px] bg-primary rounded-full underline-draw" />
            </span>.
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl hero-fade-up hero-fade-up-delay-1">
            From strategy to front-end code. Currently leading design for
            DataCamp&apos;s millions of learners. Co-founder of invoo.es, where
            I own product end-to-end. Most teams lose weeks in handoffs. I
            compress that gap by bringing PM thinking, design leadership, and
            code execution to the work.
          </p>

          <div className="flex items-center gap-4 pt-4 hero-fade-up hero-fade-up-delay-2">
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
