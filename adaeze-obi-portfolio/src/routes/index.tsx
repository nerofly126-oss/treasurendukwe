import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { GallerySection } from "@/components/GallerySection";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adaeze Obi — Abstract Afrocentric Body Art" },
      { name: "description", content: "Portfolio of Adaeze Obi, a body artist celebrating African heritage through abstract designs rooted in ancestry, identity, and transformation." },
      { property: "og:title", content: "Adaeze Obi — Abstract Afrocentric Body Art" },
      { property: "og:description", content: "Where skin becomes canvas. Abstract Afrocentric body art by Adaeze Obi." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <GallerySection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
