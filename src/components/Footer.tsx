import { useLang } from "@/lib/LanguageContext";
import { translations, t } from "@/lib/translations";
import logo from "@/assets/logo.svg";

type PageId = "home" | "about" | "vacancies" | "contact";

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const { lang } = useLang();
  const year = new Date().getFullYear();
  const links: { id: PageId; label: string }[] = [
    { id: "home", label: t(translations.nav.home, lang) },
    { id: "about", label: t(translations.nav.about, lang) },
    { id: "vacancies", label: t(translations.nav.vacancies, lang) },
    { id: "contact", label: t(translations.nav.contact, lang) },
  ];

  return (
    <footer className="bg-navy text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <button onClick={() => onNavigate("home")}>
          <img src={logo} alt="Recruitment Intermotion" className="h-8 brightness-0 invert" />
        </button>
        <div className="flex gap-6">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => onNavigate(l.id)}
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              {l.label}
            </button>
          ))}
        </div>
        <p className="text-xs text-primary-foreground/50">
          © {year} Recruitment Intermotion. {t(translations.footer.rights, lang)}
        </p>
      </div>
    </footer>
  );
}
