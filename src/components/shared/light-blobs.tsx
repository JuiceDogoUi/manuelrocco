"use client";

import { useEffect, useRef } from "react";

export function LightBlobs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const farLayerRef = useRef<HTMLDivElement>(null);
  const midLayerRef = useRef<HTMLDivElement>(null);
  const nearLayerRef = useRef<HTMLDivElement>(null);
  const dustLayerRef = useRef<HTMLDivElement>(null);
  const geometricLayerRef = useRef<HTMLDivElement>(null);

  // Parallax mouse movement - optimized with requestAnimationFrame
  useEffect(() => {
    let rafId: number | null = null;
    let mouseX = 0;
    let mouseY = 0;

    const updateParallax = () => {
      const x = mouseX;
      const y = mouseY;

      // Use translate3d for GPU acceleration
      // Far layer - slowest movement (large blurred blobs)
      if (farLayerRef.current) {
        farLayerRef.current.style.transform = `translate3d(${x * 4}px, ${y * 4}px, 0)`;
      }
      // Mid layer - medium movement (sharper orbs)
      if (midLayerRef.current) {
        midLayerRef.current.style.transform = `translate3d(${x * 12}px, ${y * 12}px, 0)`;
      }
      // Near layer - faster movement (crisp circles)
      if (nearLayerRef.current) {
        nearLayerRef.current.style.transform = `translate3d(${x * 25}px, ${y * 25}px, 0)`;
      }
      // Dust particles - moderate movement
      if (dustLayerRef.current) {
        dustLayerRef.current.style.transform = `translate3d(${x * 18}px, ${y * 18}px, 0)`;
      }
      // Geometric accents - subtle movement
      if (geometricLayerRef.current) {
        geometricLayerRef.current.style.transform = `translate3d(${x * 8}px, ${y * 8}px, 0)`;
      }

      rafId = null;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      mouseX = (clientX / innerWidth - 0.5) * 2;
      mouseY = (clientY / innerHeight - 0.5) * 2;

      if (rafId === null) {
        rafId = requestAnimationFrame(updateParallax);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden opacity-100 dark:opacity-0"
      style={{ contain: "layout style paint" }}
    >
      {/* Enhanced grainy texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Far layer - large blurred blobs with aurora shimmer */}
      <div
        ref={farLayerRef}
        className="absolute -inset-20 transition-transform duration-700 ease-out"
        style={{ willChange: "transform" }}
      >
        {/* Primary blob - large, top right */}
        <div
          className="blob-aurora absolute right-0 top-0 h-[500px] w-[500px] opacity-10 blur-3xl"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.65 0.25 250) 0%, oklch(0.55 0.2 280) 50%, oklch(0.6 0.22 220) 100%)",
          }}
        />

        {/* Secondary blob - medium, center right */}
        <div
          className="blob-aurora absolute right-[5%] top-[40%] h-[400px] w-[400px] opacity-10 blur-2xl"
          style={{
            background:
              "linear-gradient(225deg, oklch(0.7 0.2 280) 0%, oklch(0.55 0.25 250) 60%, oklch(0.6 0.18 200) 100%)",
            animationDelay: "-4s",
          }}
        />

        {/* Tertiary blob - bottom */}
        <div
          className="blob-aurora absolute -bottom-32 right-[15%] h-[500px] w-[500px] opacity-10 blur-3xl"
          style={{
            background:
              "linear-gradient(45deg, oklch(0.6 0.22 230) 0%, oklch(0.7 0.18 260) 50%, oklch(0.55 0.2 290) 100%)",
            animationDelay: "-8s",
          }}
        />

        {/* Accent blob - top area */}
        <div
          className="blob-aurora absolute right-[25%] top-[15%] h-[250px] w-[250px] opacity-10 blur-2xl"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.75 0.15 240) 0%, oklch(0.6 0.2 270) 100%)",
            animationDelay: "-12s",
          }}
        />

        {/* Fifth blob - foreground */}
        <div
          className="blob-aurora absolute right-[10%] top-[30%] h-[350px] w-[350px] opacity-10 blur-xl"
          style={{
            background:
              "radial-gradient(circle, oklch(0.65 0.24 260) 0%, oklch(0.55 0.2 250) 100%)",
            animationDelay: "-16s",
          }}
        />
      </div>

      {/* Mid layer - sharper orbs for depth */}
      <div
        ref={midLayerRef}
        className="absolute -inset-10 transition-transform duration-400 ease-out"
        style={{ willChange: "transform" }}
      >
        <div
          className="blob-aurora absolute w-[180px] h-[180px] opacity-[0.12] blur-xl rounded-full"
          style={{
            top: "20%",
            right: "18%",
            background:
              "radial-gradient(circle, oklch(0.7 0.22 260) 0%, oklch(0.6 0.18 250) 60%, transparent 100%)",
            animationDelay: "-2s",
          }}
        />
        <div
          className="blob-aurora absolute w-[140px] h-[140px] opacity-[0.10] blur-lg rounded-full"
          style={{
            top: "55%",
            right: "8%",
            background:
              "radial-gradient(circle, oklch(0.68 0.2 275) 0%, oklch(0.58 0.16 265) 60%, transparent 100%)",
            animationDelay: "-6s",
          }}
        />
        <div
          className="blob-aurora absolute w-[120px] h-[120px] opacity-[0.11] blur-lg rounded-full"
          style={{
            top: "35%",
            left: "55%",
            background:
              "radial-gradient(circle, oklch(0.72 0.18 240) 0%, oklch(0.62 0.14 230) 60%, transparent 100%)",
            animationDelay: "-10s",
          }}
        />
        <div
          className="blob-aurora absolute w-[100px] h-[100px] opacity-[0.09] blur-lg rounded-full"
          style={{
            top: "70%",
            right: "30%",
            background:
              "radial-gradient(circle, oklch(0.7 0.2 285) 0%, oklch(0.6 0.16 275) 60%, transparent 100%)",
            animationDelay: "-14s",
          }}
        />
      </div>

      {/* Near layer - crisp small circles */}
      <div
        ref={nearLayerRef}
        className="absolute -inset-10 transition-transform duration-200 ease-out"
        style={{ willChange: "transform" }}
      >
        <div
          className="absolute w-[50px] h-[50px] opacity-[0.08] blur-md rounded-full"
          style={{
            top: "25%",
            right: "25%",
            background:
              "radial-gradient(circle, oklch(0.75 0.2 255) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute w-[35px] h-[35px] opacity-[0.07] blur-sm rounded-full"
          style={{
            top: "45%",
            right: "12%",
            background:
              "radial-gradient(circle, oklch(0.7 0.22 270) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute w-[45px] h-[45px] opacity-[0.06] blur-md rounded-full"
          style={{
            top: "60%",
            left: "60%",
            background:
              "radial-gradient(circle, oklch(0.72 0.18 245) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Geometric accent lines */}
      <div
        ref={geometricLayerRef}
        className="absolute -inset-10 transition-transform duration-500 ease-out"
        style={{ willChange: "transform" }}
      >
        {/* Diagonal light ray 1 */}
        <div
          className="light-ray absolute w-[2px] h-[400px] opacity-[0.04]"
          style={{
            top: "-5%",
            right: "20%",
            background:
              "linear-gradient(180deg, transparent 0%, oklch(0.7 0.2 260) 30%, oklch(0.65 0.18 250) 70%, transparent 100%)",
            transform: "rotate(25deg)",
          }}
        />
        {/* Diagonal light ray 2 */}
        <div
          className="light-ray absolute w-[1px] h-[300px] opacity-[0.03]"
          style={{
            top: "10%",
            right: "35%",
            background:
              "linear-gradient(180deg, transparent 0%, oklch(0.72 0.18 270) 40%, oklch(0.68 0.16 260) 60%, transparent 100%)",
            transform: "rotate(20deg)",
            animationDelay: "-30s",
          }}
        />
        {/* Arc accent */}
        <div
          className="light-ray absolute w-[200px] h-[200px] opacity-[0.025] rounded-full"
          style={{
            top: "30%",
            right: "5%",
            border: "1px solid oklch(0.65 0.2 255)",
            background: "transparent",
            animationDelay: "-45s",
          }}
        />
        {/* Small arc */}
        <div
          className="light-ray absolute w-[100px] h-[100px] opacity-[0.02] rounded-full"
          style={{
            top: "55%",
            right: "28%",
            border: "1px solid oklch(0.7 0.18 265)",
            background: "transparent",
            animationDelay: "-60s",
          }}
        />
      </div>

      {/* Floating dust particles */}
      <div
        ref={dustLayerRef}
        className="absolute -inset-10 transition-transform duration-300 ease-out"
        style={{ willChange: "transform" }}
      >
        <div className="dust-particles absolute inset-0" />
      </div>
    </div>
  );
}
