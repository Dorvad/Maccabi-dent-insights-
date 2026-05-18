# מיפוי צרכים בתחום השירות 2026 — מכבידנט

דו"ח אינטראקטיבי חד-עמודי המציג נתוני סקר צרכי שירות 2026 של מכבידנט.
עברית RTL · Vite + React + TypeScript + Tailwind CSS.

## פיתוח מקומי

```bash
npm install
npm run dev
```

הפרויקט יפתח ב-http://localhost:5173

## בנייה לייצור

```bash
npm run build
```

הקבצים המוכנים יהיו בתיקיית `dist/`.

## פריסה ל-GitHub Pages

### אפשרות א: ידנית

1. בנה: `npm run build`
2. העלה את תוכן `dist/` לענף `gh-pages` (או הגדר Pages ל-Deploy from `dist` folder)

### אפשרות ב: GitHub Actions

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci && npm run build
      - uses: actions/deploy-pages@v4
        with: { path: dist }
```

## מבנה הקוד

```
src/
├── data/surveyData.ts        # כל הנתונים — מקור אחד
├── hooks/                    # useInView, useCountUp
├── utils/heatmap.ts          # צבעי מפת חום
├── styles/index.css          # עיצוב גלובלי + CSS classes
├── components/
│   ├── layout/               # ScrollProgress, Section
│   ├── shared/               # Reveal, InsightCard, AnimatedNumber
│   ├── decorative/           # HeroBackdrop, DotGrid
│   └── sections/             # S1Hero … S11Takeaway
└── App.tsx
```

## מקורות נתונים

כל הנתונים לקוחים מ-`survey-2026-data-and-brief.md` ומ-`data.js` המצורפים לפרויקט.
לא הומצאו נתונים. כל המספרים מייצגים נאמנה את ממצאי הסקר.
