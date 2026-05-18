import { useState, useEffect, useLayoutEffect, useRef, RefObject } from 'react'

export function useInView(options?: { threshold?: number }): [RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  // Reveal elements already visible on first paint — runs before browser paints, so no flash
  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) setInView(true)
  }, [])

  useEffect(() => {
    if (inView) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) { setInView(true); return }

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: options?.threshold ?? 0, rootMargin: '0px' }
    )
    const el = ref.current
    if (el) observer.observe(el)
    const safetyId = setTimeout(() => setInView(true), 600)
    return () => {
      if (el) observer.unobserve(el)
      clearTimeout(safetyId)
    }
  }, [inView, options?.threshold])

  return [ref, inView]
}
