/* eslint-disable complexity */

import {color as hues, ColorTintKey} from '@sanity/color'
import {createColorTheme, rgba} from '@sanity/ui'
import {getLuminance, mix, parseToRgb, rgb} from 'polished'
import legacyTheme from 'sanity:css-custom-properties'
import {multiply, screen} from './color/_helpers'

function toHex(color: string) {
  const {red, green, blue} = parseToRgb(color)
  return rgb(red, green, blue)
}

function isDark(bg: string, fg: string) {
  return getLuminance(bg) < getLuminance(fg)
}

type Tints = {[key in ColorTintKey]: string}

function buildTints(bg: string, mid: string, fg: string): Tints {
  return {
    50: mix(0.1, mid, bg),
    100: mix(0.2, mid, bg),
    200: mix(0.4, mid, bg),
    300: mix(0.6, mid, bg),
    400: mix(0.8, mid, bg),
    500: toHex(mid),
    600: mix(0.8, mid, fg),
    700: mix(0.6, mid, fg),
    800: mix(0.4, mid, fg),
    900: mix(0.2, mid, fg),
    950: mix(0.1, mid, fg),
  }
}

const legacyPalette = {
  black: toHex(legacyTheme['--black']),
  component: {
    bg: toHex(legacyTheme['--component-bg']),
    fg: toHex(legacyTheme['--component-text-color']),
  },
  defaultButton: {
    default: {
      base: toHex(legacyTheme['--default-button-color']),
    },
    primary: {
      base: toHex(legacyTheme['--default-button-primary-color']),
    },
    success: {
      base: toHex(legacyTheme['--default-button-success-color']),
    },
    warning: {
      base: toHex(legacyTheme['--default-button-warning-color']),
    },
    danger: {
      base: toHex(legacyTheme['--default-button-danger-color']),
    },
  },
  focus: {
    base: toHex(legacyTheme['--focus-color']),
  },
  gray: {
    base: toHex(legacyTheme['--gray-base']),
  },
  mainNavigation: {
    bg: toHex(legacyTheme['--main-navigation-color']),
    fg: toHex(legacyTheme['--main-navigation-color--inverted']),
  },
  state: {
    info: {
      fg: toHex(legacyTheme['--state-info-color']),
    },
    success: {
      fg: toHex(legacyTheme['--state-success-color']),
    },
    warning: {
      fg: toHex(legacyTheme['--state-warning-color']),
    },
    danger: {
      fg: toHex(legacyTheme['--state-danger-color']),
    },
  },
}

/**
 * @private
 */
export const _tones = {
  state: {
    default: {
      bg: legacyPalette.component.bg,
      fg: legacyPalette.component.fg,
      dark: isDark(legacyPalette.component.bg, legacyPalette.component.fg),
      default: buildTints(
        legacyPalette.component.bg,
        legacyPalette.gray.base,
        legacyPalette.component.fg
      ),
      primary: buildTints(
        legacyPalette.component.bg,
        legacyPalette.state.info.fg,
        legacyPalette.component.fg
      ),
      positive: buildTints(
        legacyPalette.component.bg,
        legacyPalette.state.success.fg,
        legacyPalette.component.fg
      ),
      caution: buildTints(
        legacyPalette.component.bg,
        legacyPalette.state.warning.fg,
        legacyPalette.component.fg
      ),
      critical: buildTints(
        legacyPalette.component.bg,
        legacyPalette.state.danger.fg,
        legacyPalette.component.fg
      ),
    },
    navbar: {
      bg: legacyPalette.mainNavigation.bg,
      fg: legacyPalette.mainNavigation.fg,
      dark: isDark(legacyPalette.mainNavigation.bg, legacyPalette.mainNavigation.fg),

      default: buildTints(
        legacyPalette.mainNavigation.bg,
        legacyPalette.gray.base,
        legacyPalette.mainNavigation.fg
      ),
      primary: buildTints(
        legacyPalette.mainNavigation.bg,
        legacyPalette.state.info.fg,
        legacyPalette.mainNavigation.fg
      ),
      positive: buildTints(
        legacyPalette.mainNavigation.bg,
        legacyPalette.state.success.fg,
        legacyPalette.mainNavigation.fg
      ),
      caution: buildTints(
        legacyPalette.mainNavigation.bg,
        legacyPalette.state.warning.fg,
        legacyPalette.mainNavigation.fg
      ),
      critical: buildTints(
        legacyPalette.mainNavigation.bg,
        legacyPalette.state.danger.fg,
        legacyPalette.mainNavigation.fg
      ),
    },
  },
  button: {
    default: {
      bg: legacyPalette.component.bg,
      fg: legacyPalette.component.fg,
      dark: isDark(legacyPalette.component.bg, legacyPalette.component.fg),

      default: buildTints(
        legacyPalette.component.bg,
        legacyPalette.defaultButton.default.base,
        legacyPalette.component.fg
      ),
      primary: buildTints(
        legacyPalette.component.bg,
        legacyPalette.defaultButton.primary.base,
        legacyPalette.component.fg
      ),
      positive: buildTints(
        legacyPalette.component.bg,
        legacyPalette.defaultButton.success.base,
        legacyPalette.component.fg
      ),
      caution: buildTints(
        legacyPalette.component.bg,
        legacyPalette.defaultButton.warning.base,
        legacyPalette.component.fg
      ),
      critical: buildTints(
        legacyPalette.component.bg,
        legacyPalette.defaultButton.danger.base,
        legacyPalette.component.fg
      ),
    },
    navbar: {
      bg: legacyPalette.mainNavigation.bg,
      fg: legacyPalette.mainNavigation.fg,
      dark: isDark(legacyPalette.mainNavigation.bg, legacyPalette.mainNavigation.fg),

      default: buildTints(
        legacyPalette.mainNavigation.bg,
        legacyPalette.defaultButton.default.base,
        legacyPalette.mainNavigation.fg
      ),
      primary: buildTints(
        legacyPalette.mainNavigation.bg,
        legacyPalette.defaultButton.primary.base,
        legacyPalette.mainNavigation.fg
      ),
      positive: buildTints(
        legacyPalette.mainNavigation.bg,
        legacyPalette.defaultButton.success.base,
        legacyPalette.mainNavigation.fg
      ),
      caution: buildTints(
        legacyPalette.mainNavigation.bg,
        legacyPalette.defaultButton.warning.base,
        legacyPalette.mainNavigation.fg
      ),
      critical: buildTints(
        legacyPalette.mainNavigation.bg,
        legacyPalette.defaultButton.danger.base,
        legacyPalette.mainNavigation.fg
      ),
    },
  },
}

// console.log(tones)

export const color = createColorTheme({
  base: ({dark: navbar, name}) => {
    const stateTones = navbar ? _tones.state.navbar : _tones.state.default
    const dark = stateTones.dark

    if (name === 'default') {
      return {
        fg: stateTones.fg,
        bg: stateTones.bg,
        border: stateTones.default[200],
        focusRing: legacyPalette.focus.base,
        shadow: {
          outline: rgba(stateTones.default[500], dark ? 0.2 : 0.4),
          umbra: rgba(dark ? legacyPalette.black : stateTones.default[500], 0.2),
          penumbra: rgba(dark ? legacyPalette.black : stateTones.default[500], 0.14),
          ambient: rgba(dark ? legacyPalette.black : stateTones.default[500], 0.12),
        },
      }
    }

    if (name === 'transparent') {
      const tints = stateTones.default

      return {
        fg: tints[900],
        bg: tints[50],
        border: tints[300],
        focusRing: legacyPalette.focus.base,
        shadow: {
          outline: rgba(tints[500], dark ? 0.2 : 0.4),
          umbra: rgba(dark ? legacyPalette.black : tints[500], 0.2),
          penumbra: rgba(dark ? legacyPalette.black : tints[500], 0.14),
          ambient: rgba(dark ? legacyPalette.black : tints[500], 0.12),
        },
      }
    }

    const tints = stateTones[name] || stateTones.default

    return {
      fg: tints[900],
      bg: tints[50],
      border: tints[200],
      focusRing: tints[500],
      shadow: {
        outline: rgba(tints[500], dark ? 0.2 : 0.4),
        umbra: rgba(dark ? legacyPalette.black : tints[500], 0.2),
        penumbra: rgba(dark ? legacyPalette.black : tints[500], 0.14),
        ambient: rgba(dark ? legacyPalette.black : tints[500], 0.12),
      },
    }
  },

  solid: ({base, dark: navbar, state, tone}) => {
    const buttonTones = navbar ? _tones.button.navbar : _tones.button.default
    const dark = buttonTones.dark
    const blend = dark ? screen : multiply
    const tints = buttonTones[tone] || buttonTones.default

    if (state === 'disabled') {
      return {
        bg: blend(base.bg, buttonTones.default[200]),
        border: blend(base.bg, buttonTones.default[200]),
        fg: blend(base.bg, buttonTones.bg),
      }
    }

    if (state === 'hovered') {
      return {
        bg: blend(base.bg, tints[600]),
        border: blend(base.bg, tints[600]),
        fg: blend(base.bg, buttonTones.bg),
      }
    }

    if (state === 'pressed') {
      return {
        bg: blend(base.bg, tints[800]),
        border: blend(base.bg, tints[800]),
        fg: blend(base.bg, buttonTones.bg),
      }
    }

    if (state === 'selected') {
      return {
        bg: blend(base.bg, tints[800]),
        border: blend(base.bg, tints[800]),
        fg: blend(base.bg, buttonTones.bg),
      }
    }

    // state: "enabled" | unknown
    return {
      bg: blend(base.bg, tints[500]),
      border: blend(base.bg, tints[500]),
      fg: blend(base.bg, buttonTones.bg),
    }
  },

  muted: ({base, dark: navbar, state, tone}) => {
    const stateTones = navbar ? _tones.state.navbar : _tones.state.default
    const dark = stateTones.dark
    const blend = dark ? screen : multiply
    const tints = stateTones[tone] || stateTones.default

    if (state === 'disabled') {
      return {
        bg: blend(base.bg, stateTones.default[50]),
        border: blend(base.bg, stateTones.default[50]),
        fg: blend(base.bg, stateTones.default[200]),
      }
    }

    if (state === 'hovered') {
      return {
        bg: blend(base.bg, tints[50]),
        border: blend(base.bg, tints[50]),
        fg: blend(base.bg, tints[900]),
      }
    }

    if (state === 'pressed') {
      return {
        bg: blend(base.bg, tints[100]),
        border: blend(base.bg, tints[100]),
        fg: blend(base.bg, tints[900]),
      }
    }

    if (state === 'selected') {
      return {
        bg: blend(base.bg, tints[100]),
        border: blend(base.bg, tints[100]),
        fg: blend(base.bg, tints[900]),
      }
    }

    return {
      bg: blend(base.bg, tints[100]),
      border: blend(base.bg, tints[100]),
      fg: blend(base.bg, tints[700]),
    }
  },

  button: ({base, mode, muted, solid}) => {
    if (mode === 'bleed') {
      return {
        ...muted,
        enabled: {
          ...muted.enabled,
          bg: base.bg,
          border: base.bg,
        },
        disabled: {
          ...muted.disabled,
          bg: base.bg,
          border: base.bg,
        },
      }
    }

    if (mode === 'ghost') {
      return {
        ...solid,
        enabled: {...muted.enabled, bg: base.bg, border: base.border},
        disabled: {
          ...muted.disabled,
          bg: base.bg,
        },
      }
    }

    return solid
  },

  card: ({base, dark: navbar, muted, name, state}) => {
    const stateTones = navbar ? _tones.state.navbar : _tones.state.default
    const dark = stateTones.dark

    let blend = dark ? screen : multiply

    if (state === 'selected') {
      blend = dark ? multiply : screen

      const tint = ['default', 'transparent'].includes(name) ? stateTones.primary : stateTones[name]
      const bg = tint[500]

      return {
        bg,
        fg: stateTones.bg,
        border: tint[400],
        muted: {
          fg: blend(bg, stateTones.default[300]),
        },
        accent: {
          fg: blend(bg, stateTones.critical[500]),
        },
        link: {
          fg: blend(bg, stateTones.primary[300]),
        },
        code: {
          bg: blend(bg, stateTones.default[950]),
          fg: blend(bg, stateTones.default[300]),
        },
      }
    }

    if (state === 'hovered') {
      const bg = muted.hovered.bg

      return {
        ...muted.hovered,
        border: blend(bg, base.border),
        muted: {
          fg: blend(bg, stateTones.default[700]),
        },
        accent: {
          fg: blend(bg, stateTones.critical[500]),
        },
        link: {
          fg: blend(bg, stateTones.primary[700]),
        },
        code: {
          bg: blend(bg, stateTones.default[50]),
          fg: stateTones.default[600],
        },
      }
    }

    if (state === 'pressed') {
      return {
        ...muted.pressed,
        fg: base.fg,
        muted: {
          fg: blend(muted.pressed.bg, stateTones.default[700]),
        },
        accent: {
          fg: blend(muted.pressed.bg, stateTones.critical[500]),
        },
        link: {
          fg: blend(muted.pressed.bg, stateTones.primary[700]),
        },
        code: {
          bg: blend(muted.pressed.bg, stateTones.default[50]),
          fg: stateTones.default[700],
        },
      }
    }

    if (state === 'disabled') {
      return {
        ...muted.disabled,
        muted: {
          fg: muted.disabled.fg,
        },
        accent: {
          fg: muted.disabled.fg,
        },
        link: {
          fg: muted.disabled.fg,
        },
        code: {
          bg: 'transparent',
          fg: muted.disabled.fg,
        },
      }
    }

    return {
      bg: base.bg,
      fg: base.fg,
      border: base.border,
      muted: {
        fg: blend(base.bg, stateTones.default[700]),
      },
      accent: {
        fg: blend(base.bg, stateTones.critical[500]),
      },
      link: {
        fg: blend(base.bg, stateTones.primary[700]),
      },
      code: {
        bg: blend(base.bg, stateTones.default[50]),
        fg: stateTones.default[700],
      },
    }
  },

  input: ({base, dark: navbar, mode, state}) => {
    const stateTones = navbar ? _tones.state.navbar : _tones.state.default
    const dark = stateTones.dark
    const blend = dark ? screen : multiply

    if (mode === 'invalid') {
      const tints = stateTones.critical

      return {
        bg: blend(base.bg, tints[50]),
        fg: blend(base.bg, tints[700]),
        border: blend(base.bg, tints[200]),
        placeholder: blend(base.bg, tints[700]),
      }
    }

    if (state === 'hovered') {
      return {
        bg: base.bg,
        fg: base.fg,
        border: blend(base.bg, hues.gray[300].hex),
        placeholder: blend(base.bg, hues.gray[700].hex),
      }
    }

    if (state === 'disabled') {
      return {
        bg: blend(base.bg, hues.gray[50].hex),
        fg: blend(base.bg, hues.gray[200].hex),
        border: blend(base.bg, hues.gray[100].hex),
        placeholder: blend(base.bg, hues.gray[100].hex),
      }
    }

    return {
      bg: base.bg,
      fg: base.fg,
      border: base.border,
      placeholder: blend(base.bg, hues.gray[700].hex),
    }
  },

  spot: ({base, key}) => {
    const dark = isDark(base.bg, base.fg)
    const blend = dark ? screen : multiply

    return blend(base.bg, hues[key][dark ? 400 : 500].hex)
  },

  syntax: ({base, dark: navbar}) => {
    const stateTones = navbar ? _tones.state.navbar : _tones.state.default
    const dark = stateTones.dark
    const blend = dark ? screen : multiply
    const mainShade = 600
    const secondaryShade = 400

    return {
      atrule: blend(base.bg, hues.purple[mainShade].hex),
      attrName: blend(base.bg, stateTones.positive[mainShade]),
      attrValue: blend(base.bg, stateTones.caution[mainShade]),
      attribute: blend(base.bg, stateTones.caution[mainShade]),
      boolean: blend(base.bg, hues.purple[mainShade].hex),
      builtin: blend(base.bg, hues.purple[mainShade].hex),
      cdata: blend(base.bg, stateTones.caution[mainShade]),
      char: blend(base.bg, stateTones.caution[mainShade]),
      class: blend(base.bg, hues.orange[mainShade].hex),
      className: blend(base.bg, hues.cyan[mainShade].hex),
      comment: blend(base.bg, stateTones.default[secondaryShade]),
      constant: blend(base.bg, hues.purple[mainShade].hex),
      deleted: blend(base.bg, stateTones.critical[mainShade]),
      doctype: blend(base.bg, stateTones.default[secondaryShade]),
      entity: blend(base.bg, stateTones.critical[mainShade]),
      function: blend(base.bg, stateTones.positive[mainShade]),
      hexcode: blend(base.bg, stateTones.primary[mainShade]),
      id: blend(base.bg, hues.purple[mainShade].hex),
      important: blend(base.bg, hues.purple[mainShade].hex),
      inserted: blend(base.bg, stateTones.caution[mainShade]),
      keyword: blend(base.bg, hues.magenta[mainShade].hex),
      number: blend(base.bg, hues.purple[mainShade].hex),
      operator: blend(base.bg, hues.magenta[mainShade].hex),
      prolog: blend(base.bg, stateTones.default[secondaryShade]),
      property: blend(base.bg, stateTones.primary[mainShade]),
      pseudoClass: blend(base.bg, stateTones.caution[mainShade]),
      pseudoElement: blend(base.bg, stateTones.caution[mainShade]),
      punctuation: blend(base.bg, stateTones.default[mainShade]),
      regex: blend(base.bg, stateTones.primary[mainShade]),
      selector: blend(base.bg, stateTones.critical[mainShade]),
      string: blend(base.bg, stateTones.caution[mainShade]),
      symbol: blend(base.bg, hues.purple[mainShade].hex),
      tag: blend(base.bg, stateTones.critical[mainShade]),
      unit: blend(base.bg, hues.orange[mainShade].hex),
      url: blend(base.bg, stateTones.critical[mainShade]),
      variable: blend(base.bg, stateTones.critical[mainShade]),
    }
  },
})
