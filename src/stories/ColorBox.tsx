import React from 'react'
import { Background, Box } from './BoxStyles'
import { Colors, colors } from './theme/colors'

export type Props = {
  children: React.ReactNode
  color?: Colors
  background?: boolean
}

const ColorBox = ({ children, color = 'dark-high', background, ...rest }: Props) => {
  return (
    <Background background={background}>
      {children}
    <Box color={colors[color]} />
    </Background>
  )
}

export default ColorBox
