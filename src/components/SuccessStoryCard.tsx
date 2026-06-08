import { useState } from "react";
import { useLang } from "@/lib/LanguageContext";
import { useAppNavigate } from "@/hooks/useAppNavigate";
import { sectorBadgeClass, type SuccessStory } from "@/data/successStories";

interface Props {
  story: SuccessStory;
  className?: string;
}

function CompanyLogo({ story, size }: { story: SuccessStory; size: number }) {
  const [failed, setFailed] = useState(false);
  return (
    <div
      className="flex-shrink-0 flex items-center justify-center overflow-hidden bg-card"
      style={{
        width: size,
        height: size,
        borderRadius: 8,
        border: "1px solid #e5e7eb",
      }}
    >
      {story.logoUrl && !failed ? (
        <img
          src={story.logoUrl}
          alt={`${story.company} logo`}
          loading="lazy"
          className="w-full h-full"
          style={{ objectFit: "contain" }}
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="text-foreground font-bold" style={{ fontSize: size * 0.42 }}>
          {story.company.charAt(0)}
        </span>
      )}
    </div>
  );
}

export default function SuccessStoryCard({ story, className = "" }: Props) {
  const { lang } = useLang();
  const navigate = useAppNavigate();

  return (
    <button
      onClick={() => navigate(`/success-stories/${story.slug}`)}
      className={`group relative block text-left w-full bg-card rounded-2xl border border-border overflow-hidden transition-[max-height,box-shadow,border-color,transform] duration-300 ease-out max-h-[88px] hover:max-h-[600px] hover:shadow-xl hover:border-accent-blue hover:-translate-y-[2px] ${className}`}
      aria-label={`${story.company} success story`}
    >
      {/* HOVER CONTENT (always rendered, fades in) */}
      <div className="px-8 pt-6 pb-8 opacity-0 translate-y-1 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-y-0 min-h-[200px]">
        <div className="flex items-center justify-between mb-4">
          <span
            className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${sectorBadgeClass[story.sector]}`}
          >
            {story.sector}
          </span>
          <CompanyLogo story={story} size={48} />
        </div>
        <h3 className="text-[18px] font-bold text-foreground mb-1">{story.company}</h3>
        <p className="text-sm text-muted-foreground mb-3">{story.role[lang]}</p>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
          {story.summary[lang]}
        </p>
        <span className="text-accent-blue text-sm font-semibold group-hover:underline">
          {lang === "nl" ? "Lees het verhaal →" : "Read the story →"}
        </span>
      </div>

      {/* DEFAULT STATE OVERLAY: logo + name; fades out on hover */}
      <div
        className="absolute inset-x-0 top-0 flex items-center px-6 bg-card rounded-2xl transition-opacity duration-200 ease-out group-hover:opacity-0 group-hover:pointer-events-none"
        style={{ height: 88, gap: 12 }}
      >
        <CompanyLogo story={story} size={48} />
        <span className="text-[18px] font-bold text-foreground">
          {story.company}
        </span>
      </div>
    </button>
  );
}
