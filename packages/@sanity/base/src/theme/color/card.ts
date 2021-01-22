import {studioTheme, ThemeColorCard} from '@sanity/ui'
import legacyTheme from 'sanity:css-custom-properties'

const defaults = studioTheme.color.light.default.card

export const card: ThemeColorCard = {
  ...defaults,
  enabled: {
    ...defaults.enabled,
    bg: legacyTheme['--component-bg'],
    fg: legacyTheme['--component-text-color'],
    border: legacyTheme['--hairline-color'],
  },
}
