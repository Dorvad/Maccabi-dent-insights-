// Source: Service Survey 2026 / data.js and survey-2026-data-and-brief.md
// All numbers match the authoritative brief exactly. Do not modify.

export const meta = {
  n: 175,
  completed: 123,
  completionRate: 70.3,
  clinics: 58,
  selfReadinessMean: 3.78,
}

export const roles = [
  { he: 'מנהל/ת אדמיניסטרטיבי/ת', en: 'Administrative Manager', count: 59, pct: 33.7 },
  { he: 'מנהל/ת משרד',            en: 'Office Manager',         count: 38, pct: 21.7 },
  { he: 'מנהל/ת צוות סייעות',     en: 'Assistant Team Manager', count: 32, pct: 18.3 },
  { he: 'מנהל/ת רפואי/ת',         en: 'Medical Director',       count: 27, pct: 15.4 },
  { he: 'סגן/ית מנהל/ת רפואי/ת',  en: 'Deputy Medical Director',count: 16, pct: 9.1  },
  { he: 'ללא תשובה',              en: '(no answer)',            count: 3,  pct: 1.7  },
]

export const readiness = {
  distribution: [
    { rating: 1, count: 5,  pct: 3.5  },
    { rating: 2, count: 15, pct: 10.4 },
    { rating: 3, count: 27, pct: 18.8 },
    { rating: 4, count: 57, pct: 39.6 },
    { rating: 5, count: 40, pct: 27.8 },
  ],
  mean: 3.78,
  median: 4.0,
  byRole: [
    { role: 'מנהל/ת משרד',            mean: 3.34, n: 29 },
    { role: 'סגן/ית מנהל/ת רפואי/ת',  mean: 3.38, n: 13 },
    { role: 'מנהל/ת צוות סייעות',     mean: 3.75, n: 28 },
    { role: 'מנהל/ת רפואי/ת',         mean: 4.00, n: 23 },
    { role: 'מנהל/ת אדמיניסטרטיבי/ת', mean: 4.02, n: 50 },
  ],
}

export const challenges = [
  { he: 'ניהול עומסים וזמני המתנה',    short: 'עומסים וזמני המתנה',   count: 87, pct: 49.7 },
  { he: 'שמירה על רמת שירות לאורך זמן', short: 'שמירה על רמת שירות',  count: 60, pct: 34.3 },
  { he: 'חיבור ומחויבות הצוות לשירות',  short: 'מחויבות הצוות',        count: 47, pct: 26.9 },
  { he: 'הובלת שינוי והתמדה בתהליכים',  short: 'הובלת שינוי',          count: 27, pct: 15.4 },
  { he: 'טיפול בפניות/תלונות מורכבות',  short: 'תלונות מורכבות',        count: 25, pct: 14.3 },
  { he: 'תרגום מדדי שביעות רצון לפעולה', short: 'תרגום מדדים לפעולה',   count: 22, pct: 12.6 },
]

export const heatmapRoles = [
  { key: 'admin',  short: 'מנהל/ת אדמיניסטרטיבי/ת', n: 59 },
  { key: 'office', short: 'מנהל/ת משרד',      n: 38 },
  { key: 'asst',   short: 'צוות סייעות',       n: 32 },
  { key: 'med',    short: 'מנהל/ת רפואי/ת',    n: 27 },
  { key: 'dep',    short: 'סגן/ית רפואי/ת',    n: 16 },
]

export const heatmap = [
  { label: 'עומסים וזמני המתנה',   values: [62.7, 36.8, 40.6, 66.7, 31.2] },
  { label: 'שמירה על רמת שירות',   values: [35.6, 34.2, 34.4, 48.1, 12.5] },
  { label: 'מחויבות הצוות',         values: [37.3, 15.8, 18.8, 40.7, 12.5] },
  { label: 'הובלת שינוי',           values: [20.3, 15.8, 15.6,  3.7, 18.8] },
  { label: 'תלונות מורכבות',         values: [11.9, 21.1,  3.1, 25.9, 12.5] },
  { label: 'תרגום מדדים לפעולה',     values: [ 6.8, 15.8, 12.5, 14.8, 25.0] },
]

export const strengthen = [
  { he: 'התמודדות עם מצבי שירות מורכבים', count: 45, pct: 25.7 },
  { he: 'ניהול חלל ההמתנה',               count: 39, pct: 22.3 },
  { he: 'ניהול חווית מטופל מקצה לקצה',    count: 34, pct: 19.4 },
  { he: 'הדרכה וחניכה בנושא שירות',       count: 31, pct: 17.7 },
  { he: 'שימוש במדדי השירות לצורך שיפור', count: 25, pct: 14.3 },
  { he: 'ביצוע תצפית ומשוב בשירות',       count: 17, pct: 9.7  },
]

export const formats = [
  { he: 'סדנאות פרונטליות קצרות',      count: 55, pct: 31.4 },
  { he: 'כלים יישומיים מוכנים לשימוש', count: 32, pct: 18.3 },
  { he: 'למידה משולבת',                count: 32, pct: 18.3 },
  { he: 'ליווי אישי',                  count: 30, pct: 17.1 },
  { he: 'למידת עמיתים',                count: 29, pct: 16.6 },
  { he: 'ליווי קבוצתי',                count: 26, pct: 14.9 },
  { he: 'למידה דיגיטלית',              count: 21, pct: 12.0 },
]

export const frequency = [
  { he: 'לפי צורך',       en: 'On demand', count: 52, pct: 41.3 },
  { he: 'אחת לרבעון',     en: 'Quarterly', count: 37, pct: 29.4 },
  { he: 'אחת לחודש',      en: 'Monthly',   count: 22, pct: 17.5 },
  { he: 'פחות עדיפות כעת', en: 'Lower priority', count: 9, pct: 7.1 },
]

export const voices = [
  {
    quote: 'להוריד עומס, יותר מידי מטלות.',
    role: 'מנהלת צוות סייעות',
    city: 'ראשון לציון מערב',
  },
  {
    quote: 'הרעיון המרכזי הוא ניהול שירות באופן אקטיבי פעיל ולא לחכות לתלונות. אמן!!!',
    role: 'מנהל רפואי',
    city: 'אשדוד',
  },
  {
    quote: 'כמו שיש קופה לשירות עצמי בסופרמרקט, כך תהיה עמדה לפעולות עצמיות — תורים, תשלום, החזרים — וכשיש בעיה, נציגה זמינה לעזור.',
    role: 'סגן מנהל רפואי',
    city: 'רמת גן',
  },
  {
    quote: 'שגרה קבועה של משוב יומי קצר עם צוות בוקר/ערב — מה עבד טוב, איפה היה קושי. תחושת שותפות ושיפור בזמן אמת.',
    role: 'מנהלת אדמיניסטרטיבית',
    city: 'רעננה',
  },
  {
    quote: 'תגמולים מכבדים לעיתים קרובות יותר. סביבת עבודה צעירה ונעימה — זה משפיע על השירות.',
    role: 'מנהלת צוות סייעות',
    city: 'תל אביב ויצמן',
  },
  {
    quote: 'פחות לומדות במחשב. הורדת עומסים במרפאה.',
    role: 'מנהלת משרד',
    city: 'חיפה חורב',
  },
]
