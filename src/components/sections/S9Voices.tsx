import React from 'react'
import Reveal from '../shared/Reveal'
import { voices } from '../../data/surveyData'

export default function S9Voices() {
  return (
    <section className="section" aria-labelledby="s9-title">
      <div className="container-md">
        <Reveal>
          <p className="section__eyebrow">07 · קולות מהשטח</p>
          <h2 id="s9-title" className="section__title">מה אומרים המובילים</h2>
          <p className="section__sub">
            ציטוטים מתוך הסקר — קולות אותנטיים של מנהלים ומנהלות מהרשת.
          </p>
        </Reveal>

        <div className="voices-grid" role="list">
          {voices.map((v, i) => (
            <Reveal key={i} delay={i * 80}>
              <article
                className="voice-card card--hover"
                role="listitem"
                style={{
                  borderTopColor: i % 3 === 0 ? '#00A4B4' : i % 3 === 1 ? '#007A87' : '#34C38F',
                }}
              >
                <div className="voice-card__quote-mark" aria-hidden="true">"</div>
                <blockquote className="voice-card__text" style={{ margin: 0 }}>
                  <p style={{ margin: 0 }}>{v.quote}</p>
                </blockquote>
                <footer className="voice-card__attr">
                  <div className="voice-card__role">{v.role}</div>
                  <div className="voice-card__city">{v.city}</div>
                </footer>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
