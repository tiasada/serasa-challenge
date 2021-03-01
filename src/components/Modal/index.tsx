import React from 'react'
import Mdl, { Content, Exit, MdlTitle, Overlay } from './style'

type Prop ={
  open: boolean
  children: React.ReactNode
  onClose: () => void
}

const Modal = ({ open, onClose, children }: Prop) => (
  <Mdl open={open} >
    <Overlay onClick={onClose}/>
    <Content>
    <Exit onClick={onClose}>&times;</Exit>
    <MdlTitle>Deixa seu feedback</MdlTitle>
      {children}
    </Content>
  </Mdl>
)
export default Modal
