import { useLang } from "@/lib/LanguageContext";
import { translations, t } from "@/lib/translations";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface AboutSectionProps {
  onNavigate: (page: "contact") => void;
}

function renderTitle(html: string) {
  // Replace <em>...</em> with gradient-text styled span
  return html.replace(/<em>(.*?)<\/em>/g, '<span class="gradient-text">$1</span>');
}

export default function AboutSection({ onNavigate }: AboutSectionProps) {
  const { lang } = useLang();
  const ref = useScrollReveal();

  return (
    <section className="py-24 bg-card">
      <div ref={ref} className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left: Photo with decoration */}
        <div className="scroll-reveal relative">
          <div className="absolute -top-4 -left-4 w-full h-full gradient-brand rounded-2xl" />
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-muted aspect-[4/3]">
            <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground text-lg">
              Team Photo
            </div>
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-4 -right-4 gradient-brand text-primary-foreground px-5 py-3 rounded-xl shadow-lg text-sm font-bold">
            {t(translations.about.badge, lang)}
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
