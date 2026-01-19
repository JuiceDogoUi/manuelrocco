"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";

interface ParallaxHeroWrapperProps {
  children: ReactNode;
}

export function ParallaxHeroWrapper({ children }: ParallaxHeroWrapperProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const [heroHeight, setHeroHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (heroRef.current) {
        setHeroHeight(heroRef.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <>
      {/* Fixed hero container with parallax effect */}
      <div ref={heroRef} className="parallax-hero-container">
        {children}
      </div>

      {/* Spacer to preserve document flow */}
      <div style={{ height: heroHeight }} aria-hidden="true" />
    </>
  );
}
