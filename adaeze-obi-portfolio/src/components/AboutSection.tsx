import heroPortrait from "@/assets/hero-portrait.jpg";

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-10 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-accent font-bold mb-4">
              About Me
            </p>
            <h2 className="font-display text-5xl md:text-7xl font-black text-foreground leading-[0.9] mb-8">
              Art That<br />
              <span className="text-gradient-gold">Lives &</span><br />
              Breathes
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-sm">
              <p>
                I'm Adaeze — a body artist rooted in the rich visual traditions of 
                West Africa. My work transforms the human body into a living gallery 
                of abstract expression, drawing from ancestral symbols, sacred geometry, 
                and the raw beauty of organic form.
              </p>
              <p>
                Using natural pigments and contemporary techniques, I create temporary 
                masterpieces that explore identity, heritage, and the connection between 
                skin and spirit.
              </p>
              <p>
                Every mark I make carries meaning — from the bold strokes that echo tribal 
                scarification to the delicate dots that map constellations of belonging.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={heroPortrait}
                alt="Adaeze Obi — Body Artist"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Editorial accent lines */}
            <div className="absolute -top-3 -right-3 w-full h-full border-2 border-accent/30" />
            <div className="absolute bottom-6 right-6 bg-accent text-accent-foreground px-4 py-2">
              <p className="font-display text-sm font-bold tracking-wider">Lagos, Nigeria</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
