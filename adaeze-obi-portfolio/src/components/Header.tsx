import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        <Link to="/" className="font-display text-xl font-bold text-foreground tracking-tight">
          <span className="text-accent">Adaeze</span> Obi
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#gallery" className="text-xs font-semibold text-muted-foreground hover:text-accent transition-colors tracking-[0.2em] uppercase">
            Gallery
          </a>
          <a href="#about" className="text-xs font-semibold text-muted-foreground hover:text-accent transition-colors tracking-[0.2em] uppercase">
            About
          </a>
          <a href="#contact" className="text-xs font-semibold text-muted-foreground hover:text-accent transition-colors tracking-[0.2em] uppercase">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
