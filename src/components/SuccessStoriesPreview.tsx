import { useLang } from "@/lib/LanguageContext";
import { useAppNavigate } from "@/hooks/useAppNavigate";
import { successStories, sectorBadgeClass } from "@/data/successStories";

export default function SuccessStoriesPreview() {
  const { lang } = useLang();
  const navigate = useAppNavigate();
  const featured = successStories.find((s) => s.slug === "uns");
  if (!featured) return null;

  return (
    <section className="py-24 bg-bg-tint">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-accent-blue mb-3">
          {lang === "nl" ? "SUCCESVERHALEN" : "SUCCESS STORIES"}
        </p>
        <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">
          {lang === "nl" ? "Wanneer het écht klopt" : "When it truly fits"}
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
          {lang === "nl"
            ? "Van ambitieus zoekprofiel tot de perfecte match — dit zijn de verhalen achter onze plaatsingen."
            : "From ambitious search profile to the perfect match — these are the stories behind our placements."}
        </p>

        <div className="mx-auto max-w-[500px] mb-10">
          <button
            onClick={() => navigate(`/success-stories/${featured.slug}`)}
            className="w-full text-left bg-card rounded-2xl border border-border p-8 transition-all duration-300 hover:-translate-y-[7px] hover:shadow-xl hover:border-accent-blue group"
          >
            <span
              className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 ${sectorBadgeClass[featured.sector]}`}
            >
              {featured.sector}
            </span>
            <h3 className="text-lg font-bold text-foreground mb-1">{featured.company}</h3>
            <p className="text-sm text-muted-foreground mb-3">{featured.role[lang]}</p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {featured.summary[lang]}
            </p>
            <span className="text-accent-blue text-sm font-semibold group-hover:underline">
              {lang === "nl" ? "Lees het verhaal →" : "Read the story →"}
            </span>
          </button>
        </div>

        <button
          onClick={() => navigate("/success-stories")}
          className="gradient-brand text-primary-foreground px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all"
        >
          {lang === "nl" ? "Bekijk alle succesverhalen →" : "View all success stories →"}
        </button>
      </div>
    </section>
  );
}
