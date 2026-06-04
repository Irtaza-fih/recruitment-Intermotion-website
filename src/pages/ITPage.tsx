import { Helmet } from "react-helmet-async";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useAppNavigate } from "@/hooks/useAppNavigate";
import PageHeroBanner from "@/components/PageHeroBanner";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function ITPage() {
  const navigate = useAppNavigate();
  const ref = useScrollReveal();

  const title = "IT Recruitment Bureau Nederland | Recruitment Intermotion";
  const description = "Op zoek naar een IT professional? Recruitment Intermotion is gespecialiseerd in IT recruitment in Nederland. Vaste en interim plaatsingen.";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="IT recruitment Nederland, software developer werving, IT manager recruitment, DevOps engineer, data analyst, cybersecurity specialist, interim IT consultant, Randstad, Noord-Brabant" />
        <link rel="canonical" href="https://recruitmentintermotion.nl/it-recruitment" />
        <link rel="alternate" hrefLang="nl" href="https://recruitmentintermotion.nl/it-recruitment" />
        <link rel="alternate" hrefLang="en" href="https://recruitmentintermotion.nl/it-recruitment?lang=en" />
        <link rel="alternate" hrefLang="x-default" href="https://recruitmentintermotion.nl/it-recruitment" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://recruitmentintermotion.nl/og-image.jpg" />
        <meta property="og:url" content="https://recruitmentintermotion.nl/it-recruitment" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nl_NL" />
        <meta property="og:site_name" content="Recruitment Intermotion" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
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
      </Helmet>

      <PageHeroBanner
        title="IT Recruitment Bureau Nederland"
        subtitle="Wij verbinden ambitieuze bedrijven met de beste IT professionals in Nederland. Van software developer tot IT Manager — wij werven zowel vaste als interim IT specialisten voor organisaties in de Randstad en Noord-Brabant."
      />

      <section className="py-24 bg-card">
        <div ref={ref} className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left column: Wat wij doen + Voor wie */}
          <div className="space-y-16">
            <div className="scroll-reveal">
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-6 leading-tight">
                Wat wij doen in IT
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Wij recruteren voor functies zoals: <strong>Software Developer</strong>, <strong>IT Manager</strong>, <strong>DevOps Engineer</strong>, <strong>Data Analyst</strong>, <strong>Cybersecurity Specialist</strong>, en <strong>Interim IT Consultant</strong>.
              </p>
            </div>

            <div className="scroll-reveal">
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-6 leading-tight">
                Voor wie werven wij?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Wij werken met startups, scale-ups, familiebedrijven en corporate organisaties die op zoek zijn naar IT talent op alle niveaus.
              </p>
            </div>
          </div>

          {/* Right column: Waarom + CTA */}
          <div className="space-y-8">
            <div className="scroll-reveal">
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-6 leading-tight">
                Waarom Recruitment Intermotion?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Meer dan 15 jaar ervaring in recruitment. Wij begrijpen de technische wereld en spreken de taal van zowel de hiring manager als de IT professional. Persoonlijk, snel en resultaatgericht.
              </p>
            </div>

            <div className="scroll-reveal liquid-gradient rounded-2xl p-8 text-primary-foreground">
              <h3 className="text-xl font-bold mb-4">Klaar om IT talent aan te trekken?</h3>
              <button
                onClick={() => navigate("/contact")}
                className="bg-primary-foreground text-primary px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                Neem contact op →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-20 bg-bg-tint">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-10">
            Ook interessant
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <button
              onClick={() => navigate("/finance-recruitment")}
              className="text-left bg-card rounded-2xl border border-border p-8 transition-all duration-300 hover:-translate-y-[7px] hover:shadow-xl hover:border-accent-blue group"
            >
              <span className="inline-block gradient-brand text-primary-foreground text-xs font-bold px-3 py-1 rounded-full mb-4">
                Finance
              </span>
              <h3 className="text-xl font-bold text-foreground mb-3">Finance Recruitment</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Van financial controller tot CFO — wij werven de beste finance professionals voor vaste en interim functies.
              </p>
              <span className="text-accent-blue text-sm font-semibold group-hover:underline">
                Bekijk Finance →
              </span>
            </button>
            <button
              onClick={() => navigate("/interim")}
              className="text-left bg-card rounded-2xl border border-border p-8 transition-all duration-300 hover:-translate-y-[7px] hover:shadow-xl hover:border-accent-blue group"
            >
              <span className="inline-block gradient-brand text-primary-foreground text-xs font-bold px-3 py-1 rounded-full mb-4">
                Interim
              </span>
              <h3 className="text-xl font-bold text-foreground mb-3">Interim Professionals</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Snel een gekwalificeerde interim specialist inzetten? Wij leveren flexibele oplossingen in Finance, IT en Sales.
              </p>
              <span className="text-accent-blue text-sm font-semibold group-hover:underline">
                Bekijk Interim →
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
