import unsLogo from "@/assets/uns-logo.jpg.asset.json";

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
];

export const sectorBadgeClass: Record<StorySector, string> = {
  Finance: "bg-accent-blue text-primary-foreground",
  IT: "bg-teal-600 text-primary-foreground",
  Sales: "bg-orange-500 text-primary-foreground",
  Interim: "bg-purple-600 text-primary-foreground",
};
