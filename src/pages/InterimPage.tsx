import { Helmet } from "react-helmet-async";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useAppNavigate } from "@/hooks/useAppNavigate";
import PageHeroBanner from "@/components/PageHeroBanner";

export default function InterimPage() {
  const navigate = useAppNavigate();
  const ref = useScrollReveal();

  const title = "Interim Professionals Nederland | Recruitment Intermotion";
  const description = "Snel een interim professional nodig? Recruitment Intermotion levert gekwalificeerde interim specialisten in Finance, IT en Sales in Nederland.";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="interim professionals Nederland, interim recruitment, interim finance manager, interim controller, interim IT consultant, interim sales manager, interim CFO, interim specialist, Randstad, Noord-Brabant" />
        <link rel="canonical" href="https://recruitmentintermotion.nl/interim" />
        <link rel="alternate" hrefLang="nl" href="https://recruitmentintermotion.nl/interim" />
        <link rel="alternate" hrefLang="en" href="https://recruitmentintermotion.nl/interim?lang=en" />
        <link rel="alternate" hrefLang="x-default" href="https://recruitmentintermotion.nl/interim" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://recruitmentintermotion.nl/og-image.jpg" />
        <meta property="og:url" content="https://recruitmentintermotion.nl/interim" />
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
        title="Interim Professionals Nederland"
        subtitle="Snel de juiste interim professional inzetten? Wij leveren gekwalificeerde interim specialisten in Finance, IT en Sales — flexibel, snel en op maat voor uw organisatie in de Randstad en Noord-Brabant."
      />

      <section className="py-24 bg-card">
        <div ref={ref} className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left column: Wat is interim + Voor welke functies */}
          <div className="space-y-16">
            <div className="scroll-reveal">
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-6 leading-tight">
                Wat is interim recruitment?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Interim recruitment is het snel inzetten van een tijdelijke professional voor een specifieke opdracht, project of overbruggingsperiode. Wij regelen het van A tot Z.
              </p>
            </div>

            <div className="scroll-reveal">
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-6 leading-tight">
                Voor welke functies?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Wij leveren interim professionals voor functies zoals: <strong>Interim Finance Manager</strong>, <strong>Interim Controller</strong>, <strong>Interim IT Consultant</strong>, <strong>Interim Sales Manager</strong>, en <strong>Interim CFO</strong>.
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
                Wij hebben een breed netwerk van beschikbare interim professionals. Snelle schakeling, persoonlijke begeleiding en meer dan 15 jaar ervaring in interim plaatsingen.
              </p>
            </div>

            <div className="scroll-reveal liquid-gradient rounded-2xl p-8 text-primary-foreground">
              <h3 className="text-xl font-bold mb-4">Klaar om een interim professional in te zetten?</h3>
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
