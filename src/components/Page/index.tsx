import React, { useState } from 'react'
import Button from '../Button'
import Form from '../Form'
import Modal from '../Modal'
import GlobalStyle from '/globalStyle'

const Page = () => {
  const [modal, setModal] = useState(false)
  const CloseModal = () => {
    setModal(false)
  }
  return (
    <>
      <GlobalStyle />
      <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', height: '100vh' }}>
        <Button onClick={() => setModal(true)}>Open Modal</Button>
        <Modal open={modal} onClose={CloseModal}>
          <Form onClose={() => setModal(false)} />
        </Modal>
      </div>
    </>
  )
}
export default Page