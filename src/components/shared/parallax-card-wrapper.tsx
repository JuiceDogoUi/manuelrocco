"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";

interface ParallaxCardWrapperProps {
  children: ReactNode;
  index: number;
  isLast?: boolean;
}

export function ParallaxCardWrapper({
  children,
  index,
  isLast = false,
}: ParallaxCardWrapperProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardHeight, setCardHeight] = useState(0);
  const rafRef = useRef<number | null>(null);
  const isFixedRef = useRef(false);

  // Higher index = higher z-index so later cards stack on top
  const zIndex = 20 + index;

  // Fixed position from top (below header)
  const fixedTop = 80;

  useEffect(() => {
    // Skip parallax effect for last card
    if (isLast) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const updateHeight = () => {
      if (cardRef.current) {
        setCardHeight(cardRef.current.offsetHeight);
      }
    };

    const applyTransform = () => {
      if (!wrapperRef.current || !cardRef.current) return;

      const rect = wrapperRef.current.getBoundingClientRect();
      const wrapperTop = rect.top;
      const card = cardRef.current;

      // When wrapper top reaches the fixed position, card becomes fixed
      if (wrapperTop <= fixedTop) {
        // Calculate animation progress based on how far we've scrolled past
        // the trigger point. Animate over 300px of scroll for complete fade.
        const scrollPast = fixedTop - wrapperTop;
        const animationDistance = 300;
        const progress = Math.min(scrollPast / animationDistance, 1);

        // Scale from 1 to 0.85, opacity from 1 to 0
        const scale = 1 - progress * 0.15;
        const opacity = 1 - progress;

        // Apply fixed positioning
        if (!isFixedRef.current) {
          isFixedRef.current = true;
          card.style.position = "fixed";
          card.style.top = `${fixedTop}px`;
        }

        // Apply transform directly to DOM for GPU-accelerated animation
        card.style.transform = `scale(${scale})`;
        card.style.opacity = String(opacity);
      } else {
        // Card hasn't reached top yet - scroll normally
        if (isFixedRef.current) {
          isFixedRef.current = false;
          card.style.position = "relative";
          card.style.top = "auto";
        }

        card.style.transform = "scale(1)";
        card.style.opacity = "1";
      }
    };

    const handleScroll = () => {
      // Cancel any pending animation frame
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }

      // Schedule the transform update on the next animation frame
      rafRef.current = requestAnimationFrame(applyTransform);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial positioning
    applyTransform();

    return () => {
      window.removeEventListener("resize", updateHeight);
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isLast]);

  return (
    <div
      ref={wrapperRef}
      className="relative"
      style={{
        // Reserve space for the card content plus minimal scroll room (not for last card)
        minHeight: !isLast && cardHeight > 0 ? cardHeight + 100 : "auto",
        zIndex,
      }}
    >
      {/* Card - becomes fixed when reaching top */}
      <div
        ref={cardRef}
        className="bg-background"
        style={{
          position: "relative",
          left: 0,
          right: 0,
          transformOrigin: "center top",
          willChange: "transform, opacity",
          zIndex,
        }}
      >
        {/* Always use container for consistent layout */}
        <div className="container mx-auto max-w-5xl px-4">{children}</div>
      </div>
    </div>
  );
}
