

## Plan: Mobile hero — form first, then headline

On mobile (<768px), reorder the hero so the form card appears immediately after the header, followed by the headline and copy. Desktop stays unchanged.

### Changes to `src/components/landing/HeroSection.tsx`

1. **Reorder with `flex-col` + `order`**: Change the grid container to use `flex flex-col` on mobile, `md:grid md:grid-cols-5` on desktop. Give the form div `order-1 md:order-2` and the copy div `order-2 md:order-1`.

2. **Reduce mobile top padding**: Change `pt-[110px]` to `pt-[90px]` on mobile so the form sits higher under the header.

3. **Reduce mobile gap**: Change `gap-10` to `gap-6` on mobile to tighten space between form and headline.

4. **Hide subtitle and feature bullets on mobile**: Add `hidden md:block` to the `<p>` subtitle and `<ul>` feature list so only the headline shows below the form on mobile. This keeps the fold tight.

No other files change. Desktop layout is unaffected.

