import { useEffect } from 'react'

/**
 * Reveals any element carrying `data-reveal` as it scrolls into view by adding
 * the `is-revealed` class. Optional `data-reveal-delay="2"` staggers it by
 * 2 × 70ms. Honours prefers-reduced-motion by revealing everything immediately.
 */
export default function useScrollReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('[data-reveal]'))
    if (!nodes.length) return

    const reduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduced || typeof IntersectionObserver === 'undefined') {
      nodes.forEach((n) => n.classList.add('is-revealed'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const delay = Number(entry.target.dataset.revealDelay || 0) * 70
          entry.target.style.transitionDelay = `${delay}ms`
          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
    )

    nodes.forEach((n) => observer.observe(n))
    return () => observer.disconnect()
  }, [])
}
