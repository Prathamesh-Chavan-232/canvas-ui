# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Contexts Module

React contexts for cross-cutting concerns that need to be accessible across many components without prop-drilling.

## ThemeContext

`ThemeContext.tsx` exports:
- `Theme` type: `"dark" | "light" | "system"`
- `ThemeProviderState`: `{ theme: Theme; setTheme: (theme: Theme) => void }`
- `ThemeProviderContext`: the React context (initial state: `{ theme: "system", setTheme: () => null }`)

### Dark mode mechanism

Dark mode is toggled via the `data-theme="dark"` **attribute on `:root`**, not a CSS class. The CSS in `src/index.css` uses:

```css
:root[data-theme="dark"] { ... }
```

When implementing the ThemeProvider, `setTheme` should update `document.documentElement.dataset.theme`.

### Current wiring gap

`ThemeProviderContext` is defined and `useTheme` (in `hooks/`) consumes it, but **no ThemeProvider component exists yet** and it is **not mounted** in `main.tsx`. The next step is:
1. Create a `ThemeProvider` component in this directory that wraps its children and manages `localStorage` + `document.documentElement.dataset.theme`.
2. Mount it in `main.tsx` wrapping `<App />`.

## Adding New Contexts

- Keep each context in its own file
- Export the context object, the initial/default state, and any associated types from the same file
- The consuming hook (`use<ContextName>`) lives in `src/hooks/`, not here
- Contexts should hold **shared UI/session state** only — server state belongs in React Query (planned), ephemeral local state stays in components
