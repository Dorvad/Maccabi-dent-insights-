import React from 'react'
import { useInView } from '../../hooks/useInView'
import Reveal from '../shared/Reveal'
import { roles } from '../../data/surveyData'

const COLORS = ['#00A4B4', '#007A87', '#34C38F', '#F2B544', '#475569', '#94A3B8']

export default function S3WhoResponded() {
  const [ref, inView] = useInView()
  const total = roles.reduce((s, r) => s + r.count, 0)

  return (
    <section className="section" ref={ref} aria-labelledby="s3-title">
      <div className="container-md">
        <Reveal>
          <p className="section__eyebrow">01 · מי השיב לסקר</p>
          <h2 id="s3-title" className="section__title">פרופיל המשיבים</h2>
          <p className="section__sub">
            <span className="ltr">175</span> משיבים מ-<span className="ltr">58</span> מרפאות, ב-<span className="ltr">5</span> תפקידים מרכזיים.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="card mt-8 p-6 md:p-8">
            <div className="flex h-12 rounded-full overflow-hidden mb-6 gap-px" role="img" aria-label="התפלגות תפקידים">
              {roles.filter(r => r.count > 0).map((r, i) => (
                <div
                  key={r.he}
                  style={{
                    width: inView ? `${(r.count / total) * 100}%` : '0%',
                    background: COLORS[i],
                    transition: `width 0.7s cubic-bezier(0.22,1,0.36,1) ${i * 60}ms`,
                    minWidth: r.count > 3 ? 2 : 0,
                  }}
                  title={`${r.he}: ${r.pct}%`}
                />
              ))}
            </div>

            <div className="flex flex-col gap-3">
              {roles.filter(r => r.count > 0).map((r, i) => (
                <div key={r.he} className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: COLORS[i] }} aria-hidden="true" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-sm font-medium text-md-navy truncate">
                        {r.he}
                        {r.en === '(no answer)' && (
                          <span className="text-xs text-md-navy-softer font-normal me-1"> — לא ציינו תפקיד</span>
                        )}
                      </span>
                      <span className="text-sm font-bold text-md-navy-soft ltr whitespace-nowrap">{r.pct}%</span>
                    </div>
                    <div className="h-1.5 bg-md-bg-alt rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: inView ? `${r.pct}%` : '0%',
                          background: COLORS[i],
                          transition: `width 0.7s cubic-bezier(0.22,1,0.36,1) ${i * 60 + 200}ms`,
                        }}
                      />
                    </div>
                  </div>
                  <span className="text-xs text-md-navy-softer ltr w-8 text-left">{r.count}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
