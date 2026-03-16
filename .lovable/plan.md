

# Visual Brand Refinement Plan

## 1. Hero Wave Divider (`HeroSection.tsx` + `Index.tsx`)
- Add `position: relative` and `pb-[80px]` to the hero `<section>`.
- Append an inline SVG inside the section (absolutely positioned at bottom) with the concave arc filled `#ffffff`.
- Remove the `<WaveDivider type="bottom" />` after `<HeroSection />` in `Index.tsx` since the new inline SVG replaces it.

## 2. Stats Cards (`ProblemSection.tsx`)
- Featured 93% card: change from dark `#0f172a` background to `rgba(26,86,219,0.06)` bg + `1px solid rgba(26,86,219,0.12)` border. Change number color from `text-success` to `text-[#1A56DB]`. Change label from `text-white/80` to `text-[#64748b]`.
- Smaller cards already have white bg + border — update border to `rgba(26,86,219,0.12)` for consistency. Add soft shadow.

## 3. Final CTA Section (`BenefitsSection.tsx` + `Index.tsx`)
- Change `BenefitsSection` background to match hero: `backgroundColor: "#2D8AE5"` with same `BG-1.jpg` image (already done — just confirm `backgroundPosition: "top center"`).
- Remove `<WaveDivider type="top" />` before `BenefitsSection` in `Index.tsx`.
- Add a top-curve SVG directly inside `BenefitsSection` (not absolutely positioned — sits in flow above content) with fill `#2D8AE5`.

## 4. Workflow Icon Containers (`ProblemSection.tsx`)
- Wrap each step icon in a 56×56 container with `bg-[rgba(26,86,219,0.08)]`, `rounded-[14px]`, centered icon. Change icon color from `text-destructive` to `text-[#1A56DB]`.

## 5. Card Shadows & Borders
- Hero form card: change shadow to `0 2px 8px rgba(0,0,0,0.06)`, ensure `rounded-xl` (12px).
- All stat cards: add `shadow-[0_2px_8px_rgba(0,0,0,0.06)]`.
- Smaller stat cards: ensure `rounded-[14px]` (already set).

## Files Modified
- `src/components/landing/HeroSection.tsx` — position relative, pb-80px, inline SVG wave, softer form shadow
- `src/components/landing/ProblemSection.tsx` — stat card colors, icon containers
- `src/components/landing/BenefitsSection.tsx` — top wave SVG, background alignment
- `src/pages/Index.tsx` — remove two WaveDivider components

