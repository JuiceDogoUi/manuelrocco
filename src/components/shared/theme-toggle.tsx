"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  size?: "sm" | "default";
}

export function ThemeToggle({ size = "default" }: ThemeToggleProps) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const iconClass = cn(
    "transition-all duration-300",
    size === "sm" ? "h-4 w-4" : "h-5 w-5"
  );

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" disabled>
        <Sun className={iconClass} />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? (
        <Sun className={iconClass} />
      ) : (
        <Moon className={iconClass} />
      )}
    </Button>
  );
}
