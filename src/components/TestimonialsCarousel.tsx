import { useState, useEffect } from "react";
import { useLang } from "@/lib/LanguageContext";
import { translations, t } from "@/lib/translations";

function renderTitle(html: string) {
  return html.replace(/<em>(.*?)<\/em>/g, '<span class="text-accent-blue">$1</span>');
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
    <section className="py-36" style={{ background: "#1F217D" }}>
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-2xl md:text-3xl font-extrabold text-center mb-16"
          style={{ color: "white" }}
          dangerouslySetInnerHTML={{ __html: renderTitle(translations.testimonials.title[lang]) }}
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Arrows */}
          <button
            onClick={() => setCurrent((c) => (c - 1 + items.length) % items.length)}
            aria-label="Vorige"
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center z-10 transition-colors"
            style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", color: "white" }}
          >
            ←
          </button>
          <button
            onClick={() => setCurrent((c) => (c + 1) % items.length)}
            aria-label="Volgende"
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center z-10 transition-colors"
            style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", color: "white" }}
          >
            →
          </button>

          {/* Card — glass style */}
          <div
            className="rounded-2xl p-8 md:p-12 text-center transition-all duration-500 relative"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.09)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
            }}
          >
            {/* Decorative quote mark */}
            <div
              className="absolute top-6 left-8 font-serif select-none pointer-events-none"
              style={{ fontSize: "4.5rem", color: "hsl(205 96% 49%)", opacity: 0.22, lineHeight: 1 }}
            >
              ❝
            </div>

            <div className="w-16 h-16 gradient-brand rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6" style={{ color: "white" }}>
              {items[current].initials}
            </div>
            <p
              className="text-lg leading-relaxed mb-6 italic relative z-10"
              style={{ color: "rgba(255,255,255,0.8)" }}
            >
              {t(items[current].quote, lang)}
            </p>
            <div className="font-bold" style={{ color: "white" }}>{t(items[current].name, lang)}</div>
            <div className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>{t(items[current].role, lang)}</div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Testimonial ${i + 1}`}
                className={`min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full transition-all`}
              >
                <span
                  className={`h-2.5 rounded-full transition-all block ${
                    i === current ? "gradient-brand w-6" : "w-2.5"
                  }`}
                  style={i !== current ? { background: "rgba(255,255,255,0.25)" } : undefined}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
