import {color as hues} from '@sanity/color'
// @todo: import this type from @sanity/ui when available:
// import {ThemeColorSyntax} from '@sanity/ui'
import {base} from './base'
import {dark} from './dark'
import {multiply, screen} from './_helpers'

const mix = dark ? screen : multiply
const mainShade = dark ? 400 : 600
const secondaryShade = dark ? 600 : 400

// @todo: use `ThemeColorSyntax` when available:
export const syntax: any = {
  atrule: mix(base.bg, hues.purple[mainShade].hex),
  attrName: mix(base.bg, hues.green[mainShade].hex),
  attrValue: mix(base.bg, hues.yellow[mainShade].hex),
  attribute: mix(base.bg, hues.yellow[mainShade].hex),
  boolean: mix(base.bg, hues.purple[mainShade].hex),
  builtin: mix(base.bg, hues.purple[mainShade].hex),
  cdata: mix(base.bg, hues.yellow[mainShade].hex),
  char: mix(base.bg, hues.yellow[mainShade].hex),
  class: mix(base.bg, hues.orange[mainShade].hex),
  className: mix(base.bg, hues.cyan[mainShade].hex),
  comment: mix(base.bg, hues.gray[secondaryShade].hex),
  constant: mix(base.bg, hues.purple[mainShade].hex),
  deleted: mix(base.bg, hues.red[mainShade].hex),
  doctype: mix(base.bg, hues.gray[secondaryShade].hex),
  entity: mix(base.bg, hues.red[mainShade].hex),
  function: mix(base.bg, hues.green[mainShade].hex),
  hexcode: mix(base.bg, hues.blue[mainShade].hex),
  id: mix(base.bg, hues.purple[mainShade].hex),
  important: mix(base.bg, hues.purple[mainShade].hex),
  inserted: mix(base.bg, hues.yellow[mainShade].hex),
  keyword: mix(base.bg, hues.magenta[mainShade].hex),
  number: mix(base.bg, hues.purple[mainShade].hex),
  operator: mix(base.bg, hues.magenta[mainShade].hex),
  prolog: mix(base.bg, hues.gray[secondaryShade].hex),
  property: mix(base.bg, hues.blue[mainShade].hex),
  pseudoClass: mix(base.bg, hues.yellow[mainShade].hex),
  pseudoElement: mix(base.bg, hues.yellow[mainShade].hex),
  punctuation: mix(base.bg, hues.gray[mainShade].hex),
  regex: mix(base.bg, hues.blue[mainShade].hex),
  selector: mix(base.bg, hues.red[mainShade].hex),
  string: mix(base.bg, hues.yellow[mainShade].hex),
  symbol: mix(base.bg, hues.purple[mainShade].hex),
  tag: mix(base.bg, hues.red[mainShade].hex),
  unit: mix(base.bg, hues.orange[mainShade].hex),
  url: mix(base.bg, hues.red[mainShade].hex),
  variable: mix(base.bg, hues.red[mainShade].hex),
}
