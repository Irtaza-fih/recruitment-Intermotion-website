

## Recruitment Intermotion — Complete React Website

### Overview
A pixel-faithful React recreation of the reference HTML site for Recruitment Intermotion, a Dutch recruitment agency. Four virtual pages with smooth page transitions, NL/EN language toggle, and rich animations.

### Architecture
- **Language context** — React context providing `lang` and `setLang`, driving all text via a centralized `translations.ts` object (NL/EN)
- **Page state** — React state managing active page (`home`, `about`, `vacancies`, `contact`) with gradient overlay transition component (~580ms scaleY animation)
- **Shared components** — Navbar, Footer, PartnersMarquee, TestimonialsCarousel, PageHeroBanner, CTABox reused across pages

### Assets
- Copy uploaded video (`happywork.m4v`) and logo SVG to project
- Copy `marijn.webp` founder photo to project
- Google Fonts: Syne (400–800)

### Color & Typography Setup
- Update `index.css` with the brand palette (navy #1F217D, accent #0199F8, bg #F7F9FF, etc.)
- Configure Syne font in Tailwind config
- Define gradient utility classes and CSS custom properties

### Pages & Sections

**1. Home Page**
- **Hero** — Full-viewport with `<video>` background (autoplay, muted, loop), dark overlay, floating cyan particles (CSS animation), centered logo + tagline + 2 CTAs, scroll indicator, logo scroll-away effect
- **Stats Strip** — Dark navy, 3 animated counters (15+, 3, 100%) triggered by IntersectionObserver
- **About Section** — Two-column: photo with gradient backdrop + floating badge | eyebrow + h2 with gradient `<em>` + paragraphs + blockquote + liquid-gradient CTA box
- **Services Section** — 3 cards with mouse-tracking glow, hover lift, "Meer informatie" opening modal popup with service details
- **Partners Marquee** — Infinite scrolling logo strip (placeholder tiles with partner names)
- **Testimonials Carousel** — 3 cards, prev/next arrows, dot nav, auto-advance every 5.5s
- **Vacancy CTA** — Gradient box with heading + buttons

**2. About Page**
- Page hero banner (gradient bg)
- Founder story section: photo of Marijn Schilder + bio text + CTA
- Partners Marquee (reused)
- Testimonials Carousel (reused)
- Vacancy CTA (reused)

**3. Vacancies Page**
- Page hero banner
- Grid of vacancy cards (Finance/IT/Sales) with discipline tags, location, type, descriptions

**4. Contact Page**
- Heading + subtext
- Two columns: contact details (email, phone, LinkedIn, WhatsApp) + CTA block | contact form
- Form: salutation radios, name fields, phone, email, company, LinkedIn, message, submit — all React controlled state, no `<form>` element

### Navigation
- Fixed 74px navbar with: logo (left), nav links (center), language toggle pill with flag icons + LinkedIn/WhatsApp icons + "Neem contact op" CTA (right)
- Home page: transparent when at top, solid white after 60px scroll; logo hidden at top
- Other pages: always solid white
- Active link highlighted in accent blue with underline
- Mobile: hamburger → full-screen drawer with arrow-suffixed links

### Footer
- Dark navy background, logo left, nav links center, copyright right with auto year

### Page Transitions
- Full-screen gradient overlay: scaleY(0→1) from bottom, then page swap, then scaleY(1→0) from top

### Animations & Interactions
- Scroll-reveal via IntersectionObserver (fade+slide in, staggered delays)
- Hero logo shrink+fly on scroll
- Stat counters animate 0→target with easing
- Card hover lift + enhanced shadow + blue border
- Mouse-tracking radial glow on service cards
- Button hover states (translateY, shadow changes)
- Particle animation (CSS keyframes)
- Partners marquee pause on hover

### Language Toggle
- All text driven by translation object with `nl` and `en` keys
- Full Dutch and English copy for every section (matching reference HTML exactly)
- Default: Dutch

