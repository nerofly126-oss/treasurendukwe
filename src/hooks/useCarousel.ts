import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

export type CarouselDirection = 'forward' | 'backward'

export type UseCarouselResult = {
  activeIndex: number
  activeItemIndex: number
  direction: CarouselDirection
  isAnimating: boolean
  showPrevious: () => void
  showNext: () => void
}

export const useCarousel = (length: number): UseCarouselResult => {
  const safeLength = Math.max(0, length)
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState<CarouselDirection>('forward')
  const [isAnimating, setIsAnimating] = useState(false)
  const animationTimeoutRef = useRef<number | null>(null)

  useEffect(() => {
    if (safeLength <= 0) {
      setActiveIndex(0)
      setIsAnimating(false)
      return
    }

    setActiveIndex((currentIndex) => {
      if (currentIndex < safeLength) {
        return currentIndex
      }

      return 0
    })
  }, [safeLength])

  useEffect(() => {
    return () => {
      if (animationTimeoutRef.current !== null) {
        window.clearTimeout(animationTimeoutRef.current)
      }
    }
  }, [])

  const triggerAnimation = useCallback((nextDirection: CarouselDirection) => {
    setDirection(nextDirection)
    setIsAnimating(true)

    if (animationTimeoutRef.current !== null) {
      window.clearTimeout(animationTimeoutRef.current)
    }

    animationTimeoutRef.current = window.setTimeout(() => {
      setIsAnimating(false)
      animationTimeoutRef.current = null
    }, 900)
  }, [])

  const showPrevious = useCallback(() => {
    if (safeLength <= 0) {
      return
    }

    triggerAnimation('backward')
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? safeLength - 1 : currentIndex - 1
    )
  }, [safeLength, triggerAnimation])

  const showNext = useCallback(() => {
    if (safeLength <= 0) {
      return
    }

    triggerAnimation('forward')
    setActiveIndex((currentIndex) =>
      currentIndex === safeLength - 1 ? 0 : currentIndex + 1
    )
  }, [safeLength, triggerAnimation])

  return useMemo(
    () => ({
      activeIndex,
      activeItemIndex: activeIndex,
      direction,
      isAnimating,
      showPrevious,
      showNext,
    }),
    [activeIndex, direction, isAnimating, showNext, showPrevious]
  )
}
