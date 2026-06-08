import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { useLang } from "@/lib/LanguageContext";
import { useAppNavigate } from "@/hooks/useAppNavigate";
import PageHeroBanner from "@/components/PageHeroBanner";
import { successStories, sectorBadgeClass, type StorySector } from "@/data/successStories";

type Filter = "All" | StorySector;
const filters: Filter[] = ["All", "Finance", "IT", "Sales", "Interim"];

const filterLabel: Record<Filter, { nl: string; en: string }> = {
  All: { nl: "Alle", en: "All" },
  Finance: { nl: "Finance", en: "Finance" },
  IT: { nl: "IT", en: "IT" },
  Sales: { nl: "Sales", en: "Sales" },
  Interim: { nl: "Interim", en: "Interim" },
};

export default function SuccessStoriesPage() {
  const { lang } = useLang();
  const navigate = useAppNavigate();
  const [filter, setFilter] = useState<Filter>("All");

  const title =
    lang === "nl"
      ? "Succesverhalen | Recruitment Intermotion"
      : "Success Stories | Recruitment Intermotion";
  const description =
    lang === "nl"
      ? "Bekijk hoe Recruitment Intermotion ambitieuze organisaties verbindt met de juiste Finance, IT en Sales professionals. Echte verhalen, echte resultaten."
      : "See how Recruitment Intermotion connects ambitious organisations with the right Finance, IT and Sales professionals. Real stories, real results.";

  const heroTitle = lang === "nl" ? "Succesverhalen" : "Success Stories";
  const heroSubtitle =
    lang === "nl"
      ? "Van zoekprofiel tot de perfecte match — dit zijn de verhalen achter onze plaatsingen."
      : "From search profile to perfect match — these are the stories behind our placements.";

  const visible = successStories.filter((s) => filter === "All" || s.sector === filter);

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://recruitmentintermotion.nl/success-stories" />
      </Helmet>

      <PageHeroBanner title={heroTitle} subtitle={heroSubtitle} />

      {/* Filter bar */}
      <section className="py-10 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-3 justify-center">
          {filters.map((f) => {
            const active = filter === f;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`min-h-[44px] px-5 py-2 rounded-full text-sm font-semibold transition-all border ${
                  active
                    ? "gradient-brand text-primary-foreground border-transparent shadow-md"
                    : "bg-card text-foreground border-border hover:border-accent-blue hover:text-accent-blue"
                }`}
              >
                {filterLabel[f][lang]}
              </button>
            );
          })}
        </div>
      </section>

      {/* Cards grid */}
      <section className="py-20 bg-bg-tint">
        <div className="max-w-7xl mx-auto px-6">
          {visible.length === 0 ? (
            <p className="text-center text-muted-foreground">
              {lang === "nl" ? "Geen verhalen gevonden." : "No stories found."}
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visible.map((s) => (
                <button
                  key={s.slug}
                  onClick={() => navigate(`/success-stories/${s.slug}`)}
                  className="text-left bg-card rounded-2xl border border-border p-8 transition-all duration-300 hover:-translate-y-[7px] hover:shadow-xl hover:border-accent-blue group"
                >
                  <span
                    className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 ${sectorBadgeClass[s.sector]}`}
                  >
                    {s.sector}
                  </span>
                  <h3 className="text-lg font-bold text-foreground mb-1">{s.company}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{s.role[lang]}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                    {s.summary[lang]}
                  </p>
                  <span className="text-accent-blue text-sm font-semibold group-hover:underline">
                    {lang === "nl" ? "Lees het verhaal →" : "Read the story →"}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-20" style={{ background: "#1F217D" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6" style={{ color: "white" }}>
            {lang === "nl"
              ? "Ook op zoek naar de juiste kandidaat?"
              : "Looking for the right candidate?"}
          </h2>
          <button
            onClick={() => navigate("/contact")}
            className="bg-primary-foreground text-primary px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            {lang === "nl" ? "Neem contact op" : "Get in touch"}
          </button>
        </div>
      </section>
    </>
  );
}
