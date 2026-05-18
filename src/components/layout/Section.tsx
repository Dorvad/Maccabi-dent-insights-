import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
  alt?: boolean
  id?: string
  ariaLabel?: string
}

export default function Section({ children, alt = false, id, ariaLabel }: Props) {
  return (
    <section
      id={id}
      className={`section ${alt ? 'section--alt' : ''}`}
      aria-label={ariaLabel}
    >
      <div className="container-md">
        {children}
      </div>
    </section>
  )
}
