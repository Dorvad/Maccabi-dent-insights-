import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'md-primary': '#5AB9A5',
        'md-primary-dark': '#003A3A',
        'md-primary-soft': '#D7EDE9',
        'md-navy': '#002060',
        'md-navy-soft': '#4A5568',
        'md-navy-softer': '#94A3B8',
        'md-bg': '#FFFFFF',
        'md-bg-alt': '#EBE1D1',
        'md-bg-dark': '#003A3A',
        'md-border': '#D6CEBB',
        'md-coral': '#E37C80',
        'md-success': '#98AE56',
        'md-warn': '#F5990C',
        'md-blue': '#4898D1',
        'md-purple': '#6B3B71',
      },
      fontFamily: {
        hebrew: ['Rubik', 'Assistant', 'sans-serif'],
      },
      borderRadius: {
        card: '10px',
        'card-lg': '14px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(0,32,96,.04), 0 8px 24px rgba(0,32,96,.06)',
        'card-hover': '0 4px 8px rgba(0,32,96,.06), 0 16px 48px rgba(0,32,96,.12)',
      },
    },
  },
  plugins: [],
} satisfies Config
