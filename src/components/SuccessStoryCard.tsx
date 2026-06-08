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
      className={`group block text-left w-full bg-card rounded-2xl border border-border p-6 cursor-pointer transition-[box-shadow,border-color] duration-300 ease-out hover:shadow-xl hover:border-accent-blue ${className}`}
      aria-label={`${story.company} success story`}
    >
      <div className="flex flex-row items-center justify-between mb-4" style={{ gap: 12 }}>
        <span className="flex-1 text-[18px] font-bold text-foreground">
          {story.company}
        </span>
        <CompanyLogo story={story} size={48} />
      </div>

      <span
        className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${sectorBadgeClass[story.sector]}`}
      >
        {story.sector}
      </span>

      <h3 className="text-lg font-bold text-foreground mb-1">{story.company}</h3>
      <p className="text-sm text-muted-foreground mb-3">{story.role[lang]}</p>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
        {story.summary[lang]}
      </p>
      <span className="text-accent-blue text-sm font-semibold group-hover:underline">
        {lang === "nl" ? "Lees het verhaal →" : "Read the story →"}
      </span>
    </button>
  );
}
