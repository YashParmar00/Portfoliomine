# Asset inventory

## Required authored assets

| Asset ID | Asset | Format / target | Notes |
|---|---|---|---|
| AV-001 | Yash creator avatar | Blender source + GLB | Stylized hoodie, headphones, dark trousers, sneakers; multiple poses / animation rig |
| AV-002 | Robot companion | Blender source + GLB | White shell, cyan eyes, expressive idle / hover animation |
| AV-003 | YP portal | GLB or layered mesh | Concentric metallic rings, violet / pink / cyan emissive strips |
| AV-004 | Floating islands | GLB modular kit | Rock underside, grass top, plants, trees, waterfall variants |
| AV-005 | Floating project environments | GLB / image textures | Unique mini scenes for AICAPTION, Preta, Printoll, Auramarts, Chess, IO Game, Keychain |
| AV-006 | Environment background | Layered WebP / GLB | Sky, clouds, mountains, distant islands, cherry blossoms |
| AV-007 | Project screenshots | WebP / AVIF | Real product captures; no invented UI presented as shipped product |
| AV-008 | Technology logos | SVG | Official / brand-compliant marks, consistent optical sizing |
| AV-009 | UI icon set | SVG / Lucide | Consistent stroke and optical weight; no emoji substitutes |
| AV-010 | Particle / glow textures | WebP / procedural | Lightweight, reusable, transparent |
| AV-011 | Resume | PDF | Download link only after actual file is supplied / created |
| AV-012 | Social / contact icons | SVG | GitHub, LinkedIn, email, other confirmed channels |

## Existing implementation mismatch to correct
The first implementation used CSS-drawn approximations for the portal, avatar, robot and islands. These are placeholders only. They do not satisfy the approved visual references. Replace them with authored 3D / layered visual assets before calling the hero complete.

## Naming convention
- 3D: `avatar-yash-v01.glb`, `robot-companion-v01.glb`, `portal-yp-v01.glb`
- Environment: `island-<type>-v01.glb`, `world-sky-v01.webp`
- Project previews: `project-<slug>-preview-v01.webp`
- Icons: `icon-<name>.svg`
- Textures: `tex-<material>-<resolution>.<format>`

## Required metadata per asset
Record: asset ID, filename, source file, dimensions / polygon count, texture dimensions, color space, material notes, intended display size, focal point, compression target, fallback, and license / ownership.

## Original reference PNGs
See `references.md` for the seven uploaded reference images and dimensions. Their binary contents have not yet been committed to `public/design-references/`; copy them there as the next asset-ingestion step. Do not mark them as present until GitHub confirms those files exist.


## Integrated procedural 3D scene (November 2026)

| Asset ID | File | Current state | Important limitation |
|---|---|---|---|
| WORLD-3D-01 | `src/components/portfolio-world-3d.tsx` | Integrated in hero with React Three Fiber | Procedural realtime meshes; no Blender source / GLB export |
| AVATAR-3D-01 | `src/components/portfolio-world-3d.tsx` | Stylized 3D blockout | Not a final detailed likeness, rigged character or animation set |
| ROBOT-3D-01 | `src/components/portfolio-world-3d.tsx` | Integrated 3D companion | Procedural model; separate Blender source not yet authored |
| PORTAL-01 | `src/components/portfolio-world-3d.tsx` + `public/illustrations/yp-portal.svg` | Integrated 3D ring portal and 2D fallback art | No editable Blender master yet |
| WORLD-01 | `src/components/portfolio-world-3d.tsx` + `public/illustrations/floating-island.svg` | Integrated floating garden island | Modular environment and high-detail waterfall assets remain planned |

The scene includes a camera, ambient / directional / point lighting, pointer parallax, slow portal rotation, a floating island, a stylized avatar, a robot hover animation, sparkles, contact shadows, reduced-motion behavior and a static SVG fallback.

## Existing icon family

The current repository includes `public/icons/yp-mark.svg`, `automation.svg`, `cube.svg`, `gamepad.svg` and `sparkle.svg`. Keep their visual weight and pastel accent language consistent when extending the icon set.


## Project universe illustrations — PROJECT-VIGNETTES-01

All eight project tiles now use separate hand-authored SVG artwork. Each asset uses a 720 × 440 viewBox (18:11), scales with `object-fit: cover`, and is paired with live HTML project titles / descriptions. The `CONCEPT ART` label makes clear that these are illustrations, not product screenshots.

| File | Subject | Dominant colors | Secondary accents |
|---|---|---|---|
| `aicaption-scene.svg` | Video editor workstation / timeline | lavender `#E6D8FF`, violet `#9278E8` | navy `#252746`, ice blue `#A8D8FF` |
| `preta-scene.svg` | Personalization analytics screen | sky `#D8EFFF`, periwinkle `#829FE8` | navy `#283452`, violet `#7B67E6` |
| `printoll-scene.svg` | Custom T-shirt product display | peach `#FFE6D8`, rose `#ED9F9E` | ivory `#FFFFFF`, warm pink `#F7D5D0` |
| `auramarts-scene.svg` | Multi-vendor storefront | mint `#DFF7ED`, teal `#80CBB9` | rose `#F19BC2`, ivory `#FDF8EF` |
| `chess-scene.svg` | Chess board and pieces | pale lavender `#F1E4FF`, purple `#A18AD6` | ivory `#F7F2FF`, warm cream `#F4D9B9` |
| `io-game-scene.svg` | Multiplayer arena / player | pale green `#DFF0D7`, sage `#7DBB9E` | slate `#617D7A`, blue `#4F6DD2` |
| `keychains-scene.svg` | Handmade heart keychains | blush `#FFE3F0`, mauve `#D69ACB` | gold `#D7A94F`, white `#FFFFFF` |
| `vn-odedra-scene.svg` | Framer / website on desktop | ice blue `#DCE CFF` (approx. `#DCE CFF`), periwinkle `#8998D9` | navy `#242942`, violet `#8B6FF0` |

### Usage and crop rules

- Project tile artwork: responsive width, desktop target height 150 px, mobile 112 px, narrow single-column 155 px.
- Project detail artwork: 175 px high, full card width.
- SVG is served as vector and uses `unoptimized` Next Image to avoid unnecessary raster conversion.
- DOM text stays outside artwork; no embedded project names, metrics, claims or fake interface labels.
- Each card retains its own tone class, category, project status and technology stack.
