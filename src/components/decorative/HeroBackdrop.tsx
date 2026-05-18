import React from 'react'

export default function HeroBackdrop() {
  return (
    <svg className="hero-bg" viewBox="0 0 1280 760" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <radialGradient id="bgGlow1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00A4B4" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#00A4B4" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="bgGlow2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF6B5E" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#FF6B5E" stopOpacity="0" />
        </radialGradient>
        <pattern id="dotgrid" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.3" fill="#00A4B4" opacity="0.15" />
        </pattern>
      </defs>
      <rect x="900" y="420" width="320" height="260" fill="url(#dotgrid)" />
      <circle cx="200" cy="180" r="240" fill="url(#bgGlow1)" />
      <circle cx="1100" cy="260" r="200" fill="url(#bgGlow1)" />
      <circle cx="960" cy="560" r="220" fill="url(#bgGlow2)" />
      <line x1="0" y1="72" x2="1280" y2="72" stroke="#00A4B4" strokeWidth="1" opacity="0.07" />
      <ellipse cx="640" cy="680" rx="500" ry="60" fill="#00A4B4" opacity="0.03" />
    </svg>
  )
}
