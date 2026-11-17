# UI icon specification

All current brand SVGs are authored in-repository. Preserve the exact viewBox, geometry, stroke joins and listed palette when reusing them.

| Asset | File | ViewBox | Main geometry | Colors | Recommended rendered size |
|---|---|---|---|---|---|
| YP mark | `public/icons/yp-mark.svg` | 128 × 128 | Rounded square, gradient Y and ink P | `#7B3FFF`, `#AB85F7`, `#FF7AA2`, `#FBFAFF`, `#171B3C` | 32 px header / 48 px avatar / 128 px source |
| Automation | `public/icons/automation.svg` | 64 × 64 | Lightning bolt outline, 3 px stroke, rounded join | `#FF9A3C` | 22–28 px |
| Cube | `public/icons/cube.svg` | 64 × 64 | Isometric cube, 3 px strokes | `#AB85F7`, `#7B3FFF` | 22–28 px |
| Gamepad | `public/icons/gamepad.svg` | 64 × 64 | Rounded controller silhouette, 3 px outline, 4 px controls | `#7B3FFF`, `#60E6FF` | 22–28 px |
| Sparkle | `public/icons/sparkle.svg` | 64 × 64 | Four-point star and small secondary sparkle | `#7B3FFF`, `#FF7AA2` | 20–26 px |

## Usage

- Keep SVG viewBoxes square; preserve aspect ratio and use `object-fit: contain`.
- Use YP mark for site identity / favicon only, not as a generic capability icon.
- Automation maps to workflow / automation.
- Cube maps to 3D / creative tooling.
- Gamepad maps to game development.
- Sparkle maps to AI / creative lab / highlight.
- Use Lucide for utility actions (close, arrow, GitHub, menu); use these custom SVGs for brand-owned visual language.
- Do not use emoji as final icon artwork.
- Do not stretch, recolor or add glow filters to every icon. Accent glow should remain restrained.
