import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

const partnerNames = ["Textkernel", "Homerun", "Bullhorn", "Carerix", "Recruitee", "Recruitin", "Tribepad"];

function renderTitle(html: string) {
  return html.replace(/<em>(.*?)<\/em>/g, '<span class="gradient-text">$1</span>');
}

export default function PartnersMarquee() {
  const { lang } = useLang();

  return (
    <section className="py-16 bg-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <h2
          className="text-2xl md:text-3xl font-extrabold text-foreground text-center"
          dangerouslySetInnerHTML={{ __html: renderTitle(translations.partners.title[lang]) }}
        />
      </div>
      <div className="relative">
        <div className="marquee-track flex items-center gap-12 w-max">
          {[...partnerNames, ...partnerNames].map((name, i) => (
            <div
              key={i}
              className="flex-shrink-0 bg-bg-tint border border-border rounded-xl px-10 py-6 text-foreground font-bold text-lg"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
