import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PartnersMarquee from "@/components/PartnersMarquee";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import VacancyCTA from "@/components/VacancyCTA";

interface HomePageProps {
  onNavigate: (page: "contact" | "vacancies") => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <StatsStrip />
      <AboutSection onNavigate={onNavigate} />
      <ServicesSection />
      <PartnersMarquee />
      <TestimonialsCarousel />
      <VacancyCTA onNavigate={onNavigate} />
    </>
  );
}
