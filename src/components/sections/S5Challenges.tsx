import React from 'react'
import { useInView } from '../../hooks/useInView'
import Reveal from '../shared/Reveal'
import InsightCard from '../shared/InsightCard'
import { challenges } from '../../data/surveyData'

export default function S5Challenges() {
  const [ref, inView] = useInView()
  const max = challenges[0].pct

  return (
    <section className="section" ref={ref} aria-labelledby="s5-title">
      <div className="container-md">
        <Reveal>
          <p className="section__eyebrow">03 · האתגרים</p>
          <h2 id="s5-title" className="section__title">האתגרים המרכזיים בהובלת השירות</h2>
          <p className="section__sub">
            שאלת בחירה מרובה. <strong className="text-md-navy">כל מוביל שני</strong> מצביע על עומס וזמני המתנה — האתגר הבולט במערכת.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="card mt-8 p-6 md:p-8">
            <div className="challenges" role="list">
              {challenges.map((c, i) => (
                <div key={c.he} className={`challenge ${i === 0 ? 'challenge--accent' : ''}`} role="listitem">
                  {i === 0 && (
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold tracking-wider text-md-coral uppercase">נקודת הלחץ המרכזית</span>
                    </div>
                  )}
                  <div className="challenge__head">
                    <div className="challenge__label">{c.he}</div>
                    <div className="challenge__val">
                      <span className="ltr">{c.pct}%</span>
                      <span className="challenge__val-count">· <span className="ltr">{c.count}</span> מובילים</span>
                    </div>
                  </div>
                  <div className="challenge__track">
                    <div
                      className="challenge__fill"
                      style={{
                        width: inView ? `${(c.pct / max) * 100}%` : '0%',
                        transitionDelay: `${i * 80 + 100}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <InsightCard tag="משמעות" delay={200}>
          כמעט מחצית מהמנהלים חווים עומס יומיומי כאתגר שלא מאפשר ניהול שירות איכותי.
          המצב הזה לא נפתר בסדנה — הוא דורש כלים ומענה מהיר בשטח.
        </InsightCard>
      </div>
    </section>
  )
}
