import * as React from 'react'
import {useUserColorManager} from '@sanity/base/user-color'
import {Annotation, Diff, Path} from '../../types'
import {DiffAnnotationTooltip} from './DiffAnnotationTooltip'
import {getAnnotationAtPath, getAnnotationColor} from './helpers'

export interface AnnotationProps {
  annotation: Annotation | undefined | null
}

export interface AnnotatedDiffProps {
  diff: Diff
  path?: Path | string
}

interface BaseAnnotationProps {
  as?: React.ElementType | keyof JSX.IntrinsicElements
  className?: string
  description?: React.ReactNode | string
  children: React.ReactNode
}

export type DiffAnnotationProps = (AnnotationProps | AnnotatedDiffProps) & BaseAnnotationProps

export function DiffAnnotation(props: DiffAnnotationProps) {
  const colorManager = useUserColorManager()
  const {as = 'span', children, className, description} = props
  const annotation =
    'diff' in props ? getAnnotationAtPath(props.diff, props.path || []) : props.annotation

  if (!annotation) {
    return React.createElement(as, {className}, children)
  }

  const color = getAnnotationColor(colorManager, annotation)
  const style = {background: color.background, color: color.text}
  return (
    <DiffAnnotationTooltip
      as={as}
      className={className}
      annotation={annotation}
      style={style}
      description={description}
    >
      {children}
    </DiffAnnotationTooltip>
  )
}