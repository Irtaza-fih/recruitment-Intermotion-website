import { useState } from "react";
import { useLang } from "@/lib/LanguageContext";
import { translations, t } from "@/lib/translations";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import PageHeroBanner from "@/components/PageHeroBanner";

export default function ContactPage() {
  const { lang } = useLang();
  const ref = useScrollReveal();
  const f = translations.contact.form;
  const c = translations.contact;

  const [form, setForm] = useState({
    salutation: "dhr",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    company: "",
    linkedin: "",
    message: "",
  });

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = () => {
    console.log("Form submitted:", form);
  };

  const contactTiles = [
    {
      href: `mailto:${c.email}`,
      label: c.email,
      icon: (
        <svg width="20" height="20" fill="#1F217D" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
      ),
    },
    {
      href: `tel:${c.phone.replace(/\s/g, "")}`,
      label: c.phone,
      icon: (
        <svg width="20" height="20" fill="#1F217D" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
      ),
    },
    {
      href: c.linkedin,
      label: "LinkedIn",
      icon: (
        <svg width="20" height="20" fill="#1F217D" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
      ),
      external: true,
    },
    {
      href: c.whatsapp,
      label: "WhatsApp",
      icon: (
        <svg width="20" height="20" fill="#1F217D" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.297-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>
      ),
      external: true,
    },
  ];

  return (
    <>
      <PageHeroBanner
        title={t(c.title, lang)}
        subtitle={t(c.subtitle, lang)}
      />

      <section className="py-36 bg-card">
        <div ref={ref} className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: contact info */}
            <div className="scroll-reveal space-y-6">
              <div className="space-y-4">
                {contactTiles.map((tile, i) => (
                  <a
                    key={i}
                    href={tile.href}
                    target={tile.external ? "_blank" : undefined}
                    rel={tile.external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 transition-colors hover:shadow-sm"
                    style={{
                      background: "#F7F9FF",
                      border: "1.5px solid #E5EAF5",
                      color: "#061A2F",
                    }}
                  >
                    <span className="flex-shrink-0">{tile.icon}</span>
                    <span className="text-sm font-medium">{tile.label}</span>
                  </a>
                ))}
              </div>

              <div className="liquid-gradient rounded-2xl p-8 text-primary-foreground mt-8">
                <h3 className="text-xl font-bold mb-2">{t(c.ctaTitle, lang)}</h3>
                <p className="text-primary-foreground/80">{t(c.ctaText, lang)}</p>
              </div>
            </div>

            {/* Right: form */}
            <div className="scroll-reveal bg-bg-tint border border-border rounded-2xl p-8 space-y-5">
              {/* Salutation */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">{t(f.salutation, lang)}</label>
                <div className="flex gap-4">
                  {[
                    { val: "dhr", label: t(f.mr, lang) },
                    { val: "mevr", label: t(f.mrs, lang) },
                    { val: "anders", label: t(f.other, lang) },
                  ].map((opt) => (
                    <label key={opt.val} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="salutation"
                        checked={form.salutation === opt.val}
                        onChange={() => update("salutation", opt.val)}
                        className="accent-accent-blue"
                      />
                      <span className="text-sm text-foreground">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField label={t(f.firstName, lang)} value={form.firstName} onChange={(v) => update("firstName", v)} />
                <InputField label={t(f.lastName, lang)} value={form.lastName} onChange={(v) => update("lastName", v)} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField label={t(f.phone, lang)} value={form.phone} onChange={(v) => update("phone", v)} type="tel" />
                <InputField label={t(f.email, lang)} value={form.email} onChange={(v) => update("email", v)} type="email" />
              </div>
              <InputField label={t(f.company, lang)} value={form.company} onChange={(v) => update("company", v)} />
              <InputField label={t(f.linkedinProfile, lang)} value={form.linkedin} onChange={(v) => update("linkedin", v)} />

              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">{t(f.message, lang)}</label>
                <textarea
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  rows={5}
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent-blue resize-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full gradient-brand text-primary-foreground py-3.5 rounded-full font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                {t(f.submit, lang)}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function InputField({
  label,
  value,
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
