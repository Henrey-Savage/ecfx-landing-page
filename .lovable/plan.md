

## Plan: Redesign ProblemSection — Simplified Layout with New Stat Cards

### Changes

**File: `src/components/landing/ProblemSection.tsx`** — Rewrite

- Remove the `steps` array, the lucide icon imports, the "Every ECF notice..." paragraphs, and the 3-step workflow grid entirely.
- **Left column (55%)**: Keep only the headline and the Tara Eberhart blockquote.
- **Right column (45%)**: Replace existing stat cards with 3 vertically stacked cards (12px gap), each left-aligned with:
  - White bg, `border: 1px solid rgba(26,86,219,0.1)`, `border-radius: 12px`, `padding: 20px 24px`, `box-shadow: 0 2px 8px rgba(0,0,0,0.04)`
  - Green uppercase tag (11px, weight 600, `#10b981`): CHEAPER / FASTER / BETTER
  - Large number (36px, weight 700, `#1A56DB`): 93% / <5s / 10x
  - Gray label (13px, `#64748b`)
- **Below the grid**: Centered tagline "Better. Faster. Cheaper. Pick three." — 18px, weight 600, `#1A56DB`, margin-top 32px.
- **Mobile (<768px)**: Columns stack vertically (headline+quote first, then full-width stat cards). Tagline remains centered.
- Keep the existing bottom wave SVG unchanged.

**File: `src/pages/Index.tsx`** — No changes.

No new files created. No HowItWorksSection.

