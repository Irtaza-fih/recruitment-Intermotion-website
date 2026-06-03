import { Helmet } from "react-helmet-async";
import { useAppNavigate } from "@/hooks/useAppNavigate";
import PageHeroBanner from "@/components/PageHeroBanner";
import { blogPosts } from "@/data/blogPosts";

export default function BlogPage() {
  const navigate = useAppNavigate();

  const title = "Recruitment Blog | Recruitment Intermotion";
  const description =
    "Praktisch advies over recruitment, finance, IT en sales. Tips voor werkgevers en professionals in Nederland.";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://recruitmentintermotion.nl/blog" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://recruitmentintermotion.nl/blog" />
        <meta property="og:type" content="website" />
      </Helmet>

      <PageHeroBanner
        title="Recruitment Inzichten & Advies"
        subtitle="Praktisch advies, trends en inzichten over recruitment in Finance, IT en Sales."
      />

      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          {blogPosts.length === 0 ? (
            <p className="text-center text-muted-foreground text-lg">
              Binnenkort verschijnen hier onze eerste artikelen.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <button
                  key={post.slug}
                  onClick={() => navigate(`/blog/${post.slug}`)}
                  className="text-left bg-card rounded-2xl border border-border p-8 transition-all duration-300 hover:-translate-y-[7px] hover:shadow-xl hover:border-accent-blue group"
                >
                  <span className="inline-block gradient-brand text-primary-foreground text-xs font-bold px-3 py-1 rounded-full mb-4">
                    {post.category}
                  </span>
                  <p className="text-xs text-muted-foreground mb-2">
                    {new Date(post.date).toLocaleDateString("nl-NL", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                  <h2 className="text-xl font-bold text-foreground mb-3">{post.title}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {post.description}
                  </p>
                  <span className="text-accent-blue text-sm font-semibold group-hover:underline">
                    Lees meer →
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
