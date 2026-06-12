import { Helmet } from "react-helmet-async";
import PageHeroBanner from "@/components/PageHeroBanner";

export default function AboutBrandPage() {
  const title = "Over Recruitment Intermotion — Bedrijfsprofiel";
  const description = "Recruitment Intermotion is een Nederlands recruitmentbureau gespecialiseerd in Finance, IT en Sales. Opgericht door Marijn Schilder. Actief in de Randstad en Noord-Brabant.";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://recruitmentintermotion.nl/over-recruitment-intermotion" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://recruitmentintermotion.nl/over-recruitment-intermotion" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nl_NL" />
        <meta property="og:site_name" content="Recruitment Intermotion" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://recruitmentintermotion.nl/#organization",
                "name": "Recruitment Intermotion",
                "url": "https://recruitmentintermotion.nl",
                "logo": "https://recruitmentintermotion.nl/logo.svg",
                "foundingDate": "2022",
                "founder": {
                  "@type": "Person",
                  "name": "Marijn Schilder"
                },
                "description": "Recruitment Intermotion is een gespecialiseerd recruitmentbureau in Nederland, opgericht door Marijn Schilder. Wij verbinden ambitieuze bedrijven met de juiste professionals in Finance, IT en Sales.",
                "areaServed": "NL",
                "sameAs": [
                  "https://www.linkedin.com/company/recruitment-intermotion"
                ]
              },
              {
                "@type": "Person",
                "@id": "https://recruitmentintermotion.nl/#founder",
                "name": "Marijn Schilder",
                "jobTitle": "Founder",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Recruitment Intermotion",
                  "url": "https://recruitmentintermotion.nl"
                },
                "url": "https://www.linkedin.com/in/marijnschilder/",
                "sameAs": [
                  "https://www.linkedin.com/in/marijnschilder/"
                ]
              }
            ]
          })}
        </script>
      </Helmet>

      <PageHeroBanner
        title="Recruitment Intermotion — Bedrijfsprofiel"
        subtitle="Bedrijfsinformatie en achtergrond van Recruitment Intermotion"
      />

      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose max-w-none text-foreground space-y-12">
            
            {/* Section: Over het bedrijf */}
            <div className="border-b border-border pb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1F217D" }}>
                Over het bedrijf
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                Recruitment Intermotion is een gespecialiseerd recruitmentbureau in Nederland, opgericht in 2022 door Marijn Schilder. Het bureau verbindt bedrijven met professionals in Finance, IT en Sales, voor zowel vaste als interim posities.
              </p>
            </div>

            {/* Section: Oprichter */}
            <div className="border-b border-border pb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1F217D" }}>
                Oprichter
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base mb-4">
                Recruitment Intermotion is opgericht door Marijn Schilder, een recruiter met meer dan 15 jaar ervaring in de Nederlandse arbeidsmarkt. Marijn heeft eerder gewerkt voor en met organisaties als Hays, BDO Advisory en KPN.
              </p>
              <p className="text-base font-semibold">
                LinkedIn:{" "}
                <a 
                  href="https://linkedin.com/in/marijnschilder/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline transition-all"
                  style={{ color: "#0199F8" }}
                >
                  linkedin.com/in/marijnschilder/
                </a>
              </p>
            </div>

            {/* Section: Diensten */}
            <div className="border-b border-border pb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1F217D" }}>
                Diensten
              </h2>
              <ul className="space-y-4 list-none pl-0">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#0199F8" }}></span>
                  <div>
                    <strong className="block text-foreground" style={{ color: "#1F217D" }}>Recruitment:</strong>
                    <span className="text-muted-foreground">werving en selectie voor vaste posities in Finance, IT en Sales</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#0199F8" }}></span>
                  <div>
                    <strong className="block text-foreground" style={{ color: "#1F217D" }}>In-house Recruitment:</strong>
                    <span className="text-muted-foreground">geïntegreerde recruitmentoplossingen ingebouwd in de organisatie van de opdrachtgever</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#0199F8" }}></span>
                  <div>
                    <strong className="block text-foreground" style={{ color: "#1F217D" }}>Interim:</strong>
                    <span className="text-muted-foreground">plaatsing van tijdelijke professionals in Finance, IT en Sales</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Section: Werkgebied */}
            <div className="border-b border-border pb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1F217D" }}>
                Werkgebied
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                Recruitment Intermotion is actief in heel Nederland, met een focus op de Randstad en Noord-Brabant. Het bureau bedient zowel Nederlandstalige als Engelstalige organisaties.
              </p>
            </div>

            {/* Section: Kerngegevens */}
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: "#1F217D" }}>
                Kerngegevens
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-muted/30 p-6 rounded-2xl border border-border">
                <div>
                  <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">Opgericht</span>
                  <span className="text-base font-semibold">2022</span>
                </div>
                <div>
                  <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">Oprichter</span>
                  <span className="text-base font-semibold">Marijn Schilder</span>
                </div>
                <div>
                  <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">Specialisaties</span>
                  <span className="text-base font-semibold">Finance, IT, Sales</span>
                </div>
                <div>
                  <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">Werkgebied</span>
                  <span className="text-base font-semibold">Nederland (Randstad en Noord-Brabant)</span>
                </div>
                <div>
                  <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">Website</span>
                  <a 
                    href="https://recruitmentintermotion.nl" 
                    className="text-base font-semibold hover:underline"
                    style={{ color: "#0199F8" }}
                  >
                    https://recruitmentintermotion.nl
                  </a>
                </div>
                <div>
                  <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">LinkedIn</span>
                  <a 
                    href="https://www.linkedin.com/company/recruitment-intermotion" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-base font-semibold hover:underline"
                    style={{ color: "#0199F8" }}
                  >
                    company/recruitment-intermotion
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
