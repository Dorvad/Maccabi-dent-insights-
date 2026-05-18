import React, { ReactNode } from 'react'
import Reveal from './Reveal'

interface Props {
  tag?: string
  children: ReactNode
  delay?: number
  accent?: boolean
}

export default function InsightCard({ tag, children, delay = 0, accent = false }: Props) {
  return (
    <Reveal delay={delay}>
      <div className={`insight-card ${accent ? 'border-md-coral/30 bg-red-50' : ''}`}>
        {tag && <div className="insight-card__tag">{tag}</div>}
        <p className="insight-card__text">{children}</p>
      </div>
    </Reveal>
  )
}
