import React from 'react'
import { useInView } from '../../hooks/useInView'
import { useCountUp } from '../../hooks/useCountUp'
import Reveal from '../shared/Reveal'

interface KpiProps { value: number; decimals?: number; suffix?: string; caption: string; icon: string; inView: boolean; delay: number }

function KpiCard({ value, decimals = 0, suffix = '', caption, icon, inView, delay }: KpiProps) {
  const current = useCountUp(value, inView, { decimals })
  return (
    <Reveal delay={delay}>
      <div className="kpi">
        <div className="kpi__icon" aria-hidden="true">{icon}</div>
        <div className="kpi__num">
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
    <section className="section section--alt" ref={ref} aria-label="מדדים מרכזיים">
      <div className="container-md">
        <div className="kpi-strip">
          <KpiCard value={175} caption='משיבים בסה"כ' icon="👥" inView={inView} delay={0} />
          <KpiCard value={58} caption="מרפאות שכוסו בסקר" icon="🏥" inView={inView} delay={80} />
          <KpiCard value={70.3} decimals={1} suffix="%" caption="השלימו את הסקר" icon="✅" inView={inView} delay={160} />
          <KpiCard value={3.78} decimals={2} suffix=" / 5" caption="תחושת מוכנות ממוצעת" icon="⭐" inView={inView} delay={240} />
        </div>
      </div>
    </section>
  )
}
