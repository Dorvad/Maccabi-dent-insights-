import React, { ReactNode } from 'react'
import Reveal from '../shared/Reveal'

interface Props {
  eyebrow: string
  title: string
  sub?: ReactNode
  id?: string
}

export default function SectionHeader({ eyebrow, title, sub, id }: Props) {
  return (
    <Reveal>
      <p className="section__eyebrow">{eyebrow}</p>
      <h2 id={id} className="section__title">{title}</h2>
      {sub && <p className="section__sub">{sub}</p>}
    </Reveal>
  )
}
