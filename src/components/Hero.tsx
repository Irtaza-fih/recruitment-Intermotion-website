import { useEffect, useState, useMemo } from "react";
import { useLang } from "@/lib/LanguageContext";
import { translations, t } from "@/lib/translations";
import { useAppNavigate } from "@/hooks/useAppNavigate";
import { heroLogoDataUrl } from "@/assets/heroLogoData";

const heroLogo = heroLogoDataUrl;

export default function Hero() {
  const { lang } = useLang();
  const navigate = useAppNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [animationsReady, setAnimationsReady] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    // Delay decorative animations until after LCP / first paint
    const idle = (window as any).requestIdleCallback
      ? (window as any).requestIdleCallback(() => setAnimationsReady(true), { timeout: 1500 })
      : window.setTimeout(() => setAnimationsReady(true), 800);
    return () => {
      window.removeEventListener("scroll", onScroll);
      if ((window as any).cancelIdleCallback) (window as any).cancelIdleCallback(idle);
      else clearTimeout(idle as number);
    };
  }, []);

  const logoScale = Math.max(0, 1 - scrollY / 300);
  const logoOpacity = Math.max(0, 1 - scrollY / 200);

  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 3 + Math.random() * 6,
        duration: 8 + Math.random() * 12,
        delay: Math.random() * 10,
      })),
    []
  );

  return (
    <section className="relative h-screen w-full overflow-hidden bg-navy flex items-center justify-center">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080'%3E%3Crect fill='%231F217D' width='1920' height='1080'/%3E%3C/svg%3E"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        src="/happywork.m4v"
      >
        <track kind="captions" srcLang="nl" label="Geen dialoog" default />
      </video>
      <div className="absolute inset-0 bg-black/25" />
      {animationsReady && particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
      <div className="relative z-10 text-center text-primary-foreground px-6 max-w-4xl">
        <div
          style={{ transform: `scale(${logoScale})`, opacity: logoOpacity }}
          className="transition-none mb-6"
        >
          <img src={heroLogo} alt="Recruitment Intermotion" className="h-40 md:h-56 lg:h-64 w-auto mx-auto" width={768} height={269} fetchPriority="high" decoding="sync" />
        </div>
        <p className="text-lg md:text-xl font-semibold italic mb-10 text-primary-foreground/90">
          {t(translations.hero.tagline, lang)}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate("/contact")}
            className="gradient-brand text-primary-foreground px-8 py-3.5 rounded-full font-semibold hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            {t(translations.hero.ctaPrimary, lang)}
          </button>
          <a
            href="https://careers-page.com/recruitment-intermotion"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-primary-foreground text-primary-foreground px-8 py-3.5 rounded-full font-semibold hover:bg-primary-foreground/10 hover:-translate-y-1 transition-all"
          >
            {t(translations.hero.ctaSecondary, lang)}
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/60">
        <div className={`${animationsReady ? "scroll-indicator-line" : ""} w-px h-10 bg-primary-foreground/40`} />
        <span className="text-xs tracking-widest uppercase">{t(translations.hero.scroll, lang)}</span>
      </div>
    </section>
  );
}
