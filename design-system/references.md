# Reference image register

All images are PNG with RGBA color mode.

| ID | Uploaded filename | Dimensions | Aspect ratio | Main use |
|---|---|---:|---:|---|
| REF-01 | Yash Parmar’s Creative Portfolio Homepage(1).png | 1024 × 1536 | 2:3 | Compact long homepage, cream/pink base, clean section rhythm |
| REF-02 | Yash Parmar’s Futuristic Portfolio World(1).png | 1187 × 1325 | 0.896:1 | Floating world, seated creator, robot, portal, floating discipline labels |
| REF-03 | Yash Parmar_ Beyond Limits.png | 1536 × 1024 | 3:2 | Wide desktop hero and overall page mood |
| REF-04 | Yash Parmar’s Developer Universe(1).png | 1672 × 941 | 16:9 | Split editorial composition, world + project/service panels |
| REF-05 | Yash Parmar’s Digital Universe(1).png | 1672 × 941 | 16:9 | Wide immersive environment and connected page sections |
| REF-06 | Project Universe_ Neon Portfolio Hub.png | 1672 × 941 | 16:9 | Project archive page: floating islands as project destinations |
| REF-07 | Yash Parmar’s Neon Portfolio Universe(1).png | 1536 × 1024 | 3:2 | Main hero workstation, creator, portal, 25+ project strip and tool rail |

## Extracted representative palette

These are representative dominant colors sampled from downscaled / quantized versions of each image, not exact design-token declarations. Use them as reference anchors and refine against the original PNGs during visual implementation.

| Reference | Representative colors |
|---|---|
| REF-01 | `#FBF6F7` `#F9E9EB` `#FCF3F0` `#D8CEE3` `#5F4866` |
| REF-02 | `#EEE3F4` `#DAC3DF` `#DCD4ED` `#B0AAC9` `#5B445E` |
| REF-03 | `#F8EDFC` `#E5DDF9` `#C6CEF8` `#A6A8D7` `#56425B` |
| REF-04 | `#F4EBFD` `#D3C7E8` `#AFC0F2` `#8196D9` `#4C4158` |
| REF-05 | `#F1E8FD` `#D4D1F5` `#AEBBEF` `#7D93DE` `#474981` |
| REF-06 | `#F8DFEC` `#BE9CF2` `#8D90D3` `#6F6B9E` `#2E274E` |
| REF-07 | `#F6ECFE` `#DFD5F6` `#BCBBEB` `#7C86C2` `#373764` |

## Image handling
- Preserve original aspect ratio; never stretch.
- Use `object-fit: cover` only for intentional crops and document the focal point.
- For hero compositions, prefer authored layered assets / 3D rather than using a single flattened screenshot.
- Reference PNGs are visual targets, not production page backgrounds.
