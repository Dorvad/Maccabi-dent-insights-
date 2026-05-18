import React, { useState, useEffect } from 'react'
import { useCountUp } from '../../hooks/useCountUp'
import { useInView } from '../../hooks/useInView'
import HeroBackdrop from '../decorative/HeroBackdrop'
import Reveal from '../shared/Reveal'

export default function S1Hero() {
  const [ref, inView] = useInView({ threshold: 0.2 })
  const stat1 = useCountUp(50, inView)
  const stat2 = useCountUp(22, inView)
  const [bracketReady, setBracketReady] = useState(false)

  useEffect(() => {
    if (!inView) return
    const t = setTimeout(() => setBracketReady(true), 1200)
    return () => clearTimeout(t)
  }, [inView])

  return (
    <section className="hero" aria-labelledby="hero-title" ref={ref}>
      <HeroBackdrop />
      <div className="hero__inner container-md">
        <Reveal>
          <div className="hero__brand">
            <div className="hero__brand-mark" aria-hidden="true">מ</div>
            <span className="hero__brand-name">מכבידנט</span>
            <div className="hero__brand-sep" />
            <span className="hero__brand-doc">דו"ח סקר 2026</span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="hero__eyebrow">סקר פנימי · פברואר–מאי 2026</p>
          <h1 id="hero-title" className="hero__title">מיפוי צרכים בתחום השירות 2026</h1>
          <p className="hero__sub">
            מכבידנט · <span className="ltr">175</span> משיבים ב-<span className="ltr">58</span> מרפאות.
            תמונת מצב מנקודת המבט של מובילי השירות.
          </p>
        </Reveal>

        <div className="hero__gap" role="figure" aria-label="הפער האסטרטגי: 50% מהמובילים מציינים עומס לעומת 22% שמבקשים הדרכה">
          <div className="hero__gap-grid">
            <div className="hero__stat hero__stat--coral">
              <div className="hero__stat-num">
                <span className="ltr">{stat1}%</span>
              </div>
              <p className="hero__stat-cap">
                מהמובילים מציינים <strong>עומס וזמני המתנה</strong> כאתגר המרכזי
              </p>
            </div>
            <div className="hero__stat hero__stat--primary">
              <div className="hero__stat-num">
                <span className="ltr">{stat2}%</span>
              </div>
              <p className="hero__stat-cap">
                בלבד מבקשים <strong>הדרכה</strong> על ניהול חלל ההמתנה
              </p>
            </div>
          </div>

          <svg className="hero__bracket" viewBox="0 0 600 36" preserveAspectRatio="none" aria-hidden="true">
            <path
              d="M 20 4 L 20 24 L 580 24 L 580 4"
              fill="none"
              stroke="#0B2A4A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="1200"
              strokeDashoffset={bracketReady ? '0' : '1200'}
              style={{ transition: 'stroke-dashoffset 900ms cubic-bezier(0.22,1,0.36,1)' }}
              opacity="0.35"
            />
          </svg>
          <p className="hero__bracket-label" style={{
            opacity: bracketReady ? 1 : 0,
            transition: 'opacity 500ms cubic-bezier(0.22,1,0.36,1) 600ms',
          }}>
            הפער האסטרטגי
          </p>
        </div>

        <Reveal delay={300}>
          <div className="card mt-14 p-7 md:p-9" style={{ borderRight: '4px solid #FF6B5E' }}>
            <div className="flex items-start gap-4 flex-wrap">
              <span className="inline-flex items-center bg-red-50 text-md-coral text-xs font-bold tracking-wider px-3 py-1.5 rounded-full border border-md-coral/20">
                התובנה האסטרטגית
              </span>
              <p className="flex-1 min-w-[260px] text-base md:text-lg leading-relaxed text-md-navy m-0">
                הפער הזה אינו פער ידע — זהו{' '}
                <strong className="text-md-primary-dark">פער יכולת</strong>.
                תגובה מבוססת הדרכה תספק פחות מהדרוש. תוכנית 2026 צריכה לשלב למידה עם הקלה תפעולית:
                כלים מוכנים לשימוש, ליווי לפי דרישה, וסדנאות קצרות — לא ספרייה דיגיטלית.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
