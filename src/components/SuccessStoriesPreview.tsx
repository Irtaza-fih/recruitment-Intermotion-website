import { useLang } from "@/lib/LanguageContext";
import { useAppNavigate } from "@/hooks/useAppNavigate";
import { successStories } from "@/data/successStories";
import SuccessStoryCard from "@/components/SuccessStoryCard";

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
            ? "Van ambitieus zoekprofiel tot de perfecte match. Dit zijn de verhalen achter onze plaatsingen."
            : "From ambitious search profile to perfect match. These are the stories behind our placements."}
        </p>

        <div className="mx-auto max-w-[500px] mb-10">
          <SuccessStoryCard story={featured} />
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
