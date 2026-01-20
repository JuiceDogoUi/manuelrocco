"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full">
      <div
        className={cn(
          "mx-auto transition-all duration-300",
          scrolled
            ? "mt-4 max-w-3xl rounded-full border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-6"
            : "max-w-5xl px-4"
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between transition-all duration-300",
            scrolled ? "h-12" : "h-20"
          )}
        >
          <Link
            href="/"
            className={cn(
              "font-bold transition-all duration-300",
              scrolled ? "text-xl" : "text-2xl"
            )}
          >
            {siteConfig.name.split(" ")[0]}
            <span className="text-primary">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-medium text-muted-foreground transition-all duration-300 hover:text-foreground",
                  scrolled ? "text-sm" : "text-base"
                )}
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle size={scrolled ? "sm" : "default"} />
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle size={scrolled ? "sm" : "default"} />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t bg-background">
          <div className="container mx-auto max-w-5xl px-4 py-4 flex flex-col gap-4">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
