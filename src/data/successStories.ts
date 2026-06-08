import unsLogo from "@/assets/uns-logo.jpg.asset.json";
import brightlynLogo from "@/assets/brightlyn-logo.jpg.asset.json";
import remondisLogo from "@/assets/remondis-logo.jpg.asset.json";

export type StorySector = "Finance" | "IT" | "Sales" | "Interim";

export interface SuccessStory {
  slug: string;
  sector: StorySector;
  company: string;
  logoUrl?: string;
  role: { nl: string; en: string };
  summary: { nl: string; en: string };
}

export const successStories: SuccessStory[] = [
  {
    slug: "uns",
    sector: "Finance",
    company: "UNStudio",
    logoUrl: unsLogo.url,
    role: { nl: "Financial Controller", en: "Financial Controller" },
    summary: {
      nl: "Van hunt assignment tot succesvolle plaatsing bij een van de meest toonaangevende architectenbureaus ter wereld.",
      en: "From hunt assignment to successful placement at one of the world's most renowned architecture studios.",
    },
  },
  {
    slug: "brightlyn",
    sector: "IT",
    company: "Brightlyn",
    logoUrl: brightlynLogo.url,
    role: { nl: "(Senior) Manager IT Audit", en: "(Senior) Manager IT Audit" },
    summary: {
      nl: "Van een intensieve zoektocht naar schaars talent tot een gerichte plaatsing bij een van de meest veelbelovende cybersecurity boutiques van Nederland.",
      en: "From an intensive search for rare talent to a targeted placement at one of the Netherlands' most promising cybersecurity boutiques.",
    },
  },
  {
    slug: "remondis",
    sector: "Finance",
    company: "REMONDIS",
    logoUrl: remondisLogo.url,
    role: { nl: "Business Controller", en: "Business Controller" },
    summary: {
      nl: "Van een complexe zoektocht naar een brug tussen finance en operatie tot een gerichte plaatsing bij een van de grootste recycling en waterbeheer organisaties van Nederland.",
      en: "From a complex search for the bridge between finance and operations to a targeted placement at one of the Netherlands' leading recycling and water management organisations.",
    },
  },
];

export const sectorBadgeClass: Record<StorySector, string> = {
  Finance: "bg-accent-blue text-primary-foreground",
  IT: "bg-teal-600 text-primary-foreground",
  Sales: "bg-orange-500 text-primary-foreground",
  Interim: "bg-purple-600 text-primary-foreground",
};
