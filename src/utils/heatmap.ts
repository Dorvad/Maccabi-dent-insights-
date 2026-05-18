export function heatColor(v: number): string {
  const t = Math.min(1, Math.max(0, v / 70))
  const lerp = (a: number, b: number, k: number) => Math.round(a + (b - a) * k)
  let r, g, b
  if (t < 0.5) {
    const k = t / 0.5
    r = lerp(0xE0, 0x00, k); g = lerp(0xF5, 0xA4, k); b = lerp(0xF7, 0xB4, k)
  } else {
    const k = (t - 0.5) / 0.5
    r = lerp(0x00, 0x00, k); g = lerp(0xA4, 0x7A, k); b = lerp(0xB4, 0x87, k)
  }
  return `rgb(${r},${g},${b})`
}

export function heatTextColor(v: number): string {
  return v < 28 ? '#0B2A4A' : '#FFFFFF'
}
