import React from 'react'
import Btn from './style'
type Props ={
  children: React.ReactNode
  onClick: () => void
}

const Button = ( { children, onClick }: Props) => {
  return(
    <Btn onClick={onClick}>{children}</Btn>
  )
}
export default Button
