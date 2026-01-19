import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Morphing Gradient Blobs Background */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        {/* Primary blob - large, top right */}
        <div
          className="blob-1 absolute -right-20 -top-20 h-[600px] w-[600px] opacity-70 dark:opacity-50 blur-3xl"
          style={{
            background: 'linear-gradient(135deg, oklch(0.65 0.25 250) 0%, oklch(0.55 0.2 280) 50%, oklch(0.6 0.22 220) 100%)',
          }}
        />

        {/* Secondary blob - medium, center right */}
        <div
          className="blob-2 absolute right-[10%] top-1/2 -translate-y-1/2 h-[450px] w-[450px] opacity-60 dark:opacity-40 blur-2xl"
          style={{
            background: 'linear-gradient(225deg, oklch(0.7 0.2 280) 0%, oklch(0.55 0.25 250) 60%, oklch(0.6 0.18 200) 100%)',
          }}
        />

        {/* Tertiary blob - smaller, bottom */}
        <div
          className="blob-3 absolute -bottom-32 right-[20%] h-[400px] w-[400px] opacity-50 dark:opacity-30 blur-3xl"
          style={{
            background: 'linear-gradient(45deg, oklch(0.6 0.22 230) 0%, oklch(0.7 0.18 260) 50%, oklch(0.55 0.2 290) 100%)',
          }}
        />

        {/* Accent blob - small, adds depth */}
        <div
          className="blob-1 absolute right-[30%] top-[20%] h-[250px] w-[250px] opacity-40 dark:opacity-25 blur-2xl"
          style={{
            background: 'linear-gradient(180deg, oklch(0.75 0.15 240) 0%, oklch(0.6 0.2 270) 100%)',
            animationDelay: '-5s',
          }}
        />

        {/* Fifth blob - foreground, sharp */}
        <div
          className="blob-3 absolute right-[15%] top-[35%] h-[400px] w-[400px] opacity-40 dark:opacity-25"
          style={{
            background: 'radial-gradient(circle, oklch(0.65 0.24 260) 0%, oklch(0.55 0.2 250) 100%)',
            animationDelay: '-10s',
          }}
        />

        {/* Noise texture overlay for grain effect */}
        <div
          className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
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
