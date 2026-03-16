

## Plan: Reduce space between Kristi P. attribution and blue curve

The current gap consists of the attribution's `marginBottom: 20px` plus the white wave SVG (80px tall). To tighten this:

1. **TestimonialSection.tsx**: Reduce the attribution `marginBottom` from `20px` to `8px`
2. **BenefitsSection.tsx**: Reduce the wave SVG height from `80px` to `50px` and update the viewBox accordingly

This will bring the total gap from ~100px down to ~58px, placing the attribution close to where the curve begins.

