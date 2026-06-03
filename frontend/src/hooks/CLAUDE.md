# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Hooks Module

Custom React hooks. Each hook wraps a context, external library, or complex stateful logic behind a clean interface.

## useTheme

`useTheme.ts` — consumes `ThemeProviderContext` from `src/contexts/ThemeContext.tsx`.

```ts
const { theme, setTheme } = useTheme();
```

**Must be called inside a ThemeProvider.** Throws if the context is undefined (i.e., no ThemeProvider ancestor). Since ThemeProvider is not yet mounted in `main.tsx`, this hook will throw if used in production code right now.

Returns `{ theme: Theme, setTheme: (theme: Theme) => void }` where `Theme = "dark" | "light" | "system"`.

## useToast

`useToast.ts` — shadcn's toast system. This is **not** a standard React context. It uses a module-level singleton (`memoryState` + `listeners` array) so toasts can be fired from anywhere, including outside React components.

Two usage patterns:

**Inside a component** (gets reactive toast list):
```ts
const { toast, toasts, dismiss } = useToast();
```

**Outside a component** (fire-and-forget):
```ts
import { toast } from "@/hooks/useToast";
toast({ title: "Saved!", description: "Your changes were saved." });
```

`TOAST_LIMIT` is set to 1 (only one toast visible at a time). `TOAST_REMOVE_DELAY` is very long (1,000,000ms) — the toast stays until explicitly dismissed or a new one replaces it. The `<Toaster />` component from `ui/toaster.tsx` must be mounted in the page tree for toasts to render (currently only in `SiteBuilder.tsx`).

## Adding New Hooks

- One hook per file, file named `use<Name>.ts`
- If the hook wraps a context, import the context from `src/contexts/`
- Hooks that access browser APIs (localStorage, ResizeObserver, etc.) belong here rather than in contexts or components
- Planned hooks to add as the builder develops:
  - `useCanvasSelection` — tracks the currently selected canvas element
  - `useDesignTokens` — reads and updates the active design system tokens
  - `useUndoRedo` — command history for builder actions
  - `useProjectState` — project data (pages, components, settings) backed by React Query
