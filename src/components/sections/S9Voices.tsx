import React from 'react'
import Reveal from '../shared/Reveal'
import { voices } from '../../data/surveyData'

const PALETTE = [
  { top: '#00A4B4', tint: 'rgba(0,164,180,0.06)' },
  { top: '#007A87', tint: 'rgba(0,122,135,0.06)' },
  { top: '#34C38F', tint: 'rgba(52,195,143,0.06)' },
  { top: '#F2B544', tint: 'rgba(242,181,68,0.06)' },
  { top: '#FF6B5E', tint: 'rgba(255,107,94,0.06)' },
  { top: '#00A4B4', tint: 'rgba(0,164,180,0.06)' },
]

export default function S9Voices() {
  return (
    <section className="section" aria-labelledby="s9-title" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background decoration */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '10%', left: '-6rem',
        width: 340, height: 340, borderRadius: '50%',
        background: 'radial-gradient(circle, #00A4B4 0%, transparent 70%)',
        opacity: 0.05, filter: 'blur(40px)', pointerEvents: 'none',
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: '5%', right: '-4rem',
        width: 260, height: 260, borderRadius: '50%',
        background: 'radial-gradient(circle, #007A87 0%, transparent 70%)',
        opacity: 0.06, filter: 'blur(50px)', pointerEvents: 'none',
      }} />

      <div className="container-md" style={{ position: 'relative', zIndex: 1 }}>
        <Reveal>
          <p className="section__eyebrow">07 · קולות מהשטח</p>
          <h2 id="s9-title" className="section__title">מה אומרים המובילים</h2>
          <p className="section__sub">
            ציטוטים מתוך הסקר — קולות אותנטיים של מנהלים ומנהלות מהרשת.
          </p>
        </Reveal>

        <div className="voices-grid" role="list">
          {voices.map((v, i) => {
            const pal = PALETTE[i % PALETTE.length]
            return (
              <Reveal key={i} delay={i * 90}>
                <article
                  role="listitem"
                  className="card--hover"
                  style={{
                    background: `linear-gradient(145deg, white 60%, ${pal.tint} 100%)`,
                    borderRadius: 20,
                    padding: '2rem',
                    boxShadow: '0 1px 2px rgba(11,42,74,.04), 0 8px 24px rgba(11,42,74,.07)',
                    position: 'relative',
                    overflow: 'hidden',
                    borderTop: `3px solid ${pal.top}`,
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: 160,
                    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                  }}
                >
                  {/* Large decorative quote in background */}
                  <span aria-hidden="true" style={{
                    position: 'absolute',
                    top: -28,
                    right: -4,
                    fontSize: '11rem',
                    lineHeight: 1,
                    color: pal.top,
                    opacity: 0.08,
                    fontFamily: 'Georgia, serif',
                    fontWeight: 900,
                    pointerEvents: 'none',
                    userSelect: 'none',
                    direction: 'ltr',
                  }}>"</span>

                  {/* Accent dot */}
                  <div aria-hidden="true" style={{
                    width: 8, height: 8, borderRadius: '50%',
                    background: pal.top, marginBottom: '1rem', opacity: 0.7,
                    animation: 'voice-pulse 3s ease-in-out infinite',
                    animationDelay: `${i * 0.4}s`,
                  }} />

                  <blockquote style={{ margin: 0, position: 'relative', zIndex: 1, flex: 1 }}>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: 1.8,
                      color: '#0B2A4A',
                      margin: 0,
                      fontWeight: 500,
                    }}>
                      {v.quote}
                    </p>
                  </blockquote>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
