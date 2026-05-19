import React from 'react'
import Reveal from '../shared/Reveal'
import { voices } from '../../data/surveyData'

// ─── Theme definitions ───────────────────────────────────────────────────────
// To add more quotes: push additional { quote } objects into the `quotes` array
// of the relevant theme, or create a new theme block below.
const THEMES = [
  {
    id: 'overload',
    title: 'עומס ותפעול',
    color: '#FF6B5E',
    tint: 'rgba(255,107,94,0.07)',
    direction: 'כיוון פעולה: הפחתת עומס תפעולי — כלים מהירים, פחות מסכים, יותר תמיכה בשטח.',
    quotes: [voices[0], voices[5]],
  },
  {
    id: 'tools',
    title: 'כלים, שגרה ופתרונות',
    color: '#00A4B4',
    tint: 'rgba(0,164,180,0.07)',
    direction: 'כיוון פעולה: שגרות ניהוליות ברורות וכלים מוכנים לשימוש יומיומי.',
    quotes: [voices[2], voices[3]],
  },
  {
    id: 'culture',
    title: 'אנשים, הכרה ושירות',
    color: '#34C38F',
    tint: 'rgba(52,195,143,0.07)',
    direction: 'כיוון פעולה: חיזוק תרבות שירות, הכרה בצוות והנעה לשיפור מתמשך.',
    quotes: [voices[1], voices[4]],
  },
]

function QuoteCard({ quote, color, tint, delay }: { quote: string; color: string; tint: string; delay: number }) {
  return (
    <Reveal delay={delay}>
      <article
        className="card--hover"
        style={{
          background: `linear-gradient(145deg, white 55%, ${tint} 100%)`,
          borderRadius: 20,
          padding: '1.75rem',
          boxShadow: '0 1px 2px rgba(11,42,74,.04), 0 8px 24px rgba(11,42,74,.07)',
          position: 'relative',
          overflow: 'hidden',
          borderTop: `3px solid ${color}`,
          display: 'flex',
          flexDirection: 'column',
          transition: 'box-shadow 0.3s ease, transform 0.3s ease',
        }}
      >
        <span aria-hidden="true" style={{
          position: 'absolute', top: -28, right: -4,
          fontSize: '10rem', lineHeight: 1,
          color, opacity: 0.07,
          fontFamily: 'Georgia, serif', fontWeight: 900,
          pointerEvents: 'none', userSelect: 'none', direction: 'ltr',
        }}>"</span>
        <blockquote style={{ margin: 0, position: 'relative', zIndex: 1 }}>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#0B2A4A', margin: 0, fontWeight: 500 }}>
            {quote}
          </p>
        </blockquote>
      </article>
    </Reveal>
  )
}

export default function S9Voices() {
  return (
    <section className="section" aria-labelledby="s9-title" style={{ position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{
        position: 'absolute', top: '8%', left: '-5rem',
        width: 320, height: 320, borderRadius: '50%',
        background: 'radial-gradient(circle, #00A4B4 0%, transparent 70%)',
        opacity: 0.05, filter: 'blur(40px)', pointerEvents: 'none',
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: '5%', right: '-4rem',
        width: 250, height: 250, borderRadius: '50%',
        background: 'radial-gradient(circle, #007A87 0%, transparent 70%)',
        opacity: 0.06, filter: 'blur(50px)', pointerEvents: 'none',
      }} />

      <div className="container-md" style={{ position: 'relative', zIndex: 1 }}>
        <Reveal>
          <p className="section__eyebrow">07 · קולות מהשטח</p>
          <h2 id="s9-title" className="section__title">מה שמענו</h2>
          <p className="section__sub">
            ציטוטים מתוך הסקר, מאורגנים לפי נושאים.
          </p>
        </Reveal>

        {THEMES.map((theme, ti) => (
          <div key={theme.id} style={{ marginTop: ti === 0 ? '2.5rem' : '3rem' }}>
            {/* Theme header */}
            <Reveal delay={ti * 60}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: theme.color, flexShrink: 0 }} aria-hidden="true" />
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0B2A4A', margin: 0 }}>
                  {theme.title}
                </h3>
                <div style={{ flex: 1, height: 1, background: '#E2E8F0' }} aria-hidden="true" />
              </div>
            </Reveal>

            {/* Quote cards in 2-col grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.25rem',
            }} role="list">
              {theme.quotes.map((v, qi) => (
                <QuoteCard
                  key={qi}
                  quote={v.quote}
                  color={theme.color}
                  tint={theme.tint}
                  delay={ti * 60 + qi * 80}
                />
              ))}
            </div>

            {/* Intervention direction */}
            <Reveal delay={ti * 60 + theme.quotes.length * 80 + 60}>
              <div style={{
                marginTop: '1rem',
                padding: '0.875rem 1.25rem',
                borderRadius: 12,
                background: `${theme.tint}`,
                border: `1px solid ${theme.color}22`,
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.625rem',
              }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: theme.color, marginTop: 7, flexShrink: 0 }} aria-hidden="true" />
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#475569', lineHeight: 1.65 }}>
                  {theme.direction}
                </p>
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  )
}
