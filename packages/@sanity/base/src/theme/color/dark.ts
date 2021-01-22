import {getLuminance} from 'polished'
import {base} from './base'

export const dark = getLuminance(base.bg) < getLuminance(base.fg)
