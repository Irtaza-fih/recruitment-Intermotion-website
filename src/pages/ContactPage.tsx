import { useState } from "react";
import { useLang } from "@/lib/LanguageContext";
import { translations, t } from "@/lib/translations";
import { useScrollReveal } from "@/hooks/useScrollReveal";

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

  return (
    <section className="pt-32 pb-24 bg-card">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="scroll-reveal text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            {t(c.title, lang)}
          </h1>
          <p className="scroll-reveal text-muted-foreground text-lg max-w-2xl mx-auto">
            {t(c.subtitle, lang)}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: contact info */}
          <div className="scroll-reveal space-y-6">
            <div className="space-y-4">
              <a href={`mailto:${c.email}`} className="flex items-center gap-3 text-foreground hover:text-accent-blue transition-colors">
                <span className="w-10 h-10 gradient-brand rounded-full flex items-center justify-center text-primary-foreground text-sm">✉</span>
                {c.email}
              </a>
              <a href={`tel:${c.phone}`} className="flex items-center gap-3 text-foreground hover:text-accent-blue transition-colors">
                <span className="w-10 h-10 gradient-brand rounded-full flex items-center justify-center text-primary-foreground text-sm">📞</span>
                {c.phone}
              </a>
              <a href={c.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-accent-blue transition-colors">
                <span className="w-10 h-10 gradient-brand rounded-full flex items-center justify-center text-primary-foreground text-sm">in</span>
                LinkedIn
              </a>
              <a href={c.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-accent-blue transition-colors">
                <span className="w-10 h-10 gradient-brand rounded-full flex items-center justify-center text-primary-foreground text-sm">💬</span>
                WhatsApp
              </a>
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
