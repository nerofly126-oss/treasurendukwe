import { useCallback, useEffect, useMemo, useState } from 'react'

export type UseCarouselResult = {
  activeIndex: number
  activeItemIndex: number
  showPrevious: () => void
  showNext: () => void
}

export const useCarousel = (length: number): UseCarouselResult => {
  const safeLength = Math.max(0, length)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (safeLength <= 0) {
      setActiveIndex(0)
      return
    }

    setActiveIndex((currentIndex) => {
      if (currentIndex < safeLength) {
        return currentIndex
      }

      return 0
    })
  }, [safeLength])

  const showPrevious = useCallback(() => {
    if (safeLength <= 0) {
      return
    }

    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? safeLength - 1 : currentIndex - 1
    )
  }, [safeLength])

  const showNext = useCallback(() => {
    if (safeLength <= 0) {
      return
    }

    setActiveIndex((currentIndex) =>
      currentIndex === safeLength - 1 ? 0 : currentIndex + 1
    )
  }, [safeLength])

  return useMemo(
    () => ({
      activeIndex,
      activeItemIndex: activeIndex,
      showPrevious,
      showNext,
    }),
    [activeIndex, showNext, showPrevious]
  )
}