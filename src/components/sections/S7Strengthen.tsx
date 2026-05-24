import React from 'react'
import { useInView } from '../../hooks/useInView'
import Reveal from '../shared/Reveal'
import { strengthen } from '../../data/surveyData'

export default function S7Strengthen() {
  const [ref, inView] = useInView()
  const max = strengthen[0].pct

  return (
    <section className="section" ref={ref} aria-labelledby="s7-title">
      <div className="container-md">
        <Reveal>
          <p className="section__eyebrow">05 · תחומים לחיזוק</p>
          <h2 id="s7-title" className="section__title">תחומים לחיזוק</h2>
          <span className="section__question">שאלה 5: "אילו תחומים היית רוצה לחזק או לקבל בהם כלים פרקטיים? (ניתן לבחור יותר מתשובה אחת)"</span>
          <p className="section__sub">
            מה ביקשו המשיבים לחזק בעבודתם.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="card" style={{ marginTop: '2rem' }}>
            <div className="lollipop-list" role="list">
              {strengthen.map((item, i) => {
                const isTop = i < 2
                const widthPct = (item.pct / max) * 100
                return (
                  <div key={item.he} className="lollipop-item" role="listitem">
                    <div className="lollipop-label" style={{ fontWeight: isTop ? 700 : 500 }}>
                      {item.he}
                      {isTop && (
                        <span style={{
                          display: 'inline-block',
                          marginRight: 6,
                          background: '#E0F5F7',
                          color: '#007A87',
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          padding: '2px 7px',
                          borderRadius: 999,
                          whiteSpace: 'nowrap',
                        }}>
                          עדיפות
                        </span>
                      )}
                    </div>
                    <div className="lollipop-track">
                      <div
                        className="lollipop-line"
                        style={{
                          width: inView ? `${widthPct}%` : '0%',
                          background: isTop ? '#5AB9A5' : '#C1C2CC',
                          transitionDelay: `${i * 70}ms`,
                          right: 0,
                        }}
                      />
                      <div
                        className="lollipop-dot"
                        style={{
                          right: inView ? `calc(${widthPct}% - 7px)` : '-7px',
                          background: isTop ? '#5AB9A5' : '#C1C2CC',
                          transitionDelay: `${i * 70}ms`,
                          left: 'auto',
                        }}
                      />
                    </div>
                    <div className="lollipop-val" style={{ color: isTop ? '#5AB9A5' : '#002060', fontWeight: isTop ? 900 : 700 }}>
                      {item.pct}%
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
