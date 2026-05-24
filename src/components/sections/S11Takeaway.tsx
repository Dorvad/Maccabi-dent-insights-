import React from 'react'
import Reveal from '../shared/Reveal'
import { insights, initiatives } from '../../data/insightsContent'

function InsightCard({ item, index }: { item: (typeof insights)[number], index: number }) {
  return (
    <Reveal delay={index * 90}>
      <article className="insight-showcase-card">
        <div className="insight-showcase-card__glow" aria-hidden="true" />
        <header className="insight-showcase-card__header">
          <span className="insight-showcase-card__id">{item.id}</span>
          <h3>{item.title}</h3>
        </header>

        <section className="insight-showcase-card__section">
          <p>מה אמרו בשטח</p>
          <ul>
            {item.fieldQuotes.map((q, i) => <li key={i}>{q}</li>)}
          </ul>
        </section>

        <section className="insight-showcase-card__section">
          <p>רעיונות לפעולה — מתוך דברי המנהלים</p>
          <ol>
            {item.actionIdeas.map((a, i) => <li key={i}>{a}</li>)}
          </ol>
        </section>
      </article>
    </Reveal>
  )
}

export default function S11InsightsShowcase() {
  return (
    <section aria-labelledby="s11-title" className="insight-showcase">
      <div className="insight-showcase__lights" aria-hidden="true" />
      <div className="container-md insight-showcase__container">
        <Reveal>
          <p className="section__eyebrow" style={{ textAlign: 'center' }}>10 · תובנות מרכזיות</p>
          <h2 id="s11-title" className="insight-showcase__title">תובנות ממצאי הסקר</h2>
          <p className="insight-showcase__subtitle">ממצאים, קולות מהשטח והמלצות לפעולה</p>
        </Reveal>

        <div className="insight-showcase__grid">
          {insights.map((item, i) => <InsightCard key={item.id} item={item} index={i} />)}
        </div>

        <Reveal delay={260}>
          <article className="initiative-panel">
            <div className="initiative-panel__head">
              <h3>יוזמה</h3>
              <h3>מטרות</h3>
              <h3>תכולות</h3>
            </div>
            <div className="initiative-panel__body">
              {initiatives.map((row, i) => (
                <section key={row.name} className="initiative-row">
                  <div className="initiative-row__name">
                    <span>{i + 1}</span>
                    <div>
                      <h4>{row.name}</h4>
                      <p>{row.subtitle}</p>
                    </div>
                  </div>
                  <p className="initiative-row__goal">{row.goals}</p>
                  <ul className="initiative-row__contents">
                    {row.contents.map((c, ci) => <li key={ci}>{c}</li>)}
                  </ul>
                </section>
              ))}
            </div>
            <p className="initiative-panel__note">הרעיונות לפעולה מצוטטים כלשונם מתשובות המנהלים בסקר</p>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
