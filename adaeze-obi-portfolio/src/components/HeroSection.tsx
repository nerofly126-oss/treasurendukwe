import heroPortrait from "@/assets/hero-portrait.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-background">
      {/* Full-bleed portrait */}
      <div className="absolute inset-0">
        <img
          src={heroPortrait}
          alt="Adaeze Obi — Body Artist"
          width={1920}
          height={1080}
          className="w-full h-full object-cover object-top"
        />
        <div className="editorial-overlay absolute inset-0" />
      </div>

      {/* Bold editorial typography overlays */}
      <div className="absolute top-6 right-6 md:top-10 md:right-10 z-20">
        <span className="font-display text-7xl md:text-[10rem] lg:text-[14rem] font-black leading-none text-accent/80 tracking-tighter">
          AO
        </span>
      </div>

      {/* Side text */}
      <div className="absolute top-1/3 left-6 md:left-10 z-20 hidden md:block">
        <p className="text-sm tracking-[0.3em] uppercase text-foreground/70 font-medium mb-3">
          Body art in
        </p>
        <p className="text-sm tracking-[0.3em] uppercase text-accent font-bold">
          doubt,
        </p>
        <p className="text-sm tracking-[0.3em] uppercase text-accent font-bold mt-1">
          hesitation,
        </p>
        <p className="text-sm tracking-[0.3em] uppercase text-accent font-bold mt-1">
          transformation.
        </p>
      </div>

      {/* Right side question */}
      <div className="absolute top-1/3 right-6 md:right-10 z-20 text-right hidden md:block max-w-[220px]">
        <p className="text-sm text-foreground/60 leading-relaxed">
          <span className="text-accent font-bold">Are you still waiting</span>{" "}
          instead of embracing your creative dream?
        </p>
      </div>

      {/* Main bottom content */}
      <div className="relative z-10 w-full px-6 md:px-10 pb-12 md:pb-16">
        <h1 className="font-display text-6xl md:text-8xl lg:text-[9rem] font-black leading-[0.85] mb-4 tracking-tight">
          <span className="text-foreground">Abstract</span>
          <br />
          <span className="text-accent">Afrocentric</span>
        </h1>
        <div className="flex items-end justify-between flex-wrap gap-6">
          <p className="text-base md:text-lg text-muted-foreground max-w-md leading-relaxed">
            Where skin becomes canvas — celebrating African heritage through 
            abstract body art rooted in ancestry and identity.
          </p>
          <a
            href="#gallery"
            className="inline-block px-8 py-4 bg-accent text-accent-foreground font-bold tracking-wider uppercase text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
          >
            Explore Collection
          </a>
        </div>
      </div>
    </section>
  );
}
