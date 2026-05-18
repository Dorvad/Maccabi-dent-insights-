import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'md-primary': '#00A4B4',
        'md-primary-dark': '#007A87',
        'md-primary-soft': '#E0F5F7',
        'md-navy': '#0B2A4A',
        'md-navy-soft': '#475569',
        'md-navy-softer': '#94A3B8',
        'md-bg': '#FFFFFF',
        'md-bg-alt': '#F7FAFB',
        'md-border': '#E2E8F0',
        'md-coral': '#FF6B5E',
        'md-success': '#34C38F',
        'md-warn': '#F2B544',
      },
      fontFamily: {
        hebrew: ['Heebo', 'Assistant', 'sans-serif'],
      },
      borderRadius: {
        card: '16px',
        'card-lg': '24px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(11,42,74,.04), 0 8px 24px rgba(11,42,74,.06)',
        'card-hover': '0 4px 8px rgba(11,42,74,.06), 0 16px 48px rgba(11,42,74,.12)',
      },
    },
  },
  plugins: [],
} satisfies Config
