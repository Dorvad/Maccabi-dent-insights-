import React, { Component, ReactNode } from 'react'

interface Props { children: ReactNode }
interface State { hasError: boolean; message: string }

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, message: '' }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, message: error.message }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div dir="rtl" style={{
          minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'Heebo, sans-serif', background: '#F7FAFB', padding: '2rem',
        }}>
          <div style={{ maxWidth: 480, textAlign: 'center' }}>
            <p style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚠️</p>
            <h1 style={{ fontSize: '1.5rem', color: '#0B2A4A', marginBottom: '0.5rem' }}>
              שגיאה בטעינת הדו"ח
            </h1>
            <p style={{ color: '#475569', marginBottom: '1.5rem' }}>
              אנא רענן את הדף. אם הבעיה חוזרת, בדוק את קובץ הפרויקט.
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{
                background: '#00A4B4', color: 'white', border: 'none',
                padding: '0.75rem 1.5rem', borderRadius: 999, cursor: 'pointer',
                fontSize: '1rem', fontFamily: 'inherit',
              }}
            >
              רענן דף
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
