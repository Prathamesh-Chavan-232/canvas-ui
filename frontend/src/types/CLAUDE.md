# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Types Module

TypeScript type definitions for the Canvas UI domain model. No runtime code lives here — types and interfaces only.

## Current Types (`common/resources.ts`)

```ts
DraggableItem   // A single element on the canvas: { name, type, isUIElement? }
Page            // A named page: { name, elements: DraggableItem[] }
CustomComponent // A reusable composition: { name, elements: DraggableItem[] }
ComponentType   // A registerable component: { name, render: () => ReactNode }
```

`DraggableItem.type` identifies which Canvas UI component it is (e.g., `"Button"`, `"Card"`, `"Container"`). `isUIElement` flags whether it is one of the built-in library components vs. a layout primitive.

## Planned Types to Add

As the builder and backend are built out, add types here organized by domain:

**`design-system.ts`** — tokens, color scales, typography scale, spacing scale, the full design system JSON schema that flows through the generation pipeline.

**`builder.ts`** — canvas state (selection, hover, drag state), viewport size enum (`"mobile" | "tablet" | "desktop"`), undo/redo command types.

**`generation.ts`** — code generation options (target library, styling approach, output format), component template schema.

**`project.ts`** — project metadata, collaborator info, project settings (chosen library, styling approach, design system reference).

**`api.ts`** — API request/response shapes (once the backend is scaffolded), React Query key factories.

## Conventions

- Keep types co-located with the domain they describe, not with the components that use them
- Use `interface` for object shapes with possible extension, `type` for unions and aliases
- Export everything — no internal-only types (use module structure for encapsulation instead)
- Namespace by subdirectory: `common/`, `builder/`, `api/`, etc.
