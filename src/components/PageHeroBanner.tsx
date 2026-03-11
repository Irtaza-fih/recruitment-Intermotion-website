interface PageHeroBannerProps {
  title: string;
  subtitle: string;
}

export default function PageHeroBanner({ title, subtitle }: PageHeroBannerProps) {
  return (
    <section className="gradient-brand pt-32 pb-20 text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4">{title}</h1>
        <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">{subtitle}</p>
      </div>
    </section>
  );
}
