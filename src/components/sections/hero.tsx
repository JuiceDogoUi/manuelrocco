import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Starfield } from "@/components/shared/starfield";

export function Hero() {
  return (
    <section className="relative h-[calc(85vh-5rem)] mt-20 flex items-center justify-center">
      {/* Morphing Gradient Blobs Background */}
      <div
        className="pointer-events-none absolute -top-20 -left-20 -right-20 -bottom-40 blob-fade-in"
        aria-hidden="true"
      >
        {/* Primary blob - large, top right */}
        <div
          className="blob-1 absolute right-0 top-0 h-[500px] w-[500px] opacity-10 dark:opacity-10 blur-3xl"
          style={{
            background: 'linear-gradient(135deg, oklch(0.65 0.25 250) 0%, oklch(0.55 0.2 280) 50%, oklch(0.6 0.22 220) 100%)',
          }}
        />

        {/* Secondary blob - medium, center right */}
        <div
          className="blob-2 absolute right-[5%] top-[40%] h-[400px] w-[400px] opacity-10 dark:opacity-10 blur-2xl"
          style={{
            background: 'linear-gradient(225deg, oklch(0.7 0.2 280) 0%, oklch(0.55 0.25 250) 60%, oklch(0.6 0.18 200) 100%)',
          }}
        />

        {/* Tertiary blob - smaller, bottom */}
        <div
          className="blob-3 absolute -bottom-32 right-[15%] h-[500px] w-[500px] opacity-10 dark:opacity-10 blur-3xl"
          style={{
            background: 'linear-gradient(45deg, oklch(0.6 0.22 230) 0%, oklch(0.7 0.18 260) 50%, oklch(0.55 0.2 290) 100%)',
          }}
        />

        {/* Accent blob - small, adds depth */}
        <div
          className="blob-1 absolute right-[25%] top-[15%] h-[250px] w-[250px] opacity-10 dark:opacity-10 blur-2xl"
          style={{
            background: 'linear-gradient(180deg, oklch(0.75 0.15 240) 0%, oklch(0.6 0.2 270) 100%)',
            animationDelay: '-5s',
          }}
        />

        {/* Fifth blob - foreground, sharp */}
        <div
          className="blob-3 absolute right-[10%] top-[30%] h-[350px] w-[350px] opacity-10 dark:opacity-10"
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

        {/* Star particles for deep space effect */}
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
