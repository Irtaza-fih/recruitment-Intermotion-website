import { useLang } from "@/lib/LanguageContext";
import { translations, t } from "@/lib/translations";
import PageHeroBanner from "@/components/PageHeroBanner";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface VacanciesPageProps {
  onNavigate: (page: "contact") => void;
}

const disciplineColors: Record<string, string> = {
  Finance: "bg-accent-blue",
  IT: "bg-navy",
  Sales: "bg-accent-blue",
};

export default function VacanciesPage({ onNavigate }: VacanciesPageProps) {
  const { lang } = useLang();
  const ref = useScrollReveal();

  return (
    <>
      <PageHeroBanner
        title={t(translations.vacanciesPage.title, lang)}
        subtitle={t(translations.vacanciesPage.subtitle, lang)}
      />

      <section className="py-24 bg-card">
        <div ref={ref} className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {translations.vacanciesPage.items.map((item, i) => (
            <div
              key={i}
              className="scroll-reveal bg-card rounded-2xl border border-border p-8 hover:-translate-y-2 hover:shadow-xl hover:border-accent-blue transition-all duration-300"
            >
              <span
                className={`inline-block text-primary-foreground text-xs font-bold px-3 py-1 rounded-full mb-4 ${
                  disciplineColors[item.discipline] || "gradient-brand"
                }`}
              >
                {item.discipline}
              </span>
              <h3 className="text-xl font-bold text-foreground mb-2">{t(item.title, lang)}</h3>
              <div className="flex gap-3 text-sm text-muted-foreground mb-4">
                <span>📍 {t(item.location, lang)}</span>
                <span>• {t(item.type, lang)}</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{t(item.desc, lang)}</p>
              <button className="gradient-brand text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all">
                {t(translations.vacanciesPage.viewBtn, lang)}
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
