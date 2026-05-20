import React from 'react'
import { useInView } from '../../hooks/useInView'
import { useCountUp } from '../../hooks/useCountUp'
import Reveal from '../shared/Reveal'

const ICONS = {
  users: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  clinic: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  check: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  ),
  star: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
}

interface KpiProps {
  value: number; decimals?: number; suffix?: string
  caption: string; icon: keyof typeof ICONS
  inView: boolean; delay: number; color?: string
}

function KpiCard({ value, decimals = 0, suffix = '', caption, icon, inView, delay, color = '#00A4B4' }: KpiProps) {
  const current = useCountUp(value, inView, { decimals })
  return (
    <Reveal delay={delay}>
      <div className="kpi" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Shimmer sweep */}
        {inView && (
          <div aria-hidden="true" style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.5) 50%, transparent 60%)',
            animation: `kpi-shimmer 1.8s ease ${delay + 400}ms 1 both`,
          }} />
        )}
        <div
          className="kpi__icon"
          aria-hidden="true"
          style={{
            color,
            background: `${color}18`,
            animation: inView ? `mint-breathe 2.5s ease-in-out ${delay + 800}ms infinite` : 'none',
          }}
        >
          {ICONS[icon]}
        </div>
        <div
          className="kpi__num"
          style={{
            color: '#002060',
            animation: inView ? `warm-rise 0.6s cubic-bezier(0.22,1,0.36,1) ${delay + 200}ms both` : 'none',
          }}
        >
          <span className="ltr">
            {decimals > 0 ? current.toFixed(decimals) : current}
            {suffix && <span className="kpi__num-unit">{suffix}</span>}
          </span>
        </div>
        <div className="kpi__cap">{caption}</div>
      </div>
    </Reveal>
  )
}

export default function S2KpiStrip() {
  const [ref, inView] = useInView()
  return (
    <section
      ref={ref}
      aria-label="מדדים מרכזיים"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(to bottom, #EBE1D1 0%, #F5F0E8 45%, #FFFFFF 100%)',
      }}
      className="section"
    >
      <div aria-hidden="true" style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        width: 600, height: 300, borderRadius: '50%',
        background: 'radial-gradient(ellipse, #5AB9A5 0%, transparent 70%)',
        opacity: 0.04, filter: 'blur(60px)', pointerEvents: 'none',
      }} />
      <div className="container-md" style={{ position: 'relative', zIndex: 1 }}>
        <div className="kpi-strip">
          <KpiCard value={175} caption='משיבים בסה"כ'       icon="users"  inView={inView} delay={0}   color="#5AB9A5" />
          <KpiCard value={58}  caption="מרפאות שכוסו בסקר"  icon="clinic" inView={inView} delay={80}  color="#003A3A" />
          <KpiCard value={70.3} decimals={1} suffix="%" caption="השלימו את הסקר" icon="check" inView={inView} delay={160} color="#98AE56" />
          <KpiCard value={3.78} decimals={2} suffix=" / 5" caption="תחושת מוכנות ממוצעת" icon="star" inView={inView} delay={240} color="#F5990C" />
        </div>
      </div>
    </section>
  )
}
