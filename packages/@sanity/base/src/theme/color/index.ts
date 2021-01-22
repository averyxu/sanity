import {studioTheme as defaults, ThemeColor, ThemeColorSchemes} from '@sanity/ui'
import legacyTheme from 'sanity:css-custom-properties'
import {base} from './base'
import {button} from './button'
import {card} from './card'
import {dark} from './dark'
import {input} from './input'
import {muted} from './muted'
import {solid} from './solid'
import {spot} from './spot'
import {syntax} from './syntax'

const defaultColor: ThemeColor = {
  base,
  button,
  card,
  dark,
  input,
  muted,
  solid,
  spot,
  syntax,
}

const transparentColor: ThemeColor = {
  base: {
    ...defaults.color.light.transparent.base,
    bg: legacyTheme['--body-bg'],
    fg: legacyTheme['--body-text'],
    border: legacyTheme['--hairline-color'],
  },
  button,
  card: {
    ...defaults.color.light.transparent.card,
    enabled: {
      ...defaults.color.light.transparent.card.enabled,
      bg: legacyTheme['--body-bg'],
      fg: legacyTheme['--body-text'],
      border: legacyTheme['--hairline-color'],
    },
  },
  dark,
  input,
  muted,
  spot,
  solid,
  syntax,
}

// NOTE: This mapping is needed only in a transition period between legacy CSS custom properties,
// and the new Theme API provided by Sanity UI.
export const color: ThemeColorSchemes = {
  dark: defaults.color.dark,
  light: {
    ...defaults.color.light,
    default: defaultColor,
    transparent: transparentColor,
  },
}
