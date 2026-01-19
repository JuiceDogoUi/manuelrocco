import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "The story of how a punk rock drummer, a website, and twenty-four years of curiosity led me here.",
};

export default function AboutMePage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-24">
      <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
      <div className="mt-8 text-muted-foreground leading-relaxed">
        <p>
          When I was seventeen, I was the bassist in a punk rock band. One day,
          our drummer showed me something that changed everything: a website he
          had built for our band. Our pictures, our songs, available to anyone
          in the world. My jaw dropped. That moment, twenty-four years ago,
          sparked a fire in me that is still burning today. I went home and
          started learning HTML and CSS that same week.
        </p>

        <h2 className="mt-12 text-lg font-semibold text-foreground">
          Into the Wild
        </h2>
        <p className="mt-4">
          At twenty, fueled by dreams of punk-rock stardom, my friend Roberto
          and I packed our bags and headed to Buenos Aires. We spent three
          exciting years there. During that time, I stumbled into the world of
          design, working for agencies that were becoming known for their
          quality. I soaked up all the fundamentals, from tools to UI best
          practices. I was even a Flash designer back then.
        </p>

        <h2 className="mt-12 text-lg font-semibold text-foreground">
          Learning the Hard Way
        </h2>
        <p className="mt-4">
          When I returned to Italy, I stepped into UX and UI design. I will be
          honest: I was one of those designers who focused on making things look
          good without really considering the users or the business goals. But
          working with agencies in Bologna on clients like Lamborghini, Ferrari,
          and Ducati taught me invaluable lessons about teamwork, putting users
          at the center, and collaborating under pressure.
        </p>

        <h2 className="mt-12 text-lg font-semibold text-foreground">
          Building at Scale
        </h2>
        <p className="mt-4">
          Then my family and I moved to Switzerland. In just a few years, I went
          from mid-level designer to leading interaction design, eventually
          establishing myself as a product and UX leader. At SEI Novus, I built
          a UX process from scratch for a team that had never had one. Now I
          lead product design at DataCamp, where millions of people come to
          learn data skills. It is genuinely meaningful work.
        </p>

        <h2 className="mt-12 text-lg font-semibold text-foreground">
          Why I Still Build
        </h2>
        <p className="mt-4">
          On the side, I co-founded{" "}
          <a
            href="https://invoo.es"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline underline-offset-4 hover:text-primary"
          >
            invoo.es
          </a>
          , an invoicing tool for Spanish freelancers and small businesses. I designed it and built most of what users
          actually see. It is a small product, but every time someone tells us
          it made their life easier, it reminds me why I got into this in the
          first place.
        </p>

        <p className="mt-6">
          When I am not designing or tinkering with code, I am probably walking
          my dog or spending time with my family. Both bring me more joy than
          any design sprint ever could.
        </p>

        <p className="mt-6">
          If you have read this far, thanks. Feel free to reach out if you want
          to talk about design, building products, or why punk rock drummers
          make surprisingly good career counselors.
        </p>

        <div className="mt-8">
          <a
            href="mailto:manucrk@gmail.com"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}
