import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

const partners = [
  { name: "Textkernel", logo: "https://recruitmentintermotion.nl/wp-content/uploads/2023/08/textkernel-logo.png" },
  { name: "Homerun", logo: "https://recruitmentintermotion.nl/wp-content/uploads/2023/08/homerun-logo.png" },
  { name: "Bullhorn", logo: "https://recruitmentintermotion.nl/wp-content/uploads/2023/08/bullhorn-logo.png" },
  { name: "Carerix", logo: "https://recruitmentintermotion.nl/wp-content/uploads/2023/08/carerix-logo.png" },
  { name: "Recruitee", logo: "https://recruitmentintermotion.nl/wp-content/uploads/2023/08/recruitee-logo.png" },
  { name: "Recruitin", logo: "https://recruitmentintermotion.nl/wp-content/uploads/2023/08/recruitin-logo.png" },
  { name: "Tribepad", logo: "https://recruitmentintermotion.nl/wp-content/uploads/2023/08/tribepad-logo.png" },
];

function renderTitle(html: string) {
  return html.replace(/<em>(.*?)<\/em>/g, '<span class="gradient-text">$1</span>');
}

export default function PartnersMarquee() {
  const { lang } = useLang();

  return (
    <section className="py-36 bg-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <h2
          className="text-2xl md:text-3xl font-extrabold text-foreground text-center"
          dangerouslySetInnerHTML={{ __html: renderTitle(translations.partners.title[lang]) }}
        />
      </div>
      <div
        className="relative"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <div className="marquee-track flex items-center gap-12 w-max">
          {[...partners, ...partners].map((p, i) => (
            <div
              key={i}
              className="flex-shrink-0 bg-bg-tint border border-border rounded-xl px-10 py-6 flex items-center justify-center"
            >
              <img
                src={p.logo}
                alt={p.name}
                className="h-10 max-w-[140px] object-contain"
                onError={(e) => {
                  // Fallback to text if image fails
                  const target = e.currentTarget;
                  target.style.display = "none";
                  const span = document.createElement("span");
                  span.className = "text-foreground font-bold text-lg";
                  span.textContent = p.name;
                  target.parentElement?.appendChild(span);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
