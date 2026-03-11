import { useLang } from "@/lib/LanguageContext";
import { translations, t } from "@/lib/translations";

function renderTitle(html: string) {
  return html.replace(/<em>(.*?)<\/em>/g, '<span class="gradient-text">$1</span>');
}

interface VacancyCTAProps {
  onNavigate: (page: "vacancies" | "contact") => void;
}

export default function VacancyCTA({ onNavigate }: VacancyCTAProps) {
  const { lang } = useLang();

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="gradient-brand rounded-3xl p-12 md:p-16 text-center text-primary-foreground">
          <h2
            className="text-2xl md:text-3xl font-extrabold mb-4"
            dangerouslySetInnerHTML={{
              __html: t(translations.vacancyCta.title, lang).replace(
                /<em>(.*?)<\/em>/g,
                '<span class="underline decoration-2 underline-offset-4">$1</span>'
              ),
            }}
          />
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            {t(translations.vacancyCta.text, lang)}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate("vacancies")}
              className="bg-primary-foreground text-primary px-8 py-3.5 rounded-full font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              {t(translations.vacancyCta.ctaPrimary, lang)}
            </button>
            <button
              onClick={() => onNavigate("contact")}
              className="border-2 border-primary-foreground text-primary-foreground px-8 py-3.5 rounded-full font-semibold hover:bg-primary-foreground/10 transition-all"
            >
              {t(translations.vacancyCta.ctaSecondary, lang)}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
