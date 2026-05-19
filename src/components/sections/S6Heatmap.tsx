import React from 'react'
import { useInView } from '../../hooks/useInView'
import Reveal from '../shared/Reveal'
import { heatmap, heatmapRoles } from '../../data/surveyData'
import { heatColor, heatTextColor } from '../../utils/heatmap'

export default function S6Heatmap() {
  const [ref, inView] = useInView()

  const peaks: { ri: number; ci: number; v: number }[] = []
  heatmap.forEach((row, ri) => row.values.forEach((v, ci) => peaks.push({ ri, ci, v })))
  peaks.sort((a, b) => b.v - a.v)
  const peakSet = new Set([`${peaks[0].ri}-${peaks[0].ci}`, `${peaks[1].ri}-${peaks[1].ci}`])

  return (
    <section className="section section--alt" ref={ref} aria-labelledby="s6-title">
      <div className="container-md">
        <Reveal>
          <p className="section__eyebrow">04 · חיתוך לפי תפקיד</p>
          <h2 id="s6-title" className="section__title">איפה כל אתגר בולט יותר?</h2>
          <p className="section__sub">
            אחוז המשיבים בכל תפקיד שבחרו את האתגר. שני התאים המסומנים — נקודות השיא.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="card" style={{ marginTop: '2rem', padding: '1rem' }}>
            <div className="heatmap-wrap">
              <div className="heatmap" role="table" aria-label="מפת חום: אתגר לפי תפקיד">
                <div />
                {heatmapRoles.map(r => (
                  <div key={r.key} className="heatmap__col-head" role="columnheader">
                    {r.short}<br />
                    <span style={{ fontSize: 11, color: '#94A3B8', fontWeight: 400 }}>
                      n=<span className="ltr">{r.n}</span>
                    </span>
                  </div>
                ))}
                {heatmap.map((row, ri) => (
                  <React.Fragment key={row.label}>
                    <div className="heatmap__row-head" role="rowheader">{row.label}</div>
                    {row.values.map((v, ci) => {
                      const isPeak = peakSet.has(`${ri}-${ci}`)
                      return (
                        <div
                          key={ci}
                          role="cell"
                          className={`heatmap__cell ${isPeak ? 'heatmap__cell--peak' : ''}`}
                          style={{
                            background: inView ? heatColor(v) : '#F7FAFB',
                            color: inView ? heatTextColor(v) : 'transparent',
                            transition: `background 600ms cubic-bezier(0.22,1,0.36,1) ${(ri * 5 + ci) * 30}ms, color 500ms ease ${(ri * 5 + ci) * 30}ms`,
                          }}
                          title={`${row.label} · ${heatmapRoles[ci].short}: ${v.toFixed(1)}%`}
                          aria-label={`${row.label}, ${heatmapRoles[ci].short}: ${v.toFixed(1)}%`}
                        >
                          <span className="ltr">{v.toFixed(1)}%</span>
                        </div>
                      )
                    })}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="heatmap__legend">
              <span className="ltr">70%</span>
              <div className="heatmap__legend-bar" />
              <span className="ltr">0%</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 8, marginRight: 'auto' }}>
                <span style={{ width: 14, height: 14, borderRadius: 4, border: '2px solid #FF6B5E', display: 'inline-block' }} aria-hidden="true" />
                נקודת שיא
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
