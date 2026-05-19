import React from 'react'
import Reveal from '../shared/Reveal'
import HeroBackdrop from '../decorative/HeroBackdrop'

export default function S1Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(160deg, #FFFFFF 0%, #F0FBFC 60%, #E0F5F7 100%)',
        paddingTop: '5rem',
        paddingBottom: '4rem',
      }}
    >
      <HeroBackdrop />
      <div className="container-md" style={{ position: 'relative', zIndex: 1 }}>
        <Reveal>
          <div className="hero__brand">
            <div className="hero__brand-mark" aria-hidden="true">מ</div>
            <span className="hero__brand-name">מכבידנט</span>
            <div className="hero__brand-sep" />
            <span className="hero__brand-doc">דו"ח סקר 2026</span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <p className="hero__eyebrow">סקר פנימי · פברואר–מאי 2026</p>
          <h1 id="hero-title" className="hero__title">מיפוי צרכים בתחום השירות</h1>
          <p className="hero__sub" style={{ marginBottom: 0 }}>
            <span className="ltr">175</span> משיבים מ-<span className="ltr">58</span> מרפאות, ב-5 תפקידים.
            מה שמענו מהשטח.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
