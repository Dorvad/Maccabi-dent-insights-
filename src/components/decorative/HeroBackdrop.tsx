import React from 'react'

export default function HeroBackdrop() {
  return (
    <svg className="hero-bg" viewBox="0 0 1280 760" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <radialGradient id="bgGlow1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00A4B4" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#00A4B4" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="bgGlow2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF6B5E" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#FF6B5E" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="bgGlow3" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#34C38F" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#34C38F" stopOpacity="0" />
        </radialGradient>
        <pattern id="dotgrid" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.3" fill="#00A4B4" opacity="0.18" />
        </pattern>
      </defs>

      {/* Static blobs */}
      <rect x="860" y="380" width="360" height="300" fill="url(#dotgrid)" />
      <circle cx="200" cy="180" r="260" fill="url(#bgGlow1)" />
      <circle cx="1100" cy="260" r="220" fill="url(#bgGlow1)" />
      <circle cx="960" cy="560" r="240" fill="url(#bgGlow2)" />
      <circle cx="400" cy="580" r="180" fill="url(#bgGlow3)" />

      {/* Hairlines */}
      <line x1="0" y1="72" x2="1280" y2="72" stroke="#00A4B4" strokeWidth="1" opacity="0.07" />
      <ellipse cx="640" cy="690" rx="520" ry="65" fill="#00A4B4" opacity="0.03" />

      {/* Animated floating circles */}
      <circle cx="120" cy="420" r="6" fill="#00A4B4" opacity="0.25">
        <animateTransform attributeName="transform" type="translate"
          values="0 0; 0 -14; 0 0" dur="4.2s" repeatCount="indefinite" calcMode="spline"
          keySplines="0.45 0 0.55 1; 0.45 0 0.55 1" />
      </circle>

      <circle cx="1180" cy="140" r="5" fill="#34C38F" opacity="0.3">
        <animateTransform attributeName="transform" type="translate"
          values="0 0; 0 -12; 0 0" dur="3.6s" begin="0.8s" repeatCount="indefinite" calcMode="spline"
          keySplines="0.45 0 0.55 1; 0.45 0 0.55 1" />
      </circle>

      <circle cx="680" cy="660" r="7" fill="#F2B544" opacity="0.22">
        <animateTransform attributeName="transform" type="translate"
          values="0 0; 0 -10; 0 0" dur="5s" begin="1.5s" repeatCount="indefinite" calcMode="spline"
          keySplines="0.45 0 0.55 1; 0.45 0 0.55 1" />
      </circle>

      <circle cx="960" cy="90" r="4" fill="#FF6B5E" opacity="0.28">
        <animateTransform attributeName="transform" type="translate"
          values="0 0; 0 -9; 0 0" dur="3.9s" begin="0.4s" repeatCount="indefinite" calcMode="spline"
          keySplines="0.45 0 0.55 1; 0.45 0 0.55 1" />
      </circle>

      <circle cx="340" cy="300" r="5" fill="#007A87" opacity="0.2">
        <animateTransform attributeName="transform" type="translate"
          values="0 0; 0 -11; 0 0" dur="4.7s" begin="2.1s" repeatCount="indefinite" calcMode="spline"
          keySplines="0.45 0 0.55 1; 0.45 0 0.55 1" />
      </circle>

      <circle cx="1050" cy="480" r="4.5" fill="#00A4B4" opacity="0.2">
        <animateTransform attributeName="transform" type="translate"
          values="0 0; 0 -13; 0 0" dur="4.4s" begin="1.2s" repeatCount="indefinite" calcMode="spline"
          keySplines="0.45 0 0.55 1; 0.45 0 0.55 1" />
      </circle>

      {/* Animated rings */}
      <circle cx="200" cy="180" r="40" fill="none" stroke="#00A4B4" strokeWidth="1" opacity="0.12">
        <animate attributeName="r" values="40;60;40" dur="6s" repeatCount="indefinite" calcMode="spline"
          keySplines="0.45 0 0.55 1; 0.45 0 0.55 1" />
        <animate attributeName="opacity" values="0.12;0.04;0.12" dur="6s" repeatCount="indefinite" calcMode="spline"
          keySplines="0.45 0 0.55 1; 0.45 0 0.55 1" />
      </circle>

      <circle cx="1100" cy="260" r="35" fill="none" stroke="#00A4B4" strokeWidth="1" opacity="0.1">
        <animate attributeName="r" values="35;55;35" dur="7s" begin="2s" repeatCount="indefinite" calcMode="spline"
          keySplines="0.45 0 0.55 1; 0.45 0 0.55 1" />
        <animate attributeName="opacity" values="0.1;0.03;0.1" dur="7s" begin="2s" repeatCount="indefinite" calcMode="spline"
          keySplines="0.45 0 0.55 1; 0.45 0 0.55 1" />
      </circle>

      {/* Drifting arc */}
      <path d="M 0 620 Q 320 560 640 600 Q 960 640 1280 580"
        fill="none" stroke="#00A4B4" strokeWidth="1.5" opacity="0.06">
        <animate attributeName="d"
          values="M 0 620 Q 320 560 640 600 Q 960 640 1280 580;
                  M 0 600 Q 320 640 640 580 Q 960 560 1280 620;
                  M 0 620 Q 320 560 640 600 Q 960 640 1280 580"
          dur="10s" repeatCount="indefinite" calcMode="spline"
          keySplines="0.45 0 0.55 1; 0.45 0 0.55 1" />
      </path>
    </svg>
  )
}
