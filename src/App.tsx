import React from 'react'
import ScrollProgress from './components/layout/ScrollProgress'
import S1Hero from './components/sections/S1Hero'
import S2KpiStrip from './components/sections/S2KpiStrip'
import S3WhoResponded from './components/sections/S3WhoResponded'
import S4Readiness from './components/sections/S4Readiness'
import S5Challenges from './components/sections/S5Challenges'
import S6Heatmap from './components/sections/S6Heatmap'
import S7Strengthen from './components/sections/S7Strengthen'
import S8Learning from './components/sections/S8Learning'
import S9Voices from './components/sections/S9Voices'

export default function App() {
  return (
    <div className="page font-hebrew" dir="rtl">
      <ScrollProgress />
      <S1Hero />
      <S2KpiStrip />
      <S3WhoResponded />
      <S4Readiness />
      <S5Challenges />
      <S6Heatmap />
      <S7Strengthen />
      <S8Learning />
      <S9Voices />
    </div>
  )
}
