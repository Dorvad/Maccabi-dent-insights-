import React from 'react'
import Reveal from '../shared/Reveal'

const INSIGHTS = [
  {
    id: 1,
    color: '#FF6B5E',
    tint: 'rgba(255,107,94,0.07)',
    title: 'העומס במרפאות הוא שורש מרכזי לפגיעה בחוויית השירות',
    body: 'זו התמה החוזרת ביותר בסקר. מנהלים מתארים עומס תפעולי, זמני המתנה, מחסור בכוח אדם ועומס רגשי – שמשפיעים ישירות גם על המטופלים וגם על הצוותים.',
    implications: [
      'השירות הופך תגובתי במקום יוזם',
      'הצוות עסוק ב"כיבוי שריפות"',
      'קשה לייצר חוויית מטופל רגועה ועקבית',
      'השחיקה גדלה והסבלנות יורדת',
    ],
    quotes: [
      'דרך מערכתית להפחתת עומס השירות',
      'זמינות תורים, עוד רופאי משמרת',
      'העומס נותן אותותיו בשחיקת הצוות ובקוצר הרוח של המטופלים',
      'שיפור זמני ההמתנה במרפאה ומניעת עיכובים',
    ],
  },
  {
    id: 2,
    color: '#00A4B4',
    tint: 'rgba(0,164,180,0.07)',
    title: 'יש צורך אמיתי בכלים פרקטיים להתמודדות עם מטופלים מורכבים',
    body: 'המנהלים מציפים שוב ושוב את הצורך לתת לצוותים כלים פשוטים וישימים להתמודדות עם מטופלים כועסים, לחוצים, מתוסכלים או חסרי סבלנות.',
    implications: [
      'פחות צורך ב"תיאוריות שירות"',
      'יותר צורך במשפטים, כלים ותסריטי שיחה',
      'צורך בביטחון ובתחושת מסוגלות של הצוותים ברגעי אמת',
    ],
    quotes: [
      'ללמד את הנציגות איך לשוחח עם אדם שכועס',
      'איך להתמודד עם מטופל כזה ומה להגיד לו בצורה הכי נכונה',
      'כלים להתמודד עם מטופלים לחוצים',
      'תקשורת רגישה ומכילה',
    ],
  },
  {
    id: 3,
    color: '#34C38F',
    tint: 'rgba(52,195,143,0.07)',
    title: 'חוויית העובד נתפסת כתנאי לחוויית המטופל',
    body: 'המנהלים מזהים קשר ישיר בין מצב הצוות לבין איכות השירות שניתן בפועל.',
    implications: [
      'צוות שחוק מתקשה לייצר שירות חיובי לאורך זמן',
      'יש צורך בחיזוק, אנרגיה והוקרה לצוותים',
      'מנהלים מחפשים דרכים לשמר מוטיבציה בתוך עומס יומיומי',
    ],
    quotes: [
      'ניהול השחיקה בקרב העובדים',
      'משהו מנחם ומפנק בשגרת הלחץ והעומס',
      'תחרויות נחמדות בין העובדות',
      'יכולת רבה יותר לפנק את העובדים',
    ],
  },
  {
    id: 4,
    color: '#007A87',
    tint: 'rgba(0,122,135,0.07)',
    title: 'שירות נתפס כתוצאה של עבודת ממשקים – לא של סקטור אחד',
    body: 'אחת התובנות החזקות שעולות מהסקר היא שהמנהלים לא רואים שירות כאחריות של הקבלה בלבד, אלא כתוצאה של שיתוף פעולה בין כלל הסקטורים במרפאה.',
    implications: [
      'המטופל חווה "מרפאה אחת"',
      'חוסר סנכרון בין סקטורים מייצר תסכול',
      'תקשורת בין רופאים, סייעות ונציגות משפיעה ישירות על השירות',
    ],
    quotes: [
      'הכל מתחיל ומסתיים בשיתוף הפעולה של הצוות',
      'חיזוק תקשורת ושיתוף פעולה בין רופאים, סייעות ונציגות',
      'אם כולם היו באותו קו מחשבה ששירות המטופל הוא הדבר הראשון החשוב',
      'ישיבות צוות עם כלל הסקטורים יחד',
    ],
  },
  {
    id: 5,
    color: '#F2B544',
    tint: 'rgba(242,181,68,0.07)',
    title: 'יש רצון ללמידה קצרה, רציפה ומבוססת שטח',
    body: 'המנהלים פחות מחפשים "עוד קורס", ויותר למידה שמתחברת למציאות היומיומית במרפאות.',
    implications: [
      'העדפה למיקרו־למידה',
      'תרגול מתוך מקרים אמיתיים',
      'משוב קצר ותדיר',
      'ליווי בשטח ולא רק הדרכה פרונטלית',
    ],
    quotes: [
      'שגרה קבועה של משוב יומי קצר',
      'תצפיות מקצועיות אחת לרבעון',
      'צריך שזה יהיה הרגל',
      'ליווי אחד על אחד',
    ],
  },
  {
    id: 6,
    color: '#475569',
    tint: 'rgba(71,85,105,0.07)',
    title: 'המנהלים מחפשים מעבר מניהול תגובתי לניהול שירות יוזם',
    body: 'מתחת להרבה מהתגובות יושבת שאיפה לעבור מתרבות של תגובה לתלונות – לניהול שירות אקטיבי ומונע.',
    implications: [
      'לזהות בעיות לפני שהופכות לתלונות',
      'לייצר שליטה טובה יותר בזמן אמת',
      'לנהל ציפיות בצורה יזומה',
      'להפוך את השירות לחלק מהניהול היומיומי',
    ],
    quotes: [
      'ניהול שירות באופן אקטיבי פעיל ולא לחכות לתלונות',
      'מעקב שוטף בכל נקודת זמן אחר איכות השירות',
      'להיות בשליטה ולעקוב',
      'שיפור בזמן אמת',
    ],
  },
]

export default function S9Voices() {
  return (
    <section className="section" aria-labelledby="s9-title" style={{ position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{
        position: 'absolute', top: '4%', left: '-6rem',
        width: 420, height: 420, borderRadius: '50%',
        background: 'radial-gradient(circle, #00A4B4 0%, transparent 70%)',
        opacity: 0.04, filter: 'blur(64px)', pointerEvents: 'none',
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: '8%', right: '-5rem',
        width: 320, height: 320, borderRadius: '50%',
        background: 'radial-gradient(circle, #FF6B5E 0%, transparent 70%)',
        opacity: 0.05, filter: 'blur(52px)', pointerEvents: 'none',
      }} />

      <div className="container-md" style={{ position: 'relative', zIndex: 1 }}>
        <Reveal>
          <p className="section__eyebrow">07 · תובנות מהשטח</p>
          <h2 id="s9-title" className="section__title">תובנות מרכזיות</h2>
          <span className="section__question">מתוך השאלות הפתוחות בסקר המנהלים</span>
          <p className="section__sub">
            שישה נושאים חוזרים שעולים מהכתיבה החופשית של המנהלים — במילים שלהם.
          </p>
        </Reveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '2rem' }}>
          {INSIGHTS.map((insight, i) => (
            <Reveal key={insight.id} delay={i * 55}>
              <article
                className="card--hover"
                style={{
                  position: 'relative',
                  borderRadius: 20,
                  background: 'white',
                  boxShadow: '0 1px 3px rgba(11,42,74,.05), 0 6px 28px rgba(11,42,74,.09)',
                  borderRight: `5px solid ${insight.color}`,
                  padding: '1.875rem 1.875rem 1.625rem',
                  overflow: 'hidden',
                }}
              >
                {/* Watermark number */}
                <span aria-hidden="true" style={{
                  position: 'absolute',
                  top: -14,
                  left: 12,
                  fontSize: '7.5rem',
                  fontWeight: 900,
                  color: insight.color,
                  opacity: 0.06,
                  lineHeight: 1,
                  direction: 'ltr',
                  userSelect: 'none',
                  pointerEvents: 'none',
                }}>
                  {String(insight.id).padStart(2, '0')}
                </span>

                {/* Title row */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem', marginBottom: '0.75rem', position: 'relative' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 30,
                    height: 30,
                    borderRadius: '50%',
                    background: insight.color,
                    color: 'white',
                    fontSize: '0.8125rem',
                    fontWeight: 900,
                    flexShrink: 0,
                    marginTop: 2,
                    direction: 'ltr',
                  }}>
                    {insight.id}
                  </div>
                  <h3 style={{
                    fontSize: '1.0625rem',
                    fontWeight: 700,
                    color: '#0B2A4A',
                    margin: 0,
                    lineHeight: 1.5,
                    flex: 1,
                  }}>
                    {insight.title}
                  </h3>
                </div>

                {/* Body */}
                <p style={{
                  fontSize: '0.9375rem',
                  color: '#475569',
                  lineHeight: 1.8,
                  margin: '0 2.75rem 1.25rem',
                }}>
                  {insight.body}
                </p>

                {/* Implications */}
                <div style={{
                  margin: '0 2.75rem 1.125rem',
                  padding: '0.875rem 1.125rem',
                  borderRadius: 12,
                  background: insight.tint,
                  border: `1px solid ${insight.color}28`,
                }}>
                  <p style={{
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    color: insight.color,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    margin: '0 0 0.5rem',
                  }}>
                    מה זה אומר בפועל?
                  </p>
                  <ul style={{
                    margin: 0,
                    padding: 0,
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.35rem',
                  }}>
                    {insight.implications.map((imp, j) => (
                      <li key={j} style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '0.5rem',
                        fontSize: '0.875rem',
                        color: '#0B2A4A',
                        lineHeight: 1.6,
                      }}>
                        <span style={{ color: insight.color, fontSize: '0.45rem', flexShrink: 0, marginTop: 1 }}>●</span>
                        {imp}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quote pills */}
                <div style={{
                  margin: '0 2.75rem',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.4375rem',
                  alignItems: 'center',
                }}>
                  <span style={{
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    color: '#94A3B8',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    marginLeft: '0.25rem',
                  }}>
                    מהשטח:
                  </span>
                  {insight.quotes.map((q, j) => (
                    <span key={j} style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      padding: '0.3125rem 0.75rem',
                      borderRadius: 999,
                      background: insight.tint,
                      border: `1px solid ${insight.color}30`,
                      fontSize: '0.8125rem',
                      color: '#334155',
                      lineHeight: 1.5,
                    }}>
                      <span style={{
                        color: insight.color,
                        fontFamily: 'Georgia, serif',
                        fontSize: '1rem',
                        lineHeight: 0.85,
                        flexShrink: 0,
                        direction: 'ltr',
                      }}>"</span>
                      {q}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
