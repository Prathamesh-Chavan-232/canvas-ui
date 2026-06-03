# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Vision

Canvas UI is a Webflow/Figma-inspired no-code website builder with a key differentiator: **real-time code generation**. Instead of producing opaque output, every visual edit the user makes in the builder is reflected directly in their React source code. The user owns the code.

Core mission: give teams modular, variant-driven, fully tokenized UI components with zero style/library lock-in, delivered through a visual drag-and-drop builder.

### The builder interaction model

1. User opens a project → a sandbox opens with their React code rendered in a browser window.
2. In **edit mode**, the builder overlays box-model outlines (like browser DevTools) on top of the rendered UI — showing margin, padding, and layout boundaries.
3. The user drags Canvas UI components from the component palette onto the canvas.
4. Every drag, drop, and prop edit is written back to the user's source code in real time.

## Repository Structure

```
canvas-ui/
├── frontend/          # React SPA (current active module)
└── backend/           # Planned — Node.js or Django (not yet scaffolded)
```

All active work is in `frontend/`. See `frontend/CLAUDE.md` for commands and frontend-specific guidance.

## Target Stack (from PRD)

The PRD specifies these libraries for the full build. Not all are installed yet — check `frontend/package.json` for current state.

| Concern | Library |
|---|---|
| UI framework | React 18 + TypeScript |
| Build tool | Vite |
| Routing | TanStack Router *(currently React Router v7 — migration planned)* |
| Server state | React Query |
| Client state | Redux |
| Component primitives | Radix UI / Headless UI |
| Variant system | CVA (Class Variance Authority) |
| Styling | Tailwind CSS v4 + CSS variables |
| Drag & drop | react-dnd *(CraftJS was removed)* |
| Forms | react-hook-form + zod |

## Design System Architecture

The design token pipeline flows in one direction:

```
Design system definition (JSON / builder UI)
         ↓
CSS custom properties (src/index.css)
         ↓
CVA variant classes (component templates)
         ↓
Generated .tsx components (output to user's repo)
```

Token naming convention in `src/index.css`:
- Semantic: `--text`, `--background`, `--primary`, `--secondary`, `--accent`
- Scale: `--primary-50` through `--primary-950`
- Dark mode: toggled via `[data-theme="dark"]` on `:root` (attribute-based, not class-based)
- Fluid typography: `--fs-300` through `--fs-800` using `clamp()` for viewport-responsive sizes
- Two font families: `--ff-base` (Inter) for body, `--ff-accent` (Syne) for headings

## Component Generation Strategy

Components are generated in one of three modes based on the user's chosen library:

| Mode | Primitive | Output approach |
|---|---|---|
| Unstyled (default) | Radix UI / Headless UI | CVA + tokenized CSS, full token integration |
| Headless swap | Radix, React Aria, Headless UI | Same CVA variants, primitive swapped in template |
| Styled framework | MUI, Chakra, ShadCN | Wrapper template; user integrates their tokens |

All generated components follow this pattern:
- CVA handles variant logic
- `className` and `style` props pass through for any styling framework
- The underlying primitive (e.g., `<RadixButton />`) is swappable

## Key Constraints

- **No hardcoded styles in components** — all styles flow from design tokens, CVA variants, or passed-in `className`/`style`.
- **User-owned output** — generated components live in the user's repo, are fully editable, and have no runtime dependency on Canvas UI.
- **Library adapter layer** — the generator has a primitive adapter (Radix/Headless UI/React Aria) and a styled adapter (MUI/Chakra/ShadCN wrapper templates).
