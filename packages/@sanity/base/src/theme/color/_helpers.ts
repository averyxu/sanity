import {parseColor, rgbToHex, screen as _screen, multiply as _multiply} from '@sanity/ui'

export function multiply(bg: string, fg: string): string {
  const b = parseColor(bg)
  const s = parseColor(fg)
  const hex = rgbToHex(_multiply(b, s))

  return hex
}

export function screen(bg: string, fg: string): string {
  const b = parseColor(bg)
  const s = parseColor(fg)
  const hex = rgbToHex(_screen(b, s))

  return hex
}

export function blend(bg: string, fg: string, weight: number | string): string {
  if (bg === 'transparent') return fg
  if (fg === 'transparent') return bg

  if (weight === 0) return fg

  const bgColor = parseColor(bg)
  const fgColor = parseColor(fg)

  return rgbToHex({
    r: Math.floor(bgColor.r + fgColor.r),
    g: Math.floor(bgColor.g + fgColor.g),
    b: Math.floor(bgColor.b + fgColor.b),
  })
}
