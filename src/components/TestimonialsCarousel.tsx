import { useState, useEffect, useCallback } from "react";
import { useLang } from "@/lib/LanguageContext";
import { translations, t } from "@/lib/translations";

function renderTitle(html: string) {
  return html.replace(/<em>(.*?)<\/em>/g, '<span class="gradient-text">$1</span>');
}

export default function TestimonialsCarousel() {
  const { lang } = useLang();
  const [current, setCurrent] = useState(0);
  const items = translations.testimonials.items;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % items.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <section className="py-24 bg-bg-tint">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-2xl md:text-3xl font-extrabold text-foreground text-center mb-16"
          dangerouslySetInnerHTML={{ __html: renderTitle(translations.testimonials.title[lang]) }}
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Arrows */}
          <button
            onClick={() => setCurrent((c) => (c - 1 + items.length) % items.length)}
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card border border-border shadow flex items-center justify-center text-foreground hover:bg-muted transition-colors z-10"
          >
            ←
          </button>
          <button
            onClick={() => setCurrent((c) => (c + 1) % items.length)}
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card border border-border shadow flex items-center justify-center text-foreground hover:bg-muted transition-colors z-10"
          >
            →
          </button>

          {/* Card */}
          <div className="bg-card rounded-2xl border border-border p-8 md:p-12 shadow-lg text-center transition-all duration-500">
            <div className="w-16 h-16 gradient-brand rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold mx-auto mb-6">
              {items[current].initials}
            </div>
            <div className="text-4xl text-accent-blue mb-4 font-serif">"</div>
            <p className="text-foreground text-lg leading-relaxed mb-6 italic">
              {t(items[current].quote, lang)}
            </p>
            <div className="font-bold text-foreground">{t(items[current].name, lang)}</div>
            <div className="text-sm text-muted-foreground">{t(items[current].role, lang)}</div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === current ? "gradient-brand w-6" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
