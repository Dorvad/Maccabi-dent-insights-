import React from 'react'
import { useInView } from '../../hooks/useInView'
import Reveal from '../shared/Reveal'
import InsightCard from '../shared/InsightCard'
import { strengthen } from '../../data/surveyData'

export default function S7Strengthen() {
  const [ref, inView] = useInView()
  const max = strengthen[0].pct

  return (
    <section className="section" ref={ref} aria-labelledby="s7-title">
      <div className="container-md">
        <Reveal>
          <p className="section__eyebrow">05 · מה לחזק</p>
          <h2 id="s7-title" className="section__title">תחומים שמובילים רוצים לחזק</h2>
          <p className="section__sub">
            השטח מבקש עזרה פרקטית ברגעי עומס, מורכבות וחיכוך מול מטופלים.
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
                          marginRight: 8,
                          background: '#E0F5F7',
                          color: '#007A87',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          padding: '2px 8px',
                          borderRadius: 999,
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
                          background: isTop ? '#00A4B4' : '#94A3B8',
                          transitionDelay: `${i * 70}ms`,
                          right: 0,
                        }}
                      />
                      <div
                        className="lollipop-dot"
                        style={{
                          right: inView ? `calc(${widthPct}% - 7px)` : '-7px',
                          background: isTop ? '#00A4B4' : '#94A3B8',
                          transitionDelay: `${i * 70}ms`,
                          left: 'auto',
                        }}
                      />
                    </div>
                    <div className="lollipop-val" style={{ color: isTop ? '#00A4B4' : '#0B2A4A', fontWeight: isTop ? 900 : 700 }}>
                      {item.pct}%
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Reveal>

        <InsightCard tag="פרשנות" delay={200}>
          המוקד: <strong>התמודדות עם מצבי שירות מורכבים</strong> ו-<strong>ניהול חלל ההמתנה</strong> — שתי הבקשות שמחזקות ביותר את הפאנל של 50% מהאתגר.
          המובילים לא מבקשים ידע תיאורטי; הם מבקשים להיות מסוגלים לפעול תחת לחץ.
        </InsightCard>
      </div>
    </section>
  )
}
