import { CaseStudy, CaseStudyCategory } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "datacamp-paywall",
    title: "DataCamp Paywall: 50% Conversion Lift From Deleting a Feature",
    description:
      "65% of users bounced on a screen before ever seeing the paywall. I deleted it entirely and lifted conversions by 50%.",
    role: "Product Manager & Lead Product Designer",
    year: 2025,
    category: "led",
    featured: true,
    imageDark: "/images/case-studies/datacamp-cover-dark.webp",
    imageLight: "/images/case-studies/datacamp-cover-light.webp",
    metrics: [
      { value: "50%", label: "Conversion lift" },
      { value: "65%", label: "Bounce rate eliminated" },
      { value: "2 weeks", label: "Time to ship" },
    ],
    sections: [
      {
        id: "hook",
        title: "The Hook",
        content:
          "Two-thirds of users never saw our paywall. They bounced on a screen designed to prepare them for it. The screen was doing its job, just not the job we needed. So I proposed deleting it entirely.",
      },
      {
        id: "puzzle",
        title: "The Puzzle",
        content:
          "DataCamp handed me an open brief: find paywall opportunities on mobile. No hypothesis, no target metric, just go look. So I mapped every path a user could take after completing their first chapter.\n\nThe end-of-chapter screen offered three options: Start Next Chapter, Practice, or Home. 70% tapped Start Next Chapter. 20% tapped Practice. 6% tapped Home and never saw any conversion flow.\n\nThat 70% was our main funnel. But tapping Start Next Chapter did not show the paywall. It showed a pre-paywall screen first: a generic title, a description, and a button to continue. Of everyone who landed on this screen, 30% tapped Close and never saw the real paywall. 35% tapped Home and left. Only 32% tapped Get Unlimited Access and actually reached the paywall.\n\nThe math was brutal: 65% of users bounced at the pre-paywall before ever seeing prices.",
        callout: {
          label: "Data Insight",
          content:
            "65% of users bounced at the pre-paywall. Only 32% ever reached the real paywall.",
          variant: "insight",
        },
      },
      {
        id: "decision",
        title: "The Decision",
        content:
          "My first instinct was to personalize the pre-paywall. The screen was generic: a title, a description, a button. No context about what the user had just learned or what they would unlock. Then I stopped and asked a different question: Why have a pre-paywall at all? If we could personalize the content, why not personalize the actual paywall directly? The pre-paywall was an extra step we had invented. Users who reached the paywall converted fine. The problem was the friction getting there.\n\nI proposed killing the screen entirely. Paywall changes are sensitive territory. Touch the wrong thing and you risk revenue. But the data was too clear to ignore, and PM and growth leads aligned once they saw the funnel breakdown.",
        pullQuote:
          "The best way to fix a friction point is often to delete it.",
      },
      {
        id: "approach",
        title: "The Approach",
        content:
          "The solution had two parts, both shipped in a single sprint. First, plug the leak: I removed the Home button from the post-chapter screen. That 6% of users who tapped Home and vanished now had to choose between continuing their learning or practicing. Both paths eventually reached the paywall.\n\nSecond, eliminate the bottleneck: I removed the pre-paywall screen entirely. Users who tapped Start Next Chapter now went straight to the paywall. No intermediary. No warming up. Just a direct path to the decision point. I kept the Practice option because practice is core to DataCamp's mobile value proposition. Removing it would have damaged the product experience for a marginal conversion gain.",
        imageDark: "/images/case-studies/datacamp-solution-dark.webp",
        imageLight: "/images/case-studies/datacamp-solution-light.webp",
      },
      {
        id: "result",
        title: "The Result",
        content:
          "We ran an A/B test. The treatment group converted at 7.36% compared to 4.90% for control. A 50% lift in subscription conversions, statistically significant with 95% confidence. One sprint to build. One month to validate and ship permanently. This flow is now the default. Every new paywall test starts here.",
        callout: {
          label: "Key Result",
          content:
            "4.90% → 7.36% conversion rate. 50% lift. Statistically significant.",
          variant: "insight",
        },
      },
      {
        id: "reflection",
        title: "What I'd Do Differently",
        content:
          "This project had the ingredients I thrive on: freedom to explore the data, space to question assumptions, and a fast path from insight to shipped solution. I wish more projects worked this way. Give me a real problem, access to data, and room to move quickly. I love this stuff.\n\nIf I had more time, I would track long-term retention alongside conversion to ensure we did not just pull forward purchases that would have happened anyway. And I would follow up by redesigning the paywall itself. It is crowded, generic, and does not reflect what the user just learned or what they are about to unlock. There is more conversion lift sitting there.",
        callout: {
          label: "Key Lesson",
          content:
            "Data tells you what is happening. Asking why does this exist tells you what to do about it.",
          variant: "lesson",
        },
      },
    ],
  },
  {
    slug: "invoo-es",
    title: "invoo.es: From Market Gap to Production Code",
    description:
      "Co-founded an invoicing tool for Spanish freelancers. Identified the market opportunity, designed the product, and built the front-end. Grew the waitlist through content marketing in freelancer communities. 80 signups and counting, public launch coming soon.",
    role: "Co-founder",
    year: 2025,
    category: "built",
    featured: true,
    imageDark: "/images/case-studies/invoo-cover-dark.webp",
    imageLight: "/images/case-studies/invoo-cover-light.webp",
    imageCaption: "invoo.es dashboard — creating an invoice in 30 seconds",
    metrics: [
      { value: "80", label: "Waitlist signups" },
      { value: "30s", label: "Invoice creation time" },
      { value: "15+", label: "Hours saved per year" },
    ],
    sections: [
      {
        id: "hook",
        title: "The Hook",
        content:
          "Spanish freelancers and small businesses waste 15+ hours a year on invoice admin that should take minutes. We built a tool that cuts invoice creation from 10 minutes to 30 seconds. 80 people signed up before it existed. 10 beta testers now use it daily. Zero ad spend. Two months from idea to waitlist.",
      },
      {
        id: "puzzle",
        title: "The Puzzle",
        content:
          "When AEAT announced mandatory digital invoicing, I saw an opportunity. Spanish freelancers and small businesses already hate compliance. Now they would be forced to use invoicing software, and the existing options were painful. I spent weeks reading X posts and Reddit threads. The pattern was clear: tools complied with regulations, but they tried to do everything and did nothing well. Cluttered interfaces, confusing workflows, features nobody asked for. Worse, competitors charge users to connect with accountants. Freelancers feel this pain most, but small businesses have the same problem: create an invoice fast, know the tax is correct, and connect with your accountant without paying extra. Nobody was focused on that.",
        callout: {
          label: "Market Insight",
          content:
            "Competitors comply with regulations, but they try to do everything and do nothing well. Nobody focuses on speed and simplicity.",
          variant: "insight",
        },
      },
      {
        id: "decision",
        title: "The Decision",
        content:
          "We made two bets. First, speed over perfection: I owned everything user-facing while my co-founder handled backend. No handoffs, no waiting. When I spotted a gap, I fixed it that afternoon. Second, we pivoted our tech stack mid-build. We started with React and Next.js, but discovered security gaps and realized that switching to Angular and Java would let us apply as an official AEAT API provider. That pivot cost us a month, but it gave us a compliance edge competitors cannot easily copy. Sometimes slowing down is the faster path.",
        pullQuote: "Sometimes slowing down is the faster path.",
      },
      {
        id: "approach",
        title: "The Approach",
        content:
          "The go-to-market was simple: listen, help, convert. I spent the first weeks in freelancer communities on social media, tracking the tax questions that kept appearing. Then I wrote guides that solved those exact problems and posted them back to the communities where I found them. No pitch, just value. That content drove traffic to the blog, where visitors found more helpful articles and a waitlist signup. By the time we announced the product, we had already helped hundreds of freelancers.",
        pullQuote: "No pitch, just value.",
      },
      {
        id: "result",
        title: "The Result",
        content:
          "80 waitlist signups in two months, zero ad spend. 10 beta testers creating real invoices for real clients. Invoice creation dropped from 10 minutes to 30 seconds. That is 15+ hours saved per year, roughly 600 EUR of time back in their pocket. The software pays for itself in the first month and keeps paying every month after. Public launch coming soon.",
      },
      {
        id: "reflection",
        title: "What I'd Do Differently",
        content:
          "I would investigate the tech stack and official API provider requirements before writing any code. The pivot to Angular and Java was the right decision, but we could have made it on day one instead of month two. That lost month still stings. Next time, I will map the regulatory landscape before choosing the stack.",
        callout: {
          label: "Key Lesson",
          content:
            "Map the regulatory landscape before choosing the stack. That lost month still stings.",
          variant: "lesson",
        },
      },
    ],
  },
  {
    slug: "sei-novus-strategy",
    title: "SEI Novus: From Service Sales to Product-Led Growth",
    description:
      "I led the strategic shift from selling consulting services to selling product subscriptions. A complete business model transformation.",
    role: "Lead Product Designer",
    year: 2023,
    category: "led",
    featured: false,
    sections: [
      {
        id: "hook",
        title: "The Hook",
        content:
          "I led the transformation of a Swiss fintech from service sales to product-led growth. The company went from selling consulting hours to selling product subscriptions, changing how every team operated.",
      },
      {
        id: "puzzle",
        title: "The Puzzle",
        content:
          "SEI Novus sold financial analytics as a service: consultants configured dashboards, trained users, and billed by the hour. Revenue was unpredictable, margins were thin, and growth meant hiring more consultants. The product existed, but it required hand-holding to deliver value. Leadership wanted recurring revenue and scalable growth. That meant the product had to sell itself.",
      },
      {
        id: "decision",
        title: "The Decision",
        content:
          "I proposed we stop treating the product as a service delivery tool and redesign it for self-service adoption. This meant killing features that only made sense with consultant support and building onboarding flows that replaced human handholding. The trade-off: short-term revenue risk from existing service contracts while we rebuilt for the new model.",
      },
      {
        id: "changes",
        title: "What Changed",
        content:
          "Mapped the entire customer journey to identify where consultants intervened most. Redesigned onboarding to replace [X] hours of consultant setup with self-service wizards. Built in-product guidance that answered the top [Y] support questions automatically. Created usage analytics dashboards so customers could see their own ROI. Aligned sales, success, and product teams around product-qualified leads instead of service proposals.",
      },
      {
        id: "result",
        title: "The Result",
        content:
          "The company shifted [X]% of new revenue to product subscriptions within [Y] months. Customer onboarding time dropped from [Z] consultant hours to self-service. The model proved scalable: revenue grew without proportional headcount increases.",
      },
      {
        id: "reflection",
        title: "What I'd Do Differently",
        content:
          "I would run pricing experiments earlier. We focused on product experience first and pricing second. Testing willingness to pay for self-service versus service tiers in parallel would have accelerated the transition.",
      },
    ],
  },
  {
    slug: "datacamp-mobile-home",
    title: "DataCamp Mobile Home: Redesigning for Engagement",
    description:
      "Redesigned the mobile home screen to boost learning activity by 7% and reduce bounce by 10% across millions of users.",
    role: "Lead Product Designer",
    year: 2025,
    category: "designed",
    featured: false,
    sections: [
      {
        id: "hook",
        title: "The Hook",
        content:
          "I redesigned DataCamp's mobile home screen and increased learning activity by 7% while reducing bounce rate by 10%. For a platform with millions of users, those percentages translate to thousands more people actually learning every day.",
      },
      {
        id: "puzzle",
        title: "The Puzzle",
        content:
          "The mobile home screen was underperforming. 9.3% of users landed there and left without taking any action. The median time on screen was just 9 seconds. Users were not finding what they needed to continue learning. The screen had evolved organically, accumulating features without a clear hierarchy. We needed to understand what users wanted when they opened the app.",
      },
      {
        id: "decision",
        title: "The Decision",
        content:
          "I focused on resumption over discovery. Data showed most returning users wanted to continue where they left off, not browse new content. I prioritized the continue learning flow and deprioritized discovery features that were adding cognitive load. The trade-off: new users might have a slightly less guided experience, but returning users would have a faster path to value.",
      },
      {
        id: "changes",
        title: "What Changed",
        content:
          "Elevated the continue learning section to the top of the screen. Simplified the visual hierarchy to reduce decision fatigue. Removed redundant navigation elements that duplicated tab bar functionality. Added progress indicators that celebrate momentum. Streamlined the path from home screen to active learning session.",
      },
      {
        id: "result",
        title: "The Result",
        content:
          "XP gained with courses increased by 7%. Users leaving without action dropped from 9.3% to 8.4%, a 10% improvement. Median time on home screen decreased from 9 to 8 seconds, meaning users found what they needed faster. The redesign became the foundation for subsequent mobile improvements.",
      },
      {
        id: "reflection",
        title: "What I'd Do Differently",
        content:
          "I would segment the analysis earlier by user type. New users and power users have very different needs on the home screen. A more personalized approach from day one could have driven even better results for both segments.",
      },
    ],
  },
  {
    slug: "sei-novus-dashboard",
    title: "SEI Novus Dashboard: From 5% to 70% Interaction",
    description:
      "Transformed an analytics dashboard that nobody used into one that 70% of users actively engage with. A 14x improvement in interaction rate.",
    role: "Lead Product Designer",
    year: 2023,
    category: "designed",
    featured: true,
    sections: [
      {
        id: "hook",
        title: "The Hook",
        content:
          "I took an analytics dashboard with a 5% interaction rate and redesigned it to achieve 70% interaction. That is a 14x improvement. The same data, presented differently, went from ignored to indispensable.",
      },
      {
        id: "puzzle",
        title: "The Puzzle",
        content:
          "The dashboard existed, but nobody used it. Only 5% of users ever clicked on anything beyond the default view. Support tickets piled up with questions the dashboard was supposed to answer. The problem was not missing data. The team had designed the interface around database structure, not user workflows. Users could not find insights because the information architecture matched engineering logic, not how they thought about their work.",
      },
      {
        id: "decision",
        title: "The Decision",
        content:
          "I chose to redesign around workflows, not data tables. Instead of showing all available metrics, I identified the three questions users needed to answer and built views around those. The trade-off: power users lost some flexibility in custom queries. But the 95% of users who never engaged at all gained a tool they could use.",
      },
      {
        id: "changes",
        title: "What Changed",
        content:
          "Rebuilt the dashboard around three core user workflows identified through usability testing. Replaced dense data tables with visual summaries and progressive disclosure. Added contextual guidance that explained what metrics meant and why they mattered. Created default views that answered the most common questions immediately. Ran usability tests with 8 analysts to validate the new structure before development.",
      },
      {
        id: "result",
        title: "The Result",
        content:
          "Interaction rate jumped from 5% to 70%. Analytics-related support tickets dropped by 40%. The redesign shipped in 6 weeks. Users who previously ignored the dashboard now check it daily. The workflow-first approach became a template for subsequent internal tools.",
      },
      {
        id: "reflection",
        title: "What I'd Do Differently",
        content:
          "I would involve engineering earlier in the workflow mapping. Some of my initial designs required data joins that were expensive to compute. Earlier technical input would have avoided a mid-project pivot on one of the three views.",
      },
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getFeaturedCaseStudies(limit?: number): CaseStudy[] {
  const featured = caseStudies.filter((cs) => cs.featured);
  return limit ? featured.slice(0, limit) : featured;
}

export function getCaseStudiesByCategory(
  category: CaseStudyCategory
): CaseStudy[] {
  return caseStudies.filter((cs) => cs.category === category);
}

export function getOtherCaseStudies(currentSlug: string): CaseStudy[] {
  return caseStudies.filter((cs) => cs.slug !== currentSlug);
}

export function getAllCategories(): CaseStudyCategory[] {
  return ["built", "led", "designed"];
}
