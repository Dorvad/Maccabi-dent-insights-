import React from 'react'
import { useInView } from '../../hooks/useInView'
import Reveal from '../shared/Reveal'
import InsightCard from '../shared/InsightCard'
import { readiness } from '../../data/surveyData'

const RATING_LABELS: Record<number, string> = { 1: 'לא מוכן/ת', 2: 'חלקית', 3: 'בינוני', 4: 'מוכן/ת', 5: 'מוכן/ת מאוד' }
const BEAD_COLORS = ['#FF6B5E', '#F2B544', '#94A3B8', '#00A4B4', '#007A87']

export default function S4Readiness() {
  const [ref, inView] = useInView()
  const maxRole = Math.max(...readiness.byRole.map(r => r.mean))
  const minRole = Math.min(...readiness.byRole.map(r => r.mean))

  return (
    <section className="section section--alt" ref={ref} aria-labelledby="s4-title">
      <div className="container-md">
        <Reveal>
          <p className="section__eyebrow">02 · תחושת מוכנות</p>
          <h2 id="s4-title" className="section__title">מוכנות להוביל שירות איכותי</h2>
          <span className="section__question">שאלה 3: "באיזו מידה את/ה מרגיש/ה שיש לך כיום את הכלים הנדרשים כדי להוביל שירות איכותי במרפאה?"</span>
          <p className="section__sub">
            ממוצע כלל המשיבים: <strong className="text-md-primary"><span className="ltr">3.78 / 5</span></strong>. תמונה לא אחידה לפי תפקיד.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {/* Distribution */}
          <Reveal delay={0}>
            <div className="card h-full">
              <h3 className="text-base font-bold text-md-navy mb-6">התפלגות הדירוגים (1–5)</h3>
              <div className="flex flex-col gap-3">
                {[...readiness.distribution].reverse().map((d, i) => (
                  <div key={d.rating} className="flex items-center gap-3">
                    <span className="text-sm font-bold text-md-navy ltr w-5">{d.rating}</span>
                    <span className="text-xs text-md-navy-softer w-14 text-right">{RATING_LABELS[d.rating]}</span>
                    <div className="flex-1 h-8 bg-md-bg-alt rounded-full overflow-hidden relative">
                      <div
                        className="h-full rounded-full flex items-center justify-end px-3"
                        style={{
                          width: inView ? `${d.pct}%` : '0%',
                          background: BEAD_COLORS[d.rating - 1],
                          transition: `width 0.7s cubic-bezier(0.22,1,0.36,1) ${i * 60}ms`,
                          minWidth: inView && d.pct > 0 ? '2rem' : 0,
                        }}
                      >
                        {d.pct > 8 && <span className="text-xs font-bold text-white ltr">{d.pct}%</span>}
                      </div>
                      {d.pct <= 8 && (
                        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-bold text-md-navy-soft ltr">{d.pct}%</span>
                      )}
                    </div>
                    <span className="text-xs text-md-navy-softer ltr w-8">{d.count}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-md-border flex items-center gap-3">
                <span className="text-xs text-md-navy-softer">ממוצע</span>
                <span className="text-2xl font-black text-md-primary ltr">3.78</span>
                <span className="text-xs text-md-navy-softer">/ 5</span>
                <span className="text-xs text-md-navy-softer mx-2">|</span>
                <span className="text-xs text-md-navy-softer">חציון</span>
                <span className="text-xl font-bold text-md-navy ltr">4.0</span>
              </div>
            </div>
          </Reveal>

          {/* By role */}
          <Reveal delay={120}>
            <div className="card h-full">
              <h3 className="text-base font-bold text-md-navy mb-6">ממוצע לפי תפקיד (מנמוך לגבוה)</h3>
              <div className="flex flex-col gap-4">
                {readiness.byRole.map((r, i) => {
                  const isMin = r.mean === minRole
                  const isMax = r.mean === maxRole
                  const pct = ((r.mean - 1) / 4) * 100
                  return (
                    <div key={r.role}>
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-sm font-medium ${isMin ? 'text-md-coral font-bold' : 'text-md-navy'}`}>{r.role}</span>
                        <span className={`text-sm font-black ltr ${isMin ? 'text-md-coral' : isMax ? 'text-md-primary' : 'text-md-navy'}`}>{r.mean.toFixed(2)}</span>
                      </div>
                      <div className="h-2.5 bg-md-bg-alt rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: inView ? `${pct}%` : '0%',
                            background: isMin ? '#FF6B5E' : isMax ? '#007A87' : '#00A4B4',
                            transition: `width 0.7s cubic-bezier(0.22,1,0.36,1) ${i * 80}ms`,
                          }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </Reveal>
        </div>

        <InsightCard tag="פער בולט" delay={200} accent>
          מנהלות משרד (ממוצע <span className="ltr font-black">3.34</span>) וסגני מנהל רפואי (<span className="ltr font-black">3.38</span>) — תחושת המוכנות הנמוכה ביותר. אלו התפקידים שהכי זקוקים לתמיכה מותאמת.
        </InsightCard>
      </div>
    </section>
  )
}
