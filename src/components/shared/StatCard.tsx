import React from 'react'
import { useCountUp } from '../../hooks/useCountUp'

interface Props {
  value: number
  decimals?: number
  suffix?: string
  label: string
  inView: boolean
  className?: string
}

export default function StatCard({ value, decimals = 0, suffix = '', label, inView, className = '' }: Props) {
  const current = useCountUp(value, inView, { decimals })
  return (
    <div className={`card flex flex-col items-center text-center py-8 ${className}`}>
      <div className="text-4xl font-black text-md-navy ltr mb-2">
        {decimals > 0 ? current.toFixed(decimals) : current}{suffix}
      </div>
      <div className="text-sm text-md-navy-soft font-medium">{label}</div>
    </div>
  )
}
