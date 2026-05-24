export function heatColor(v: number): string {
  const t = Math.min(1, Math.max(0, v / 70))
  const lerp = (a: number, b: number, k: number) => Math.round(a + (b - a) * k)
  let r, g, b
  if (t < 0.5) {
    // light: #D7EDE9 → #5AB9A5
    const k = t / 0.5
    r = lerp(0xD7, 0x5A, k); g = lerp(0xED, 0xB9, k); b = lerp(0xE9, 0xA5, k)
  } else {
    // dark: #5AB9A5 → #003A3A
    const k = (t - 0.5) / 0.5
    r = lerp(0x5A, 0x00, k); g = lerp(0xB9, 0x3A, k); b = lerp(0xA5, 0x3A, k)
  }
  return `rgb(${r},${g},${b})`
}

export function heatTextColor(v: number): string {
  return v < 28 ? '#002060' : '#FFFFFF'
}
