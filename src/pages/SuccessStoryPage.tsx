import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { useLang } from "@/lib/LanguageContext";
import { useAppNavigate } from "@/hooks/useAppNavigate";
import { successStories, sectorBadgeClass } from "@/data/successStories";

interface StoryContent {
  seo: {
    title: { nl: string; en: string };
    description: { nl: string; en: string };
    canonical: string;
    jsonLd: object;
  };
  h1: { nl: string; en: string };
  meta: Array<{ label: { nl: string; en: string }; value: { nl: string; en: string } }>;
  website: { label: string; url: string };
  sections: Array<{
    heading: { nl: string; en: string };
    paragraphs: Array<{ nl: string; en: string }>;
  }>;
  cta: {
    heading: { nl: string; en: string };
    sub: { nl: string; en: string };
    secondary: { label: { nl: string; en: string }; href: string };
  };
}

const CONTENT: Record<string, StoryContent> = {
  uns: {
    seo: {
      title: {
        nl: "Financial Controller geplaatst bij UNStudio Amsterdam | Recruitment Intermotion",
        en: "Financial Controller placed at UNStudio Amsterdam | Recruitment Intermotion",
      },
      description: {
        nl: "Hoe Recruitment Intermotion voor UNStudio — een toonaangevend internationaal architecten- en designbureau — een Financial Controller vond die finance en business écht verbindt. Lees het verhaal.",
        en: "How Recruitment Intermotion found a Financial Controller for UNStudio — a leading international architecture and design studio — who truly connects finance and business. Read the story.",
      },
      canonical: "https://recruitmentintermotion.nl/success-stories/uns",
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Financial Controller geplaatst bij UNStudio Amsterdam",
        description:
          "Hoe Recruitment Intermotion voor UNStudio een Financial Controller vond die finance en business écht verbindt.",
        author: {
          "@type": "Organization",
          name: "Recruitment Intermotion",
          url: "https://recruitmentintermotion.nl",
        },
        about: {
          "@type": "Organization",
          name: "UNStudio",
          url: "https://www.unstudio.com",
          location: "Amsterdam, Nederland",
        },
        keywords:
          "financial controller recruitment, finance recruitment Amsterdam, architectenbureau, Recruitment Intermotion, UNStudio",
      },
    },
    h1: {
      nl: "UNStudio: Financial Controller gevonden voor een wereldwijd architectenbureau in groei",
      en: "UNStudio: Financial Controller placed for a globally growing architecture studio",
    },
    meta: [
      {
        label: { nl: "Bedrijf", en: "Company" },
        value: { nl: "UNStudio", en: "UNStudio" },
      },
      {
        label: { nl: "Sector", en: "Sector" },
        value: { nl: "Architectuur & Design", en: "Architecture & Design" },
      },
      {
        label: { nl: "Kantoren", en: "Offices" },
        value: {
          nl: "Amsterdam, Shanghai, Hong Kong, Frankfurt, Dubai, Melbourne, Austin",
          en: "Amsterdam, Shanghai, Hong Kong, Frankfurt, Dubai, Melbourne, Austin",
        },
      },
      {
        label: { nl: "Medewerkers", en: "Employees" },
        value: { nl: "400+", en: "400+" },
      },
    ],
    website: { label: "unstudio.com", url: "https://www.unstudio.com" },
    sections: [
      {
        heading: { nl: "De uitdaging", en: "The challenge" },
        paragraphs: [
          {
            nl: "UNStudio is geen gewoon architectenbureau. Met meer dan 400 medewerkers verspreid over zeven kantoren wereldwijd ontwerpt UNStudio ambitieuze projecten die grenzen verleggen. Juist in een organisatie van die omvang en complexiteit stelt de financiële functie hoge eisen aan de mensen die haar vervullen.",
            en: "UNStudio is no ordinary architecture firm. With over 400 employees across seven global offices, UNStudio designs ambitious projects that push boundaries. In an organisation of that scale and complexity, the finance function demands exceptional people.",
          },
          {
            nl: "Tegen de achtergrond van sterke groei, een structurele scheiding tussen finance en business, en een duidelijke koers richting verdere professionalisering, was UNStudio op zoek naar een ambitieuze Financial Controller. Niet zomaar iemand die de boeken bijhoudt. Wij zochten een professional die verder kijkt dan de cijfers en data vertaalt naar heldere, bruikbare inzichten waarmee stakeholders weloverwogen beslissingen kunnen nemen.",
            en: "Against a backdrop of strong growth, a structural separation between finance and business, and a drive towards further professionalisation, UNStudio was searching for an ambitious Financial Controller. Not just someone to manage the books. We were looking for a professional who looks beyond the numbers and translates data into clear, actionable insights that help stakeholders make informed decisions.",
          },
        ],
      },
      {
        heading: { nl: "Onze aanpak", en: "Our approach" },
        paragraphs: [
          {
            nl: "Een diepgaand en oprecht gesprek met de managing director en CFO van UNStudio bleek cruciaal. Niet om een profiel af te vinken, maar om echt te begrijpen welk type Financial Controller zij nodig hadden en wie de juiste persoon zou zijn voor deze specifieke organisatie, cultuur en fase van groei.",
            en: "Meaningful and constructive conversations with UNStudio's managing director and CFO proved essential. Not to tick off a checklist, but to genuinely understand what kind of Financial Controller they truly needed and who would be the right fit for this specific organisation, culture and stage of growth.",
          },
          {
            nl: "Dit was een echte hunt assignment: geen vacaturebank, geen standaard werving. Wij gingen actief op zoek naar de kandidaat die niet alleen op papier past, maar die ook de ambitie en het karakter heeft om te groeien met UNStudio.",
            en: "This was a true hunt assignment: no job boards, no standard recruitment. We actively searched for the candidate who not only fits on paper, but who also has the ambition and character to grow with UNStudio.",
          },
        ],
      },
      {
        heading: { nl: "Het resultaat", en: "The result" },
        paragraphs: [
          {
            nl: "De opdracht resulteerde in de succesvolle plaatsing van een Financial Controller bij UNStudio Amsterdam. Een match die verder gaat dan competenties en ervaring. Een verbinding op basis van persoonlijkheid, ambitie en organisatiefit.",
            en: "The assignment culminated in the successful placement of a Financial Controller at UNStudio Amsterdam. A match that goes beyond competencies and experience. A connection built on personality, ambition and organisational fit.",
          },
        ],
      },
    ],
    cta: {
      heading: {
        nl: "Ook op zoek naar de juiste Finance professional?",
        en: "Also looking for the right Finance professional?",
      },
      sub: {
        nl: "Wij voeren het gesprek dat verder gaat dan het profiel.",
        en: "We have the conversation that goes beyond the profile.",
      },
      secondary: {
        label: { nl: "Bekijk Finance Recruitment", en: "View Finance Recruitment" },
        href: "/finance-recruitment",
      },
    },
  },
  brightlyn: {
    seo: {
      title: {
        nl: "(Senior) Manager IT Audit geplaatst bij Brightlyn | Recruitment Intermotion",
        en: "(Senior) Manager IT Audit placed at Brightlyn | Recruitment Intermotion",
      },
      description: {
        nl: "Hoe Recruitment Intermotion voor Brightlyn, een jonge boutique consultancy in cybersecurity en IT audit, de juiste (Senior) Manager IT Audit vond via een intensief en persoonlijk wervingstraject.",
        en: "How Recruitment Intermotion found the right (Senior) Manager IT Audit for Brightlyn, a young boutique consultancy in cybersecurity and IT audit, through an intensive and highly personal search.",
      },
      canonical: "https://recruitmentintermotion.nl/success-stories/brightlyn",
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "(Senior) Manager IT Audit geplaatst bij Brightlyn",
        description:
          "Hoe Recruitment Intermotion voor Brightlyn de juiste (Senior) Manager IT Audit vond via een intensief en persoonlijk wervingstraject.",
        author: {
          "@type": "Organization",
          name: "Recruitment Intermotion",
          url: "https://recruitmentintermotion.nl",
        },
        about: {
          "@type": "Organization",
          name: "Brightlyn",
          url: "https://www.brightlyn.nl",
          location: "Nederland",
        },
        keywords:
          "IT audit recruitment, cybersecurity recruitment Nederland, manager IT audit, ISO 27001, NIS2, DORA, Recruitment Intermotion",
      },
    },
    h1: {
      nl: "Brightlyn: (Senior) Manager IT Audit gevonden voor een groeiende cybersecurity boutique",
      en: "Brightlyn: (Senior) Manager IT Audit placed for a growing cybersecurity boutique",
    },
    meta: [
      {
        label: { nl: "Bedrijf", en: "Company" },
        value: { nl: "Brightlyn", en: "Brightlyn" },
      },
      {
        label: { nl: "Sector", en: "Sector" },
        value: { nl: "Cybersecurity en IT Audit", en: "Cybersecurity and IT Audit" },
      },
      {
        label: { nl: "Specialisaties", en: "Specialisations" },
        value: { nl: "ISO 27001, NIS2, DORA", en: "ISO 27001, NIS2, DORA" },
      },
      {
        label: { nl: "Type", en: "Type" },
        value: { nl: "Boutique consultancy", en: "Boutique consultancy" },
      },
    ],
    website: { label: "brightlyn.nl", url: "https://www.brightlyn.nl" },
    sections: [
      {
        heading: { nl: "De uitdaging", en: "The challenge" },
        paragraphs: [
          {
            nl: "Brightlyn is een jonge, gespecialiseerde boutique consultancy op het gebied van cybersecurity en IT audit. Het bureau is opgericht door twee ervaren IT Auditors met een achtergrond bij de Big 4 en brengt een frisse visie op hoe organisaties begeleid kunnen worden bij vraagstukken rondom ISO 27001, NIS2 en DORA.",
            en: "Brightlyn is a young, specialised boutique consultancy in cybersecurity and IT audit. Founded by two experienced IT Auditors from the Big 4, the firm brings a fresh perspective on how to support and advise organisations on current regulations including ISO 27001, NIS2 and DORA.",
          },
          {
            nl: "Met die ambitie en groeifase in het achterhoofd zochten zij naar een (Senior) Manager IT Audit. Niet zomaar een audit professional, maar iemand die bereid is zijn of haar expertise in te zetten in een bredere en meer impactvolle adviesrol. Iemand die niet alleen uren schrijft, maar een ondernemende instelling heeft die past bij een startuporganisatie.",
            en: "With that ambition and growth phase in mind, they were searching for a (Senior) Manager IT Audit. Not just any audit professional, but someone willing to apply their expertise in a broader and more impactful advisory context. Someone who does not just bill hours, but brings an entrepreneurial mindset that fits a start-up organisation.",
          },
        ],
      },
      {
        heading: { nl: "Onze aanpak", en: "Our approach" },
        paragraphs: [
          {
            nl: "Dit was een oprecht veeleisende zoektocht. Wij spraken met veel kandidaten die technisch sterk waren, maar niet de juiste competenties bezaten om aan te sluiten bij de cultuur en missie van Brightlyn.",
            en: "This was a genuinely demanding search. We spoke with many candidates who were a strong technical fit, yet did not possess the right competencies to match Brightlyn's culture and mission.",
          },
          {
            nl: "Via een intensieve en zeer persoonlijke benadering van kandidaten konden wij toch een sterke shortlist samenstellen. Niet door breed te zoeken, maar door gericht de juiste mensen te benaderen en het gesprek aan te gaan op een manier die verder gaat dan het cv.",
            en: "Through an intensive and highly personal approach to candidate outreach, we were able to compile a strong shortlist. Not by casting a wide net, but by reaching out to the right people in a targeted way and having conversations that go well beyond the CV.",
          },
        ],
      },
      {
        heading: { nl: "Het resultaat", en: "The result" },
        paragraphs: [
          {
            nl: "Het traject resulteerde in de plaatsing van een (Senior) Manager IT Audit die niet alleen technisch uitstekend onderlegd is, maar ook de ondernemende instelling heeft die Brightlyn zocht. Een match waarbij vakinhoud en persoonlijkheid volledig op elkaar aansluiten.",
            en: "The process resulted in the placement of a (Senior) Manager IT Audit who is not only technically excellent, but also brings the entrepreneurial mindset Brightlyn was looking for. A match where expertise and personality align completely.",
          },
        ],
      },
    ],
    cta: {
      heading: {
        nl: "Ook op zoek naar IT Audit of cybersecurity talent?",
        en: "Also looking for IT Audit or cybersecurity talent?",
      },
      sub: {
        nl: "Wij vinden de professional die past bij uw organisatie en ambitie.",
        en: "We find the professional who fits your organisation and ambition.",
      },
      secondary: {
        label: { nl: "Bekijk IT Recruitment", en: "View IT Recruitment" },
        href: "/it-recruitment",
      },
    },
  },
  remondis: {
    seo: {
      title: {
        nl: "Business Controller geplaatst bij REMONDIS Nederland | Recruitment Intermotion",
        en: "Business Controller placed at REMONDIS Netherlands | Recruitment Intermotion",
      },
      description: {
        nl: "Hoe Recruitment Intermotion voor REMONDIS Nederland een Business Controller vond die de brug vormt tussen finance en de operationele business in de Noord-Hollandse vestigingen.",
        en: "How Recruitment Intermotion found a Business Controller for REMONDIS Netherlands who bridges finance and operational business across the North Holland branches.",
      },
      canonical: "https://recruitmentintermotion.nl/success-stories/remondis",
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Business Controller geplaatst bij REMONDIS Nederland",
        description:
          "Hoe Recruitment Intermotion voor REMONDIS Nederland een Business Controller vond die de brug vormt tussen finance en de operationele business.",
        author: {
          "@type": "Organization",
          name: "Recruitment Intermotion",
          url: "https://recruitmentintermotion.nl",
        },
        about: {
          "@type": "Organization",
          name: "REMONDIS Nederland",
          url: "https://www.remondis.nl",
          location: "Nederland",
        },
        keywords:
          "business controller recruitment, finance recruitment Nederland, REMONDIS, recycling sector, Recruitment Intermotion",
      },
    },
    h1: {
      nl: "REMONDIS: Business Controller gevonden voor een organisatie waar finance en operatie elkaar raken",
      en: "REMONDIS: Business Controller placed for an organisation where finance and operations meet",
    },
    meta: [
      {
        label: { nl: "Bedrijf", en: "Company" },
        value: { nl: "REMONDIS Nederland", en: "REMONDIS Netherlands" },
      },
      {
        label: { nl: "Sector", en: "Sector" },
        value: {
          nl: "Afvalbeheer, Recycling en Waterbeheer",
          en: "Waste Management, Recycling and Water Management",
        },
      },
      {
        label: { nl: "Vestigingen", en: "Locations" },
        value: {
          nl: "Meer dan 40 locaties in Nederland",
          en: "Over 40 locations across the Netherlands",
        },
      },
      {
        label: { nl: "Onderdeel van", en: "Part of" },
        value: {
          nl: "REMONDIS Group (internationaal)",
          en: "REMONDIS Group (international)",
        },
      },
    ],
    website: { label: "remondis.nl", url: "https://www.remondis.nl" },
    sections: [
      {
        heading: { nl: "De uitdaging", en: "The challenge" },
        paragraphs: [
          {
            nl: "REMONDIS Nederland is een van de grootste spelers op het gebied van afvalbeheer, recycling en waterbeheer in Nederland, met meer dan veertig vestigingen door het hele land. Door aanhoudende groei was de organisatie op zoek naar een Business Controller voor de Noord-Hollandse vestigingen.",
            en: "REMONDIS Netherlands is one of the largest players in waste management, recycling and water management in the Netherlands, with over forty locations across the country. Due to continued growth, the organisation was looking for a Business Controller for the North Holland branches.",
          },
          {
            nl: "In deze rol draagt de kandidaat actief bij aan de strategie van de organisatie en adviseert hij of zij stakeholders over operationele, commerciële en financiële vraagstukken. De ideale kandidaat is de brug tussen finance en de business. Iemand met sterk analytisch vermogen die financiële data weet te vertalen naar strategisch advies. Proactief, analytisch en even thuis in de financiële wereld als in de dagelijkse operatie.",
            en: "In this role, the candidate actively contributes to the organisation's strategy and advises stakeholders on operational, commercial and financial challenges. The ideal candidate is the bridge between finance and the business. Someone with strong analytical skills who can translate financial data into strategic advice. Proactive, analytical, and equally at home in the financial world and in day-to-day operations.",
          },
        ],
      },
      {
        heading: { nl: "Onze aanpak", en: "Our approach" },
        paragraphs: [
          {
            nl: "Wat deze opdracht bijzonder uitdagend maakte, was de specifieke combinatie van procesgerichte instelling, motivatie en ambitie die de hiring manager zocht. Die kwaliteiten zijn niet af te lezen van een cv. Ze komen alleen naar boven in een oprecht persoonlijk gesprek, waarbij de juiste vragen, scherp en op maat gesteld, kandidaten uitnodigen om buiten hun comfortzone te treden.",
            en: "What made this search particularly challenging was the specific combination of process-oriented thinking, motivation and ambition the hiring manager was looking for. These qualities cannot be read from a CV alone. They reveal themselves only through genuine one-on-one conversations, where the right questions, sharp and personal, encourage candidates to step outside their comfort zone.",
          },
          {
            nl: "Wij voerden die gesprekken. Niet als een screeningsprocedure, maar als een echte ontmoeting waarbij we wilden begrijpen wie iemand is en wat hem of haar drijft.",
            en: "We had those conversations. Not as a screening procedure, but as a real meeting where we wanted to understand who someone is and what drives them.",
          },
        ],
      },
      {
        heading: { nl: "Het resultaat", en: "The result" },
        paragraphs: [
          {
            nl: "Een mooie opdracht, afgerond met groot succes. Wij zijn trots op de plaatsing van een ambitieuze en gedreven Business Controller bij REMONDIS Nederland. Iemand die de verbinding legt tussen de cijfers en de business en daarmee direct bijdraagt aan de strategie van de organisatie.",
            en: "A wonderful assignment, completed with great success. We are proud to have placed an ambitious and driven Business Controller at REMONDIS Netherlands. Someone who builds the connection between the numbers and the business and directly contributes to the organisation's strategy.",
          },
        ],
      },
    ],
    cta: {
      heading: {
        nl: "Ook op zoek naar een Finance professional die verder kijkt dan de cijfers?",
        en: "Also looking for a Finance professional who looks beyond the numbers?",
      },
      sub: {
        nl: "Wij voeren het gesprek dat een cv niet kan voeren.",
        en: "We have the conversation a CV cannot have.",
      },
      secondary: {
        label: { nl: "Bekijk Finance Recruitment", en: "View Finance Recruitment" },
        href: "/finance-recruitment",
      },
    },
  },
};

export default function SuccessStoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLang();
  const navigate = useAppNavigate();
  const story = successStories.find((s) => s.slug === slug);
  const content = slug ? CONTENT[slug] : undefined;

  if (!story || !content) {
    return (
      <>
        <Helmet>
          <title>
            {lang === "nl"
              ? "Verhaal niet gevonden | Recruitment Intermotion"
              : "Story not found | Recruitment Intermotion"}
          </title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <section className="pt-36 pb-24 bg-card">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h1 className="text-3xl font-extrabold text-foreground mb-6">
              {lang === "nl" ? "Verhaal niet gevonden" : "Story not found"}
            </h1>
            <button
              onClick={() => navigate("/success-stories")}
              className="text-accent-blue font-semibold hover:underline"
            >
              {lang === "nl" ? "← Terug naar alle succesverhalen" : "← Back to all success stories"}
            </button>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{content.seo.title[lang]}</title>
        <meta name="description" content={content.seo.description[lang]} />
        <link rel="canonical" href={content.seo.canonical} />
        <meta property="og:title" content={content.seo.title[lang]} />
        <meta property="og:description" content={content.seo.description[lang]} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={content.seo.canonical} />
        <script type="application/ld+json">{JSON.stringify(content.seo.jsonLd)}</script>
      </Helmet>

      <section className="pt-32 pb-12 bg-card">
        <div className="max-w-3xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="text-sm text-muted-foreground mb-6" aria-label="breadcrumb">
            <button onClick={() => navigate("/")} className="hover:text-accent-blue">
              Home
            </button>
            <span className="mx-2">→</span>
            <button
              onClick={() => navigate("/success-stories")}
              className="hover:text-accent-blue"
            >
              {lang === "nl" ? "Succesverhalen" : "Success Stories"}
            </button>
            <span className="mx-2">→</span>
            <span className="text-foreground">{story.company}</span>
          </nav>

          {/* Sector badge */}
          <span
            className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-5 ${sectorBadgeClass[story.sector]}`}
          >
            {story.sector}
          </span>

          {/* H1 with logo */}
          <div className="flex flex-col sm:flex-row sm:items-start gap-5 mb-8">
            <h1 className="flex-1 text-3xl md:text-4xl font-extrabold text-foreground leading-tight order-2 sm:order-1">
              {content.h1[lang]}
            </h1>
            {story.logoUrl && (
              <img
                src={story.logoUrl}
                alt={`${story.company} logo`}
                className="order-1 sm:order-2 flex-shrink-0 self-center sm:self-auto w-12 h-12 sm:w-16 sm:h-16 rounded-lg"
                style={{ objectFit: "contain", border: "1px solid #e5e7eb" }}
              />
            )}
          </div>

          {/* Client info bar */}
          <div className="bg-bg-tint border border-border rounded-2xl p-6 mb-12 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            {content.meta.map((m) => (
              <div key={m.label[lang]}>
                <div className="text-muted-foreground text-xs uppercase tracking-wider font-semibold mb-1">
                  {m.label[lang]}
                </div>
                <div className="text-foreground font-medium">{m.value[lang]}</div>
              </div>
            ))}
            <div>
              <div className="text-muted-foreground text-xs uppercase tracking-wider font-semibold mb-1">
                Website
              </div>
              <a
                href={content.website.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-blue font-medium hover:underline"
              >
                {content.website.label}
              </a>
            </div>
          </div>

          {/* Story sections */}
          <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
            {content.sections.map((sec) => (
              <div key={sec.heading.en}>
                <h2 className="text-2xl font-extrabold text-foreground mt-10 mb-4">
                  {sec.heading[lang]}
                </h2>
                {sec.paragraphs.map((p, i) => (
                  <p key={i} className="text-muted-foreground mb-4">
                    {p[lang]}
                  </p>
                ))}
              </div>
            ))}

            {/* QUOTE BLOCK — uncomment and fill in when client provides quote
            <blockquote className="border-l-4 border-accent-blue bg-bg-tint px-6 py-4 my-8 rounded-r-lg">
              <p className="text-foreground italic mb-2">"[quote text here]"</p>
              <footer className="text-sm text-muted-foreground">— [Naam], [Functie], {story.company}</footer>
            </blockquote>
            */}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "#1F217D" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4" style={{ color: "white" }}>
            {content.cta.heading[lang]}
          </h2>
          <p className="mb-8" style={{ color: "rgba(255,255,255,0.75)" }}>
            {content.cta.sub[lang]}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/contact")}
              className="bg-primary-foreground text-primary px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              {lang === "nl" ? "Neem contact op" : "Get in touch"}
            </button>
            <button
              onClick={() => navigate(content.cta.secondary.href)}
              className="px-6 py-3 rounded-full font-semibold border-2 transition-all hover:-translate-y-0.5"
              style={{ borderColor: "white", color: "white" }}
            >
              {content.cta.secondary.label[lang]}
            </button>
          </div>
        </div>
      </section>

      {/* Back link */}
      <section className="py-12 bg-card">
        <div className="max-w-3xl mx-auto px-6">
          <button
            onClick={() => navigate("/success-stories")}
            className="text-accent-blue font-semibold hover:underline"
          >
            {lang === "nl" ? "← Terug naar alle succesverhalen" : "← Back to all success stories"}
          </button>
        </div>
      </section>
    </>
  );
}
