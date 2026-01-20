"use client";

import { values, valuesHeadline } from "@/data/values";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Starfield } from "@/components/shared/starfield";
import { LightBlobs } from "@/components/shared/light-blobs";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Linkedin, Mail } from "lucide-react";

export function Values() {
  return (
    <section className="relative z-20 min-h-[80vh] flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Background Effects Container */}
      <div
        className="pointer-events-none absolute inset-0 blob-fade-in"
        aria-hidden="true"
      >
        {/* Light mode: Interactive gradient blobs */}
        <LightBlobs />

        {/* Dark mode: Deep space starfield */}
        <Starfield />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto max-w-5xl px-4 py-24 flex-1 flex flex-col justify-center">
        <div className="flex flex-col items-center text-center">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
            Core Values
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            {valuesHeadline}
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-3 w-full">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border text-left hover:bg-background/80 transition-all duration-300"
              >
                <CardHeader className="space-y-3">
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed text-muted-foreground/90">
                    {value.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Integrated Footer */}
      <footer className="relative z-10 w-full py-8 border-t border-border/20">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            <div className="flex items-center gap-6">
              <Link
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground p-2 rounded-full hover:bg-foreground/5"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href={siteConfig.links.email}
                className="text-muted-foreground transition-colors hover:text-foreground p-2 rounded-full hover:bg-foreground/5"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
            <p className="text-sm text-muted-foreground/70">
              &copy; {new Date().getFullYear()} {siteConfig.name}
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
