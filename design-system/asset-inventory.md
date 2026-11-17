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
