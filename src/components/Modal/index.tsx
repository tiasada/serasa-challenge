import React from 'react'
import StyleModal, { Content, Exit, ModalTitle, Overlay } from './style'

type Prop ={
  open: boolean
  children: React.ReactNode
  onClose: () => void
}

const Modal = ({ open, onClose, children }: Prop) => (
  <StyleModal open={open} >
    <Overlay onClick={onClose}/>
    <Content>
    <Exit onClick={onClose}>&times;</Exit>
    <ModalTitle>Deixa seu feedback</ModalTitle>
      {children}
    </Content>
  </StyleModal>
)
export default Modal
