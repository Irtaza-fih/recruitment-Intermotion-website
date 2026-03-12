interface PageHeroBannerProps {
  title: string;
  subtitle: string;
}

export default function PageHeroBanner({ title, subtitle }: PageHeroBannerProps) {
  return (
    <section className="pt-36 pb-24" style={{ background: "#1F217D" }}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ color: "white" }}>{title}</h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>{subtitle}</p>
      </div>
    </section>
  );
}
