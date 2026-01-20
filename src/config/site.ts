export const siteConfig = {
  name: "Manuel Rocco",
  description:
    "Lead Product Designer & Front-End Developer specializing in React, TypeScript, and data-driven UX. Currently at DataCamp. Co-founder of invoo.es. Based in Spain.",
  url: "https://manuelrocco.com",
  ogImage: "/images/aboutme.webp",
  links: {
    linkedin: "https://www.linkedin.com/in/manuel-rocco/",
    email: "mailto:manucrk@gmail.com",
  },
  nav: [
    { name: "Case Studies", href: "/case-studies" },
    { name: "About Me", href: "/about-me" },
  ],
};

export type SiteConfig = typeof siteConfig;
