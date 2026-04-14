import heroBanner from './assets/hero-banner.jpg'
import './App.css'

function App() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-bg">
          <img
            src={heroBanner}
            alt="Treasure Ndukwe — Nigerian Artist"
            width={1920}
            height={720}
          />
        </div>

        <div className="hero-topline" aria-hidden="true">
          <span>treasure</span>
          <span>ndukwe</span>
          <span>exhibits</span>
        </div>

        <div className="hero-content">
          <h1 className="hero-title">
            <span className="stack">Treasure</span>
            <span className="stack accent">Ndukwe</span>
          </h1>
          <p className="hero-copy">
            A Nigerian artist showcasing talent across contemporary exhibits,
            with work rooted in culture, movement, and visual storytelling.
          </p>
          <a className="cta" href="#gallery">
            View portfolio
          </a>
        </div>
      </section>

      <div className="zigzag-divider" aria-hidden="true"></div>

      <section className="about" id="about">
        <div className="about-text">
          <p className="eyebrow">About Treasure</p>
          <h2>Rooted in Nigerian culture, shaped by contemporary exhibits.</h2>
          <p>
            Treasure Ndukwe is an artist based in Nigeria whose practice moves
            across painting, mixed media, and exhibition-led storytelling. Her
            work explores identity, memory, and movement—translating lived
            experience into immersive visual narratives.
          </p>
        </div>
        <div className="about-notes">
          <div>
            <h3>Practice</h3>
            <p>Painting, mixed media, installation, and live exhibits.</p>
          </div>
          <div>
            <h3>Focus</h3>
            <p>Culture, identity, movement, and contemporary narratives.</p>
          </div>
          <div>
            <h3>Location</h3>
            <p>Nigeria · Available for exhibitions and collaborations.</p>
          </div>
        </div>
      </section>

      <section className="body" id="gallery">
        <div className="body-header">
          <p className="eyebrow">Exhibit archive</p>
          <h2>Exhibit-led storytelling across Nigeria and beyond.</h2>
          <p>
            Each collection documents a public moment — gallery features, live
            installations, and collaborative showcases.
          </p>
        </div>

        <div className="body-grid">
          <article>
            <div className="label-tag">LIVE</div>
            <h3>Exhibit highlights</h3>
            <p>
              Recent showcases, curatorial notes, and the stories behind each
              exhibition.
            </p>
          </article>
          <article>
            <div className="label-tag">SERIES</div>
            <h3>Studio series</h3>
            <p>
              Bodies of work developed between exhibits, capturing the evolving
              themes in her practice.
            </p>
          </article>
          <article>
            <div className="label-tag">COLLAB</div>
            <h3>Collaborations</h3>
            <p>
              Partnerships with galleries, fashion stylists, and cultural
              platforms.
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}

export default App
