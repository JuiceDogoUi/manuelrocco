export const siteConfig = {
  name: "Manuel Rocco",
  description: "Personal portfolio showcasing my work and projects",
  url: "https://manuelrocco.com",
  ogImage: "/og-image.png",
  links: {
    linkedin: "https://linkedin.com/in/manuelrocco",
    email: "mailto:hello@manuelrocco.com",
  },
  nav: [
    { name: "Case Studies", href: "/case-studies" },
    { name: "About Me", href: "/about-me" },
  ],
};

export type SiteConfig = typeof siteConfig;
