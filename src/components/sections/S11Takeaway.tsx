import React from 'react'
import Reveal from '../shared/Reveal'
import { insights, initiatives } from '../../data/insightsContent'

function InsightCard({ item, index }: { item: (typeof insights)[number], index: number }) {
  return (
    <Reveal delay={index * 80}>
      <article
        style={{
          background: 'linear-gradient(160deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.06) 100%)',
          border: '1px solid rgba(255,255,255,0.18)',
          borderRadius: 22,
          padding: '1.25rem',
          backdropFilter: 'blur(6px)',
          transformStyle: 'preserve-3d',
          transition: 'transform .35s ease, box-shadow .35s ease',
          boxShadow: '0 10px 28px rgba(0,0,0,.22)',
        }}
        className="insight-card"
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '0.75rem' }}>
          <span style={{
            minWidth: 34,
            height: 34,
            borderRadius: '50%',
            display: 'grid',
            placeItems: 'center',
            background: 'radial-gradient(circle at 30% 30%, #34C38F, #00A4B4)',
            color: '#06233d',
            fontWeight: 800,
          }}>{item.id}</span>
          <h3 style={{ margin: 0, color: 'white', fontSize: '1.1rem', lineHeight: 1.4 }}>{item.title}</h3>
        </div>

        <div style={{ marginBottom: '0.85rem' }}>
          <p style={{ margin: '0 0 .45rem', fontWeight: 700, color: '#9fe9f0', fontSize: '.9rem' }}>מה אמרו בשטח</p>
          <ul style={{ margin: 0, paddingInlineStart: '1.1rem', color: 'rgba(255,255,255,0.92)', lineHeight: 1.75 }}>
            {item.fieldQuotes.map((q, i) => <li key={i}>{q}</li>)}
          </ul>
        </div>

        <div>
          <p style={{ margin: '0 0 .45rem', fontWeight: 700, color: '#9fe9f0', fontSize: '.9rem' }}>רעיונות לפעולה — מתוך דברי המנהלים</p>
          <ol style={{ margin: 0, paddingInlineStart: '1.2rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.75 }}>
            {item.actionIdeas.map((a, i) => <li key={i}>{a}</li>)}
          </ol>
        </div>
      </article>
    </Reveal>
  )
}

export default function S11InsightsShowcase() {
  return (
    <section
      aria-labelledby="s11-title"
      style={{
        background: 'radial-gradient(1200px 500px at 80% -10%, rgba(52,195,143,.16), transparent), linear-gradient(160deg, #0B2A4A 0%, #0D3557 55%, #0F3F65 100%)',
      }}
    >
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.06, pointerEvents: 'none' }} aria-hidden="true">
          <defs>
            <pattern id="insights-grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="#00A4B4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#insights-grid)" />
        </svg>

        <div className="container-md" style={{ position: 'relative', zIndex: 1, paddingTop: '4.5rem', paddingBottom: '5rem' }}>
          <Reveal>
            <p className="section__eyebrow" style={{ textAlign: 'center' }}>10 · תובנות מרכזיות</p>
            <h2 id="s11-title" style={{ textAlign: 'center', color: 'white', marginTop: 0, marginBottom: '.4rem', fontSize: 'clamp(1.7rem,3vw,2.6rem)' }}>
              תובנות ממצאי הסקר
            </h2>
            <p style={{ textAlign: 'center', color: '#9fe9f0', marginTop: 0, marginBottom: '2rem', fontWeight: 600 }}>
              ממצאים, קולות מהשטח והמלצות לפעולה
            </p>
          </Reveal>

          <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))' }}>
            {insights.map((item, i) => <InsightCard key={item.id} item={item} index={i} />)}
          </div>

          <Reveal delay={300}>
            <div style={{ marginTop: '2rem', background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.18)', borderRadius: 20, overflow: 'hidden' }}>
              <div style={{ padding: '1rem 1.2rem', borderBottom: '1px solid rgba(255,255,255,.15)' }}>
                <h3 style={{ margin: 0, color: 'white', fontSize: '1.15rem' }}>יוזמות מוצעות</h3>
              </div>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 840 }}>
                  <thead>
                    <tr style={{ background: 'rgba(0,0,0,.14)' }}>
                      {['#','יוזמה','מטרות','תכולות'].map((h) => (
                        <th key={h} style={{ color: '#aeeaf0', textAlign: 'right', padding: '.8rem', fontSize: '.9rem' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {initiatives.map((row, i) => (
                      <tr key={i} style={{ borderTop: '1px solid rgba(255,255,255,.12)' }}>
                        <td style={{ color: 'white', padding: '.8rem', verticalAlign: 'top', fontWeight: 700 }}>{i + 1}</td>
                        <td style={{ color: 'white', padding: '.8rem', verticalAlign: 'top' }}>
                          <strong>{row.name}</strong>
                          <div style={{ color: '#9fe9f0', fontSize: '.92rem', marginTop: '.2rem' }}>{row.subtitle}</div>
                        </td>
                        <td style={{ color: 'rgba(255,255,255,.92)', padding: '.8rem', verticalAlign: 'top', lineHeight: 1.55 }}>{row.goals}</td>
                        <td style={{ color: 'rgba(255,255,255,.92)', padding: '.8rem', verticalAlign: 'top' }}>
                          <ul style={{ margin: 0, paddingInlineStart: '1rem', lineHeight: 1.55 }}>
                            {row.contents.map((c, ci) => <li key={ci}>{c}</li>)}
                          </ul>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p style={{ margin: 0, padding: '0.9rem 1.2rem', color: 'rgba(255,255,255,0.75)', borderTop: '1px solid rgba(255,255,255,.12)', fontSize: '.85rem' }}>
                הרעיונות לפעולה מצוטטים כלשונם מתשובות המנהלים בסקר
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
