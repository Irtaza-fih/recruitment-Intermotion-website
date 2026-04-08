import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

import americold from "@/assets/partners/americold.png";
import visiativ from "@/assets/partners/visiativ.png";
import remondis from "@/assets/partners/remondis.png";
import conventCapital from "@/assets/partners/convent-capital.png";
import kpn from "@/assets/partners/kpn.png";
import bdo from "@/assets/partners/bdo.png";
import hays from "@/assets/partners/hays.png";
import interboorMidsland from "@/assets/partners/interboor-midsland.png";
import bluePhoenixGroup from "@/assets/partners/blue-phoenix-group.png";
import jimmyJoy from "@/assets/partners/jimmy-joy.png";
import subseaConnect from "@/assets/partners/subsea-connect.png";
import uns from "@/assets/partners/uns.png";

const partners = [
  { name: "Americold", logo: americold },
  { name: "Visiativ", logo: visiativ },
  { name: "Remondis", logo: remondis },
  { name: "Convent Capital", logo: conventCapital },
  { name: "KPN", logo: kpn },
  { name: "BDO", logo: bdo },
  { name: "Hays", logo: hays },
  { name: "Interboor Midsland", logo: interboorMidsland },
  { name: "Blue Phoenix Group", logo: bluePhoenixGroup },
  { name: "Jimmy Joy", logo: jimmyJoy },
  { name: "Subsea Connect", logo: subseaConnect },
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
        <div className="marquee-track flex items-center gap-16 w-max">
          {[...partners, ...partners].map((p, i) => (
            <img
              key={i}
              src={p.logo}
              alt={p.name}
              loading="lazy"
              width={220}
              height={80}
              className="h-20 max-w-[220px] object-contain flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
