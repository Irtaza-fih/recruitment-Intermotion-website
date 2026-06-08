import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useLang } from "@/lib/LanguageContext";
import { translations, t } from "@/lib/translations";
import { useAppNavigate } from "@/hooks/useAppNavigate";
import logo from "@/assets/logo.svg";

export default function Navbar() {
  const { lang, setLang } = useLang();
  const location = useLocation();
  const navigate = useAppNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isHome = location.pathname === "/";

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !isHome || scrolled;
  const showLogo = !isHome || scrolled;

  const navLinks = useMemo(
    () => [
      { path: "/", label: t(translations.nav.home, lang) },
      { path: "/over-ons", label: t(translations.nav.about, lang) },
      { path: "/vacatures", label: t(translations.nav.vacancies, lang) },
      { path: "/blog", label: t(translations.nav.blog, lang) },
      { path: "/success-stories", label: t(translations.nav.successStories, lang) },
    ],
    [lang]
  );

  const serviceLinks = useMemo(
    () => [
      { path: "/finance-recruitment", label: t(translations.nav.finance, lang) },
      { path: "/sales-recruitment", label: t(translations.nav.sales, lang) },
      { path: "/it-recruitment", label: t(translations.nav.it, lang) },
      { path: "/interim", label: t(translations.nav.interim, lang) },
    ],
    [lang]
  );

  const handleNav = useCallback(
    (path: string) => {
      if (path === location.pathname) {
        setMobileOpen(false);
        setServicesOpen(false);
        return;
      }
      setMobileOpen(false);
      setServicesOpen(false);
      navigate(path);
    },
    [navigate, location.pathname]
  );

  const isServiceActive = serviceLinks.some((l) => location.pathname === l.path);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[74px] flex items-center transition-all duration-300 ${
          solid ? "bg-card shadow-md" : "bg-transparent"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div
            className={`transition-all duration-300 ${showLogo ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
          >
            <button onClick={() => handleNav("/")} className="flex items-center">
              <img src={logo} alt="Recruitment Intermotion" className="h-10" fetchPriority="high" />
            </button>
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNav(link.path!)}
                className={`text-base font-semibold transition-colors relative pb-1 ${
                  location.pathname === link.path
                    ? "text-accent-blue after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent-blue"
                    : solid
                    ? "text-foreground hover:text-accent-blue"
                    : "text-primary-foreground hover:text-accent-blue"
                }`}
              >
                {link.label}
              </button>
            ))}

            {/* Services dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen((v) => !v)}
                className={`text-base font-semibold transition-colors relative pb-1 flex items-center gap-1 ${
                  isServiceActive
                    ? "text-accent-blue after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent-blue"
                    : solid
                    ? "text-foreground hover:text-accent-blue"
                    : "text-primary-foreground hover:text-accent-blue"
                }`}
                aria-expanded={servicesOpen}
              >
                {t(translations.nav.services, lang)}
                <svg
                  width="12"
                  height="12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-card rounded-xl shadow-xl border border-border p-2 min-w-[220px]">
                  {serviceLinks.map((link) => (
                    <button
                      key={link.path}
                      onClick={() => handleNav(link.path!)}
                      className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        location.pathname === link.path
                          ? "text-accent-blue bg-accent/10"
                          : "text-foreground hover:text-accent-blue hover:bg-muted"
                      }`}
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-[0.6rem]">
            {/* Language toggle */}
            <div className="flex items-center bg-muted rounded-full p-0.5 text-xs font-semibold">
              <button
                onClick={() => setLang("nl")}
                aria-label="Nederlands"
                className={`min-w-[44px] min-h-[44px] px-3 py-1.5 rounded-full transition-colors flex items-center justify-center ${
                  lang === "nl" ? "gradient-brand text-primary-foreground" : "text-muted-foreground"
                }`}
              >
                🇳🇱 NL
              </button>
              <button
                onClick={() => setLang("en")}
                aria-label="English"
                className={`min-w-[44px] min-h-[44px] px-3 py-1.5 rounded-full transition-colors flex items-center justify-center ${
                  lang === "en" ? "gradient-brand text-primary-foreground" : "text-muted-foreground"
                }`}
              >
                🇬🇧 EN
              </button>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-[0.1rem]">
              <a
                href="https://linkedin.com/company/recruitment-intermotion"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={`min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full transition-colors ${solid ? "text-foreground hover:text-accent-blue" : "text-primary-foreground hover:text-accent-blue"}`}
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a
                href="https://wa.me/31642639962"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className={`min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full transition-colors ${solid ? "text-foreground hover:text-accent-blue" : "text-primary-foreground hover:text-accent-blue"}`}
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.297-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>
              </a>
            </div>

            {/* CTA */}
            <button
              onClick={() => handleNav("/contact")}
              className="gradient-brand text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              {t(translations.nav.cta, lang)}
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Menu sluiten" : "Menu openen"}
            className={`md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center ${solid ? "text-foreground" : "text-primary-foreground"}`}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 gradient-brand flex flex-col items-center justify-center gap-6 overflow-y-auto py-8">
          {navLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => handleNav(link.path!)}
              className="text-primary-foreground text-2xl font-bold flex items-center gap-3 hover:translate-x-2 transition-transform"
            >
              {link.label} <span className="text-lg">→</span>
            </button>
          ))}

          {/* Mobile services section */}
          <div className="flex flex-col items-center gap-3 mt-2">
            <span className="text-primary-foreground/60 text-sm font-semibold uppercase tracking-widest">
              {t(translations.nav.services, lang)}
            </span>
            {serviceLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNav(link.path!)}
                className="text-primary-foreground text-xl font-semibold flex items-center gap-3 hover:translate-x-2 transition-transform"
              >
                {link.label} <span className="text-base">→</span>
              </button>
            ))}
          </div>

          <button
            onClick={() => handleNav("/contact")}
            className="bg-primary-foreground text-primary px-8 py-3 rounded-full text-lg font-bold hover:shadow-lg transition-all mt-2"
          >
            {t(translations.nav.cta, lang)}
          </button>
          <div className="flex gap-3 mt-4">
            <button
              onClick={() => setLang("nl")}
              aria-label="Nederlands"
              className={`min-w-[44px] min-h-[44px] px-4 py-2 rounded-full text-sm font-semibold flex items-center justify-center ${lang === "nl" ? "bg-primary-foreground text-primary" : "text-primary-foreground border border-primary-foreground/30"}`}
            >
              🇳🇱 NL
            </button>
            <button
              onClick={() => setLang("en")}
              aria-label="English"
              className={`min-w-[44px] min-h-[44px] px-4 py-2 rounded-full text-sm font-semibold flex items-center justify-center ${lang === "en" ? "bg-primary-foreground text-primary" : "text-primary-foreground border border-primary-foreground/30"}`}
            >
              🇬🇧 EN
            </button>
          </div>
        </div>
      )}
    </>
  );
}
