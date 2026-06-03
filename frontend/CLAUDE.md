# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Run from this directory (`frontend/`).

```bash
pnpm dev        # Start Vite dev server (http://localhost:5173)
pnpm build      # Type-check then bundle: tsc -b && vite build
pnpm lint       # Run ESLint
pnpm preview    # Serve the production build locally
```

## Stack

| Concern | Library | Notes |
|---|---|---|
| Framework | React 18 + TypeScript | Strict mode enabled in main.tsx |
| Build | Vite 5 | |
| Routing | React Router v7 | PRD targets TanStack Router — migration pending |
| Styling | Tailwind CSS v4 | CSS-first config via `@tailwindcss/vite` plugin, no tailwind.config.js |
| UI primitives | shadcn/ui (new-york style) | Backed by Radix UI |
| Drag & drop | react-dnd + react-dnd-html5-backend | CraftJS was removed |
| Forms | react-hook-form + zod | |
| Package manager | pnpm | Use pnpm, never npm or yarn |

## Path Alias

`@` → `src/`. Configured in `vite.config.ts` and all three `tsconfig*.json` files. Always use `@/` imports, never relative `../../` imports crossing directory boundaries.

## Tailwind v4 Specifics

There is **no `tailwind.config.js`**. Configuration is CSS-first:
- The `@tailwindcss/vite` plugin is registered in `vite.config.ts`
- Design tokens and `@theme` overrides live in `src/index.css`
- The `@plugin 'tailwindcss-animate'` directive in `index.css` loads the animation plugin
- Tailwind utility classes map to the CSS custom properties defined in `src/index.css`'s `@theme` block

To add a new Tailwind design token, add it to the `@theme {}` block in `src/index.css`.

## shadcn/ui

Configuration is in `components.json` (new-york style, neutral base, CSS variables enabled).

- **Never hand-edit** files in `src/components/ui/` — they are auto-generated
- Add new components: `npx shadcn add <component-name>`
- shadcn components use the CSS variables defined in `src/index.css`'s `@theme` block (`--color-primary`, `--color-border`, etc.)

## Design Token System

Two parallel token layers exist in `src/index.css`:

1. **Project design tokens** — the Canvas UI design system (`--text`, `--background`, `--primary`, `--secondary`, `--accent` and their numbered scales). These are the tokens that will be exposed to the builder for user customization.
2. **shadcn/ui bridge tokens** — the `@theme {}` block maps shadcn-expected names (`--color-primary`, `--color-border`, etc.) to the project tokens.

Dark mode switches via `[data-theme="dark"]` attribute on `:root` (not a CSS class). The `ThemeContext` + `useTheme` hook manage this. The ThemeProvider is not yet wired into `main.tsx`.

## Module Map

```
src/
├── main.tsx              Entry point — StrictMode, createRoot
├── App.tsx               RouterProvider wrapper
├── routes.tsx            All routes — single source of truth
├── index.css             Design tokens + Tailwind v4 config
├── pages/                One file per route (see pages/CLAUDE.md)
├── components/
│   ├── ui/               shadcn/ui primitives — treat as third-party
│   └── common/           App-specific shared components
├── contexts/             React contexts (ThemeContext)
├── hooks/                Custom hooks (useTheme, useToast)
├── types/                TypeScript domain types
└── utils/                cn() utility (clsx + tailwind-merge)
```
