import { Helmet } from "react-helmet-async";
import { useLang } from "@/lib/LanguageContext";
import { translations, t } from "@/lib/translations";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import PageHeroBanner from "@/components/PageHeroBanner";
import VacancyCTA from "@/components/VacancyCTA";

export default function ContactPage() {
  const { lang } = useLang();
  const ref = useScrollReveal();
  const c = translations.contact;

  const contactTiles = [
    {
      href: `mailto:${c.email}`,
      title: c.email,
      subtitle: lang === "nl" ? "Voor alle vragen" : "For all enquiries",
      icon: (
        <svg width="22" height="22" fill="none" stroke="#1F217D" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 7L2 7" /></svg>
      ),
    },
    {
      href: `tel:${c.phone.replace(/\s/g, "")}`,
      title: c.phone,
      subtitle: lang === "nl" ? "Ma–Vr, 8:00–19:00 CET" : "Mon–Fri, 8:00–19:00 CET",
      icon: (
        <svg width="22" height="22" fill="none" stroke="#1F217D" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
      ),
    },
    {
      href: c.linkedin,
      title: "LinkedIn",
      subtitle: lang === "nl" ? "Volg ons op LinkedIn" : "Follow us on LinkedIn",
      icon: (
        <svg width="22" height="22" fill="#1F217D" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
      ),
      external: true,
    },
    {
      href: c.whatsapp,
      title: "WhatsApp",
      subtitle: lang === "nl" ? "Stuur ons een bericht" : "Send us a message",
      icon: (
        <svg width="22" height="22" fill="#1F217D" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.297-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>
      ),
      external: true,
    },
    {
      href: "https://calendly.com/recruitment-intermotion/recruitment-call",
      title: "Calendly",
      subtitle: lang === "nl" ? "Plan een gesprek" : "Schedule a meeting",
      icon: (
        <svg width="22" height="22" fill="none" stroke="#1F217D" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" /></svg>
      ),
      external: true,
    },
  ];

  const availability = [
    { day: lang === "nl" ? "Maandag – Vrijdag" : "Monday – Friday", time: "9:00 – 18:00", open: true },
    { day: lang === "nl" ? "Zaterdag" : "Saturday", time: lang === "nl" ? "Gesloten" : "Closed", open: false },
    { day: lang === "nl" ? "Zondag" : "Sunday", time: lang === "nl" ? "Gesloten" : "Closed", open: false },
  ];

  return (
    <>
      <Helmet>
        <title>{lang === "nl" ? "Contact – Recruitment Intermotion" : "Contact – Recruitment Intermotion"}</title>
        <meta
          name="description"
          content={
            lang === "nl"
              ? "Neem contact op met Recruitment Intermotion. Vrijblijvend sparren over jouw recruitmentvraagstuk? Marijn Schilder staat voor je klaar."
              : "Get in touch with Recruitment Intermotion. Want to explore your recruitment challenge? Marijn Schilder is here for you."
          }
        />
        <meta name="keywords" content="contact recruitment bureau, Recruitment Intermotion contact, recruiter Nederland" />
        <link rel="canonical" href="https://recruitmentintermotion.nl/contact" />
        <link rel="alternate" hrefLang="nl" href="https://recruitmentintermotion.nl/contact" />
        <link rel="alternate" hrefLang="en" href="https://recruitmentintermotion.nl/contact?lang=en" />
        <link rel="alternate" hrefLang="x-default" href="https://recruitmentintermotion.nl/contact" />
        <meta property="og:title" content={lang === "nl" ? "Contact – Recruitment Intermotion" : "Contact – Recruitment Intermotion"} />
        <meta property="og:description" content={lang === "nl" ? "Neem contact op met Recruitment Intermotion. Vrijblijvend sparren over jouw recruitmentvraagstuk? Marijn Schilder staat voor je klaar." : "Get in touch with Recruitment Intermotion. Want to explore your recruitment challenge? Marijn Schilder is here for you."} />
        <meta property="og:image" content="https://recruitmentintermotion.nl/og-image.jpg" />
        <meta property="og:url" content="https://recruitmentintermotion.nl/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nl_NL" />
        <meta property="og:site_name" content="Recruitment Intermotion" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={lang === "nl" ? "Contact – Recruitment Intermotion" : "Contact – Recruitment Intermotion"} />
        <meta name="twitter:description" content={lang === "nl" ? "Neem contact op met Recruitment Intermotion." : "Get in touch with Recruitment Intermotion."} />
        <meta name="twitter:image" content="https://recruitmentintermotion.nl/og-image.jpg" />
      </Helmet>
      <PageHeroBanner
        title={t(c.title, lang)}
        subtitle={t(c.subtitle, lang)}
      />

      <section className="py-36 bg-card">
        <div ref={ref} className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: contact info */}
            <div className="scroll-reveal space-y-8">
              {/* Contact Info heading */}
              <div>
                <h3 className="text-accent-blue text-xs font-bold uppercase tracking-widest mb-6">
                  {lang === "nl" ? "Contactgegevens" : "Contact Info"}
                </h3>
                <div className="space-y-4">
                  {contactTiles.map((tile, i) => (
                    <a
                      key={i}
                      href={tile.href}
                      target={tile.external ? "_blank" : undefined}
                      rel={tile.external ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 group transition-colors"
                      style={{ color: "#061A2F" }}
                    >
                      <span
                        className="flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center"
                        style={{ background: "#F7F9FF", border: "1.5px solid #E5EAF5" }}
                      >
                        {tile.icon}
                      </span>
                      <div>
                        <div className="font-semibold text-foreground group-hover:text-accent-blue transition-colors">{tile.title}</div>
                        <div className="text-sm text-muted-foreground">{tile.subtitle}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>


              <div className="liquid-gradient rounded-2xl p-8 text-primary-foreground">
                <h3 className="text-xl font-bold mb-2">{t(c.ctaTitle, lang)}</h3>
                <p className="text-primary-foreground/80">{t(c.ctaText, lang)}</p>
              </div>
            </div>

            {/* Right: CTA tiles */}
            <div className="scroll-reveal flex flex-col gap-6">
              <VacancyCTA variant="inline" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-foreground mb-1.5">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent-blue"
      />
    </div>
  );
}
