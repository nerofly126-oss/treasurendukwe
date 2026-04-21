import { useEffect, useRef, useState, type TouchEvent } from 'react'
import ScrollReveal from './ScrollReveal'
import type { ArtworkItem, FeaturedArtworkItem } from '../types/artwork'

type ArtworkCarouselSectionProps = {
  sectionClassName: string
  id: string
  title: string
  item: ArtworkItem | null
  isAnimating?: boolean
  direction?: 'forward' | 'backward'
  previousLabel: string
  nextLabel: string
  onPrevious: () => void
  onNext: () => void
  items?: ArtworkItem[]
  thumbnails?: FeaturedArtworkItem[]
  activeIndex?: number
  onSelectItem?: (index: number) => void
  reverseLayout?: boolean
  stageClassName?: string
  cardClassName?: string
  frameClassName?: string
  backgroundImage?: string
  emptyTitle?: string
  emptyMessage?: string
}

const preloadImage = (item: ArtworkItem) =>
  new Promise<void>((resolve, reject) => {
    const image = new Image()

    image.decoding = 'async'
    image.srcset = item.image.srcSet
    image.sizes = item.image.sizes
    image.src = item.image.src

    if (image.complete) {
      resolve()
      return
    }

    image.onload = () => resolve()
    image.onerror = () => reject(new Error(`Unable to preload ${item.image.src}`))
  })

export default function ArtworkCarouselSection({
  sectionClassName,
  id,
  title,
  item,
  isAnimating = false,
  direction = 'forward',
  previousLabel,
  nextLabel,
  onPrevious,
  onNext,
  items,
  activeIndex,
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
  const cardClasses = [
    'featured-main-card',
    'featured-editorial-card',
    cardClassName,
    isAnimating ? 'is-page-turning' : '',
    direction === 'backward' ? 'is-page-turning-backward' : 'is-page-turning-forward',
  ]
    .filter(Boolean)
    .join(' ')
  const frameClasses = ['featured-frame', 'featured-editorial-frame', frameClassName].filter(Boolean).join(' ')
  const touchStartXRef = useRef<number | null>(null)
  const touchStartYRef = useRef<number | null>(null)
  const isHorizontalSwipeRef = useRef(false)
  const loadedSourcesRef = useRef(new Set<string>())
  const requestIdRef = useRef(0)
  const [displayedItem, setDisplayedItem] = useState(item)
  const [isImageLoading, setIsImageLoading] = useState(false)

  useEffect(() => {
    if (!item) {
      setDisplayedItem(null)
      setIsImageLoading(false)
      return
    }

    if (displayedItem?.image.src === item.image.src) {
      loadedSourcesRef.current.add(item.image.src)
      setDisplayedItem(item)
      setIsImageLoading(false)
      return
    }

    if (loadedSourcesRef.current.has(item.image.src)) {
      setDisplayedItem(item)
      setIsImageLoading(false)
      return
    }

    requestIdRef.current += 1
    const requestId = requestIdRef.current

    setIsImageLoading(true)

    preloadImage(item)
      .catch(() => undefined)
      .finally(() => {
        if (requestId !== requestIdRef.current) {
          return
        }

        loadedSourcesRef.current.add(item.image.src)
        setDisplayedItem(item)
        setIsImageLoading(false)
      })
  }, [displayedItem, item])

  useEffect(() => {
    if (!items || items.length < 2 || activeIndex === undefined) {
      return
    }

    const adjacentItems = [
      items[(activeIndex + 1) % items.length],
      items[(activeIndex - 1 + items.length) % items.length],
    ]

    adjacentItems.forEach((adjacentItem) => {
      if (!adjacentItem || loadedSourcesRef.current.has(adjacentItem.image.src)) {
        return
      }

      preloadImage(adjacentItem)
        .then(() => {
          loadedSourcesRef.current.add(adjacentItem.image.src)
        })
        .catch(() => undefined)
    })
  }, [activeIndex, items])

  const resetTouchTracking = () => {
    touchStartXRef.current = null
    touchStartYRef.current = null
    isHorizontalSwipeRef.current = false
  }

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0]

    touchStartXRef.current = touch.clientX
    touchStartYRef.current = touch.clientY
    isHorizontalSwipeRef.current = false
  }

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    const startX = touchStartXRef.current
    const startY = touchStartYRef.current

    if (startX === null || startY === null) {
      return
    }

    const touch = event.touches[0]
    const deltaX = touch.clientX - startX
    const deltaY = touch.clientY - startY

    if (Math.abs(deltaX) > 10 && Math.abs(deltaX) > Math.abs(deltaY)) {
      isHorizontalSwipeRef.current = true
      event.preventDefault()
    }
  }

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (isImageLoading) {
      resetTouchTracking()
      return
    }

    const startX = touchStartXRef.current
    const startY = touchStartYRef.current

    if (startX === null || startY === null) {
      return
    }

    const touch = event.changedTouches[0]
    const deltaX = touch.clientX - startX
    const deltaY = touch.clientY - startY

    resetTouchTracking()

    if (Math.abs(deltaX) < 48 || Math.abs(deltaX) <= Math.abs(deltaY)) {
      return
    }

    if (deltaX < 0) {
      onNext()
      return
    }

    onPrevious()
  }

  const activeItem = displayedItem ?? item

  return (
    <section className={`${sectionClassName} featured-section`} id={id}>
      <div className='featured-shell'>
        {backgroundImage ? (
          <div className='abstracts-bg' aria-hidden='true'>
            <img src={backgroundImage} alt='' loading='lazy' decoding='async' />
          </div>
        ) : null}

        <ScrollReveal className='featured-header featured-section-header' as='div' variant='fade-right'>
          <div className='featured-section-heading'>
            <h4>{title}</h4>
          </div>
        </ScrollReveal>

        <ScrollReveal
          className={showcaseClassName}
          as='div'
          delay={120}
          variant={reverseLayout ? 'fade-left' : 'soft-zoom'}
        >
          <div className={stageClasses}>
            {activeItem ? (
              <>
                <button
                  type='button'
                  className='featured-arrow featured-arrow-left'
                  onClick={onPrevious}
                  aria-label={previousLabel}
                  disabled={isImageLoading}
                >
                  ←
                </button>

                <button
                  type='button'
                  className='featured-arrow featured-arrow-right'
                  onClick={onNext}
                  aria-label={nextLabel}
                  disabled={isImageLoading}
                >
                  →
                </button>

                <article key={activeItem.title} className={cardClasses}>
                  <div className='featured-card-topbar'>
                  <div className='featured-card-copy'>
                    <h3>{activeItem.title}</h3>
                    <p className='featured-card-description'>{activeItem.description}</p>
                  </div>
                </div>

                <div className='featured-card-gallery'>
                  <div
                    className='featured-card-spotlight'
                    role='group'
                    aria-label={`${title}. Swipe left or right on the artwork to browse.`}
                    style={{ touchAction: 'pan-y' }}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    onTouchCancel={resetTouchTracking}
                  >
                    <div className={frameClasses}>
                      <div className='featured-media-shell'>
                        {isImageLoading ? (
                          <div className='featured-image-loader' aria-live='polite' aria-label='Loading next image'>
                            <span className='featured-image-loader__spinner' aria-hidden='true' />
                          </div>
                        ) : null}

                        <img
                          src={activeItem.image.src}
                          srcSet={activeItem.image.srcSet}
                          sizes={activeItem.image.sizes}
                          alt={activeItem.title}
                          className='featured-main-image'
                          loading='lazy'
                          decoding='async'
                          onLoad={() => {
                            loadedSourcesRef.current.add(activeItem.image.src)
                          }}
                        />
                      </div>
                    </div>

                    <p className='featured-swipe-hint' aria-hidden='true'>
                      <span className='featured-swipe-hint__icon'>↔</span>
                      Swipe to view gallery
                    </p>

                    <div className='featured-meta'>
                      <p>{activeItem.medium}</p>
                      <span>{activeItem.year}</span>
                      <span>{activeItem.dimensions}</span>
                    </div>
                  </div>
                </div>
              </article>
              </>
            ) : (
              <article className={['featured-main-card', cardClassName, 'miniature-empty'].filter(Boolean).join(' ')}>
                <div className='featured-card-copy'>
                  <h3>{emptyTitle}</h3>
                </div>
                <div
                  className={['featured-frame', frameClassName, 'miniature-frame', 'miniature-placeholder'].filter(Boolean).join(' ')}
                >
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
