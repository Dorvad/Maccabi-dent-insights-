import React, { ReactNode, CSSProperties } from 'react'
import { useInView } from '../../hooks/useInView'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  style?: CSSProperties
}

export default function Reveal({ children, delay = 0, className = '', style = {} }: RevealProps) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? 'in' : ''} ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms', ...style }}
    >
      {children}
    </div>
  )
}
