import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'

type ScrollRevealVariant = 'fade-up' | 'fade-left' | 'fade-right' | 'soft-zoom'

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  as?: ElementType
  delay?: number
  variant?: ScrollRevealVariant
}

export default function ScrollReveal({
  children,
  className,
  as: Component = 'div',
  delay = 0,
  variant = 'fade-up',
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current

    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]

        if (!entry?.isIntersecting) return

        setIsVisible(true)
        observer.unobserve(entry.target)
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <Component
      ref={ref}
      className={['scroll-reveal', isVisible ? 'is-visible' : '', className].filter(Boolean).join(' ')}
      style={{ transitionDelay: `${delay}ms` }}
      data-reveal-variant={variant}
    >
      {children}
    </Component>
  )
}
