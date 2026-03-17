import { useLang } from "@/lib/LanguageContext";
import { translations, t } from "@/lib/translations";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import marijnImg from "@/assets/marijn.webp";

interface AboutSectionProps {
  onNavigate: (page: "contact") => void;
}

function renderTitle(html: string) {
  return html.replace(/<em>(.*?)<\/em>/g, '<span class="gradient-text">$1</span>');
}

export default function AboutSection({ onNavigate }: AboutSectionProps) {
  const { lang } = useLang();
  const ref = useScrollReveal();

  return (
    <section className="py-36 bg-card">
      <div ref={ref} className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left: Photo with decoration */}
        <div className="scroll-reveal relative">
          {/* Gradient accent shape behind photo */}
          <div
            className="absolute -top-6 -left-6 w-full h-full rounded-2xl pointer-events-none"
            style={{ background: "linear-gradient(135deg, #1F217D, #0199F8)", opacity: 0.08 }}
          />
          <div className="absolute -top-4 -left-4 w-full h-full gradient-brand rounded-2xl" />
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-muted aspect-[4/3]">
            <img src={marijnImg} alt="Marijn Schilder" className="w-full h-full object-cover" />
          </div>
          {/* 15+ badge */}
          <div className="absolute -bottom-4 -right-4 gradient-brand text-primary-foreground px-5 py-3 rounded-xl shadow-lg text-sm font-bold">
            {t(translations.about.badge, lang)}
          </div>
        </div>
        {/* LinkedIn link */}
        <a
          href="https://www.linkedin.com/in/marijnschilder/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 mt-4 text-accent-blue hover:underline font-semibold text-sm"
        >
          <svg width="20" height="20" fill="hsl(var(--accent-blue))" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          Marijn Schilder
        </a>

        {/* Right: Content */}
        <div>
          <div className="scroll-reveal text-accent-blue text-sm font-bold uppercase tracking-wider mb-3">
            {t(translations.about.eyebrow, lang)}
          </div>
          <h2
            className="scroll-reveal text-3xl md:text-4xl font-extrabold text-foreground mb-6 leading-tight"
            dangerouslySetInnerHTML={{ __html: renderTitle(t(translations.about.title, lang)) }}
          />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p className="scroll-reveal">{t(translations.about.p1, lang)}</p>
            <p className="scroll-reveal">{t(translations.about.p2, lang)}</p>
            <p className="scroll-reveal">{t(translations.about.p3, lang)}</p>
            <p className="scroll-reveal">{t(translations.about.p4, lang)}</p>
            <p className="scroll-reveal">{t(translations.about.p5, lang)}</p>
          </div>

          {/* Blockquote */}
          <blockquote className="scroll-reveal border-l-4 border-accent-blue pl-5 my-8 italic text-foreground text-lg">
            {t(translations.about.quote, lang)}
          </blockquote>

          {/* CTA Box */}
          <div className="scroll-reveal liquid-gradient rounded-2xl p-8 text-primary-foreground">
            <h3 className="text-xl font-bold mb-2">{t(translations.about.ctaTitle, lang)}</h3>
            <p className="text-primary-foreground/80 mb-4">{t(translations.about.ctaText, lang)}</p>
            <button
              onClick={() => onNavigate("contact")}
              className="bg-primary-foreground text-primary px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              {t(translations.about.ctaButton, lang)}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
