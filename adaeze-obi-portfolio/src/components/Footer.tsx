export function Footer() {
  return (
    <footer id="contact" className="relative bg-card overflow-hidden">
      {/* Bold accent top bar */}
      <div className="h-1.5 w-full bg-accent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="font-display text-4xl font-black text-foreground mb-2">
              <span className="text-accent">Adaeze</span> Obi
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Abstract Afrocentric body art celebrating heritage, identity, and the 
              sacred connection between skin and spirit.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-accent font-bold mb-4">Get in Touch</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>hello@adaezeobi.art</p>
              <p>Lagos, Nigeria</p>
              <p>Available for bookings worldwide</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-accent font-bold mb-4">Follow the Journey</h4>
            <div className="flex gap-3">
              {["Instagram", "TikTok", "Pinterest"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="px-4 py-2 border border-border text-sm text-muted-foreground hover:text-accent hover:border-accent transition-colors duration-300 font-medium"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-border mb-8" />

        <div className="flex items-center justify-between text-xs text-muted-foreground tracking-wider">
          <p>© {new Date().getFullYear()} Adaeze Obi</p>
          <p className="text-muted-foreground/60">Every mark carries meaning.</p>
        </div>
      </div>
    </footer>
  );
}
