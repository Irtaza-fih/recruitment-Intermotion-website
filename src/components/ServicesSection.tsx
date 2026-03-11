import { useState, useRef, useCallback } from "react";
import { useLang } from "@/lib/LanguageContext";
import { translations, t } from "@/lib/translations";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function renderTitle(html: string) {
  return html.replace(/<em>(.*?)<\/em>/g, '<span class="gradient-text">$1</span>');
}

const icons = [
  // Search icon
  <svg key="0" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>,
  // Clock icon
  <svg key="1" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>,
  // Settings icon
  <svg key="2" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" /></svg>,
];

export default function ServicesSection() {
  const { lang } = useLang();
  const [modalIdx, setModalIdx] = useState<number | null>(null);
  const ref = useScrollReveal();

  return (
    <>
      <section className="py-24 bg-bg-tint">
        <div ref={ref} className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="scroll-reveal text-accent-blue text-sm font-bold uppercase tracking-wider mb-3">
              {t(translations.services.eyebrow, lang)}
            </div>
            <h2
              className="scroll-reveal text-3xl md:text-4xl font-extrabold text-foreground"
              dangerouslySetInnerHTML={{ __html: renderTitle(t(translations.services.title, lang)) }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {translations.services.items.map((item, i) => (
              <ServiceCard
                key={i}
                index={i}
                tag={t(item.tag, lang)}
                title={t(item.title, lang)}
                desc={t(item.desc, lang)}
                moreLabel={t(translations.services.more, lang)}
                onMore={() => setModalIdx(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalIdx !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setModalIdx(null)}>
          <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" />
          <div
            className="relative bg-card rounded-2xl shadow-2xl max-w-lg w-full p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalIdx(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              ✕
            </button>
            <div className="text-accent-blue text-sm font-bold mb-2">0{modalIdx + 1}</div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {t(translations.services.items[modalIdx].title, lang)}
            </h3>
            <p className="font-semibold text-foreground mb-3">
              {t(translations.services.items[modalIdx].modalIntro, lang)}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t(translations.services.items[modalIdx].modalBody, lang)}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

function ServiceCard({
  index,
  tag,
  title,
  desc,
  moreLabel,
  onMore,
}: {
  index: number;
  tag: string;
  title: string;
  desc: string;
  moreLabel: string;
  onMore: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setGlow({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="scroll-reveal relative bg-card rounded-2xl border border-border p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-accent-blue cursor-pointer group overflow-hidden"
      onClick={onMore}
    >
      {/* Glow effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, hsl(var(--accent-blue) / 0.08) 0%, transparent 60%)`,
        }}
      />
      <div className="relative z-10">
        <div className="text-accent-blue mb-4">{icons[index]}</div>
        <span className="inline-block gradient-brand text-primary-foreground text-xs font-bold px-3 py-1 rounded-full mb-4">
          {tag}
        </span>
        <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{desc}</p>
        <span className="text-accent-blue text-sm font-semibold group-hover:underline">
          {moreLabel} →
        </span>
      </div>
    </div>
  );
}
