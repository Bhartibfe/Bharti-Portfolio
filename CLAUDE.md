# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `npm run dev` (uses Turbopack)
- **Build:** `npm run build`
- **Start production:** `npm start`
- **Lint:** `npm run lint`

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/postcss`)
- **Package manager:** npm
- **React:** v19
- **Fonts:** Geist Sans + Geist Mono (via `next/font/google`)

## Project Structure

```
src/
  app/            # Next.js App Router — routes, layouts, API routes
  components/     # React components
    ui/           # Reusable UI primitives
  hooks/          # Custom React hooks
  lib/            # Utility functions and shared logic
    utils.ts      # cn() helper (clsx + tailwind-merge)
  styles/         # Global CSS
  types/          # TypeScript type definitions
  data/           # Static data and constants
public/           # Static assets (images, icons, fonts)
```

## Key Conventions

- **Path alias:** `@/*` maps to `./src/*` — always use `@/` imports
- **CSS:** Tailwind v4 uses `@import "tailwindcss"` syntax (no `@tailwind` directives). Theme customization via `@theme inline` block in `globals.css`
- **Class merging:** Use `cn()` from `@/lib/utils` to merge Tailwind classes (handles conflicts via `tailwind-merge`)
- **Components:** Prefer Server Components by default; add `"use client"` only when needed for interactivity
- **ESLint:** Configured with `eslint-config-next` (core-web-vitals + TypeScript rules)

## Code Quality Standards

- **Zero workarounds:** No `@ts-ignore`, `as any`, temporary fixes, or commented-out code
- **TypeScript strict mode:** All code must pass strict type checking
- **No unused imports:** Clean imports only
- **Props:** Always use interfaces with `{ComponentName}Props` naming
- **Boolean props:** Use `is/has/should` prefix
- **No barrel exports:** Import directly from source files
- **Dynamic imports:** Use for heavy components (canvas, particles, 3D)

## Component Conventions

- Files: `PascalCase.tsx` for components, `kebab-case.tsx` for UI primitives
- Server Components by default, `"use client"` only when needed
- All data fetching on server with `Promise.all()` for parallel requests
- Tailwind-first styling with `cn()` utility for all className composition

## Agent Skills

Vercel agent skills are installed in `.agents/skills/`:
- **frontend-design** — Production-grade frontend interfaces with distinctive design
- **vercel-composition-patterns** — Component composition patterns (compound components, no boolean props, lift state)
- **vercel-react-best-practices** — React performance patterns (rendering, re-renders, async, bundling, server/client)
- **web-design-guidelines** — UI/UX review against Web Interface Guidelines
