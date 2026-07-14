import { Helmet } from "react-helmet-async";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useAppNavigate } from "@/hooks/useAppNavigate";
import { useLang } from "@/lib/LanguageContext";
import PageHeroBanner from "@/components/PageHeroBanner";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function SalesPage() {
  const navigate = useAppNavigate();
  const ref = useScrollReveal();
  const { lang } = useLang();

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
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Hoe vind ik een goede sales professional in Nederland?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "De beste sales professionals zijn vaak passief beschikbaar — ze zoeken niet actief maar staan wel open voor de juiste kans. Een gespecialiseerd sales recruitment bureau heeft toegang tot dit passieve netwerk en benadert kandidaten gericht."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Wat maakt een goede sales recruiter?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Een goede sales recruiter begrijpt het verschil tussen iemand die goed kan praten en iemand die écht kan verkopen. Hij beoordeelt kandidaten op drijfveren, werkstijl en cultuurfit — niet alleen op cv en trackrecord."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Kan ik ook tijdelijk een sales professional inzetten?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ja. Via interim sales recruitment kunt u snel een ervaren sales professional inzetten voor een tijdelijke opdracht, product launch of overbruggingsperiode. Recruitment Intermotion levert interim sales specialisten die direct inzetbaar zijn."
                  }
                }
              ]
            }
          ]
        })}</script>
      </Helmet>

      <PageHeroBanner
        title={lang === "nl" ? "Sales Recruitment Bureau Nederland" : "Sales Recruitment Agency Netherlands"}
        subtitle={lang === "nl"
          ? "Wij vinden de sales professionals die uw organisatie verder brengen. Van accountmanager tot Sales Director — wij werven resultaatgerichte sales talenten voor bedrijven in de Randstad en Noord-Brabant."
          : "We find the sales professionals who drive your organisation forward. From account manager to Sales Director — we recruit results-driven sales talent for companies across the Randstad and Noord-Brabant."}
      />

      <section className="py-24 bg-card">
        <div ref={ref} className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left column: Wat wij doen + Voor wie */}
          <div className="space-y-16">
            <div className="scroll-reveal">
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-6 leading-tight">
                {lang === "nl" ? "Wat wij doen in Sales" : "What we do in Sales"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {lang === "nl" ? (
                  <>Wij recruteren voor functies zoals: <strong>Accountmanager</strong>, <strong>Sales Manager</strong>, <strong>Business Development Manager</strong>, <strong>Sales Director</strong>, <strong>Key Account Manager</strong>, en <strong>Commercieel Directeur</strong>.</>
                ) : (
                  <>We recruit for roles such as: <strong>Account Manager</strong>, <strong>Sales Manager</strong>, <strong>Business Development Manager</strong>, <strong>Sales Director</strong>, <strong>Key Account Manager</strong>, and <strong>Commercial Director</strong>.</>
                )}
              </p>
            </div>

            <div className="scroll-reveal">
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-6 leading-tight">
                {lang === "nl" ? "Voor wie werven wij?" : "Who do we recruit for?"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {lang === "nl"
                  ? "Wij werken met scale-ups, familiebedrijven en corporate organisaties die op zoek zijn naar bewezen sales talent dat direct impact maakt."
                  : "We work with scale-ups, family businesses and corporate organisations looking for proven sales talent that makes an immediate impact."}
              </p>
            </div>
          </div>

          {/* Right column: Waarom + CTA */}
          <div className="space-y-8">
            <div className="scroll-reveal">
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-6 leading-tight">
                {lang === "nl" ? "Waarom Recruitment Intermotion?" : "Why Recruitment Intermotion?"}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {lang === "nl"
                  ? "Meer dan 15 jaar ervaring in sales recruitment. Wij kennen het verschil tussen een goede CV en een échte salesmentaliteit. Onze aanpak is persoonlijk, snel en gericht op resultaat."
                  : "More than 15 years of experience in sales recruitment. We know the difference between a good CV and a true sales mentality. Our approach is personal, fast and results-focused."}
              </p>
            </div>

            <div className="scroll-reveal liquid-gradient rounded-2xl p-8 text-primary-foreground">
              <h3 className="text-xl font-bold mb-4">
                {lang === "nl" ? "Klaar om sales talent aan te trekken?" : "Ready to attract sales talent?"}
              </h3>
              <button
                onClick={() => navigate("/contact")}
                className="bg-primary-foreground text-primary px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                {lang === "nl" ? "Neem contact op →" : "Get in touch →"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-card">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-10">
            {lang === "nl" ? "Veelgestelde vragen" : "Frequently asked questions"}
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="faq-1" className="border border-border rounded-xl px-6 mb-4 bg-bg-tint">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                {lang === "nl" ? "Hoe vind ik een goede sales professional in Nederland?" : "How do I find a good sales professional in the Netherlands?"}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {lang === "nl"
                  ? "De beste sales professionals zijn vaak passief beschikbaar — ze zoeken niet actief maar staan wel open voor de juiste kans. Een gespecialiseerd sales recruitment bureau heeft toegang tot dit passieve netwerk en benadert kandidaten gericht."
                  : "The best sales professionals are often passively available — they are not actively looking but are open to the right opportunity. A specialised sales recruitment agency has access to this passive network and approaches candidates in a targeted way."}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-2" className="border border-border rounded-xl px-6 mb-4 bg-bg-tint">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                {lang === "nl" ? "Wat maakt een goede sales recruiter?" : "What makes a good sales recruiter?"}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {lang === "nl"
                  ? "Een goede sales recruiter begrijpt het verschil tussen iemand die goed kan praten en iemand die écht kan verkopen. Hij beoordeelt kandidaten op drijfveren, werkstijl en cultuurfit — niet alleen op cv en trackrecord."
                  : "A good sales recruiter understands the difference between someone who talks well and someone who can truly sell. They assess candidates on motivation, working style and cultural fit — not just their CV and track record."}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-3" className="border border-border rounded-xl px-6 mb-4 bg-bg-tint">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                {lang === "nl" ? "Kan ik ook tijdelijk een sales professional inzetten?" : "Can I also hire a sales professional on a temporary basis?"}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {lang === "nl"
                  ? "Ja. Via interim sales recruitment kunt u snel een ervaren sales professional inzetten voor een tijdelijke opdracht, product launch of overbruggingsperiode. Recruitment Intermotion levert interim sales specialisten die direct inzetbaar zijn."
                  : "Yes. Through interim sales recruitment you can quickly deploy an experienced sales professional for a temporary assignment, product launch or transition period. Recruitment Intermotion provides interim sales specialists who are immediately available."}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Related services */}
      <section className="py-20 bg-bg-tint">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-10">
            {lang === "nl" ? "Ook interessant" : "Also interesting"}
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
                {lang === "nl"
                  ? "Van financial controller tot CFO — wij werven de beste finance professionals voor vaste en interim functies."
                  : "From financial controller to CFO — we recruit the best finance professionals for permanent and interim roles."}
              </p>
              <span className="text-accent-blue text-sm font-semibold group-hover:underline">
                {lang === "nl" ? "Bekijk Finance →" : "View Finance →"}
              </span>
            </button>
            <button
              onClick={() => navigate("/it-recruitment")}
              className="text-left bg-card rounded-2xl border border-border p-8 transition-all duration-300 hover:-translate-y-[7px] hover:shadow-xl hover:border-accent-blue group"
            >
              <span className="inline-block gradient-brand text-primary-foreground text-xs font-bold px-3 py-1 rounded-full mb-4">
                IT
              </span>
              <h3 className="text-xl font-bold text-foreground mb-3">IT Recruitment</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {lang === "nl"
                  ? "Van software developer tot IT Manager — wij verbinden bedrijven met de beste IT professionals."
                  : "From software developer to IT Manager — we connect companies with the best IT professionals."}
              </p>
              <span className="text-accent-blue text-sm font-semibold group-hover:underline">
                {lang === "nl" ? "Bekijk IT →" : "View IT →"}
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
