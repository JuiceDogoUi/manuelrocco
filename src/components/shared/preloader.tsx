"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Wait for page to be fully loaded
    const handleLoad = () => {
      // Small delay to ensure smooth transition
      setTimeout(() => {
        setIsLoading(false);
        // Remove from DOM after fade out animation
        setTimeout(() => {
          setIsVisible(false);
        }, 600);
      }, 800);
    };

    // Check if already loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  // Don't render if not visible
  if (!isVisible) return null;

  return (
    <div
      className={`preloader ${isLoading ? "preloader-visible" : "preloader-hidden"}`}
      aria-hidden="true"
    >
      <div className="preloader-content">
        {/* Same logo as header */}
        <div className="preloader-logo">
          <span className="preloader-name">{siteConfig.name.split(" ")[0]}</span>
          <span className="preloader-dot">.</span>
        </div>
      </div>
    </div>
  );
}
