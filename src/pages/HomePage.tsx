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
  return (
    <>
      <Helmet>
        <title>
          {lang === "nl"
            ? "Recruitment Intermotion – Finance, IT & Sales Werving Nederland"
            : "Recruitment Intermotion – Finance, IT & Sales Recruitment Netherlands"}
        </title>
        <meta
          name="description"
          content={
            lang === "nl"
              ? "Wij verbinden ambitieuze bedrijven met de juiste professionals in Finance, IT en Sales. Meer dan 15 jaar ervaring. Actief in de Randstad en Noord-Brabant."
              : "We connect ambitious companies with the right professionals in Finance, IT and Sales. Over 15 years of experience. Active in the Randstad and Noord-Brabant."
          }
        />
        <meta name="keywords" content="recruitment bureau Nederland, werving en selectie Finance, IT recruitment, Sales recruitment, interim recruitment, RPO, Randstad, Noord-Brabant" />
        <link rel="canonical" href="https://recruitmentintermotion.nl/" />
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
