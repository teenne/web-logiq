# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing website for **LogiQ** (Logicmath), an adaptive math learning app that helps Norwegian secondary school students master Matematikk 2P through AI-guided practice and personalized learning paths. Norwegian-language default (nb). Owned by Halisonworks.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:4018
npm run build    # Production build to dist/
npm run preview  # Preview production build locally
```

## Architecture

- **Framework:** Astro 5 (static output, zero JS by default)
- **CSS:** Tailwind CSS 4 via `@tailwindcss/vite`, tokens in `src/styles/global.css` using `@theme`
- **Content:** `@astrojs/mdx` + Astro Content Collections (articles, blog, services, products)
- **Integrations:** `@astrojs/sitemap` for SEO
- **Routing:** File-based; i18n enabled with Norwegian (nb) as default locale, English (en) secondary
- **Assets:** `src/assets/` for build-optimized images; `public/` for unprocessed static files
- **Layouts:** `BaseLayout` (HTML shell), `ArticleLayout` (long-form content)
- **Components:** `src/components/` (Header, Footer, Hero, FeatureGrid, PricingTable, FAQ, etc.)

## Content Collections

Schemas defined in `src/content.config.ts`:

- `src/content/articles/` -- Long-form articles (title, description, date, author, type, category, image, draft, featured, keywords)
- `src/content/blog/` -- Blog posts (title, description, date, tags, image, draft, featured)
- `src/content/services/` -- Service pages (title, description, icon, order, features, draft)
- `src/content/products/` -- Product pages (title, description, price, image, features, order, draft)

## Design System

- **Color tokens:** Defined in `src/styles/global.css` via Tailwind `@theme`
- **Primary palette:** Teal (#14B8A6), deep teal (#042F2E)
- **Accent:** Amber/Gold (#D97706) for CTAs and highlights
- **Typography:** Inter (body), Plus Jakarta Sans (headings)
- **No em-dashes.** Use commas, periods, or semicolons instead.

## Non-Code Directories

- `docs/` -- Internal documentation (not published)

## Writing Rules

- Never use em-dashes in any content or code.
- Use commas, periods, semicolons, or parentheses instead.
