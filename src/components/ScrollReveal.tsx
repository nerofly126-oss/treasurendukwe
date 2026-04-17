import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  as?: ElementType
  delay?: number
}

export default function ScrollReveal({
  children,
  className,
  as: Component = 'div',
  delay = 0,
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
    >
      {children}
    </Component>
  )
}
