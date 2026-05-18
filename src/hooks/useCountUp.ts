import { useState, useEffect } from 'react'

interface CountUpOptions {
  duration?: number
  decimals?: number
}

export function useCountUp(target: number, inView: boolean, options?: CountUpOptions): number {
  const duration = options?.duration ?? 1400
  const decimals = options?.decimals ?? 0
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) { setVal(target); return }
    const start = performance.now()
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)
    const round = (v: number) =>
      decimals > 0 ? Math.round(v * 10 ** decimals) / 10 ** decimals : Math.floor(v)
    const tick = () => {
      const t = Math.min(1, (performance.now() - start) / duration)
      setVal(round(easeOut(t) * target))
      if (t < 1) requestAnimationFrame(tick)
      else setVal(target)
    }
    requestAnimationFrame(tick)
  }, [inView, target, duration, decimals])

  return val
}
