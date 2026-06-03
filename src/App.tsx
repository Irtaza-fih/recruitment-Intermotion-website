import { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "@/lib/LanguageContext";
import { subscribeTransition } from "@/hooks/useAppNavigate";
import Navbar from "@/components/Navbar";
import HomePage from "@/pages/HomePage";

const Footer = lazy(() => import("@/components/Footer"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const VacanciesPage = lazy(() => import("@/pages/VacanciesPage"));
const FinancePage = lazy(() => import("@/pages/FinancePage"));
const ClientFeedbackPage = lazy(() => import("@/pages/ClientFeedbackPage"));
const NotFound = lazy(() => import("@/pages/NotFound"));

function PageTransitionOverlay() {
  const [phase, setPhase] = useState<"idle" | "in" | "out">("idle");

  useEffect(() => {
    return subscribeTransition(setPhase);
  }, []);

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
  const location = useLocation();
  const isStandalone = location.pathname === "/client-feedback";

  return (
    <div className="min-h-screen">
      {!isStandalone && <Navbar />}
      <PageTransitionOverlay />
      <main>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/over-ons" element={<AboutPage />} />
            <Route path="/vacatures" element={<VacanciesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/client-feedback" element={<ClientFeedbackPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      {!isStandalone && (
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      )}
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <LanguageProvider>
          <AppContent />
        </LanguageProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}
