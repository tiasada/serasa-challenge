import React from 'react'
import { Background, Box } from './BoxStyles'
import { Colors, colors } from './theme/colors'

export type Props = {
  children: React.ReactNode
  color?: Colors
}


const ColorBox = ({ children, color = 'dark-high', ...rest }: Props) => {
  return (
    <Background>
      {children}
    <Box color={colors[color]} />
    </Background>
  )
}

export default ColorBox
