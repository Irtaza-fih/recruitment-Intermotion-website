

## Accessibility Fixes Plan

Six groups of changes across four files. No visual changes.

### Files to Edit

**1. `src/components/TestimonialsCarousel.tsx`**
- Arrow buttons (lines 32, 39): add `aria-label="Vorige"` / `aria-label="Volgende"`, increase size from `w-10 h-10` to `w-11 h-11` (44px)
- Dot buttons (line 80): add `aria-label={`Testimonial ${i + 1}`}`, add `min-w-[44px] min-h-[44px]` wrapper or use padding to meet 44px touch target while keeping visual dot size
- Role text (line 74): change `rgba(255,255,255,0.45)` to `rgba(255,255,255,0.7)` for WCAG AA contrast

**2. `src/components/Navbar.tsx`**
- Language NL button (line 107): add `aria-label="Nederlands"`, add `min-w-[44px] min-h-[44px]`
- Language EN button (line 115): add `aria-label="English"`, add `min-w-[44px] min-h-[44px]`
- LinkedIn link (line 127): add `aria-label="LinkedIn"`, add `min-w-[44px] min-h-[44px]`
- WhatsApp link (line 135): add `aria-label="WhatsApp"`, add `min-w-[44px] min-h-[44px]`
- Hamburger button (line 155): add `aria-label={mobileOpen ? "Menu sluiten" : "Menu openen"}`

**3. `src/components/Footer.tsx`**
- Logo img (line 15): add `width={120} height={47}`
- LinkedIn link (line 21): add `aria-label="LinkedIn profiel Marijn Schilder"`, ensure 44px tap target
- WhatsApp link (line 30): add `aria-label="WhatsApp contact opnemen"`, ensure 44px tap target

**4. `src/components/Hero.tsx`**
- Video element (line 35): add `<track kind="captions" srclang="nl" label="Geen dialoog" default />` as child
- Nav logo img already has width/height — confirm and keep

