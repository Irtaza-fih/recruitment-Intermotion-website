

## Design Fixes — Match Original Reference (Including Nav Fix)

### Navigation (`Navbar.tsx`)
- Remove "Contact" from `navLinks` array — nav shows only: Home | Over ons | Vacatures
- Wrap LinkedIn + WhatsApp icons in a `<div>` with `gap-[0.1rem]`
- Change outer right-side container from `gap-3` to `gap-[0.6rem]`

### Hero (`Hero.tsx`)
- Remove subtitle text — keep only logo, tagline, 2 CTAs
- Reduce overlay to `bg-black/25` (no blue tint)
- Ensure particle animation renders
- Verify scroll indicator renders

### Services (`ServicesSection.tsx`, `translations.ts`)
- Rename to: "Recruitment", "Inhouse Recruitment", "Interim"
- Replace icons with numbered labels ("01", "02", "03") + animated horizontal bar on hover
- Mouse-follow glow + card hover lift (translateY -7px, shadow, blue border)
- Modal: backdrop blur(6px), remove × button, add blue-left-border blockquote on intro, footer with "Sluiten" outline + "Neem contact op" gradient button
- Pass `onNavigate` through for contact button

### Partners (`PartnersMarquee.tsx`)
- Replace text tiles with `<img>` logos from recruitmentintermotion.nl
- Add CSS `mask-image` fade on left/right edges
- Pause on hover (already exists)

### Testimonials (`TestimonialsCarousel.tsx`)
- Dark navy bg (#1F217D), glass cards (`rgba(255,255,255,0.06)`)
- Large decorative quote mark (opacity 0.22)
- White name, muted role (0.45), quote text (0.8)
- Names: Joost Meininger (KPN), Jan de Jonge (Brood van SOMA), Igor La Vos (Plastica Groep)
- Auto-rotate 5.5s, show on both Home and About

### About Section — Home (`AboutSection.tsx`)
- Use Marijn photo from external URL
- "15+ Jaar Ervaring" badge on bottom-right of photo
- Gradient accent shape behind photo (8% opacity)

### About Page (`AboutPage.tsx`)
- Dark navy hero banner
- "15+" badge on Marijn's photo

### Contact Page (`ContactPage.tsx`)
- Dark navy hero banner
- Neutral contact tiles: white bg (#F7F9FF), light border, dark navy icons
- Fix phone to "+31 6 42 63 99 62"

### Stats (`StatsStrip.tsx`)
- Gradient text (white → light blue) via `background-clip: text`

### Footer (`Footer.tsx`)
- White bg (#fff), light top border (#E5EAF5)
- Only: logo left, copyright center, LinkedIn + WhatsApp right — remove nav links
- Dark/muted text colors

### Global (`index.css`, `translations.ts`)
- Bold text in paragraphs: color #1F217D
- Section padding: 9rem top/bottom (`py-36`)
- Update all service names, testimonial names, phone number in translations

### Files Modified
| File | Key Changes |
|---|---|
| `Navbar.tsx` | Remove contact link, tighten icon spacing |
| `Hero.tsx` | Remove subtitle, reduce overlay |
| `ServicesSection.tsx` | Numbered labels, modal redesign with footer buttons |
| `PartnersMarquee.tsx` | Image logos, mask-image fade |
| `TestimonialsCarousel.tsx` | Dark navy theme, glass cards, updated names |
| `AboutSection.tsx` | Marijn photo, badge, accent shape |
| `StatsStrip.tsx` | Gradient text |
| `Footer.tsx` | White bg, simplified layout |
| `PageHeroBanner.tsx` | Dark navy style |
| `AboutPage.tsx` | Badge on photo |
| `ContactPage.tsx` | Hero banner, neutral tiles, phone fix |
| `HomePage.tsx` | Pass onNavigate to ServicesSection |
| `translations.ts` | Service names, testimonials, phone |
| `index.css` | Bold text color, section padding |

