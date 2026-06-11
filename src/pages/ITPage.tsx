import { Helmet } from "react-helmet-async";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useAppNavigate } from "@/hooks/useAppNavigate";
import { useLang } from "@/lib/LanguageContext";
import PageHeroBanner from "@/components/PageHeroBanner";
import { successStories } from "@/data/successStories";
import SuccessStoryCard from "@/components/SuccessStoryCard";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function ITPage() {
  const navigate = useAppNavigate();
  const ref = useScrollReveal();
  const { lang } = useLang();
  const brightlyn = successStories.find((s) => s.slug === "brightlyn");

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
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Wat doet een IT recruitment bureau?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Een IT recruitment bureau zoekt en selecteert gekwalificeerde IT professionals voor bedrijven. Van software developer tot IT manager — het bureau beheert het volledige wervingsproces en heeft toegang tot passief IT talent dat niet actief op zoek is."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Hoe vind ik een goede IT professional in Nederland?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "IT talent is schaars in Nederland. De beste aanpak is via een gespecialiseerd IT recruitment bureau met een actief netwerk. Zij bereiken professionals die niet reageren op vacatures maar wel openstaan voor de juiste uitdaging."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Hoe snel kan ik een IT professional inzetten?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Bij interim IT opdrachten kan Recruitment Intermotion vaak binnen 48 tot 72 uur de eerste kandidaten presenteren. Voor vaste posities duurt het gemiddelde traject vier tot acht weken."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Wat verdient een IT-recruiter in Nederland?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Een IT-recruiter in Nederland verdient gemiddeld tussen €3.000 en €5.500 per maand, afhankelijk van ervaring en specialisatie. Senior IT-recruiters of zelfstandigen met een sterk netwerk kunnen aanzienlijk meer verdienen via bonussen of uurtarieven."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is er verschil tussen ICT en IT?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ICT (Informatie- en Communicatietechnologie) is de bredere term die ook communicatietechnologie omvat, zoals netwerken en telecommunicatie. IT (Informatie Technologie) richt zich specifiek op computersystemen en software. In recruitment worden beide termen vaak door elkaar gebruikt."
                  }
                }
              ]
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

      {/* FAQ */}
      <section className="py-20 bg-card">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-10">
            Veelgestelde vragen
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="faq-1" className="border border-border rounded-xl px-6 mb-4 bg-bg-tint">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                Wat doet een IT recruitment bureau?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Een IT recruitment bureau zoekt en selecteert gekwalificeerde IT professionals voor bedrijven. Van software developer tot IT manager — het bureau beheert het volledige wervingsproces en heeft toegang tot passief IT talent dat niet actief op zoek is.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-2" className="border border-border rounded-xl px-6 mb-4 bg-bg-tint">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                Hoe vind ik een goede IT professional in Nederland?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                IT talent is schaars in Nederland. De beste aanpak is via een gespecialiseerd IT recruitment bureau met een actief netwerk. Zij bereiken professionals die niet reageren op vacatures maar wel openstaan voor de juiste uitdaging.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-3" className="border border-border rounded-xl px-6 mb-4 bg-bg-tint">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                Hoe snel kan ik een IT professional inzetten?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Bij interim IT opdrachten kan Recruitment Intermotion vaak binnen 48 tot 72 uur de eerste kandidaten presenteren. Voor vaste posities duurt het gemiddelde traject vier tot acht weken.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-4" className="border border-border rounded-xl px-6 mb-4 bg-bg-tint">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                Wat verdient een IT-recruiter in Nederland?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Een IT-recruiter in Nederland verdient gemiddeld tussen €3.000 en €5.500 per maand, afhankelijk van ervaring en specialisatie. Senior IT-recruiters of zelfstandigen met een sterk netwerk kunnen aanzienlijk meer verdienen via bonussen of uurtarieven.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-5" className="border border-border rounded-xl px-6 mb-4 bg-bg-tint">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                Is er verschil tussen ICT en IT?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                ICT (Informatie- en Communicatietechnologie) is de bredere term die ook communicatietechnologie omvat, zoals netwerken en telecommunicatie. IT (Informatie Technologie) richt zich specifiek op computersystemen en software. In recruitment worden beide termen vaak door elkaar gebruikt.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Success story teaser */}
      {brightlyn && (
        <section className="py-20 bg-card border-t border-border">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-accent-blue mb-3">
              {lang === "nl" ? "SUCCESVERHAAL" : "SUCCESS STORY"}
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-10">
              {lang === "nl" ? "Zo werkten wij voor Brightlyn" : "How we worked for Brightlyn"}
            </h2>
            <SuccessStoryCard story={brightlyn} className="mx-auto max-w-[500px]" />
          </div>
        </section>
      )}

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
