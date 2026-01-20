"use client";

import { useEffect, useRef } from "react";

export function Starfield() {
  const containerRef = useRef<HTMLDivElement>(null);
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Calculate mouse position relative to center (-0.5 to 0.5)
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;

      // Apply different movement amounts to each layer for depth
      if (layer1Ref.current) {
        layer1Ref.current.style.transform = `translate(${x * 5}px, ${y * 5}px)`;
      }
      if (layer2Ref.current) {
        layer2Ref.current.style.transform = `translate(${x * 15}px, ${y * 15}px)`;
      }
      if (layer3Ref.current) {
        layer3Ref.current.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden opacity-0 dark:opacity-100">
      {/* Far stars - smallest, slowest movement */}
      <div
        ref={layer1Ref}
        className="absolute -inset-10 transition-transform duration-300 ease-out stars-far"
      />
      {/* Mid stars - medium size, medium movement */}
      <div
        ref={layer2Ref}
        className="absolute -inset-10 transition-transform duration-200 ease-out stars-mid"
      />
      {/* Near stars - largest, fastest movement */}
      <div
        ref={layer3Ref}
        className="absolute -inset-10 transition-transform duration-150 ease-out stars-near"
      />
    </div>
  );
}
