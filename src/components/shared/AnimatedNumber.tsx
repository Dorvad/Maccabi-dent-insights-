import React from 'react'
import { useCountUp } from '../../hooks/useCountUp'

interface Props {
  value: number
  decimals?: number
  suffix?: string
  inView: boolean
  className?: string
}

export default function AnimatedNumber({ value, decimals = 0, suffix = '', inView, className = '' }: Props) {
  const current = useCountUp(value, inView, { decimals })
  return (
    <span className={`ltr ${className}`}>
      {decimals > 0 ? current.toFixed(decimals) : current}
      {suffix}
    </span>
  )
}
