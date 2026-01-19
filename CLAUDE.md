# Manuel Rocco Portfolio

Personal portfolio and case studies website built with Next.js 16, React 19, and Tailwind CSS 4.

## Project Overview

- **Type**: Portfolio website with case studies
- **Framework**: Next.js 16 (App Router, React Server Components)
- **Styling**: Tailwind CSS 4 with CSS variables (oklch color space)
- **UI Components**: Radix UI primitives, shadcn/ui patterns
- **Language**: TypeScript (strict mode)

## Development Workflow

All tasks follow this four-phase workflow: **Plan → Build → Test → Review**

### Phase 1: Plan

Use the **nextjs-architect** agent to:
- Analyze requirements and break down tasks
- Design component architecture and data flow
- Identify affected files and dependencies
- Create implementation strategy

For content/positioning work, also involve:
- **brand-positioner**: Define messaging strategy and value propositions
- **market-intel-researcher**: Research competitors and trends
- **tech-content-strategist**: Plan case study narratives and content structure

### Phase 2: Build

Use the **nextjs-expert** agent to:
- Implement components and pages
- Write TypeScript code following project conventions
- Apply Tailwind CSS styling patterns
- Handle data integration

For SEO implementations, use **seo-tech-talent** agent.

### Phase 3: Test

Run these commands to validate changes:

```bash
npm run lint      # ESLint code quality check
npm run build     # Production build (catches type errors, RSC issues)
npm run dev       # Manual testing at localhost:3000
```

Verify:
- No TypeScript errors
- No ESLint warnings
- Dark/light theme works correctly
- Responsive design on mobile/tablet/desktop
- Navigation and links function properly

### Phase 4: Review

Use the **code-reviewer** agent to:
- Check code quality and best practices
- Identify security vulnerabilities
- Verify performance optimizations
- Ensure accessibility compliance

For design review, use **design-leader** agent to evaluate:
- Visual hierarchy and typography
- Spacing and layout consistency
- UI/UX patterns and interactions

For content quality, use **tech-hiring-manager** agent to:
- Evaluate case studies from hiring manager perspective
- Grade content effectiveness
- Verify professional presentation

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Home page
│   ├── about-me/           # About page
│   └── case-studies/       # Case studies (list + dynamic [slug])
├── components/
│   ├── layout/             # Header, Footer
│   ├── sections/           # Page sections (Hero, FeaturedCaseStudies, Values)
│   ├── shared/             # Reusable logic components
│   └── ui/                 # Base UI components (Button, Card, Badge)
├── config/
│   └── site.ts             # Navigation and site metadata
├── data/
│   ├── case-studies.ts     # Case study content and helpers
│   └── values.ts           # Core values content
├── lib/
│   └── utils.ts            # Utility functions (cn helper)
└── types/
    └── index.ts            # TypeScript interfaces
```

## Code Conventions

### Component Patterns

- **Server Components** by default (pages, sections)
- **Client Components** marked with `"use client"` only when needed (interactivity, hooks)
- Use `cn()` utility for conditional class merging
- Use `class-variance-authority` for component variants

### File Naming

- Components: PascalCase (`HeroSection.tsx`)
- Utilities: camelCase (`getCaseStudyBySlug`)
- Types: PascalCase with descriptive names (`CaseStudy`, `SiteConfig`)

### Styling

- Tailwind utility classes for all styling
- CSS variables for theme colors (defined in `globals.css`)
- Responsive breakpoints: `md:` (768px), `lg:` (1024px)
- No inline styles or CSS modules

### Data Flow

- Static data in `/src/data/` files
- Pure helper functions for data queries
- Type-safe with TypeScript interfaces from `/src/types/`
- Use `generateStaticParams()` for dynamic route pre-rendering

## Key Files

| File | Purpose |
|------|---------|
| `src/app/layout.tsx` | Root layout, fonts, theme provider |
| `src/config/site.ts` | Navigation links, site metadata |
| `src/data/case-studies.ts` | Case study content and query helpers |
| `src/components/ui/button.tsx` | Button component with variants |
| `src/lib/utils.ts` | `cn()` class merge utility |

## Commands

```bash
npm run dev       # Start development server (localhost:3000)
npm run build     # Create production build
npm run start     # Start production server
npm run lint      # Run ESLint
```

## Agent Orchestration Reference

| Workflow Phase | Primary Agent | Supporting Agents |
|----------------|---------------|-------------------|
| **Plan** | nextjs-architect | brand-positioner, market-intel-researcher |
| **Build** | nextjs-expert | seo-tech-talent, tech-content-strategist |
| **Test** | (manual + lint/build) | - |
| **Review** | code-reviewer | design-leader, tech-hiring-manager |

## Important Notes

- Always read files before editing them
- Prefer editing existing files over creating new ones
- Run `npm run lint` and `npm run build` after changes
- Keep components small and focused
- No test framework currently configured - rely on TypeScript and ESLint
- Dark mode uses CSS variables with `next-themes` provider
