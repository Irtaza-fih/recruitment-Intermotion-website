import { Helmet } from "react-helmet-async";
import PageHeroBanner from "@/components/PageHeroBanner";
import { useLang } from "@/lib/LanguageContext";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs: { nl: { q: string; a: string }; en: { q: string; a: string } }[] = [
  {
    nl: {
      q: "Wat zijn de kosten van een recruitmentbureau?",
      a: "De meeste recruitmentbureaus werken op basis van een percentage van het jaarsalaris van de geplaatste kandidaat — meestal tussen de 20% en 25%. Bij interim plaatsingen wordt gewerkt met een dag- of uurtarief inclusief bureaumarge. Recruitment Intermotion werkt altijd transparant en bespreekt tarieven vooraf.",
    },
    en: {
      q: "What are the costs of a recruitment agency?",
      a: "Most recruitment agencies work on a percentage of the annual salary of the placed candidate — usually between 20% and 25%. For interim placements, a daily or hourly rate including agency margin applies. Recruitment Intermotion always works transparently and discusses rates in advance.",
    },
  },
  {
    nl: {
      q: "Wat zijn de beste recruiters in Nederland?",
      a: "De beste recruiter is degene die uw branche en doelgroep het beste kent. Gespecialiseerde bureaus zoals Recruitment Intermotion — gericht op Finance, IT en Sales — bieden diepere kennis en een relevanter netwerk dan generieke bureaus.",
    },
    en: {
      q: "Who are the best recruiters in the Netherlands?",
      a: "The best recruiter is the one who knows your industry and target group best. Specialised agencies like Recruitment Intermotion — focused on Finance, IT and Sales — offer deeper knowledge and a more relevant network than generalists.",
    },
  },
  {
    nl: {
      q: "Hoeveel recruitmentbureaus zijn er in Nederland?",
      a: "Nederland telt meer dan 5.000 geregistreerde recruitmentbureaus en uitzendbureaus. Het verschil zit in specialisatie — een gespecialiseerd bureau in Finance, IT of Sales heeft een gerichter netwerk en diepere vakkennis dan een generalist.",
    },
    en: {
      q: "How many recruitment agencies are there in the Netherlands?",
      a: "The Netherlands has more than 5,000 registered recruitment and staffing agencies. The difference lies in specialisation — a specialised agency in Finance, IT or Sales has a more targeted network and deeper expertise than a generalist.",
    },
  },
  {
    nl: {
      q: "Wat is een interim professional?",
      a: "Een interim professional is een ervaren specialist die tijdelijk wordt ingezet voor een specifieke opdracht, project of overbruggingsperiode. Hij of zij is direct inzetbaar, resultaatgericht en gewend snel op te starten in nieuwe organisaties.",
    },
    en: {
      q: "What is an interim professional?",
      a: "An interim professional is an experienced specialist who is temporarily deployed for a specific assignment, project or transition period. They are immediately deployable, results-oriented and accustomed to getting up to speed quickly in new organisations.",
    },
  },
  {
    nl: {
      q: "Wat kost een interim manager per uur?",
      a: "De kosten van een interim manager variëren tussen €75 en €175 per uur, afhankelijk van ervaringsniveau, discipline en duur van de opdracht. Recruitment Intermotion bespreekt tarieven altijd transparant en vooraf.",
    },
    en: {
      q: "What does an interim manager cost per hour?",
      a: "The cost of an interim manager varies between €75 and €175 per hour, depending on experience level, discipline and duration of the assignment. Recruitment Intermotion always discusses rates transparently and in advance.",
    },
  },
  {
    nl: {
      q: "Wat zijn ad interim functies?",
      a: "Ad interim functies zijn tijdelijke managementposities waarbij een ervaren professional een rol vervult totdat een vaste kandidaat is gevonden of een specifiek project is afgerond. Voorbeelden zijn interim CFO, interim IT-manager en interim sales director.",
    },
    en: {
      q: "What are interim management positions?",
      a: "Interim management positions are temporary management roles where an experienced professional fills a position until a permanent candidate is found or a specific project is completed. Examples include interim CFO, interim IT manager and interim sales director.",
    },
  },
  {
    nl: {
      q: "Hoe lang duurt een recruitment traject?",
      a: "Een gemiddeld recruitment traject duurt vier tot acht weken — van intake en search tot eerste gesprekken en aanstelling. Bij urgente zoekopdrachten of interim plaatsingen presenteert Recruitment Intermotion vaak binnen 48 tot 72 uur de eerste kandidaten.",
    },
    en: {
      q: "How long does a recruitment process take?",
      a: "An average recruitment process takes four to eight weeks — from intake and search to first interviews and appointment. For urgent assignments or interim placements, Recruitment Intermotion often presents the first candidates within 48 to 72 hours.",
    },
  },
  {
    nl: {
      q: "Wat is het verschil tussen recruitment en uitzenden?",
      a: "Uitzenden is gericht op tijdelijke, vaak uitvoerende functies met de uitzendorganisatie als juridisch werkgever. Recruitment richt zich op het werven en selecteren van professionals voor vaste of langdurige posities, waarbij de kandidaat direct in dienst treedt bij de opdrachtgever.",
    },
    en: {
      q: "What is the difference between recruitment and staffing?",
      a: "Staffing focuses on temporary, often operational roles with the staffing organisation as the legal employer. Recruitment focuses on finding and selecting professionals for permanent or long-term positions, where the candidate is directly employed by the client organisation.",
    },
  },
];

export default function FAQPage() {
  const { lang } = useLang();
  const title = lang === "nl"
    ? "Veelgestelde vragen over recruitment | Recruitment Intermotion"
    : "Frequently asked questions about recruitment | Recruitment Intermotion";
  const description = lang === "nl"
    ? "Antwoorden op de meest gestelde vragen over recruitment, interim en samenwerken met een recruitmentbureau in Nederland."
    : "Answers to the most frequently asked questions about recruitment, interim and working with a recruitment agency in the Netherlands.";

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
            "name": f.nl.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.nl.a },
          })),
        })}</script>
      </Helmet>

      <PageHeroBanner
        title={lang === "nl" ? "Veelgestelde vragen" : "Frequently asked questions"}
        subtitle={lang === "nl"
          ? "Hieronder vindt u antwoorden op de meest gestelde vragen over onze diensten, werkwijze en tarieven."
          : "Below you will find answers to the most frequently asked questions about our services, approach and rates."}
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
                  {f[lang].q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {f[lang].a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
