# Motion and interaction specification

## Global
- Use Framer Motion for component transitions and GSAP ScrollTrigger only for timelines that need scroll choreography.
- Use React Three Fiber for the main 3D environment; avoid stacking several independent animation engines on the same element.
- Keep motion smooth and spatial, not constantly busy.

## Timing
- Micro interaction: 160–220 ms, ease-out.
- UI reveal: 450–750 ms, cubic-bezier(0.22, 1, 0.36, 1).
- Section scene transition: 900–1400 ms.
- Ambient floating loop: 5–12 s.
- Portal rotation: 35–60 s.
- Stagger: 50–90 ms between sibling elements.

## Interaction map
- Cursor: fine-pointer only; soft violet halo, subtle magnetic attraction on primary CTA. Keep native cursor fallback.
- Scroll: progress indicator; reveal foreground / midground / background at different rates; sections should feel connected.
- Portal: pointer parallax, emissive pulse, scroll-linked rotation.
- Islands: subtle float and tilt; hover reveals destination title / preview.
- Project destinations: click / keyboard opens dedicated case-study route.
- Robot: idle hover, eye blink, head turn; reduced-motion static pose.
- Navigation: active-section indicator and compact mobile drawer.

## Accessibility and performance
- Respect prefers-reduced-motion.
- No motion-only information.
- Pause / simplify ambient motion on mobile and when page is not visible.
- Lazy-load non-hero models; compress textures; avoid expensive postprocessing on mobile.
