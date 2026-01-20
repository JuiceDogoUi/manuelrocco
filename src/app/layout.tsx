import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Preloader } from "@/components/shared/preloader";
import { siteConfig } from "@/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Manuel Rocco - Lead Product Designer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Person Schema for SEO
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://manuelrocco.com/#person",
  name: "Manuel Rocco",
  jobTitle: "Lead Product Designer",
  description: siteConfig.description,
  url: siteConfig.url,
  image: "https://manuelrocco.com/images/aboutme.webp",
  sameAs: ["https://www.linkedin.com/in/manuel-rocco/"],
  email: "manucrk@gmail.com",
  knowsAbout: [
    "Product Design",
    "UX Design",
    "UI Design",
    "Front-End Development",
    "React",
    "TypeScript",
    "Next.js",
    "Design Systems",
    "A/B Testing",
    "Conversion Optimization",
    "Mobile Design",
  ],
  knowsLanguage: ["en", "it", "es"],
  worksFor: {
    "@type": "Organization",
    name: "DataCamp",
    url: "https://datacamp.com",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "ES",
    addressLocality: "Spain",
  },
};

// WebSite Schema
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://manuelrocco.com/#website",
  url: siteConfig.url,
  name: "Manuel Rocco - Lead Product Designer Portfolio",
  description: siteConfig.description,
  publisher: {
    "@id": "https://manuelrocco.com/#person",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Preloader />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
