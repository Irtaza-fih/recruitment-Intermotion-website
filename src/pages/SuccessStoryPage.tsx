import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { useLang } from "@/lib/LanguageContext";
import { useAppNavigate } from "@/hooks/useAppNavigate";
import { successStories, sectorBadgeClass } from "@/data/successStories";
import unsLogo from "@/assets/uns-logo.jpg.asset.json";

export default function SuccessStoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLang();
  const navigate = useAppNavigate();
  const story = successStories.find((s) => s.slug === slug);

  if (!story || story.slug !== "uns") {
    return (
      <>
        <Helmet>
          <title>
            {lang === "nl"
              ? "Verhaal niet gevonden | Recruitment Intermotion"
              : "Story not found | Recruitment Intermotion"}
          </title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <section className="pt-36 pb-24 bg-card">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h1 className="text-3xl font-extrabold text-foreground mb-6">
              {lang === "nl" ? "Verhaal niet gevonden" : "Story not found"}
            </h1>
            <button
              onClick={() => navigate("/success-stories")}
              className="text-accent-blue font-semibold hover:underline"
            >
              {lang === "nl" ? "← Terug naar alle succesverhalen" : "← Back to all success stories"}
            </button>
          </div>
        </section>
      </>
    );
  }

  // UNStudio story content
  const title =
    lang === "nl"
      ? "Financial Controller geplaatst bij UNStudio Amsterdam | Recruitment Intermotion"
      : "Financial Controller placed at UNStudio Amsterdam | Recruitment Intermotion";
  const description =
    lang === "nl"
      ? "Hoe Recruitment Intermotion voor UNStudio — een toonaangevend internationaal architecten- en designbureau — een Financial Controller vond die finance en business écht verbindt. Lees het verhaal."
      : "How Recruitment Intermotion found a Financial Controller for UNStudio — a leading international architecture and design studio — who truly connects finance and business. Read the story.";

  const h1 =
    lang === "nl"
      ? "UNStudio: Financial Controller gevonden voor een wereldwijd architectenbureau in groei"
      : "UNStudio: Financial Controller placed for a globally growing architecture studio";

  const meta = [
    { label: lang === "nl" ? "Bedrijf" : "Company", value: "UNStudio" },
    {
      label: "Sector",
      value: lang === "nl" ? "Architectuur & Design" : "Architecture & Design",
    },
    {
      label: lang === "nl" ? "Kantoren" : "Offices",
      value: "Amsterdam, Shanghai, Hong Kong, Frankfurt, Dubai, Melbourne, Austin",
    },
    {
      label: lang === "nl" ? "Medewerkers" : "Employees",
      value: "400+",
    },
  ];

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://recruitmentintermotion.nl/success-stories/uns" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://recruitmentintermotion.nl/success-stories/uns" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Financial Controller geplaatst bij UNStudio Amsterdam",
          description:
            "Hoe Recruitment Intermotion voor UNStudio een Financial Controller vond die finance en business écht verbindt.",
          author: {
            "@type": "Organization",
            name: "Recruitment Intermotion",
            url: "https://recruitmentintermotion.nl",
          },
          about: {
            "@type": "Organization",
            name: "UNStudio",
            url: "https://www.unstudio.com",
            location: "Amsterdam, Nederland",
          },
          keywords:
            "financial controller recruitment, finance recruitment Amsterdam, architectenbureau, Recruitment Intermotion, UNStudio",
        })}</script>
      </Helmet>

      <section className="pt-32 pb-12 bg-card">
        <div className="max-w-3xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="text-sm text-muted-foreground mb-6" aria-label="breadcrumb">
            <button onClick={() => navigate("/")} className="hover:text-accent-blue">
              Home
            </button>
            <span className="mx-2">→</span>
            <button
              onClick={() => navigate("/success-stories")}
              className="hover:text-accent-blue"
            >
              {lang === "nl" ? "Succesverhalen" : "Success Stories"}
            </button>
            <span className="mx-2">→</span>
            <span className="text-foreground">UNStudio</span>
          </nav>

          {/* Sector badge */}
          <span
            className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-5 ${sectorBadgeClass[story.sector]}`}
          >
            {story.sector}
          </span>

          {/* H1 */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-8">
            {h1}
          </h1>

          {/* Client info bar */}
          <div className="bg-bg-tint border border-border rounded-2xl p-6 mb-12 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            {meta.map((m) => (
              <div key={m.label}>
                <div className="text-muted-foreground text-xs uppercase tracking-wider font-semibold mb-1">
                  {m.label}
                </div>
                <div className="text-foreground font-medium">{m.value}</div>
              </div>
            ))}
            <div>
              <div className="text-muted-foreground text-xs uppercase tracking-wider font-semibold mb-1">
                Website
              </div>
              <a
                href="https://www.unstudio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-blue font-medium hover:underline"
              >
                unstudio.com
              </a>
            </div>
          </div>

          {/* Story sections */}
          <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
            <h2 className="text-2xl font-extrabold text-foreground mt-10 mb-4">
              {lang === "nl" ? "De uitdaging" : "The challenge"}
            </h2>
            {lang === "nl" ? (
              <>
                <p className="text-muted-foreground mb-4">
                  UNStudio is geen gewoon architectenbureau. Met meer dan 400 medewerkers verspreid
                  over zeven kantoren wereldwijd ontwerpt UNStudio ambitieuze projecten die grenzen
                  verleggen. Juist in een organisatie van die omvang en complexiteit stelt de
                  financiële functie hoge eisen aan de mensen die haar vervullen.
                </p>
                <p className="text-muted-foreground mb-4">
                  Tegen de achtergrond van sterke groei, een structurele scheiding tussen finance en
                  business, en een duidelijke koers richting verdere professionalisering, was
                  UNStudio op zoek naar een ambitieuze Financial Controller. Niet zomaar iemand die
                  de boeken bijhoudt — maar een professional die verder kijkt dan de cijfers: iemand
                  die data vertaalt naar heldere, bruikbare inzichten waarmee stakeholders
                  weloverwogen beslissingen kunnen nemen.
                </p>
              </>
            ) : (
              <>
                <p className="text-muted-foreground mb-4">
                  UNStudio is no ordinary architecture firm. With over 400 employees across seven
                  global offices, UNStudio designs ambitious projects that push boundaries. In an
                  organisation of that scale and complexity, the finance function demands
                  exceptional people.
                </p>
                <p className="text-muted-foreground mb-4">
                  Against a backdrop of strong growth, a structural separation between finance and
                  business, and a drive towards further professionalisation, UNStudio was searching
                  for an ambitious Financial Controller. Not just someone to manage the books — but
                  a professional who looks beyond the numbers: someone who translates data into
                  clear, actionable insights that help stakeholders make informed decisions.
                </p>
              </>
            )}

            <h2 className="text-2xl font-extrabold text-foreground mt-10 mb-4">
              {lang === "nl" ? "Onze aanpak" : "Our approach"}
            </h2>
            {lang === "nl" ? (
              <>
                <p className="text-muted-foreground mb-4">
                  Een diepgaand en oprecht gesprek met de managing director en CFO van UNStudio
                  bleek cruciaal. Niet om een profiel af te vinken, maar om echt te begrijpen welk
                  type Financial Controller zij nodig hadden — en wie de juiste persoon zou zijn
                  voor deze specifieke organisatie, cultuur en fase van groei.
                </p>
                <p className="text-muted-foreground mb-4">
                  Dit was een echte hunt assignment: geen vacaturebank, geen standaard werving. Wij
                  gingen actief op zoek naar de kandidaat die niet alleen op papier past, maar die
                  ook de ambitie en het karakter heeft om te groeien met UNStudio.
                </p>
              </>
            ) : (
              <>
                <p className="text-muted-foreground mb-4">
                  Meaningful and constructive conversations with UNStudio's managing director and
                  CFO proved essential — not to tick off a checklist, but to genuinely understand
                  what kind of Financial Controller they truly needed, and above all, who would be
                  the right fit for this specific organisation, culture, and stage of growth.
                </p>
                <p className="text-muted-foreground mb-4">
                  This was a true hunt assignment: no job boards, no standard recruitment. We
                  actively searched for the candidate who not only fits on paper, but who also has
                  the ambition and character to grow with UNStudio.
                </p>
              </>
            )}

            <h2 className="text-2xl font-extrabold text-foreground mt-10 mb-4">
              {lang === "nl" ? "Het resultaat" : "The result"}
            </h2>
            <p className="text-muted-foreground mb-4">
              {lang === "nl"
                ? "De opdracht resulteerde in de succesvolle plaatsing van Jos Oudenaarden als Financial Controller bij UNStudio Amsterdam. Een match die verder gaat dan competenties en ervaring — een verbinding op basis van persoonlijkheid, ambitie en organisatiefit."
                : "The assignment culminated in the successful placement of Jos Oudenaarden as Financial Controller at UNStudio Amsterdam. A match that goes beyond competencies and experience — a connection built on personality, ambition, and organisational fit."}
            </p>

            {/* QUOTE BLOCK — uncomment and fill in when client provides quote
            <blockquote className="border-l-4 border-accent-blue bg-bg-tint px-6 py-4 my-8 rounded-r-lg">
              <p className="text-foreground italic mb-2">"[quote text here]"</p>
              <footer className="text-sm text-muted-foreground">— [Naam], [Functie], UNStudio</footer>
            </blockquote>
            */}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "#1F217D" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4" style={{ color: "white" }}>
            {lang === "nl"
              ? "Ook op zoek naar de juiste Finance professional?"
              : "Also looking for the right Finance professional?"}
          </h2>
          <p className="mb-8" style={{ color: "rgba(255,255,255,0.75)" }}>
            {lang === "nl"
              ? "Wij voeren het gesprek dat verder gaat dan het profiel."
              : "We have the conversation that goes beyond the profile."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/contact")}
              className="bg-primary-foreground text-primary px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              {lang === "nl" ? "Neem contact op" : "Get in touch"}
            </button>
            <button
              onClick={() => navigate("/finance-recruitment")}
              className="px-6 py-3 rounded-full font-semibold border-2 transition-all hover:-translate-y-0.5"
              style={{ borderColor: "white", color: "white" }}
            >
              {lang === "nl" ? "Bekijk Finance Recruitment" : "View Finance Recruitment"}
            </button>
          </div>
        </div>
      </section>

      {/* Back link */}
      <section className="py-12 bg-card">
        <div className="max-w-3xl mx-auto px-6">
          <button
            onClick={() => navigate("/success-stories")}
            className="text-accent-blue font-semibold hover:underline"
          >
            {lang === "nl" ? "← Terug naar alle succesverhalen" : "← Back to all success stories"}
          </button>
        </div>
      </section>
    </>
  );
}
