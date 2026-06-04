import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { useAppNavigate } from "@/hooks/useAppNavigate";
import PageHeroBanner from "@/components/PageHeroBanner";
import { blogPosts } from "@/data/blogPosts";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useAppNavigate();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <Helmet>
          <title>Artikel niet gevonden | Recruitment Intermotion</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <PageHeroBanner title="Artikel niet gevonden" subtitle="Dit artikel bestaat niet of is verplaatst." />
        <section className="py-24 bg-card">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <button
              onClick={() => navigate("/blog")}
              className="text-accent-blue font-semibold hover:underline"
            >
              ← Terug naar blog
            </button>
          </div>
        </section>
      </>
    );
  }

  const title = `${post.title} | Recruitment Intermotion`;
  const url = `https://recruitmentintermotion.nl/blog/${post.slug}`;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.description,
          author: { "@type": "Person", name: post.author, url: "https://www.linkedin.com/in/marijnschilder/" },
          datePublished: post.date,
          articleSection: post.category,
          mainEntityOfPage: { "@type": "WebPage", "@id": url },
          publisher: {
            "@type": "Organization",
            name: "Recruitment Intermotion",
            logo: {
              "@type": "ImageObject",
              url: "https://recruitmentintermotion.nl/logo.svg",
            },
          },
        })}</script>
      </Helmet>

      <PageHeroBanner title={post.title} subtitle={post.description} />

      <section className="py-20 bg-card">
        <div className="max-w-3xl mx-auto px-6">
          <button
            onClick={() => navigate("/blog")}
            className="text-accent-blue font-semibold hover:underline mb-8 inline-block"
          >
            ← Terug naar blog
          </button>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-muted-foreground mb-8">
            <span className="inline-block gradient-brand text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span>
              {new Date(post.date).toLocaleDateString("nl-NL", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="hidden sm:inline">·</span>
            <span className="font-medium text-foreground">{post.author}</span>
            <span className="text-muted-foreground">{post.authorTitle}</span>
            <a
              href="https://www.linkedin.com/in/marijnschilder/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-blue hover:underline font-medium"
            >
              LinkedIn
            </a>
          </div>

          <article
            className="prose prose-lg max-w-none text-foreground leading-relaxed [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:mb-4 [&_a]:text-accent-blue [&_a]:underline [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_strong]:text-primary"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12 pt-8 border-t border-border">
            <button
              onClick={() => navigate("/blog")}
              className="text-accent-blue font-semibold hover:underline"
            >
              ← Terug naar blog
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
