import React from 'react'
import Btn from './style'
type Props ={
  children: React.ReactNode
  onClick?: () => void
  type?: "button" | "submit" | "reset" 
}

const Button = ( { children, onClick, type }: Props) => {
  return(
    <Btn type={type} onClick={onClick}>{children}</Btn>
  )
}
export default Button
