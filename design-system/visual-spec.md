# Visual specification

## Color tokens — starting values
The mockups are consistently light, pastel and luminous. The values below are implementation starting points inferred from the image palette; validate with screenshot comparisons before locking them.

| Token | Value | Purpose |
|---|---|---|
| `--sky-ice` | `#DCEBFF` | Sky / cool atmospheric light |
| `--lavender` | `#D8CEE3` | Soft lavender surfaces |
| `--violet` | `#8051ED` | Primary brand / CTA |
| `--violet-deep` | `#5B3BC4` | CTA depth / portal shadows |
| `--pink` | `#F4CDEB` | Blossom / warm pastel |
| `--coral` | `#FF8B78` | Warm accent / emphasis |
| `--peach` | `#F9D8C9` | Sunlit highlights |
| `--mint` | `#BCEAD9` | Positive / nature accents |
| `--cyan` | `#75DDF5` | Robot eyes / tech glow |
| `--ink` | `#171B3C` | Primary text |
| `--muted-ink` | `#626783` | Secondary text |
| `--glass` | `rgba(255,255,255,.68)` | Glass UI |
| `--glass-border` | `rgba(255,255,255,.88)` | Glass edge |

## Typography
- Display: rounded geometric sans, close to Space Grotesk / Manrope; heavy 700–800.
- Body: clean sans, 400–600, compact but comfortably readable.
- UI labels: small geometric sans; optional mono for technical micro-labels only.
- Hero headline is oversized, tight leading, dark ink. Emphasized phrase uses violet-to-coral gradient and a hand-drawn underline / accent stroke.
- Avoid tiny text baked into images; all key information must remain accessible DOM text.

## Surfaces and geometry
- Navigation: floating pill / glass capsule, desktop centered or near top; mobile compact and collapsible.
- Buttons: pill radius, violet gradient primary, white translucent secondary, subtle glow and lift on hover.
- Project previews: luminous glass frames with image-led previews; avoid generic identical cards. Project islands / display platforms can be used in the immersive archive.
- Borders: thin white / pale lavender. Shadows diffuse and tinted, never harsh black.
- Backgrounds: multi-layer sky gradients, cloud / terrain depth and organic landscape transitions.
- Section boundaries should feel like movement through one world, not abrupt white rectangles.

## Composition
- Hero: left text block, right / center large 3D creator scene; glowing YP portal behind or around scene; floating capability labels and code / AI interface panels.
- Creator: stylized young developer in light hoodie, dark trousers, sneakers, headphones, laptop with YP mark. Must be treated as an original stylized avatar, not an exact photorealistic likeness.
- Robot: small friendly white robot with cyan luminous eyes; recurring companion.
- Environment: floating rock islands with grass, shrubs, trees, waterfalls, flowers, distant mountain skyline and luminous path / rings.
- Project universe: each major project gets a distinct mini-world / island or product vignette, with legible project title and concise description.
- Skills: technology marks arranged as a floating rail / orbit, not a plain text list.

## Motion / interaction targets
- Ambient: slow cloud drift, tiny particles / stars, gentle float on islands and robot, portal ring rotation / light pulse.
- Pointer: subtle parallax on scene layers, magnetic CTA hover, custom cursor accent only on fine-pointer devices.
- Scroll: staged reveal of scene layers, path / portal progression, project platform entrance, section transitions.
- Project interaction: hover previews / glow / lift; click opens a real case-study route or accessible detail dialog.
- Motion should feel smooth and intentional, not constant chaotic movement. Use reduced-motion fallbacks.

## Responsive behavior
- Desktop: preserve the full scene composition and depth; use 3D camera framing / alternate layout rather than clipping important objects.
- Tablet: simplify distant islands and secondary labels; retain creator, robot and portal.
- Mobile: switch to a deliberately art-directed stacked composition; prioritize headline, avatar, robot and CTA. Reduce particles, disable expensive postprocessing, avoid hover-only controls.
- Test at 360, 390, 768, 1024, 1280, 1440 and 1920 CSS-pixel widths.
