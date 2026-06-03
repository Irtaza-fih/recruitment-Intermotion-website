import { Helmet } from "react-helmet-async";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useAppNavigate } from "@/hooks/useAppNavigate";
import PageHeroBanner from "@/components/PageHeroBanner";

export default function SalesPage() {
  const navigate = useAppNavigate();
  const ref = useScrollReveal();

  const title = "Sales Recruitment Bureau Nederland | Recruitment Intermotion";
  const description = "Op zoek naar een sales professional? Recruitment Intermotion is gespecialiseerd in sales recruitment in Nederland. Vaste en interim plaatsingen.";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="sales recruitment Nederland, accountmanager werving, sales director recruitment, business development manager, key account manager, commercieel directeur, interim sales specialist, Randstad, Noord-Brabant" />
        <link rel="canonical" href="https://recruitmentintermotion.nl/sales-recruitment" />
        <link rel="alternate" hrefLang="nl" href="https://recruitmentintermotion.nl/sales-recruitment" />
        <link rel="alternate" hrefLang="en" href="https://recruitmentintermotion.nl/sales-recruitment?lang=en" />
        <link rel="alternate" hrefLang="x-default" href="https://recruitmentintermotion.nl/sales-recruitment" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://recruitmentintermotion.nl/og-image.jpg" />
        <meta property="og:url" content="https://recruitmentintermotion.nl/sales-recruitment" />
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
        title="Sales Recruitment Bureau Nederland"
        subtitle="Wij vinden de sales professionals die uw organisatie verder brengen. Van accountmanager tot Sales Director — wij werven resultaatgerichte sales talenten voor bedrijven in de Randstad en Noord-Brabant."
      />

      <section className="py-24 bg-card">
        <div ref={ref} className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left column: Wat wij doen + Voor wie */}
          <div className="space-y-16">
            <div className="scroll-reveal">
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-6 leading-tight">
                Wat wij doen in Sales
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Wij recruteren voor functies zoals: <strong>Accountmanager</strong>, <strong>Sales Manager</strong>, <strong>Business Development Manager</strong>, <strong>Sales Director</strong>, <strong>Key Account Manager</strong>, en <strong>Commercieel Directeur</strong>.
              </p>
            </div>

            <div className="scroll-reveal">
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-6 leading-tight">
                Voor wie werven wij?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Wij werken met scale-ups, familiebedrijven en corporate organisaties die op zoek zijn naar bewezen sales talent dat direct impact maakt.
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
                Meer dan 15 jaar ervaring in sales recruitment. Wij kennen het verschil tussen een goede CV en een échte salesmentaliteit. Onze aanpak is persoonlijk, snel en gericht op resultaat.
              </p>
            </div>

            <div className="scroll-reveal liquid-gradient rounded-2xl p-8 text-primary-foreground">
              <h3 className="text-xl font-bold mb-4">Klaar om sales talent aan te trekken?</h3>
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
    </>
  );
}
