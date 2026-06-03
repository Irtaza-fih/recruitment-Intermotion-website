export type Lang = "nl" | "en";

export const translations = {
  nav: {
    home: { nl: "Home", en: "Home" },
    about: { nl: "Over ons", en: "About" },
    vacancies: { nl: "Vacatures", en: "Vacancies" },
    contact: { nl: "Contact", en: "Contact" },
    services: { nl: "Diensten", en: "Services" },
    finance: { nl: "Finance Recruitment", en: "Finance Recruitment" },
    sales: { nl: "Sales Recruitment", en: "Sales Recruitment" },
    it: { nl: "IT Recruitment", en: "IT Recruitment" },
    interim: { nl: "Interim", en: "Interim" },
    cta: { nl: "Neem contact op", en: "Get in touch" },
  },
  hero: {
    tagline: { nl: "When a job turns into an adventure", en: "When a job turns into an adventure" },
    ctaPrimary: { nl: "Neem contact op", en: "Get in touch" },
    ctaSecondary: { nl: "Bekijk vacatures", en: "View vacancies" },
    scroll: { nl: "scroll", en: "scroll" },
  },
  stats: {
    years: { nl: "Jaar Ervaring", en: "Years Experience" },
    disciplines: { nl: "Disciplines", en: "Disciplines" },
    approach: { nl: "Maatwerk Aanpak", en: "Custom Approach" },
  },
  about: {
    eyebrow: { nl: "Over Recruitment Intermotion", en: "About Recruitment Intermotion" },
    title: {
      nl: "De juiste mensen op de juiste plek, <em>nét even anders</em>",
      en: "The right people in the right place, <em>just a little differently</em>",
    },
    p1: {
      nl: "Bij Recruitment Intermotion verbinden wij ambitieuze bedrijven met de professionals die hen helpen vooruit te bewegen — succesvol en duurzaam.",
      en: "At Recruitment Intermotion we connect ambitious companies with the professionals who help them move forward — successfully and sustainably.",
    },
    p2: {
      nl: "We werven voor zowel vaste functies als interim rollen in uiteenlopende disciplines: <accent>Finance, IT & Sales</accent>.",
      en: "We recruit for both permanent positions and interim roles across various disciplines: <accent>Finance, IT & Sales</accent>.",
    },
    p3: {
      nl: "Daarnaast bieden we zowel fractional als interim recruitment aan: wij fungeren als jullie flexibele talentpartner die de chaos van een start-up, het momentum van een scale-up, de complexiteit van familiebedrijven én corporate structuren begrijpt.",
      en: "We also offer both fractional and interim recruitment: we act as your flexible talent partner who understands the chaos of a start-up, the momentum of a scale-up, the complexity of family businesses and corporate structures.",
    },
    p4: {
      nl: "Met meer dan 15 jaar ervaring en een scherp inzicht in de behoeften van organisaties en kandidaten, begrijpen wij als geen ander de complexiteit van het <accent>vinden, boeien én binden</accent> van professionals.",
      en: "With over 15 years of experience and a keen insight into the needs of organisations and candidates, we understand like no other the complexity of <accent>finding, engaging and retaining</accent> professionals.",
    },
    p5: {
      nl: "Wij geloven niet in een one-size-fits-all-benadering. Wij geloven in maatwerk, <accent>ondersteund door automatisering</accent> en gedreven door <accent>creativiteit</accent>. Wij weten als geen ander dat echte resultaten niet voortkomen uit standaardmethodes, maar uit <accent>een innovatieve én persoonlijke aanpak</accent>.",
      en: "We don't believe in a one-size-fits-all approach. We believe in bespoke solutions, <accent>supported by automation</accent> and driven by <accent>creativity</accent>. We know like no other that real results don't come from standard methods, but from <accent>an innovative and personal approach</accent>.",
    },
    p6: {
      nl: "Oprechte interesse in de mens vormt het fundament van onze aanpak. Een gesprek betekent voor ons een avontuur vol onverwachte wendingen, verrassende zijsprongen en het stellen van scherpe vragen. Humor en het durven opzoeken van de 'randen' mogen daarbij zeker niet ontbreken.",
      en: "Genuine interest in people forms the foundation of our approach. A conversation means to us an adventure full of unexpected turns, surprising detours and asking sharp questions. Humour and daring to explore the edges are certainly part of that.",
    },
    p7: {
      nl: "Samen bouwen we aan een succesvolle toekomst voor jouw organisatie met de juiste mensen op de juiste plek.",
      en: "Together we build a successful future for your organisation with the right people in the right place.",
    },
    p8: {
      nl: "En ja... <accent>wij doen het nét even anders</accent>!",
      en: "And yes... <accent>we do it just a little differently</accent>!",
    },
    quote: {
      nl: '"Welkom bij Recruitment Intermotion, waar potentieel wordt ontdekt en ambities worden gerealiseerd."',
      en: '"Welcome to Recruitment Intermotion, where potential is discovered and ambitions are realised."',
    },
    ctaTitle: {
      nl: "Klaar voor de juiste match?",
      en: "Ready for the right match?",
    },
    ctaText: {
      nl: "",
      en: "",
    },
    ctaButton: { nl: "Ga het gesprek aan", en: "Start the conversation" },
    badge: { nl: "15+ Jaar Ervaring", en: "15+ Years Experience" },
  },
  services: {
    eyebrow: { nl: "Onze diensten", en: "Our services" },
    title: {
      nl: "Waar kunnen wij <em>u</em> mee helpen?",
      en: "How can we <em>help</em> you?",
    },
    more: { nl: "Meer informatie", en: "More information" },
    items: [
      {
        tag: { nl: "Finance", en: "Finance" },
        title: { nl: "Finance Recruitment", en: "Finance Recruitment" },
        desc: {
          nl: "Van financial controller tot CFO — wij werven de beste finance professionals voor vaste en interim functies in Nederland.",
          en: "From financial controller to CFO — we recruit the best finance professionals for permanent and interim roles in the Netherlands.",
        },
        path: "/finance-recruitment",
      },
      {
        tag: { nl: "Sales", en: "Sales" },
        title: { nl: "Sales Recruitment", en: "Sales Recruitment" },
        desc: {
          nl: "Van accountmanager tot Sales Director — wij vinden resultaatgerichte sales talenten voor bedrijven in de Randstad en Noord-Brabant.",
          en: "From account manager to Sales Director — we find results-driven sales talent for companies in the Randstad and Noord-Brabant.",
        },
        path: "/sales-recruitment",
      },
      {
        tag: { nl: "IT", en: "IT" },
        title: { nl: "IT Recruitment", en: "IT Recruitment" },
        desc: {
          nl: "Van software developer tot IT Manager — wij verbinden bedrijven met de beste IT professionals voor vaste en interim functies.",
          en: "From software developer to IT Manager — we connect companies with the best IT professionals for permanent and interim roles.",
        },
        path: "/it-recruitment",
      },
      {
        tag: { nl: "Interim", en: "Interim" },
        title: { nl: "Interim Professionals", en: "Interim Professionals" },
        desc: {
          nl: "Snel een gekwalificeerde interim specialist inzetten? Wij leveren flexibele oplossingen in Finance, IT en Sales.",
          en: "Need to quickly deploy a qualified interim specialist? We deliver flexible solutions in Finance, IT and Sales.",
        },
        path: "/interim",
      },
    ],
  },
  partners: {
    title: {
      nl: "Onze <em>partners</em>",
      en: "Our <em>partners</em>",
    },
  },
  testimonials: {
    title: {
      nl: "Wat onze <em>klanten</em> zeggen",
      en: "What our <em>clients</em> say",
    },
    items: [
      {
        initials: "JM",
        name: { nl: "Joost Meininger", en: "Joost Meininger" },
        role: { nl: "KPN", en: "KPN" },
        quote: {
          nl: "Recruitment Intermotion heeft ons geholpen een senior finance manager te vinden in een krappe markt. Het proces was snel, persoonlijk en het resultaat overtrof onze verwachtingen.",
          en: "Recruitment Intermotion helped us find a senior finance manager in a tight market. The process was fast, personal and the result exceeded our expectations.",
        },
      },
      {
        initials: "JJ",
        name: { nl: "Jan de Jonge", en: "Jan de Jonge" },
        role: { nl: "Brood van SOMA", en: "Brood van SOMA" },
        quote: {
          nl: "Marijn denkt écht mee. Geen standaard profielen, maar kandidaten die echt passen bij onze cultuur en ambities. Een verademing in de recruitmentwereld.",
          en: "Marijn really thinks along. No standard profiles, but candidates who truly fit our culture and ambitions. A breath of fresh air in the recruitment world.",
        },
      },
      {
        initials: "IL",
        name: { nl: "Igor La Vos", en: "Igor La Vos" },
        role: { nl: "Plastica Groep", en: "Plastica Groep" },
        quote: {
          nl: "Snel, persoonlijk en raak. De interim oplossing die Recruitment Intermotion leverde was precies wat we nodig hadden om onze financiële transformatie te ondersteunen.",
          en: "Fast, personal and spot-on. The interim solution Recruitment Intermotion delivered was exactly what we needed to support our financial transformation.",
        },
      },
      {
        initials: "SR",
        name: { nl: "Stijn Rohof", en: "Stijn Rohof" },
        role: { nl: "KPN", en: "KPN" },
        quote: {
          nl: "Marijn werkt met een grondige intake en zorgt daarmee voor een gerichte search met passende kandidaten. Het resultaat was uitstekend: meerdere nieuwe collega's én een nette afhandeling voor kandidaten zonder match.",
          en: "Marijn works with a thorough intake and thereby ensures a targeted search with suitable candidates. The result was excellent: multiple new colleagues and a proper handling for candidates without a match.",
        },
      },
      {
        initials: "CW",
        name: { nl: "Chantal van der Walle", en: "Chantal van der Walle" },
        role: { nl: "KPN", en: "KPN" },
        quote: {
          nl: "Marijn is een empathische recruiter die je als kandidaat echt het gevoel geeft dat hij volledig voor jou gaat. Zijn betrokkenheid en persoonlijke aanpak maken hem een absolute topper!",
          en: "Marijn is an empathetic recruiter who truly makes you feel as a candidate that he is fully committed to you. His involvement and personal approach make him an absolute star!",
        },
      },
      {
        initials: "MW",
        name: { nl: "Mattijs Wever", en: "Mattijs Wever" },
        role: { nl: "Idverde", en: "Idverde" },
        quote: {
          nl: "Marijn onderscheidt zich door zijn professionaliteit en zijn scherpe oog voor een goede match — ook daar waar dit op het eerste gezicht niet voor de hand lag. Een absolute aanrader voor wie op zoek is naar een recruiter die écht de juiste fit weet te vinden.",
          en: "Marijn distinguishes himself through his professionalism and his keen eye for a good match — even where this was not obvious at first glance. An absolute recommendation for anyone looking for a recruiter who truly knows how to find the right fit.",
        },
      },
    ],
  },
  vacancyCta: {
    title: {
      nl: "Op zoek naar een nieuwe <em>uitdaging</em>?",
      en: "Looking for a new <em>challenge</em>?",
    },
    text: {
      nl: "Bekijk onze actuele vacatures en vind je volgende carrièrestap.",
      en: "Browse our current vacancies and find your next career move.",
    },
    ctaPrimary: { nl: "Bekijk vacatures", en: "View vacancies" },
    ctaSecondary: { nl: "Neem contact op", en: "Get in touch" },
  },
  vacanciesPage: {
    title: { nl: "Vacatures", en: "Vacancies" },
    subtitle: {
      nl: "Ontdek onze actuele vacatures in Finance, IT en Sales",
      en: "Discover our current vacancies in Finance, IT and Sales",
    },
    viewBtn: { nl: "Bekijk vacature", en: "View vacancy" },
    items: [
      {
        discipline: "Finance",
        title: { nl: "Financial Controller", en: "Financial Controller" },
        location: { nl: "Amsterdam", en: "Amsterdam" },
        type: { nl: "Vast", en: "Permanent" },
        desc: {
          nl: "Wij zoeken een ervaren Financial Controller voor een snelgroeiende organisatie in Amsterdam. Je bent verantwoordelijk voor de financiële rapportage en analyse.",
          en: "We are looking for an experienced Financial Controller for a fast-growing organisation in Amsterdam. You will be responsible for financial reporting and analysis.",
        },
      },
      {
        discipline: "IT",
        title: { nl: "IT Project Manager", en: "IT Project Manager" },
        location: { nl: "Rotterdam", en: "Rotterdam" },
        type: { nl: "Interim", en: "Interim" },
        desc: {
          nl: "Voor een groot IT-transformatieproject zoeken wij een ervaren Project Manager. Je stuurt multidisciplinaire teams aan en waarborgt de voortgang.",
          en: "For a large IT transformation project, we are looking for an experienced Project Manager. You will lead multidisciplinary teams and ensure progress.",
        },
      },
      {
        discipline: "Sales",
        title: { nl: "Sales Manager Benelux", en: "Sales Manager Benelux" },
        location: { nl: "Utrecht", en: "Utrecht" },
        type: { nl: "Vast", en: "Permanent" },
        desc: {
          nl: "Een ambitieuze organisatie zoekt een Sales Manager die het Benelux-team naar het volgende niveau tilt. Ervaring in B2B sales is vereist.",
          en: "An ambitious organisation is looking for a Sales Manager to take the Benelux team to the next level. B2B sales experience is required.",
        },
      },
    ],
  },
  aboutPage: {
    title: { nl: "Over Recruitment Intermotion", en: "About Recruitment Intermotion" },
    subtitle: {
      nl: "Het verhaal achter de missie",
      en: "The story behind the mission",
    },
    eyebrow: { nl: "Het verhaal", en: "The story" },
    heading: {
      nl: "Opgericht vanuit <em>passie</em> voor recruitment",
      en: "Founded from <em>passion</em> for recruitment",
    },
    bio1: {
      nl: "Recruitment Intermotion is in 2022 opgericht door Marijn Schilder. Met een achtergrond bij gerenommeerde organisaties als Hays, BDO Advisory en KPN, heeft Marijn een scherp oog ontwikkeld voor wat organisaties en professionals nodig hebben om succesvol te zijn.",
      en: "Recruitment Intermotion was founded in 2022 by Marijn Schilder. With a background at renowned organisations such as Hays, BDO Advisory and KPN, Marijn has developed a keen eye for what organisations and professionals need to be successful.",
    },
    bio2: {
      nl: "De overtuiging dat recruitment persoonlijk, transparant en resultaatgericht moet zijn, vormt de basis van alles wat wij doen. Geen bulk, geen standaard aanpak — maar een op maat gemaakte strategie voor elke opdracht.",
      en: "The conviction that recruitment should be personal, transparent and results-oriented forms the foundation of everything we do. No bulk, no standard approach — but a tailored strategy for every assignment.",
    },
    bio3: {
      nl: "Vanuit ons kantoor bedienen wij opdrachtgevers door heel Nederland, met een focus op de Randstad en Noord-Brabant. Ons netwerk strekt zich uit over duizenden professionals in Finance, IT en Sales.",
      en: "From our office, we serve clients throughout the Netherlands, with a focus on the Randstad and Noord-Brabant. Our network extends across thousands of professionals in Finance, IT and Sales.",
    },
  },
  contact: {
    title: { nl: "Laten we kennismaken", en: "Let's get acquainted" },
    subtitle: {
      nl: "Heb je een vacature, zoek je een nieuwe uitdaging, of wil je gewoon eens sparren? Wij horen graag van je.",
      en: "Do you have a vacancy, are you looking for a new challenge, or would you just like to brainstorm? We'd love to hear from you.",
    },
    email: "info@recruitmentintermotion.nl",
    phone: "+31 6 42 63 99 62",
    linkedin: "https://linkedin.com/company/recruitment-intermotion",
    whatsapp: "https://wa.me/31642639962",
    ctaTitle: { nl: "Samen bouwen we aan je toekomst", en: "Together we build your future" },
    ctaText: {
      nl: "Of je nu op zoek bent naar de juiste kandidaat of de perfecte baan — wij staan voor je klaar.",
      en: "Whether you're looking for the right candidate or the perfect job — we're here for you.",
    },
    form: {
      salutation: { nl: "Aanhef", en: "Salutation" },
      mr: { nl: "Dhr.", en: "Mr." },
      mrs: { nl: "Mevr.", en: "Mrs." },
      other: { nl: "Anders", en: "Other" },
      firstName: { nl: "Voornaam", en: "First name" },
      lastName: { nl: "Achternaam", en: "Last name" },
      phone: { nl: "Telefoon", en: "Phone" },
      email: { nl: "E-mail", en: "Email" },
      company: { nl: "Bedrijf", en: "Company" },
      linkedinProfile: { nl: "LinkedIn profiel", en: "LinkedIn profile" },
      message: { nl: "Bericht", en: "Message" },
      submit: { nl: "Verstuur bericht", en: "Send message" },
    },
  },
  footer: {
    rights: { nl: "Alle rechten voorbehouden.", en: "All rights reserved." },
  },
} as const;

export function t(obj: { nl: string; en: string }, lang: Lang): string {
  return obj[lang];
}
