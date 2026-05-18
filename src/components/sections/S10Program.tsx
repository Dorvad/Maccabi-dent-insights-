import React from 'react'
import { useInView } from '../../hooks/useInView'
import Reveal from '../shared/Reveal'
import InsightCard from '../shared/InsightCard'

interface Track {
  num: string
  title: string
  sub: string
  desc: string
  meta: string
  color: string
}

const tracks: Track[] = [
  {
    num: '01',
    title: 'סדנה רבעונית קצרה',
    sub: 'Quarterly Workshop',
    desc: 'תרגול מצבי שירות מורכבים, עומסים, שיחות קשות וקבלת החלטות. ספציפי לתפקיד ולמרפאה.',
    meta: 'פורמט מוביל — 31%',
    color: '#00A4B4',
  },
  {
    num: '02',
    title: 'טיפת כלי חודשית',
    sub: 'Monthly Tool Drop',
    desc: "צ'קליסט, תסריט שיחה, תצפית, דף משוב או תבנית פעולה — ישיר, מיידי, מיישם.",
    meta: 'כלים מוכנים — 18%',
    color: '#007A87',
  },
  {
    num: '03',
    title: 'ליווי לפי צורך',
    sub: 'On-Demand Coaching',
    desc: 'מענה קצר לסיטואציות אמיתיות — עומס, תלונות, יוזמה חדשה. לפי קריאה מהמרפאה.',
    meta: 'לפי צורך — 41%',
    color: '#34C38F',
  },
]

function ArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function S10Program() {
  const [ref, inView] = useInView()

  return (
    <section className="section section--alt" ref={ref} aria-labelledby="s10-title">
      <div className="container-md">
        <Reveal>
          <p className="section__eyebrow">08 · תוכנית מוצעת</p>
          <h2 id="s10-title" className="section__title">המודל התפעולי ל-2026</h2>
          <p className="section__sub">
            שלושה ערוצים משלימים שמתחברים ללולאה אחת של שיפור שירות מתמשך.
          </p>
        </Reveal>

        {/* Three tracks */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          marginTop: '2rem',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '0',
            alignItems: 'stretch',
            flexWrap: 'wrap',
          }}>
            {tracks.map((track, i) => (
              <React.Fragment key={track.num}>
                <div
                  style={{
                    flex: '1 1 220px',
                    background: 'white',
                    borderRadius: 16,
                    boxShadow: '0 1px 2px rgba(11,42,74,.04), 0 8px 24px rgba(11,42,74,.06)',
                    padding: '1.5rem',
                    borderTop: `4px solid ${track.color}`,
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateY(0)' : 'translateY(16px)',
                    transition: `opacity 600ms cubic-bezier(0.22,1,0.36,1) ${i * 150 + 100}ms, transform 600ms cubic-bezier(0.22,1,0.36,1) ${i * 150 + 100}ms`,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                    <span style={{
                      width: 32, height: 32, borderRadius: '50%',
                      background: `${track.color}22`,
                      color: track.color,
                      fontWeight: 900, fontSize: '0.8125rem',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      direction: 'ltr',
                    }}>
                      {track.num}
                    </span>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: track.color, letterSpacing: '0.04em' }}>
                      {track.sub}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0B2A4A', marginBottom: 8, marginTop: 0 }}>
                    {track.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.6, marginBottom: '1rem', marginTop: 0 }}>
                    {track.desc}
                  </p>
                  <span style={{
                    display: 'inline-block',
                    background: `${track.color}15`,
                    color: track.color,
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '4px 12px',
                    borderRadius: 999,
                  }}>
                    {track.meta}
                  </span>
                </div>
                {i < tracks.length - 1 && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0 0.5rem',
                    color: '#00A4B4',
                    opacity: 0.5,
                  }} aria-hidden="true">
                    <ArrowIcon />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Feedback loop */}
        <Reveal delay={500}>
          <div style={{ marginTop: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
              <div style={{ flex: 1, height: 1, background: '#E2E8F0' }} />
              <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#475569' }}>
                לולאת משוב
              </span>
              <div style={{ flex: 1, height: 1, background: '#E2E8F0' }} />
            </div>
            <div style={{
              background: 'white',
              borderRadius: 16,
              boxShadow: '0 1px 2px rgba(11,42,74,.04), 0 8px 24px rgba(11,42,74,.06)',
              padding: '1.25rem 1.5rem',
              borderTop: '4px solid #F2B544',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem',
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: '50%',
                background: '#F2B54420',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.25rem', flexShrink: 0,
              }} aria-hidden="true">🔄</div>
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0B2A4A', marginBottom: 4, marginTop: 0 }}>
                  מדידה ולמידה חוזרת
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                  מדדי שביעות רצון, נתוני המתנה, ותצפיות ישירות — בקרה רבעונית ולולאת שיפור מתמשכת.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <InsightCard tag="נושא Q1 2026 המוצע" delay={600}>
          <strong>התמודדות עם מצבי שירות מורכבים</strong> — הדרישה האוניברסלית ביותר בסקר, הן כאתגר והן כבקשת חיזוק.
          הנקודה שמחברת בין כל התפקידים ותרגיש רלוונטית לכולם בחדר.
        </InsightCard>
      </div>
    </section>
  )
}
