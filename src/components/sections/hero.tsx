import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="container mx-auto max-w-5xl px-4 py-24 md:py-32">
      <div className="flex flex-col items-start gap-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Headline goes here
        </h1>
        <p className="max-w-xl text-xl text-muted-foreground">
          Tagline or description goes here.
        </p>
        <div className="flex items-center gap-4 pt-4">
          <Button asChild>
            <Link href="/case-studies">See Case Studies</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/about-me">About Me</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
