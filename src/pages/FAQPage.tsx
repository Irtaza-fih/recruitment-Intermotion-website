import { Helmet } from "react-helmet-async";
import PageHeroBanner from "@/components/PageHeroBanner";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Wat zijn de kosten van een recruitmentbureau?",
    a: "De meeste recruitmentbureaus werken op basis van een percentage van het jaarsalaris van de geplaatste kandidaat — meestal tussen de 15% en 25%. Bij interim plaatsingen wordt gewerkt met een dag- of uurtarief inclusief bureaumarge. Recruitment Intermotion werkt altijd transparant en bespreekt tarieven vooraf.",
  },
  {
    q: "Wat zijn de beste recruiters in Nederland?",
    a: "De beste recruiter is degene die uw branche en doelgroep het beste kent. Gespecialiseerde bureaus zoals Recruitment Intermotion — gericht op Finance, IT en Sales — bieden diepere kennis en een relevanter netwerk dan generieke bureaus.",
  },
  {
    q: "Hoeveel recruitmentbureaus zijn er in Nederland?",
    a: "Nederland telt meer dan 5.000 geregistreerde recruitmentbureaus en uitzendbureaus. Het verschil zit in specialisatie — een gespecialiseerd bureau in Finance, IT of Sales heeft een gerichter netwerk en diepere vakkennis dan een generalist.",
  },
  {
    q: "Wat is een interim professional?",
    a: "Een interim professional is een ervaren specialist die tijdelijk wordt ingezet voor een specifieke opdracht, project of overbruggingsperiode. Hij of zij is direct inzetbaar, resultaatgericht en gewend snel op te starten in nieuwe organisaties.",
  },
  {
    q: "Wat kost een interim manager per uur?",
    a: "De kosten van een interim manager variëren tussen €75 en €175 per uur, afhankelijk van ervaringsniveau, discipline en duur van de opdracht. Recruitment Intermotion bespreekt tarieven altijd transparant en vooraf.",
  },
  {
    q: "Wat zijn ad interim functies?",
    a: "Ad interim functies zijn tijdelijke managementposities waarbij een ervaren professional een rol vervult totdat een vaste kandidaat is gevonden of een specifiek project is afgerond. Voorbeelden zijn interim CFO, interim IT-manager en interim sales director.",
  },
  {
    q: "Hoe lang duurt een recruitment traject?",
    a: "Een gemiddeld recruitment traject duurt vier tot acht weken — van intake en search tot eerste gesprekken en aanstelling. Bij urgente zoekopdrachten of interim plaatsingen presenteert Recruitment Intermotion vaak binnen 48 tot 72 uur de eerste kandidaten.",
  },
  {
    q: "Wat is het verschil tussen recruitment en uitzenden?",
    a: "Uitzenden is gericht op tijdelijke, vaak uitvoerende functies met de uitzendorganisatie als juridisch werkgever. Recruitment richt zich op het werven en selecteren van professionals voor vaste of langdurige posities, waarbij de kandidaat direct in dienst treedt bij de opdrachtgever.",
  },
];

export default function FAQPage() {
  const title = "Veelgestelde vragen over recruitment | Recruitment Intermotion";
  const description = "Antwoorden op de meest gestelde vragen over recruitment, interim en samenwerken met een recruitmentbureau in Nederland.";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://recruitmentintermotion.nl/veelgestelde-vragen" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://recruitmentintermotion.nl/veelgestelde-vragen" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nl_NL" />
        <meta property="og:site_name" content="Recruitment Intermotion" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map((f) => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a },
          })),
        })}</script>
      </Helmet>

      <PageHeroBanner
        title="Veelgestelde vragen"
        subtitle="Hieronder vindt u antwoorden op de meest gestelde vragen over onze diensten, werkwijze en tarieven."
      />

      <section className="py-20 bg-card">
        <div className="max-w-3xl mx-auto px-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i + 1}`}
                className="border border-border rounded-xl px-6 mb-4 bg-bg-tint"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
