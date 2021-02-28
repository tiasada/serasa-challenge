import React from 'react'
import { Colors, colors } from './theme/colors'
import { BodyM, Display, HeadingL, HeadingM, HeadingS, HeadingXS, StyledProps, Subheading } from './TypographyStyles'

type Variants = 'Display' | 'HeadingL' | 'HeadingM' | 'HeadingS' | 'HeadingXS' | 'Subheading' | 'BodyM' 

export type Props = {
  children: React.ReactNode
  color?: Colors
  variant?: Variants
  bold?: boolean
}

const variants: Record<Variants, React.FunctionComponent<StyledProps>> = {
  Display: Display,
  HeadingL: HeadingL,
  HeadingM: HeadingM,
  HeadingS: HeadingS,
  HeadingXS: HeadingXS,
  Subheading: Subheading,
  BodyM: BodyM
}

const Typography = ({ children, color = 'dark-high', variant = 'BodyM', bold= false, ...rest }: Props) => {
  const Component = variants[variant]

  return (
    <Component color={colors[color]}>
      {children}
    </Component>
  )
}

export default Typography
