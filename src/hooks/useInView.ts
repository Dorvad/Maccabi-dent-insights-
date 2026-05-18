import { useState, useEffect, useRef, RefObject } from 'react'

export function useInView(options?: { threshold?: number }): [RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (inView) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) { setInView(true); return }

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: options?.threshold ?? 0.05, rootMargin: '0px 0px -5% 0px' }
    )
    const el = ref.current
    if (el) observer.observe(el)
    const safetyId = setTimeout(() => setInView(true), 3000)
    return () => {
      if (el) observer.unobserve(el)
      clearTimeout(safetyId)
    }
  }, [inView, options?.threshold])

  return [ref, inView]
}
