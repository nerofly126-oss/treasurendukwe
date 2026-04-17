import './App.css'
import { Analytics } from '@vercel/analytics/react'
import About from './components/About'
import ArtworkCarouselSection from './components/ArtworkCarouselSection'
import Footer from './components/Footer'
import Hero from './components/Hero'
import { emailAddress, emailLink, whatsappLink } from './data/contact'
import {
  abstractWorks,
  featuredWorks,
  miniatureWorks,
  sketchPadWorks,
} from './data/works'
import {
  africaBackground,
  dividerPattern,
  heroBanner,
  heroPortrait,
} from './lib/assets'
import { useCarousel } from './hooks/useCarousel'

function App() {
  const featuredCarousel = useCarousel(featuredWorks.length)
  const abstractCarousel = useCarousel(abstractWorks.length)
  const miniatureCarousel = useCarousel(miniatureWorks.length)
  const sketchPadCarousel = useCarousel(sketchPadWorks.length)

  const currentWork = featuredWorks[featuredCarousel.activeItemIndex]
  const currentAbstractWork = abstractWorks[abstractCarousel.activeItemIndex]
  const currentMiniatureWork =
    miniatureWorks[miniatureCarousel.activeItemIndex] ?? null
  const currentSketchPadWork = sketchPadWorks[sketchPadCarousel.activeItemIndex]

  return (
    <main className="page">
      <Hero
        heroBanner={heroBanner}
        heroPortrait={heroPortrait}
        emailAddress={emailAddress}
        emailLink={emailLink}
      />

      <div className="zigzag-divider" aria-hidden="true"></div>

      <About emailLink={emailLink} />

      <ArtworkCarouselSection
        sectionClassName="featured featured-section"
        id="gallery"
        index="01"
        kicker="Painting Series"
        title="Selected Paintings"
        eyebrow="Featured Painting"
        item={currentWork}
        previousLabel="Show previous painting"
        nextLabel="Show next painting"
        onPrevious={featuredCarousel.showPrevious}
        onNext={featuredCarousel.showNext}
        stageClassName="featured-stage-wide"
      />

      <div className="art-separator" aria-hidden="true">
        <img src={dividerPattern} alt="" loading="lazy" decoding="async" />
      </div>

      <ArtworkCarouselSection
        sectionClassName="abstracts featured-section"
        id="abstract-drawings"
        index="02"
        kicker="Abstract Drawing Series"
        title="Charcoal Studies"
        eyebrow="Current Drawing"
        item={currentAbstractWork}
        previousLabel="Show previous abstract drawing"
        nextLabel="Show next abstract drawing"
        onPrevious={abstractCarousel.showPrevious}
        onNext={abstractCarousel.showNext}
        reverseLayout
        stageClassName="abstract-stage"
        cardClassName="abstract-main-card"
        frameClassName="abstract-frame"
        backgroundImage={africaBackground}
      />

      <div className="art-separator" aria-hidden="true">
        <img src={dividerPattern} alt="" loading="lazy" decoding="async" />
      </div>

      <ArtworkCarouselSection
        sectionClassName="miniatures featured-section"
        id="miniature-paintings"
        index="03"
        kicker="Miniature Painting Series"
        title="Small Format Works"
        eyebrow="Miniature Feature"
        item={currentMiniatureWork}
        previousLabel="Show previous miniature painting"
        nextLabel="Show next miniature painting"
        onPrevious={miniatureCarousel.showPrevious}
        onNext={miniatureCarousel.showNext}
        stageClassName="miniature-stage"
        cardClassName="miniature-main-card"
        frameClassName="miniature-frame"
        emptyTitle="Miniature Paintings"
        emptyMessage="Add miniature paintings here next"
      />

      <div className="art-separator" aria-hidden="true">
        <img src={dividerPattern} alt="" loading="lazy" decoding="async" />
      </div>

      <ArtworkCarouselSection
        sectionClassName="sketchpads featured-section"
        id="sketch-pads"
        index="04"
        kicker="Sketch Pad Series"
        title="Sketchbook Narratives"
        eyebrow="Sketchbook Highlight"
        item={currentSketchPadWork}
        previousLabel="Show previous sketch pad work"
        nextLabel="Show next sketch pad work"
        onPrevious={sketchPadCarousel.showPrevious}
        onNext={sketchPadCarousel.showNext}
        reverseLayout
        stageClassName="sketchpad-stage"
        cardClassName="sketchpad-main-card"
        frameClassName="sketchpad-frame"
      />

      <Footer
        currentSketchPadWork={currentSketchPadWork}
        currentAbstractWork={currentAbstractWork}
        featuredThumbWork={featuredWorks[0]}
        footerBackgroundWork={featuredWorks[6]}
        whatsappLink={whatsappLink}
        emailLink={emailLink}
      />

      <Analytics />
    </main>
  )
}

export default App
