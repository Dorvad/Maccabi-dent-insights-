import React from 'react'
import { useInView } from '../../hooks/useInView'
import Reveal from '../shared/Reveal'
import InsightCard from '../shared/InsightCard'
import { formats, frequency } from '../../data/surveyData'

export default function S8Learning() {
  const [ref, inView] = useInView()
  const maxFmt = formats[0].pct
  const maxFreq = frequency[0].pct

  return (
    <section className="section section--alt" ref={ref} aria-labelledby="s8-title">
      <div className="container-md">
        <Reveal>
          <p className="section__eyebrow">06 · איך ללמוד</p>
          <h2 id="s8-title" className="section__title">פורמט וקצב הלמידה המועדפים</h2>
          <p className="section__sub">
            סדנה קצרה + כלים מוכנים + ליווי לפי צורך. הפורמט הדיגיטלי — אחרון.
          </p>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', marginTop: '2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            <Reveal delay={0}>
              <div className="card" style={{ height: '100%' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0B2A4A', marginBottom: '1.5rem', marginTop: 0 }}>
                  פורמטי למידה מועדפים
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }} role="list">
                  {formats.map((f, i) => {
                    const isTop = i === 0
                    const isLast = i === formats.length - 1
                    const w = (f.pct / maxFmt) * 100
                    return (
                      <div key={f.he} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} role="listitem">
                        <span style={{
                          fontSize: '0.8125rem',
                          fontWeight: isTop ? 700 : 500,
                          color: '#0B2A4A',
                          textAlign: 'right',
                          minWidth: 150,
                          maxWidth: 190,
                          lineHeight: 1.35,
                        }}>
                          {f.he}
                          {isTop && (
                            <span style={{
                              display: 'inline-block',
                              marginRight: 6,
                              background: '#00A4B4',
                              color: 'white',
                              fontSize: '0.7rem',
                              fontWeight: 700,
                              padding: '1px 7px',
                              borderRadius: 999,
                            }}>מוביל</span>
                          )}
                          {isLast && (
                            <span style={{
                              display: 'inline-block',
                              marginRight: 6,
                              background: '#F1F5F9',
                              color: '#94A3B8',
                              fontSize: '0.7rem',
                              fontWeight: 700,
                              padding: '1px 7px',
                              borderRadius: 999,
                            }}>נמוך</span>
                          )}
                        </span>
                        <div style={{ flex: 1, height: '1.75rem', background: '#F7FAFB', borderRadius: 999, overflow: 'hidden', position: 'relative' }}>
                          <div style={{
                            height: '100%',
                            borderRadius: 999,
                            width: inView ? `${w}%` : '0%',
                            background: isLast ? '#CBD5E1' : isTop ? '#007A87' : '#00A4B4',
                            transition: `width 0.7s cubic-bezier(0.22,1,0.36,1) ${i * 60}ms`,
                          }} />
                        </div>
                        <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#0B2A4A', minWidth: 40, textAlign: 'left', direction: 'ltr' }}>
                          {f.pct}%
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="card" style={{ height: '100%' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0B2A4A', marginBottom: '1.5rem', marginTop: 0 }}>
                  קצב הלמידה המועדף
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} role="list">
                  {frequency.map((f, i) => {
                    const isTop = i === 0
                    const w = (f.pct / maxFreq) * 100
                    return (
                      <div key={f.he} role="listitem">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.375rem' }}>
                          <span style={{ fontSize: '0.9375rem', fontWeight: isTop ? 700 : 500, color: '#0B2A4A' }}>{f.he}</span>
                          <span style={{ fontSize: '0.875rem', fontWeight: 700, color: isTop ? '#00A4B4' : '#475569', direction: 'ltr' }}>{f.pct}%</span>
                        </div>
                        <div style={{ height: '2.5rem', background: '#F7FAFB', borderRadius: '0.75rem', overflow: 'hidden', position: 'relative' }}>
                          <div style={{
                            height: '100%',
                            borderRadius: '0.75rem',
                            width: inView ? `${w}%` : '0%',
                            background: isTop ? 'linear-gradient(90deg, #007A87, #00A4B4)' : '#E0F5F7',
                            transition: `width 0.7s cubic-bezier(0.22,1,0.36,1) ${i * 80}ms`,
                            display: 'flex',
                            alignItems: 'center',
                            padding: '0 1rem',
                            minWidth: inView && f.pct > 0 ? '3rem' : 0,
                          }}>
                            {isTop && <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'white', whiteSpace: 'nowrap' }}>{f.en}</span>}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid #E2E8F0' }}>
                  <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                    <strong style={{ color: '#0B2A4A' }}>41%</strong> מבקשים מענה לפי צורך — לא לוח זמנים קבוע. זו הנחייה ברורה למבנה התוכנית.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <InsightCard tag='ה"שלישייה המנצחת"' delay={200}>
          <strong>סדנאות פרונטליות קצרות</strong> (31%) + <strong>כלים מוכנים לשימוש</strong> (18%) + <strong>ליווי לפי צורך</strong> (41% בקצב) — בדיוק המבנה שהנתונים ממליצים עליו.
          למידה דיגיטלית (12%) מדורגת אחרונה — יש להעריך את האופן שבו למידה דיגיטלית מתבצעת ולבחון כיצד ניתן להתאימה לצרכי השטח.
        </InsightCard>
      </div>
    </section>
  )
}
