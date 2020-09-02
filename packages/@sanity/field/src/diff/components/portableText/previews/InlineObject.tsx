import React from 'react'
import styles from './InlineObject.css'
import {PortableTextChild} from '../types'
import {DiffAnnotationTooltip, ObjectDiff, useDiffAnnotationColor} from '../../../index'

type Props = {
  diff?: ObjectDiff
  node: PortableTextChild
  children?: React.ReactNode
}
export default function InlineObject(props: Props) {
  const children = props.children || props.node._type
  const {diff} = props
  let returned = <span className={styles.root}>{children}</span>
  if (diff) {

      // TODO: implement this clickhandler to focus the editor to that object
    const handleClick = () => {
      if (diff.action !== 'removed') {
        alert('Focusing on inline object')
      }
    }
    const color = useDiffAnnotationColor(diff, [])
    const style = color ? {background: color.background, color: color.text} : {}
    const classNames = [styles.root, ...[diff.action === 'removed' ? [styles.removed] : []]].join(
      ' '
    )
    // Wrap in inline object
    returned = (
      <span className={classNames} style={style} onClick={handleClick}>
        {children}
      </span>
    )
    // Wrap in tooltip
    returned = (
      <DiffAnnotationTooltip diff={diff} as={'span'}>
        {returned}
      </DiffAnnotationTooltip>
    )
  }
  return returned
}
