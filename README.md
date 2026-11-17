# Yash Parmar — Digital Creator Portfolio

A light, optimistic, motion-led portfolio for software engineering, AI tools, automation, games, 3D design and product experiments.

## Stack

- Next.js 15 + React 19 + TypeScript
- Framer Motion for UI motion and scroll-linked progress
- Three.js / React Three Fiber / Drei dependencies reserved for the upcoming interactive 3D scene
- Custom CSS design system with responsive and reduced-motion fallbacks

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Quality commands

```bash
npm run lint
npm run build
```

## Current experience

- Responsive home, about, project archive, capabilities, toolkit, creative lab and contact sections
- Filterable project collection with eight unique authored SVG project vignettes, concept-art labels and accessible detail dialogs
- Active-section navigation, scroll progress, pointer-follow accent and keyboard Escape support
- Canonical SVG scene assets integrated into the hero: YP portal, floating island and robot companion
- Light pastel palette, responsive layout and reduced-motion rules
- Search and social metadata without an unverified public domain

## Visual source of truth

Read these before changing the design or creating assets:

- `design-system/asset-bible.md`
- `design-system/icon-spec.md`
- `design-system/project-art-spec.md`
- `design-system/visual-spec.md`
- `design-system/colors.md`
- `design-system/typography.md`
- `design-system/motion-spec.md`
- `design-system/asset-manifest.json`
- `design-system/project-content.md`
- `design-system/quality-checklist.md`

## Asset status

The hero now contains an interactive procedural 3D scene built with React Three Fiber / Three.js: a luminous YP ring portal, floating garden island, stylized creator blockout, robot companion, sparkles, lighting, contact shadows and pointer parallax. It has a reduced-motion mode and SVG fallback. These are runtime procedural meshes, not authored Blender / GLB assets; the final detailed character, rigging, modular environments and editable Blender source files remain planned. Their status is recorded in the asset manifest; do not represent planned work as completed.

## Project content integrity

The archive currently includes AICAPTION, Preta, Printoll, Auramarts, Chess Game, IO Game, Handmade Keychains and V.N. ODEDRA Vision. Descriptions intentionally avoid unverified metrics, client counts, live URLs and testimonials. IO Game is marked in progress. Add case-study links and screenshots only after verifying the source material.

## Deployment

Connect this repository to Vercel or another Next.js host. Set the final production domain in deployment settings before publishing canonical URLs or domain-specific verification records.
