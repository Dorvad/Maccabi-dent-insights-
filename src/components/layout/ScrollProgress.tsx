import React, { useState, useEffect } from 'react'

export default function ScrollProgress() {
  const [pct, setPct] = useState(0)
  useEffect(() => {
    const update = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      setPct(h > 0 ? Math.min(1, window.scrollY / h) : 0)
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  return (
    <div className="scroll-progress" aria-hidden="true">
      <div className="scroll-progress__fill" style={{ transform: `scaleX(${pct})` }} />
    </div>
  )
}
