import {studioTheme, ThemeColorBase} from '@sanity/ui'
import legacyTheme from 'sanity:css-custom-properties'

const defaults = studioTheme.color.light.default.base

export const base: ThemeColorBase = {
  ...defaults,
  bg: legacyTheme['--component-bg'],
  fg: legacyTheme['--component-text-color'],
  border: legacyTheme['--hairline-color'],
}
