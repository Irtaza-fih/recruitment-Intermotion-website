import { useState, useCallback, useEffect } from "react";
import { LanguageProvider } from "@/lib/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import VacanciesPage from "@/pages/VacanciesPage";
import ContactPage from "@/pages/ContactPage";

type PageId = "home" | "about" | "vacancies" | "contact";

function PageTransitionOverlay({ phase }: { phase: "idle" | "in" | "out" }) {
  if (phase === "idle") return null;
  return (
    <div
      className={`fixed inset-0 z-[60] gradient-brand ${
        phase === "in" ? "page-overlay-in" : "page-overlay-out"
      }`}
    />
  );
}

function AppContent() {
  const [activePage, setActivePage] = useState<PageId>("home");
  const [transitionPhase, setTransitionPhase] = useState<"idle" | "in" | "out">("idle");
  const [displayedPage, setDisplayedPage] = useState<PageId>("home");

  const navigate = useCallback(
    (page: PageId) => {
      if (page === activePage || transitionPhase !== "idle") return;
      setTransitionPhase("in");
      setTimeout(() => {
        setActivePage(page);
        setDisplayedPage(page);
        window.scrollTo(0, 0);
        setTransitionPhase("out");
        setTimeout(() => setTransitionPhase("idle"), 580);
      }, 580);
    },
    [activePage, transitionPhase]
  );

  return (
    <div className="min-h-screen">
      <Navbar activePage={activePage} onNavigate={navigate} isHome={displayedPage === "home"} />
      <PageTransitionOverlay phase={transitionPhase} />
      <main>
        {displayedPage === "home" && <HomePage onNavigate={navigate} />}
        {displayedPage === "about" && <AboutPage onNavigate={navigate} />}
        {displayedPage === "vacancies" && <VacanciesPage onNavigate={navigate} />}
        {displayedPage === "contact" && <ContactPage />}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
