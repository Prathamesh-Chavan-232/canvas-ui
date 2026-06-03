# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Components

App-specific shared components. Unlike `ui/`, everything here is owned code — edit, extend, and delete freely.

## Current Components

### `Layout.tsx`

The persistent shell for all standard routes (Dashboard, Projects, Templates, Components, Settings). Renders:
- Top navbar: logo ("Site Builder") links to `/`, ghost buttons for Dashboard and Settings
- `<Outlet />` for child route content

`SiteBuilder` is intentionally **excluded** from this layout. The builder route is defined as a sibling (not a child) of the `Layout` route in `routes.tsx` so it gets a full-screen, chrome-free experience.

### `AddDialog.tsx`

A generic controlled-name creation dialog. Props:
```ts
interface AddDialogProps {
  title: string;           // Appears as "Add {title}" on trigger and "Add New {title}" in heading
  onAdd: (name: string) => void;  // Called with the entered name on submit
}
```

The dialog manages its own `newItemName` state internally and resets on submit. The trigger is a full-width Button. Use this wherever the user needs to create a named resource (a page, component, project, etc.).

## Planned Builder Components

As `SiteBuilder.tsx` is developed, add its sub-components here (or in a `builder/` subdirectory if the count grows):

- **`ComponentPalette`** — left sidebar listing draggable Canvas UI components grouped by category
- **`Canvas`** — the central drop zone that renders placed components and overlays box-model guides in edit mode
- **`BoxModelOverlay`** — positioned overlay showing margin (orange), padding (green), and content area boundaries on the selected/hovered element, matching the DevTools box model visualization
- **`PropertyPanel`** — right sidebar with prop inputs and CVA variant selectors for the currently selected canvas element
- **`BuilderToolbar`** — top action bar with undo/redo, viewport-size toggle (mobile/tablet/desktop), export, and publish buttons

## Naming Conventions

- One component per file, named identically to the export
- Use PascalCase for component files
- Props interfaces go in the same file as the component, above the component function
