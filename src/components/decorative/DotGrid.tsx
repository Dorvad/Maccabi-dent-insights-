import React from 'react'

interface Props {
  className?: string
  opacity?: number
}

export default function DotGrid({ className = '', opacity = 0.15 }: Props) {
  return (
    <svg className={className} aria-hidden="true" width="100%" height="100%">
      <defs>
        <pattern id="dotgrid-pattern" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.3" fill="#00A4B4" opacity={opacity} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dotgrid-pattern)" />
    </svg>
  )
}
