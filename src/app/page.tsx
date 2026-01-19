import { Hero, FeaturedCaseStudies, Values } from "@/components/sections";
import { ParallaxHeroWrapper } from "@/components/shared/parallax-hero-wrapper";

export default function Home() {
  return (
    <>
      <ParallaxHeroWrapper>
        <Hero />
      </ParallaxHeroWrapper>

      {/* Content sections scroll over the hero */}
      <div className="relative z-20 bg-background">
        <FeaturedCaseStudies />
        <Values />
      </div>
    </>
  );
}
