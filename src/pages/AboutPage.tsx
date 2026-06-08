import { Helmet } from "react-helmet-async";
import { useLang } from "@/lib/LanguageContext";
import { translations, t } from "@/lib/translations";
import PageHeroBanner from "@/components/PageHeroBanner";
import PartnersMarquee from "@/components/PartnersMarquee";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import VacancyCTA from "@/components/VacancyCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useAppNavigate } from "@/hooks/useAppNavigate";
import marijnImg from "@/assets/marijn-schilder-2.webp";

function renderTitle(html: string) {
  return html.replace(/<em>(.*?)<\/em>/g, '<span class="gradient-text">$1</span>');
}

export default function AboutPage() {
  const { lang } = useLang();
  const navigate = useAppNavigate();
  const ref = useScrollReveal();

  const title = lang === "nl" ? "Over Ons | Recruitment Intermotion — Finance, IT & Sales" : "About Us | Recruitment Intermotion — Finance, IT & Sales";
  const description = lang === "nl"
    ? "Leer Recruitment Intermotion kennen. Meer dan 15 jaar ervaring in recruitment voor Finance, IT en Sales in Nederland. Opgericht door Marijn Schilder."
    : "Meet Recruitment Intermotion. Over 15 years of recruitment experience in Finance, IT and Sales in the Netherlands. Founded by Marijn Schilder.";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="Marijn Schilder, recruitment bureau over ons, Recruitment Intermotion, Finance IT Sales werving" />
        <link rel="canonical" href="https://recruitmentintermotion.nl/over-ons" />
        <link rel="alternate" hrefLang="nl" href="https://recruitmentintermotion.nl/over-ons" />
        <link rel="alternate" hrefLang="en" href="https://recruitmentintermotion.nl/over-ons?lang=en" />
        <link rel="alternate" hrefLang="x-default" href="https://recruitmentintermotion.nl/over-ons" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={lang === "nl" ? "Leer Marijn Schilder kennen, oprichter van Recruitment Intermotion. Meer dan 15 jaar recruitmentervaring in Finance, IT en Sales." : "Meet Marijn Schilder, founder of Recruitment Intermotion. Over 15 years of recruitment experience in Finance, IT and Sales."} />
        <meta property="og:image" content="https://recruitmentintermotion.nl/og-image.jpg" />
        <meta property="og:url" content="https://recruitmentintermotion.nl/over-ons" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nl_NL" />
        <meta property="og:site_name" content="Recruitment Intermotion" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={lang === "nl" ? "Leer Marijn Schilder kennen, oprichter van Recruitment Intermotion." : "Meet Marijn Schilder, founder of Recruitment Intermotion."} />
        <meta name="twitter:image" content="https://recruitmentintermotion.nl/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "name": "Recruitment Intermotion",
              "url": "https://recruitmentintermotion.nl",
              "logo": "https://recruitmentintermotion.nl/logo.svg",
              "foundingDate": "2022",
              "founder": { "@type": "Person", "name": "Marijn Schilder" },
              "description": "Recruitment bureau gespecialiseerd in Finance, IT en Sales. Actief in de Randstad en Noord-Brabant.",
              "areaServed": "NL",
              "serviceType": ["Werving & Selectie", "Interim Recruitment", "RPO"],
              "email": "marijn@recruitmentintermotion.nl",
              "telephone": "+31642639962"
            },
            {
              "@type": "LocalBusiness",
              "name": "Recruitment Intermotion",
              "url": "https://recruitmentintermotion.nl",
              "telephone": "+31642639962",
              "email": "marijn@recruitmentintermotion.nl",
              "founder": { "@type": "Person", "name": "Marijn Schilder" },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Nieuwstraat 2",
                "postalCode": "4921 CX",
                "addressLocality": "Made",
                "addressRegion": "Noord-Brabant",
                "addressCountry": "NL"
              },
              "areaServed": ["Randstad", "Noord-Brabant", "Nederland"],
              "priceRange": "$$"
            }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Marijn Schilder",
          "jobTitle": "Founder",
          "worksFor": { "@type": "Organization", "name": "Recruitment Intermotion" },
          "url": "https://www.linkedin.com/in/marijnschilder/",
          "email": "marijn@recruitmentintermotion.nl",
          "telephone": "+31642639962",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Nieuwstraat 2",
            "postalCode": "4921 CX",
            "addressLocality": "Made",
            "addressRegion": "Noord-Brabant",
            "addressCountry": "NL"
          }
        })}</script>
      </Helmet>
      <PageHeroBanner
        title="Over Recruitment Intermotion"
        subtitle={t(translations.aboutPage.subtitle, lang)}
      />

      <section className="py-36 bg-card">
        <div ref={ref} className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Photo */}
          <div className="scroll-reveal relative">
            <div
              className="absolute -top-6 -left-6 w-full h-full rounded-2xl pointer-events-none"
              style={{ background: "linear-gradient(135deg, #1F217D, #0199F8)", opacity: 0.08 }}
            />
            <div className="absolute -top-4 -left-4 w-full h-full gradient-brand rounded-2xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src={marijnImg} alt="Marijn Schilder" className="w-full h-auto scale-110 origin-top-left" loading="lazy" width={600} height={750} />
            </div>
            <div className="absolute -bottom-4 -right-4 gradient-brand text-primary-foreground px-5 py-3 rounded-xl shadow-lg text-sm font-bold">
              {t(translations.about.badge, lang)}
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="scroll-reveal text-accent-blue text-sm font-bold uppercase tracking-wider mb-3">
              {t(translations.aboutPage.eyebrow, lang)}
            </div>
            <h2
              className="scroll-reveal text-3xl md:text-4xl font-extrabold text-foreground mb-6 leading-tight"
              dangerouslySetInnerHTML={{ __html: renderTitle(t(translations.aboutPage.heading, lang)) }}
            />
            <a
              href="https://www.linkedin.com/in/marijnschilder/"
              target="_blank"
              rel="noopener noreferrer"
              className="scroll-reveal flex items-center gap-2 mb-6 text-accent-blue hover:underline font-bold text-sm"
            >
              <svg width="20" height="20" fill="hsl(var(--accent-blue))" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              Marijn Schilder
            </a>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="scroll-reveal">{t(translations.aboutPage.bio1, lang)}</p>
              <p className="scroll-reveal">{t(translations.aboutPage.bio2, lang)}</p>
              <p className="scroll-reveal">{t(translations.aboutPage.bio3, lang)}</p>
            </div>

            <div className="scroll-reveal liquid-gradient rounded-2xl p-8 text-primary-foreground mt-8">
              <h3 className="text-xl font-bold mb-4">{t(translations.about.ctaTitle, lang)}</h3>
              <button
                onClick={() => navigate("/contact")}
                className="bg-primary-foreground text-primary px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                {t(translations.about.ctaButton, lang)}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Wie zijn wij? */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6 scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 leading-tight">
            Wie zijn wij?
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Recruitment Intermotion is een gespecialiseerd recruitmentbureau in Nederland, opgericht door Marijn Schilder. Wij verbinden ambitieuze bedrijven met de juiste professionals in Finance, IT en Sales. Met meer dan 15 jaar ervaring werken wij voor startups, scale-ups, familiebedrijven en corporate organisaties in de Randstad en Noord-Brabant.
          </p>
        </div>
      </section>

      {/* Onze aanpak */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-6 scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 leading-tight">
            Onze aanpak
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Wij geloven niet in een one-size-fits-all aanpak. Elk bedrijf is uniek, elke zoekopdracht is anders. Wij nemen de tijd om uw organisatie écht te begrijpen — de cultuur, de ambities, de uitdagingen. Zo vinden we niet alleen een kandidaat die de functie invult, maar iemand die écht past.
          </p>
        </div>
      </section>

      {/* Onze disciplines */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6 scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 leading-tight">
            Onze disciplines
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-6">
            Wij werven voor vaste en interim posities in:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-accent-blue font-bold text-lg mb-2">Finance</h3>
              <p className="text-muted-foreground text-sm">controllers, CFO&apos;s, finance managers, business controllers</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-accent-blue font-bold text-lg mb-2">IT</h3>
              <p className="text-muted-foreground text-sm">developers, IT managers, consultants, DevOps engineers</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-accent-blue font-bold text-lg mb-2">Sales</h3>
              <p className="text-muted-foreground text-sm">accountmanagers, sales managers, business developers, commercieel directeuren</p>
            </div>
          </div>
        </div>
      </section>

      <PartnersMarquee />
      <TestimonialsCarousel />
      <VacancyCTA />
    </>
  );
}
