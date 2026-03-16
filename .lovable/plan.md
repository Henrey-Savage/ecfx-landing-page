

## Plan: Three Quick Conversion Wins

### 1. Remove Firm and Phone fields from hero form (HeroSection.tsx)
- Delete the "Firm / Company" and "Phone Number" form fields (lines 87-95)
- Remove `company` and `phone` from the form state object
- Keep: First Name, Last Name, Business Email, Number of Litigators

### 2. Add mid-page CTA below the 93% stat (ProblemSection.tsx)
- Add a "Schedule My Custom Demo" button after the FASTER · CHEAPER · ERROR-FREE line
- Button scrolls to `#demo-form`, styled with `bg-destructive` to match the existing CTA

### 3. Show header CTA on mobile (Header.tsx)
- Change `hidden md:inline-flex` to `inline-flex` so the button is visible on all screen sizes
- Reduce padding/font slightly on mobile for fit

