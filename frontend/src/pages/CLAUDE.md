# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Pages Module

Each file in this directory is a **route-level component** — one page per file. Routes are registered in `src/routes.tsx`.

## Route Map

| Route | File | Status | Purpose |
|---|---|---|---|
| `/` | `DashboardPage.tsx` | Scaffold | Overview: recent projects, templates, components, quick-start |
| `/projects` | `ProjectsPage.tsx` | Scaffold | Project listing; clicking a card navigates to `/builder/:id` |
| `/builder/:projectId` | `SiteBuilder.tsx` | In progress | **Core builder** — Editor / Preview / Code tabs |
| `/templates` | `TemplatesPage.tsx` | Scaffold | Template gallery with preview + use-template actions |
| `/preview/:projectId` | `PreviewPage.tsx` | Scaffold | Full-screen project preview |
| `/preview/template/:templateId` | `TemplatePreviewPage.tsx` | Scaffold | Template preview; shows 404 state when templateData is null |
| `/components` | `CustomComponentsPage.tsx` | Scaffold | CRUD for user-defined reusable components |
| `/settings` | `SettingsPage.tsx` | Scaffold | Theme + account settings |

All scaffold pages contain static placeholder data. No API calls exist yet.

## SiteBuilder — The Core Page

`SiteBuilder.tsx` is the primary feature under active development. Its layout is:

```
┌──────────────────────────────────────────────┐
│  [Editor] [Preview] [Code]    Project: {id}  │  ← tab bar (border-b)
├──────────────────────────────────────────────┤
│                                              │
│  Tab content (full height, overflow-hidden)  │
│                                              │
└──────────────────────────────────────────────┘
```

Three tabs to build out:
- **Editor** — drag-and-drop canvas with box-model overlays, component palette, property panel
- **Preview** — iframe/live render of the current project
- **Code** — read-only code view of the generated output

The builder is full-viewport (`w-screen h-screen`) and intentionally does **not** use the shared `Layout` component (no navbar). It manages its own layout entirely.

## Routing Conventions

- Use `useParams()` to read route params (e.g., `projectId`, `templateId`).
- Use `useNavigate()` for programmatic navigation.
- The `/builder/:projectId` route accepts `"new"` as a valid projectId for creating a new project; template starts are passed as `?template=<id>` query param.
- The `/builder/component/:componentId` pattern is referenced in `CustomComponentsPage` but not yet registered in `routes.tsx` — add it when building the component editor.

## Adding a New Page

1. Create the file in this directory.
2. Register the route in `src/routes.tsx` — either as a child of the `Layout` route (for pages with the navbar) or as a sibling at the top level (for full-screen pages like `SiteBuilder`).
3. Wire any navigation links in `Layout.tsx` or `DashboardPage.tsx`.
