import React from 'react'
import { useInView } from '../../hooks/useInView'
import Reveal from '../shared/Reveal'
import InsightCard from '../shared/InsightCard'
import { formats, frequency } from '../../data/surveyData'

// Indices that should appear bold in the chart labels
const BOLD_FORMATS = new Set([0, 1, 2]) // סדנאות, כלים יישומיים, למידה משולבת
const BOLD_FREQ    = new Set([0, 1])    // לפי צורך, אחת לרבעון

export default function S8Learning() {
  const [ref, inView] = useInView()
  const maxFmt  = formats[0].pct
  const maxFreq = frequency[0].pct

  return (
    <section className="section section--alt" ref={ref} aria-labelledby="s8-title">
      <div className="container-md">
        <Reveal>
          <p className="section__eyebrow">06 · פורמט ותדירות</p>
          <h2 id="s8-title" className="section__title">איך רוצים ללמוד</h2>
          <p className="section__sub">
            סדנה קצרה, כלים מוכנים וליווי לפי צורך — שלוש העדפות שחוזרות על עצמן.
          </p>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
          {/* Formats */}
          <Reveal delay={0}>
            <div className="card" style={{ height: '100%' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0B2A4A', marginBottom: '0.5rem', marginTop: 0 }}>
                פורמטי למידה מועדפים
              </h3>
              <p className="section__question">שאלה 6: "איך הכי נכון עבורך לצרוך ידע וכלים בתחום השירות? (ניתן לבחור יותר מתשובה אחת)"</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }} role="list">
                {formats.map((f, i) => {
                  const isBold = BOLD_FORMATS.has(i)
                  const isLast = i === formats.length - 1
                  const w = (f.pct / maxFmt) * 100
                  return (
                    <div key={f.he} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} role="listitem">
                      <span style={{
                        fontSize: '0.8125rem',
                        fontWeight: isBold ? 700 : 500,
                        color: isBold ? '#0B2A4A' : '#475569',
                        textAlign: 'right',
                        width: 160,
                        flexShrink: 0,
                        lineHeight: 1.35,
                      }}>
                        {f.he}
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
                      <div style={{ flex: 1, height: '1.75rem', background: '#F7FAFB', borderRadius: 999, overflow: 'hidden' }}>
                        <div style={{
                          height: '100%',
                          borderRadius: 999,
                          width: inView ? `${w}%` : '0%',
                          background: isLast ? '#CBD5E1' : isBold ? '#007A87' : '#00A4B4',
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

          {/* Frequency */}
          <Reveal delay={120}>
            <div className="card" style={{ height: '100%' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0B2A4A', marginBottom: '0.5rem', marginTop: 0 }}>
                תדירות מועדפת
              </h3>
              <p className="section__question">שאלה 7: "מה התדירות האידיאלית מבחינתך ללמידה/ליווי בתחום השירות?"</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} role="list">
                {frequency.map((f, i) => {
                  const isBold = BOLD_FREQ.has(i)
                  const w = (f.pct / maxFreq) * 100
                  return (
                    <div key={f.he} role="listitem">
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.375rem' }}>
                        <span style={{ fontSize: '0.9375rem', fontWeight: isBold ? 700 : 500, color: '#0B2A4A' }}>{f.he}</span>
                        <span style={{ fontSize: '0.875rem', fontWeight: 700, color: isBold ? '#00A4B4' : '#475569', direction: 'ltr' }}>{f.pct}%</span>
                      </div>
                      <div style={{ height: '2.5rem', background: '#F7FAFB', borderRadius: '0.75rem', overflow: 'hidden' }}>
                        <div style={{
                          height: '100%',
                          borderRadius: '0.75rem',
                          width: inView ? `${w}%` : '0%',
                          background: isBold ? 'linear-gradient(90deg, #007A87, #00A4B4)' : '#E0F5F7',
                          transition: `width 0.7s cubic-bezier(0.22,1,0.36,1) ${i * 80}ms`,
                          display: 'flex',
                          alignItems: 'center',
                          padding: '0 1rem',
                          minWidth: inView && f.pct > 0 ? '3rem' : 0,
                        }}>
                          {isBold && <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'white', whiteSpace: 'nowrap' }}>{f.en}</span>}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </Reveal>
        </div>

        <InsightCard delay={200}>
          <strong>סדנאות פרונטליות קצרות</strong>, <strong>כלים יישומיים מוכנים לשימוש</strong> ו-<strong>למידה משולבת</strong> — שלושת הפורמטים המובילים.
          {' '}הנתונים מצביעים על תוכנית שמותאמת לכל מרפאה לפי הצורך שלה — לא יום עיון אחיד לכולם.
          יש להעריך את האופן שבו למידה דיגיטלית מתבצעת ולבחון כיצד ניתן להתאימה לשטח.
        </InsightCard>
      </div>
    </section>
  )
}
