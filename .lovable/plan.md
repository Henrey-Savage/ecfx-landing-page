

# Consistent Downward-Bowing Wave Dividers

## Summary
Add consistent downward-bowing SVG wave dividers at the bottom of every section, each filling the color of the section below. Fix the hero wave direction and the CTA top curve.

## Changes

### 1. Hero wave (`HeroSection.tsx`, line 104-105)
Fix path direction from concave (bowing up) to convex (bowing down):
- Path: `M0,0 C360,80 1080,80 1440,0 L1440,80 L0,80 Z`
- Fill: `hsl(var(--background))` (white, matching SocialProof below)
- Add `marginBottom: -1px` to prevent gap

### 2. SocialProof wave (`SocialProof.tsx`)
- Add `relative` to the `<section>`
- Append an absolutely-positioned SVG at bottom, 80px tall
- Path: same downward arc
- Fill: `hsl(var(--surface))` (matching ProblemSection's `bg-surface`)
- Add bottom padding (~80px) to make room
- `marginBottom: -1px`

### 3. ProblemSection wave (`ProblemSection.tsx`)
- Add `relative` to the `<section>`
- Append absolutely-positioned SVG at bottom
- Fill: `hsl(var(--background))` (matching TestimonialSection's `bg-background`)
- Add bottom padding (~80px)
- `marginBottom: -1px`

### 4. TestimonialSection wave (`TestimonialSection.tsx`)
- Add `relative` to the `<section>`, remove `border-t border-border`
- Append absolutely-positioned SVG at bottom
- Fill: `#2D8AE5` (matching BenefitsSection's blue gradient)
- Add bottom padding (~80px)
- `marginBottom: -1px`

### 5. BenefitsSection top curve (`BenefitsSection.tsx`, line 41-42)
The existing top curve already bows downward (`M0,0 C360,80 1080,80 1440,0`). **Remove it entirely** — the wave now lives at the bottom of TestimonialSection instead, eliminating the duplicate/gap issue.

### Files Modified
- `src/components/landing/HeroSection.tsx` — fix wave path direction
- `src/components/landing/SocialProof.tsx` — add relative + wave SVG + padding
- `src/components/landing/ProblemSection.tsx` — add relative + wave SVG + padding
- `src/components/landing/TestimonialSection.tsx` — add relative + wave SVG + padding, remove border
- `src/components/landing/BenefitsSection.tsx` — remove top curve SVG

