import React from 'react'
import StyleModal, { Content, Exit, ModalTitle, Overlay } from './style'

type Prop ={
  open: boolean
  children: React.ReactNode
  onClose: () => void
  title: string
}

const Modal = ({ open, onClose, children, title }: Prop) => (
  <StyleModal open={open} >
    <Overlay onClick={onClose}/>
    <Content>
    <Exit onClick={onClose}>&times;</Exit>
    <ModalTitle>{title}</ModalTitle>
      {children}
    </Content>
  </StyleModal>
)
export default Modal
