# Project vignette design specification

Asset set: `PROJECT-VIGNETTES-01`  
Owner: Yash Parmar Portfolio  
Format: authored SVG, vector, no external image dependencies  
Artboard: 720 × 440 px (18:11) for every project illustration  
Rendering: Next.js `Image`, `unoptimized`, `object-fit: cover`

## Global art direction

- Luminous pastel 2.5D product vignette; light, optimistic, fantasy-tech mood.
- Shared soft light, rounded geometry, white highlights, diffused shadows and subtle floating-stage composition.
- Use project-specific objects so the archive reads as a universe of destinations rather than duplicated gradient cards.
- Real project names, descriptions, categories, statuses and stacks are HTML text.
- Every preview is marked `CONCEPT ART`; never call these product screenshots or claim they show the shipped interface.
- Do not add unsupported performance metrics, client counts, conversion lifts or feature claims into artwork.

## Project-by-project source of truth

| Project | File | Main object / composition | Palette |
|---|---|---|---|
| AICAPTION | `public/projects/aicaption-scene.svg` | Dark video-editing monitor, preview frame, timeline controls, lavender floating desk | `#E6D8FF`, `#9278E8`, `#252746`, `#A8D8FF` |
| Preta | `public/projects/preta-scene.svg` | Personalization analytics dashboard, rising line graph, filter chips, blue platform | `#D8EFFF`, `#829FE8`, `#283452`, `#7B67E6` |
| Printoll | `public/projects/printoll-scene.svg` | Centered blank custom tee, folded collar, warm apparel display | `#FFE6D8`, `#ED9F9E`, `#FFFFFF`, `#F7D5D0` |
| Auramarts | `public/projects/auramarts-scene.svg` | Multi-vendor storefront facade, striped awning, product panels | `#DFF7ED`, `#80CBB9`, `#F19BC2`, `#FDF8EF` |
| Chess Game | `public/projects/chess-scene.svg` | Perspective chessboard with ivory and cream pieces | `#F1E4FF`, `#A18AD6`, `#F7F2FF`, `#F4D9B9` |
| IO Game | `public/projects/io-game-scene.svg` | Arena ring, player silhouette, green floating platform | `#DFF0D7`, `#7DBB9E`, `#617D7A`, `#4F6DD2` |
| Handmade Keychains | `public/projects/keychains-scene.svg` | Two heart-shaped charms, gold rings, blush display | `#FFE3F0`, `#D69ACB`, `#D7A94F`, `#FFFFFF` |
| V.N. ODEDRA Vision | `public/projects/vn-odedra-scene.svg` | Desktop website preview, clean browser frame, violet line graphic | `#DCE CFF` (approx. `#DCEBFF`), `#8998D9`, `#242942`, `#8B6FF0` |

## Responsive dimensions

| Context | Target artwork height | Fit |
|---|---:|---|
| Desktop project card | 150 px | Cover |
| Mobile two-column card | 112 px | Cover |
| Narrow mobile one-column card | 155 px | Cover |
| Project detail dialog | 175 px | Cover |

The same source art is reused in the project card and detail dialog so the subject identity remains consistent.

## Existing brand graphics

- `public/icons/yp-mark.svg`
- `public/icons/automation.svg`
- `public/icons/cube.svg`
- `public/icons/gamepad.svg`
- `public/icons/sparkle.svg`
- `public/illustrations/yp-portal.svg`
- `public/illustrations/robot-companion.svg`
- `public/illustrations/floating-island.svg`

These remain separate from project vignette art. Do not recolor one-off assets without updating `colors.md`, `asset-manifest.json` and this document.
