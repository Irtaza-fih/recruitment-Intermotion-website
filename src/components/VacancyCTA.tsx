import { useState } from "react";
import { useLang } from "@/lib/LanguageContext";
import { translations, t } from "@/lib/translations";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface VacancyCTAProps {
  onNavigate: (page: "contact") => void;
}

export default function VacancyCTA({ onNavigate }: VacancyCTAProps) {
  const { lang } = useLang();
  const [openDialog, setOpenDialog] = useState<"candidate" | "client" | null>(null);

  return (
    <>
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Candidate Tile */}
            <div className="gradient-brand rounded-3xl p-10 md:p-12 text-center text-primary-foreground flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-primary-foreground/15 flex items-center justify-center mx-auto mb-5">
                  <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
                <h3 className="text-xl md:text-2xl font-extrabold mb-2">
                  {lang === "nl" ? "Op zoek naar een baan?" : "Looking for a job?"}
                </h3>
                <p className="text-primary-foreground/80 mb-6 text-sm">
                  {lang === "nl"
                    ? "Upload je CV en wij matchen je met de perfecte rol."
                    : "Upload your CV and we'll match you with the perfect role."}
                </p>
              </div>
              <button
                onClick={() => setOpenDialog("candidate")}
                className="bg-primary-foreground text-primary px-8 py-3.5 rounded-full font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all mx-auto"
              >
                {lang === "nl" ? "Solliciteer nu" : "Apply now"}
              </button>
            </div>

            {/* Client Tile */}
            <div className="bg-card border border-border rounded-3xl p-10 md:p-12 text-center flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-accent-blue/10 flex items-center justify-center mx-auto mb-5">
                  <svg width="28" height="28" fill="none" stroke="hsl(var(--accent-blue))" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>
                </div>
                <h3 className="text-xl md:text-2xl font-extrabold mb-2 text-foreground">
                  {lang === "nl" ? "Op zoek naar talent?" : "Looking for talent?"}
                </h3>
                <p className="text-muted-foreground mb-6 text-sm">
                {lang === "nl"
                    ? "Vertel ons over je vacature — wij nemen binnen 24 uur contact op."
                    : "Tell us about your vacancy — we'll reach out within 24 hours."}
                </p>
              </div>
              <button
                onClick={() => setOpenDialog("client")}
                className="gradient-brand text-primary-foreground px-8 py-3.5 rounded-full font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all mx-auto"
              >
                {lang === "nl" ? "Verstuur aanvraag" : "Submit request"}
              </button>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={openDialog === "candidate"} onOpenChange={(o) => !o && setOpenDialog(null)}>
        <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{lang === "nl" ? "Solliciteer nu" : "Apply now"}</DialogTitle>
          </DialogHeader>
          <CandidateForm lang={lang} onClose={() => setOpenDialog(null)} />
        </DialogContent>
      </Dialog>

      <Dialog open={openDialog === "client"} onOpenChange={(o) => !o && setOpenDialog(null)}>
        <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{lang === "nl" ? "Talent aanvragen" : "Request talent"}</DialogTitle>
          </DialogHeader>
          <ClientForm lang={lang} onClose={() => setOpenDialog(null)} />
        </DialogContent>
      </Dialog>
    </>
  );
}

/* ── Candidate Form ── */
function CandidateForm({ lang, onClose }: { lang: "nl" | "en"; onClose: () => void }) {
  const [form, setForm] = useState({
    fullName: "", email: "", phone: "", jobTitle: "", experience: "", desiredRole: "", linkedinUrl: "", cv: null as File | null,
  });
  const u = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

  const handleSubmit = () => {
    if (!form.fullName || !form.email) return;
    console.log("Candidate form:", form);
    onClose();
  };

  return (
    <div className="space-y-4 pt-2">
      <Field label={`${lang === "nl" ? "Volledige naam" : "Full name"} *`} value={form.fullName} onChange={(v) => u("fullName", v)} />
      <Field label={`${lang === "nl" ? "E-mail" : "Email"} *`} value={form.email} onChange={(v) => u("email", v)} type="email" />
      <Field label={lang === "nl" ? "Telefoon" : "Phone"} value={form.phone} onChange={(v) => u("phone", v)} type="tel" />
      <Field label={lang === "nl" ? "Huidige functie" : "Current job title"} value={form.jobTitle} onChange={(v) => u("jobTitle", v)} />
      <div>
        <label className="block text-sm font-semibold text-foreground mb-1.5">
          {lang === "nl" ? "Jaren ervaring" : "Years of experience"}
        </label>
        <select
          value={form.experience}
          onChange={(e) => u("experience", e.target.value)}
          className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent-blue"
        >
          <option value="">-- {lang === "nl" ? "selecteer" : "select"} --</option>
          <option value="0-2">0 – 2</option>
          <option value="3-5">3 – 5</option>
          <option value="5-10">5 – 10</option>
          <option value="10+">10+</option>
        </select>
      </div>
      <Field label={lang === "nl" ? "Gewenste rol & salaris" : "Desired role & salary"} value={form.desiredRole} onChange={(v) => u("desiredRole", v)} />
      <Field label="LinkedIn URL" value={form.linkedinUrl} onChange={(v) => u("linkedinUrl", v)} />
      <div>
        <label className="block text-sm font-semibold text-foreground mb-1.5">
          {lang === "nl" ? "Upload CV" : "Upload CV"}
        </label>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setForm((p) => ({ ...p, cv: e.target.files?.[0] ?? null }))}
          className="w-full text-sm text-foreground file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border file:border-border file:bg-card file:text-sm file:font-semibold file:text-foreground hover:file:bg-muted"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="w-full gradient-brand text-primary-foreground py-3.5 rounded-full font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all mt-2"
      >
        {lang === "nl" ? "Verstuur sollicitatie" : "Submit application"}
      </button>
    </div>
  );
}

/* ── Client Form ── */
function ClientForm({ lang, onClose }: { lang: "nl" | "en"; onClose: () => void }) {
  const [form, setForm] = useState({
    companyName: "", contactName: "", email: "", phone: "", roleHiring: "", numberOfHires: "", timeline: "", budget: "",
  });
  const u = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

  const handleSubmit = () => {
    if (!form.companyName || !form.contactName || !form.email || !form.roleHiring) return;
    console.log("Client form:", form);
    onClose();
  };

  return (
    <div className="space-y-4 pt-2">
      <p className="text-sm text-muted-foreground">
        {lang === "nl"
          ? "Vertel ons over je vacature — wij nemen binnen 24 uur contact op voor een vrijblijvend gesprek."
          : "Tell us about your vacancy — we'll reach out within 24 hours for a no-obligation conversation."}
      </p>
      <Field label={`${lang === "nl" ? "Bedrijfsnaam" : "Company name"} *`} value={form.companyName} onChange={(v) => u("companyName", v)} />
      <Field label={`${lang === "nl" ? "Contactpersoon" : "Contact name"} *`} value={form.contactName} onChange={(v) => u("contactName", v)} />
      <Field label={`${lang === "nl" ? "E-mail" : "Email"} *`} value={form.email} onChange={(v) => u("email", v)} type="email" />
      <Field label={lang === "nl" ? "Telefoon" : "Phone"} value={form.phone} onChange={(v) => u("phone", v)} type="tel" />
      <Field label={`${lang === "nl" ? "Functie waarvoor je werft" : "Role hiring for"} *`} value={form.roleHiring} onChange={(v) => u("roleHiring", v)} />
      <div>
        <label className="block text-sm font-semibold text-foreground mb-1.5">
          {lang === "nl" ? "Aantal posities" : "Number of hires"}
        </label>
        <select
          value={form.numberOfHires}
          onChange={(e) => u("numberOfHires", e.target.value)}
          className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent-blue"
        >
          <option value="">-- {lang === "nl" ? "selecteer" : "select"} --</option>
          <option value="1">1</option>
          <option value="2-3">2 – 3</option>
          <option value="4-10">4 – 10</option>
          <option value="10+">10+</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold text-foreground mb-1.5">
          {lang === "nl" ? "Tijdlijn" : "Timeline"}
        </label>
        <select
          value={form.timeline}
          onChange={(e) => u("timeline", e.target.value)}
          className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent-blue"
        >
          <option value="">-- {lang === "nl" ? "selecteer" : "select"} --</option>
          <option value="asap">{lang === "nl" ? "Zo snel mogelijk" : "ASAP"}</option>
          <option value="1-3months">{lang === "nl" ? "1 – 3 maanden" : "1 – 3 months"}</option>
          <option value="3-6months">{lang === "nl" ? "3 – 6 maanden" : "3 – 6 months"}</option>
          <option value="6+months">{lang === "nl" ? "6+ maanden" : "6+ months"}</option>
        </select>
      </div>
      <Field label={lang === "nl" ? "Budget / salarisbereik" : "Budget / salary range"} value={form.budget} onChange={(v) => u("budget", v)} />
      <button
        onClick={handleSubmit}
        className="w-full gradient-brand text-primary-foreground py-3.5 rounded-full font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all mt-2"
      >
        {lang === "nl" ? "Verstuur aanvraag" : "Submit request"}
      </button>
    </div>
  );
}

/* ── Shared Field ── */
function Field({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (v: string) => void; type?: string }) {
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
