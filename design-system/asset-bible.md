# YP Portfolio — Master Asset Bible

Single source of truth for visual consistency. Read before creating, editing, exporting or integrating any visual asset. If a new idea conflicts with this bible, update it deliberately first; never silently drift.

## 1. Creative north star
A bright, optimistic, premium fantasy-tech universe. It should feel like exploring one coherent world built by Yash, not unrelated landing-page sections.

Mood: uplifting, playful, inventive, polished and welcoming.
Never default to dark cyberpunk, black backgrounds, harsh red neon, generic SaaS templates, unrelated stock art, random gradients or emoji as final artwork.

## 2. Character identity lock — YASH-01
One consistent stylized 3D avatar across all pages and scenes:
- Young adult male digital creator; friendly, confident, relaxed expression.
- Warm medium skin tone; expressive dark eyes; dark wavy hair with consistent silhouette.
- Cream / off-white hoodie with YP mark, dark charcoal trousers, white sneakers with restrained violet details.
- Headphones around neck; laptop may carry YP mark.
- Keep face proportions, hair, outfit, colors and body proportions identical between poses.
- Create canonical neutral front / three-quarter / side / back turnaround before other poses.
- Pose variants may change pose and expression only; never redesign identity.
- Do not claim the generated character is a photorealistic likeness of the user.

## 3. Robot identity lock — ROBOT-01
One recurring small companion robot:
- Compact rounded white body, smooth shell, dark glossy face panel.
- Two cyan / ice-blue glowing eyes; violet accent details only.
- Preserve head/body ratio, eye shape, shell segmentation and palette.
- Canonical front / side / back turnaround before animation variants.
- Animation set: idle hover, blink, look-around, wave / greeting, reduced-motion still.

## 4. World identity lock — WORLD-01
- Floating islands use the same stylized material language: layered natural rock underside, lush grass top, flowers, shrubs and trees.
- Waterfalls are clear cyan-blue with soft highlights.
- Background: pastel sky, luminous clouds, distant mountains, floating landforms, optional cherry blossoms.
- Keep lighting direction and atmospheric perspective consistent within a scene.
- Do not mix photorealism, low-poly toy assets and painterly illustration in one shot.

## 5. Portal identity lock — PORTAL-01
- Circular / concentric mechanical ring with centered YP insignia.
- Main emissive family: violet and lavender; secondary pink / coral and cyan edge lights.
- Brushed pearl / silver body material and controlled bloom.
- Ring proportions, YP mark and emissive placement stay constant across scenes.

## 6. Color system
Use `colors.md` as the token source. Core palette: warm white, sky ice, lavender, violet, blush pink, coral, mint and cyan. Text uses deep ink, not pure black. Do not introduce a new dominant hue without updating tokens and checking all references.

## 7. Materials, light and camera
- Avatar: soft-touch fabric, matte sneakers, subtle hair sheen, realistic but stylized skin.
- Robot: pearl-white shell, dark glass display, cyan emissive eyes.
- Portal: pearl-metal / brushed silver with restrained emissive strips.
- Islands: stylized layered stone, lush vegetation, translucent water.
- Use one coherent key-light direction, soft fill and atmospheric rim light.
- Avoid excessive bloom, crushed shadows, noisy reflections and over-sharpening.
- Camera should preserve readable silhouette and hero text safe area.

## 8. UI / graphic language
- Glassmorphism is light and translucent: white glass, pale lavender border, soft colored shadow.
- Rounded pill navigation and CTAs; controlled glow; generous spacing.
- Real text, buttons and links remain HTML / accessible DOM. Never bake critical UI copy into raster images.
- Use SVG for icons, with consistent stroke weight and optical size.
- Avoid repetitive generic card grids. Projects should feel like distinct destinations / scenes.

## 9. Asset production gates
For every asset:
1. Assign stable asset ID and filename.
2. Create a canonical master / turnaround before variants.
3. Check against the seven approved reference images.
4. Record source prompt, model / software, dimensions, polycount, texture sizes, color space, material notes and license.
5. Export web version plus editable source where possible.
6. Test at desktop, tablet and mobile sizes.
7. Verify visual consistency before committing.
8. Update `asset-inventory.md` and `asset-manifest.json`.

## 10. Naming and versioning
Use lowercase kebab-case and semantic versions:
- `avatar-yash-v001.blend`, `avatar-yash-v001.glb`
- `robot-companion-v001.blend`, `robot-companion-v001.glb`
- `portal-yp-v001.blend`, `portal-yp-v001.glb`
- `island-garden-v001.glb`, `world-sky-v001.webp`
Never overwrite a canonical source casually. Increment version and update manifest.

## 11. Responsive and performance rules
- Desktop: full cinematic composition and layered depth.
- Tablet: simplify distant scenery and secondary labels; preserve main avatar, robot and portal.
- Mobile: art-directed stacked scene; never shrink a desktop screenshot to phone width.
- Provide a static fallback if WebGL is unavailable and respect reduced motion.
- Lazy-load non-critical models; compress textures; cap mobile DPR and disable costly postprocessing on small devices.

## 12. Change control
Any proposed change to avatar face / hair / outfit, robot silhouette, portal geometry, core palette, lighting direction or world style is a breaking visual change. Update this bible and inspect all affected screens before accepting it.
