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

function renderAccent(text: string) {
  const parts = text.split(/(<accent>.*?<\/accent>)/g);
  return parts.map((part, i) => {
    const match = part.match(/^<accent>(.*?)<\/accent>$/);
    if (match) {
      return <span key={i} className="text-accent-blue font-bold">{match[1]}</span>;
    }
    return <span key={i}>{part}</span>;
  });
}

export default function AboutSection({ onNavigate }: AboutSectionProps) {
  const { lang } = useLang();
  const ref = useScrollReveal();

  return (
    <section className="py-36 bg-card">
      <div ref={ref} className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left: Photo with decoration */}
        <div className="space-y-12">
          <div className="scroll-reveal relative">
            {/* Gradient accent shape behind photo */}
            <div
              className="absolute -top-6 -left-6 w-full h-full rounded-2xl pointer-events-none"
              style={{ background: "linear-gradient(135deg, #1F217D, #0199F8)", opacity: 0.08 }}
            />
            <div className="absolute -top-4 -left-4 w-full h-full gradient-brand rounded-2xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src={marijnImg} alt="Marijn Schilder" className="w-full h-auto" />
            </div>
            {/* 15+ badge */}
            <div className="absolute -bottom-4 -right-4 gradient-brand text-primary-foreground px-5 py-3 rounded-xl shadow-lg text-sm font-bold">
              {t(translations.about.badge, lang)}
            </div>
          </div>

          {/* CTA Box - moved under photo */}
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
            <p className="scroll-reveal">{renderAccent(t(translations.about.p1, lang))}</p>
            <p className="scroll-reveal">{renderAccent(t(translations.about.p2, lang))}</p>
            <p className="scroll-reveal">{renderAccent(t(translations.about.p3, lang))}</p>
            <p className="scroll-reveal">{renderAccent(t(translations.about.p4, lang))}</p>
            <p className="scroll-reveal">{renderAccent(t(translations.about.p5, lang))}</p>
            <p className="scroll-reveal">{renderAccent(t(translations.about.p6, lang))}</p>
            <p className="scroll-reveal">{renderAccent(t(translations.about.p7, lang))}</p>
            <p className="scroll-reveal">{renderAccent(t(translations.about.p8, lang))}</p>
            <p className="scroll-reveal font-bold">{renderAccent(t(translations.about.p9, lang))}</p>
          </div>

          {/* Blockquote */}
          <blockquote className="scroll-reveal border-l-4 border-accent-blue pl-5 my-8 italic text-foreground text-lg">
            {t(translations.about.quote, lang)}
          </blockquote>
        </div>
      </div>
    </section>
  );
}
