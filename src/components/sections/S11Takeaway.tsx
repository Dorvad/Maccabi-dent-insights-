import React from 'react'
import Reveal from '../shared/Reveal'

export default function S11Takeaway() {
  return (
    <section
      style={{ background: 'linear-gradient(160deg, #0B2A4A 0%, #0D3557 60%, #0F3F65 100%)' }}
      aria-labelledby="s11-title"
    >
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Background dot pattern */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.04, pointerEvents: 'none' }} aria-hidden="true">
          <defs>
            <pattern id="tdotgrid" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#00A4B4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tdotgrid)" />
        </svg>

        <div className="container-md" style={{ position: 'relative', zIndex: 1, textAlign: 'center', paddingTop: '5rem', paddingBottom: '5rem' }}>
          <Reveal>
            <p className="section__eyebrow">08 · סיכום</p>
            <h2
              id="s11-title"
              style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.75rem)', fontWeight: 700, color: 'white', marginBottom: '0.75rem', lineHeight: 1.2 }}
            >
              ההמלצה לשנת 2026
            </h2>
            <p style={{ fontSize: 'clamp(1.125rem, 2vw, 1.5rem)', fontWeight: 700, color: '#00A4B4', marginBottom: '2rem' }}>
              פחות ספריית למידה, יותר מערכת תמיכה לשטח.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <p style={{
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.72)',
              lineHeight: 1.75,
              maxWidth: '40rem',
              margin: '0 auto 3rem',
            }}>
              תוכנית השירות צריכה לשלב בין למידה קצרה, כלים מוכנים לשימוש וליווי גמיש לפי צורך —
              כדי לתת מענה לא רק למה שאנשים יודעים, אלא למה שהם מסוגלים לבצע בתוך עומס אמיתי.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div style={{
              display: 'inline-flex',
              flexDirection: 'column',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 20,
              padding: '1.5rem 2rem',
              maxWidth: 480,
              textAlign: 'right',
            }}>
              <p style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#00A4B4',
                marginBottom: '1rem',
                marginTop: 0,
              }}>
                מודל מוצע
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem' }}>
                {[
                  { dot: '#00A4B4', label: 'סדנה רבעונית' },
                  { dot: '#007A87', label: 'כלי חודשי' },
                  { dot: '#34C38F', label: 'ליווי לפי צורך' },
                ].map((item, i) => (
                  <React.Fragment key={item.label}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ width: 8, height: 8, borderRadius: '50%', background: item.dot }} aria-hidden="true" />
                      <span style={{ fontSize: '0.9375rem', fontWeight: 500, color: 'white' }}>{item.label}</span>
                    </div>
                    {i < 2 && <span style={{ color: 'rgba(255,255,255,0.25)', fontWeight: 300 }}>+</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.25)', marginTop: '4rem' }}>
              מכבידנט · סקר צרכי שירות 2026 · <span className="ltr">175</span> משיבים · <span className="ltr">58</span> מרפאות
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
