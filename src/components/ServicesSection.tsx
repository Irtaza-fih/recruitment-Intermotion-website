import { useRef, useCallback, useState } from "react";
import { useLang } from "@/lib/LanguageContext";
import { translations, t } from "@/lib/translations";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useAppNavigate } from "@/hooks/useAppNavigate";

function renderTitle(html: string) {
  return html.replace(/<em>(.*?)<\/em>/g, '<span class="gradient-text">$1</span>');
}

export default function ServicesSection() {
  const { lang } = useLang();
  const navigate = useAppNavigate();
  const ref = useScrollReveal();

  return (
    <section className="py-36 bg-bg-tint">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {translations.services.items.map((item, i) => (
            <ServiceCard
              key={i}
              index={i}
              tag={t(item.tag, lang)}
              title={t(item.title, lang)}
              desc={t(item.desc, lang)}
              moreLabel={t(translations.services.more, lang)}
              onClick={() => navigate(item.path)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  index,
  tag,
  title,
  desc,
  moreLabel,
  onClick,
}: {
  index: number;
  tag: string;
  title: string;
  desc: string;
  moreLabel: string;
  onClick: () => void;
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
      className="scroll-reveal relative bg-card rounded-2xl border border-border p-8 transition-all duration-300 hover:-translate-y-[7px] hover:shadow-xl hover:border-accent-blue cursor-pointer group overflow-hidden"
      onClick={onClick}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(1, 153, 248, 0.08) 0%, transparent 60%)`,
        }}
      />
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-accent-blue text-2xl font-extrabold">0{index + 1}</span>
          <div className="h-px bg-accent-blue/30 flex-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        </div>
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
