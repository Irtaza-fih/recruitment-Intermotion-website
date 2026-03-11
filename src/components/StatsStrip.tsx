import { useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/LanguageContext";
import { translations, t } from "@/lib/translations";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  triggered: boolean;
}

function StatItem({ value, suffix, label, triggered }: StatItemProps) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!triggered) return;
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [triggered, value]);

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-extrabold gradient-text mb-2">
        {display}{suffix}
      </div>
      <div className="text-primary-foreground/70 text-sm font-medium">{label}</div>
    </div>
  );
}

export default function StatsStrip() {
  const { lang } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-navy py-16">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <StatItem value={15} suffix="+" label={t(translations.stats.years, lang)} triggered={triggered} />
        <div className="hidden md:block">
          <div className="h-full w-px bg-primary-foreground/20 mx-auto" />
        </div>
        <StatItem value={3} suffix="" label={t(translations.stats.disciplines, lang)} triggered={triggered} />
        <div className="hidden md:block">
          <div className="h-full w-px bg-primary-foreground/20 mx-auto" />
        </div>
        <StatItem value={100} suffix="%" label={t(translations.stats.approach, lang)} triggered={triggered} />
      </div>
    </section>
  );
}
