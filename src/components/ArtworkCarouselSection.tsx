import ScrollReveal from './ScrollReveal'
import type { ArtworkItem } from '../types/artwork'

type ArtworkCarouselSectionProps = {
  sectionClassName: string
  id: string
  index: string
  kicker: string
  title: string
  eyebrow: string
  item: ArtworkItem | null
  previousLabel: string
  nextLabel: string
  onPrevious: () => void
  onNext: () => void
  reverseLayout?: boolean
  stageClassName?: string
  cardClassName?: string
  frameClassName?: string
  backgroundImage?: string
  emptyTitle?: string
  emptyMessage?: string
}

export default function ArtworkCarouselSection({
  sectionClassName,
  id,
  index,
  kicker,
  title,
  eyebrow,
  item,
  previousLabel,
  nextLabel,
  onPrevious,
  onNext,
  reverseLayout = false,
  stageClassName,
  cardClassName,
  frameClassName,
  backgroundImage,
  emptyTitle = title,
  emptyMessage = 'Add miniature paintings here next',
}: ArtworkCarouselSectionProps) {
  const showcaseClassName = ['featured-showcase', reverseLayout ? 'featured-showcase-reverse' : ''].filter(Boolean).join(' ')
  const stageClasses = ['featured-stage', stageClassName].filter(Boolean).join(' ')
  const cardClasses = ['featured-main-card', 'featured-editorial-card', cardClassName].filter(Boolean).join(' ')
  const frameClasses = ['featured-frame', 'featured-editorial-frame', frameClassName].filter(Boolean).join(' ')

  return (
    <section className={`${sectionClassName} featured-section`} id={id}>
      <div className='featured-shell'>
        {backgroundImage ? (
          <div className='abstracts-bg' aria-hidden='true'>
            <img src={backgroundImage} alt='' loading='lazy' decoding='async' />
          </div>
        ) : null}

        <ScrollReveal className='featured-header featured-section-header' as='div' variant='fade-right'>
          <p className='featured-section-index'>{index}</p>
          <div className='featured-section-heading'>
            <p className='featured-kicker'>{kicker}</p>
            <h2>{title}</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal
          className={showcaseClassName}
          as='div'
          delay={120}
          variant={reverseLayout ? 'fade-left' : 'soft-zoom'}
        >
          <div className={stageClasses}>
            {item ? (
              <>
                <button
                  type='button'
                  className='featured-arrow featured-arrow-left'
                  onClick={onPrevious}
                  aria-label={previousLabel}
                >
                  ←
                </button>

                <article key={item.title} className={cardClasses}>
                  <div className='featured-card-copy'>
                    <p className='featured-card-eyebrow'>{eyebrow}</p>
                    <h3>{item.title}</h3>
                    <p className='featured-card-description'>{item.description}</p>
                  </div>
                  <div className={frameClasses}>
                    <img
                      src={item.image.src}
                      srcSet={item.image.srcSet}
                      sizes={item.image.sizes}
                      alt={item.title}
                      className='featured-main-image'
                      loading='lazy'
                      decoding='async'
                    />
                  </div>
                  <div className='featured-meta'>
                    <p>{item.medium}</p>
                    <span>{item.year}</span>
                    <span>{item.dimensions}</span>
                  </div>
                </article>

                <button
                  type='button'
                  className='featured-arrow featured-arrow-right'
                  onClick={onNext}
                  aria-label={nextLabel}
                >
                  →
                </button>
              </>
            ) : (
              <article className={['featured-main-card', cardClassName, 'miniature-empty'].filter(Boolean).join(' ')}>
                <div className='featured-card-copy'>
                  <p className='featured-card-eyebrow'>{eyebrow}</p>
                  <h3>{emptyTitle}</h3>
                </div>
                <div className={['featured-frame', frameClassName, 'miniature-frame', 'miniature-placeholder'].filter(Boolean).join(' ')}>
                  <div className='miniature-placeholder-inner'>{emptyMessage}</div>
                </div>
              </article>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
