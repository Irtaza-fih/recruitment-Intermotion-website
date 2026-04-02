import { Helmet } from "react-helmet-async";
import { useLang } from "@/lib/LanguageContext";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PartnersMarquee from "@/components/PartnersMarquee";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import VacancyCTA from "@/components/VacancyCTA";

export default function HomePage() {
  const { lang } = useLang();

  const title = lang === "nl"
    ? "Recruitment Intermotion – Finance, IT & Sales Werving Nederland"
    : "Recruitment Intermotion – Finance, IT & Sales Recruitment Netherlands";

  const description = lang === "nl"
    ? "Wij verbinden ambitieuze bedrijven met de juiste professionals in Finance, IT en Sales. Meer dan 15 jaar ervaring. Actief in de Randstad en Noord-Brabant."
    : "We connect ambitious companies with the right professionals in Finance, IT and Sales. Over 15 years of experience. Active in the Randstad and Noord-Brabant.";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="recruitment bureau Nederland, werving en selectie Finance, IT recruitment, Sales recruitment, interim recruitment, RPO, Randstad, Noord-Brabant" />
        <link rel="canonical" href="https://recruitmentintermotion.nl/" />
        <link rel="alternate" hrefLang="nl" href="https://recruitmentintermotion.nl/" />
        <link rel="alternate" hrefLang="en" href="https://recruitmentintermotion.nl/?lang=en" />
        <link rel="alternate" hrefLang="x-default" href="https://recruitmentintermotion.nl/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://recruitmentintermotion.nl/og-image.jpg" />
        <meta property="og:url" content="https://recruitmentintermotion.nl/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nl_NL" />
        <meta property="og:site_name" content="Recruitment Intermotion" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={lang === "nl" ? "Wij verbinden ambitieuze bedrijven met de juiste professionals in Finance, IT en Sales." : "We connect ambitious companies with the right professionals in Finance, IT and Sales."} />
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
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "Wat doet Recruitment Intermotion?", "acceptedAnswer": { "@type": "Answer", "text": "Recruitment Intermotion is een recruitment bureau gespecialiseerd in Finance, IT en Sales, actief in de Randstad en Noord-Brabant. Wij verbinden ambitieuze bedrijven met de juiste professionals voor vaste en interim functies." } },
            { "@type": "Question", "name": "Wat is fractional recruitment?", "acceptedAnswer": { "@type": "Answer", "text": "Fractional recruitment betekent een flexibele recruiter die inzetbaar is vanaf 8 uur per week, zonder verplichting tot een fulltime of langdurige samenwerking. Ideaal voor organisaties die recruitmentondersteuning nodig hebben zonder een vaste aanstelling." } },
            { "@type": "Question", "name": "In welke regio's is Recruitment Intermotion actief?", "acceptedAnswer": { "@type": "Answer", "text": "Wij bedienen opdrachtgevers door heel Nederland, met een focus op de Randstad en Noord-Brabant." } },
            { "@type": "Question", "name": "Voor welke disciplines werft Recruitment Intermotion?", "acceptedAnswer": { "@type": "Answer", "text": "Wij werven voor Finance, IT en Sales — zowel voor vaste functies als interim opdrachten." } },
            { "@type": "Question", "name": "Hoe kan ik contact opnemen met Recruitment Intermotion?", "acceptedAnswer": { "@type": "Answer", "text": "U kunt contact opnemen via e-mail: marijn@recruitmentintermotion.nl, telefonisch via +31642639962, of via het contactformulier op onze website." } }
          ]
        })}</script>
      </Helmet>
      <Hero />
      <StatsStrip />
      <AboutSection />
      <ServicesSection />
      <PartnersMarquee />
      <TestimonialsCarousel />
      <VacancyCTA />
    </>
  );
}
