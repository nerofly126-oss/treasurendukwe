import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const works = [
  { src: gallery1, title: "Echoes of Origin", category: "Shoulder & Face", width: 800, height: 1024 },
  { src: gallery2, title: "Sacred Geometry", category: "Face Paint", width: 800, height: 1024 },
  { src: gallery3, title: "Golden Mandala", category: "Full Back", width: 800, height: 1024 },
  { src: gallery4, title: "River Flow", category: "Legs & Feet", width: 800, height: 1024 },
  { src: gallery5, title: "Ancestral Marks", category: "Hand Art", width: 800, height: 1024 },
  { src: gallery6, title: "Collar of Kings", category: "Neck & Collar", width: 800, height: 1024 },
];

export function GallerySection() {
  return (
    <section id="gallery" className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-accent font-bold mb-3">
              Portfolio
            </p>
            <h2 className="font-display text-5xl md:text-7xl font-black text-foreground leading-[0.9]">
              The<br />
              <span className="text-accent">Collection</span>
            </h2>
          </div>
          <p className="hidden md:block text-sm text-muted-foreground max-w-xs text-right leading-relaxed">
            Each piece tells a story rooted in ancestry, identity, and transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {works.map((work, i) => (
            <div
              key={work.title}
              className="gallery-item group relative overflow-hidden cursor-pointer"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={work.src}
                  alt={work.title}
                  loading="lazy"
                  width={work.width}
                  height={work.height}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-accent font-bold mb-1">{work.category}</p>
                  <h3 className="font-display text-2xl font-black text-foreground">{work.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
