# Visual QA checklist — mandatory before merge / release

## Identity consistency
- [ ] Yash avatar face, hair, skin tone, outfit and proportions match YASH-01.
- [ ] Robot shell, head/body ratio, face panel and cyan eyes match ROBOT-01.
- [ ] Portal geometry, YP mark and emissive colors match PORTAL-01.
- [ ] All scenes use the same world material and lighting language.

## Reference fidelity
- [ ] Compare screenshot against the matching approved mockup at the same viewport.
- [ ] Main composition, focal point, spacing and hierarchy are preserved.
- [ ] Color values come from design tokens; no arbitrary one-off colors.
- [ ] No missing, stretched, blurry or incorrectly cropped artwork.
- [ ] Real copy is DOM text and remains readable.

## Responsive
- [ ] 360 / 390 px mobile
- [ ] 768 px tablet
- [ ] 1024 px small desktop
- [ ] 1280 / 1440 / 1920 px desktop
- [ ] No horizontal overflow, clipped navigation or inaccessible hover-only actions.

## Motion and accessibility
- [ ] Reduced-motion mode is usable.
- [ ] Keyboard focus is visible; dialogs and menus are keyboard accessible.
- [ ] No essential information appears only during animation.
- [ ] WebGL failure has a graceful static fallback.
- [ ] Touch devices do not depend on hover.

## Performance
- [ ] Hero asset prioritized; below-fold models lazy-loaded.
- [ ] GLB and textures compressed; mobile DPR capped.
- [ ] No avoidable layout shift; images have dimensions / aspect ratios.
- [ ] Test production build and inspect browser console.

Do not mark an item verified unless it has actually been tested.
