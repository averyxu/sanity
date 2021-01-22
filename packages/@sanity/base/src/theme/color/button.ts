import {studioTheme, ThemeColorButton, ThemeColorButtonTones} from '@sanity/ui'
import {darken, mix} from 'polished'
import legacyTheme from 'sanity:css-custom-properties'
import {base} from './base'

const defaults = studioTheme.color.light.default.button

const defaultTones: ThemeColorButtonTones = {
  ...defaults.default,
  default: {
    ...defaults.default.default,
    enabled: {
      bg: legacyTheme['--default-button-color'],
      fg: legacyTheme['--default-button-color--inverted'],
      border: legacyTheme['--default-button-color'],
    },
    hovered: {
      bg: darken(0.05, legacyTheme['--default-button-color']),
      fg: legacyTheme['--default-button-color--inverted'],
      border: darken(0.05, legacyTheme['--default-button-color']),
    },
    pressed: {
      bg: darken(0.1, legacyTheme['--default-button-color']),
      fg: legacyTheme['--default-button-color--inverted'],
      border: darken(0.1, legacyTheme['--default-button-color']),
    },
    selected: {
      bg: darken(0.1, legacyTheme['--default-button-color']),
      fg: legacyTheme['--default-button-color--inverted'],
      border: darken(0.1, legacyTheme['--default-button-color']),
    },
    disabled: {
      bg: mix(0.8, base.bg, legacyTheme['--default-button-color']),
      fg: legacyTheme['--default-button-color'],
      border: mix(0.8, base.bg, legacyTheme['--default-button-color']),
    },
  },
  primary: {
    ...defaults.default.primary,
    enabled: {
      bg: legacyTheme['--default-button-primary-color'],
      fg: legacyTheme['--default-button-primary-color--inverted'],
      border: legacyTheme['--default-button-primary-color'],
    },
    hovered: {
      bg: darken(0.05, legacyTheme['--default-button-primary-color']),
      fg: legacyTheme['--default-button-primary-color--inverted'],
      border: darken(0.05, legacyTheme['--default-button-primary-color']),
    },
    pressed: {
      bg: darken(0.1, legacyTheme['--default-button-primary-color']),
      fg: legacyTheme['--default-button-primary-color--inverted'],
      border: darken(0.1, legacyTheme['--default-button-primary-color']),
    },
    selected: {
      bg: darken(0.1, legacyTheme['--default-button-primary-color']),
      fg: legacyTheme['--default-button-primary-color--inverted'],
      border: darken(0.1, legacyTheme['--default-button-primary-color']),
    },
    disabled: {
      bg: mix(0.8, base.bg, legacyTheme['--default-button-color']),
      fg: legacyTheme['--default-button-color'],
      border: mix(0.8, base.bg, legacyTheme['--default-button-color']),
    },
  },
  positive: {
    ...defaults.default.positive,
    enabled: {
      bg: legacyTheme['--default-button-success-color'],
      fg: legacyTheme['--default-button-success-color--inverted'],
      border: legacyTheme['--default-button-success-color'],
    },
    hovered: {
      bg: darken(0.05, legacyTheme['--default-button-success-color']),
      fg: legacyTheme['--default-button-success-color--inverted'],
      border: darken(0.05, legacyTheme['--default-button-success-color']),
    },
    pressed: {
      bg: darken(0.1, legacyTheme['--default-button-success-color']),
      fg: legacyTheme['--default-button-success-color--inverted'],
      border: darken(0.1, legacyTheme['--default-button-success-color']),
    },
    selected: {
      bg: darken(0.1, legacyTheme['--default-button-success-color']),
      fg: legacyTheme['--default-button-success-color--inverted'],
      border: darken(0.1, legacyTheme['--default-button-success-color']),
    },
    disabled: {
      bg: mix(0.8, base.bg, legacyTheme['--default-button-color']),
      fg: legacyTheme['--default-button-color'],
      border: mix(0.8, base.bg, legacyTheme['--default-button-color']),
    },
  },
  caution: {
    ...defaults.default.caution,
    enabled: {
      bg: legacyTheme['--default-button-warning-color'],
      fg: legacyTheme['--default-button-warning-color--inverted'],
      border: legacyTheme['--default-button-warning-color'],
    },
    hovered: {
      bg: darken(0.05, legacyTheme['--default-button-warning-color']),
      fg: legacyTheme['--default-button-warning-color--inverted'],
      border: darken(0.05, legacyTheme['--default-button-warning-color']),
    },
    pressed: {
      bg: darken(0.1, legacyTheme['--default-button-warning-color']),
      fg: legacyTheme['--default-button-warning-color--inverted'],
      border: darken(0.1, legacyTheme['--default-button-warning-color']),
    },
    selected: {
      bg: darken(0.1, legacyTheme['--default-button-warning-color']),
      fg: legacyTheme['--default-button-warning-color--inverted'],
      border: darken(0.1, legacyTheme['--default-button-warning-color']),
    },
    disabled: {
      bg: mix(0.8, base.bg, legacyTheme['--default-button-color']),
      fg: legacyTheme['--default-button-color'],
      border: mix(0.8, base.bg, legacyTheme['--default-button-color']),
    },
  },
  critical: {
    ...defaults.default.critical,
    enabled: {
      bg: legacyTheme['--default-button-danger-color'],
      fg: legacyTheme['--default-button-danger-color--inverted'],
      border: legacyTheme['--default-button-danger-color'],
    },
    hovered: {
      bg: darken(0.05, legacyTheme['--default-button-danger-color']),
      fg: legacyTheme['--default-button-danger-color--inverted'],
      border: darken(0.05, legacyTheme['--default-button-danger-color']),
    },
    pressed: {
      bg: darken(0.1, legacyTheme['--default-button-danger-color']),
      fg: legacyTheme['--default-button-danger-color--inverted'],
      border: darken(0.1, legacyTheme['--default-button-danger-color']),
    },
    // @todo: selected
    disabled: {
      bg: mix(0.8, base.bg, legacyTheme['--default-button-color']),
      fg: legacyTheme['--default-button-color'],
      border: mix(0.8, base.bg, legacyTheme['--default-button-color']),
    },
  },
}

const bleedTones: ThemeColorButtonTones = {
  ...defaults.bleed,
  default: {
    ...defaults.bleed.default,
    enabled: {
      bg: base.bg,
      fg: darken(0.1, legacyTheme['--default-button-color']),
      border: base.bg,
    },
    hovered: {
      bg: mix(0.9, base.bg, legacyTheme['--default-button-color']),
      fg: darken(0.2, legacyTheme['--default-button-color']),
      border: mix(0.9, base.bg, legacyTheme['--default-button-color']),
    },
    pressed: {
      bg: mix(0.8, base.bg, legacyTheme['--default-button-color']),
      fg: darken(0.2, legacyTheme['--default-button-color']),
      border: mix(0.8, base.bg, legacyTheme['--default-button-color']),
    },
    selected: {
      bg: mix(0.85, base.bg, legacyTheme['--default-button-primary-color']),
      fg: darken(0.05, legacyTheme['--default-button-primary-color']),
      border: mix(0.85, base.bg, legacyTheme['--default-button-primary-color']),
    },
    disabled: {
      bg: base.bg,
      fg: legacyTheme['--default-button-color'],
      border: base.bg,
    },
  },
  primary: {
    ...defaults.bleed.primary,
    enabled: {
      bg: base.bg,
      fg: darken(0.1, legacyTheme['--default-button-primary-color']),
      border: base.bg,
    },
    hovered: {
      bg: mix(0.9, base.bg, legacyTheme['--default-button-primary-color']),
      fg: darken(0.2, legacyTheme['--default-button-primary-color']),
      border: mix(0.9, base.bg, legacyTheme['--default-button-primary-color']),
    },
    pressed: {
      bg: mix(0.8, base.bg, legacyTheme['--default-button-primary-color']),
      fg: darken(0.2, legacyTheme['--default-button-primary-color']),
      border: mix(0.8, base.bg, legacyTheme['--default-button-primary-color']),
    },
    selected: {
      bg: mix(0.85, base.bg, legacyTheme['--default-button-primary-color']),
      fg: darken(0.05, legacyTheme['--default-button-primary-color']),
      border: mix(0.85, base.bg, legacyTheme['--default-button-primary-color']),
    },
    disabled: {
      bg: base.bg,
      fg: legacyTheme['--default-button-color'],
      border: base.bg,
    },
  },
  positive: {
    ...defaults.bleed.positive,
    enabled: {
      bg: base.bg,
      fg: darken(0.1, legacyTheme['--default-button-success-color']),
      border: base.bg,
    },
    hovered: {
      bg: mix(0.9, base.bg, legacyTheme['--default-button-success-color']),
      fg: darken(0.2, legacyTheme['--default-button-success-color']),
      border: mix(0.9, base.bg, legacyTheme['--default-button-success-color']),
    },
    pressed: {
      bg: mix(0.8, base.bg, legacyTheme['--default-button-success-color']),
      fg: darken(0.2, legacyTheme['--default-button-success-color']),
      border: mix(0.8, base.bg, legacyTheme['--default-button-success-color']),
    },
    selected: {
      bg: mix(0.85, base.bg, legacyTheme['--default-button-success-color']),
      fg: darken(0.05, legacyTheme['--default-button-success-color']),
      border: mix(0.85, base.bg, legacyTheme['--default-button-success-color']),
    },
    disabled: {
      bg: base.bg,
      fg: legacyTheme['--default-button-color'],
      border: base.bg,
    },
  },
  caution: {
    ...defaults.bleed.caution,
    enabled: {
      bg: base.bg,
      fg: darken(0.1, legacyTheme['--default-button-warning-color']),
      border: base.bg,
    },
    hovered: {
      bg: mix(0.9, base.bg, legacyTheme['--default-button-warning-color']),
      fg: darken(0.2, legacyTheme['--default-button-warning-color']),
      border: mix(0.9, base.bg, legacyTheme['--default-button-warning-color']),
    },
    pressed: {
      bg: mix(0.8, base.bg, legacyTheme['--default-button-warning-color']),
      fg: darken(0.2, legacyTheme['--default-button-warning-color']),
      border: mix(0.8, base.bg, legacyTheme['--default-button-warning-color']),
    },
    selected: {
      bg: mix(0.85, base.bg, legacyTheme['--default-button-warning-color']),
      fg: darken(0.05, legacyTheme['--default-button-warning-color']),
      border: mix(0.85, base.bg, legacyTheme['--default-button-warning-color']),
    },
    disabled: {
      bg: base.bg,
      fg: legacyTheme['--default-button-color'],
      border: base.bg,
    },
  },
  critical: {
    ...defaults.bleed.critical,
    enabled: {
      bg: base.bg,
      fg: darken(0.2, legacyTheme['--default-button-danger-color']),
      border: base.bg,
    },
    hovered: {
      bg: mix(0.9, base.bg, legacyTheme['--default-button-danger-color']),
      fg: darken(0.2, legacyTheme['--default-button-danger-color']),
      border: mix(0.9, base.bg, legacyTheme['--default-button-danger-color']),
    },
    pressed: {
      bg: mix(0.8, base.bg, legacyTheme['--default-button-danger-color']),
      fg: darken(0.2, legacyTheme['--default-button-danger-color']),
      border: mix(0.8, base.bg, legacyTheme['--default-button-danger-color']),
    },
    selected: {
      bg: mix(0.85, base.bg, legacyTheme['--default-button-danger-color']),
      fg: darken(0.05, legacyTheme['--default-button-danger-color']),
      border: mix(0.85, base.bg, legacyTheme['--default-button-danger-color']),
    },
    disabled: {
      bg: base.bg,
      fg: legacyTheme['--default-button-color'],
      border: base.bg,
    },
  },
}

const ghostTones: ThemeColorButtonTones = {
  ...defaults.bleed,
  default: {
    ...defaultTones.default,
    enabled: {
      ...defaults.bleed.default.enabled,
      bg: base.bg,
      border: legacyTheme['--hairline-color'],
    },
  },
  primary: {
    ...defaultTones.primary,
    enabled: {
      ...defaults.bleed.primary.enabled,
      bg: base.bg,
      fg: legacyTheme['--default-button-primary-color'],
      border: legacyTheme['--hairline-color'],
    },
  },
  positive: {
    ...defaultTones.positive,
    enabled: {
      ...defaults.bleed.positive.enabled,
      bg: base.bg,
      fg: legacyTheme['--default-button-success-color'],
      border: legacyTheme['--hairline-color'],
    },
  },
  caution: {
    ...defaultTones.caution,
    enabled: {
      ...defaults.bleed.caution.enabled,
      bg: base.bg,
      fg: legacyTheme['--default-button-warning-color'],
      border: legacyTheme['--hairline-color'],
    },
  },
  critical: {
    ...defaultTones.critical,
    enabled: {
      ...defaults.bleed.critical.enabled,
      bg: base.bg,
      fg: legacyTheme['--default-button-danger-color'],
      border: legacyTheme['--hairline-color'],
    },
  },
}

export const button: ThemeColorButton = {
  default: defaultTones,
  bleed: bleedTones,
  ghost: ghostTones,
}
