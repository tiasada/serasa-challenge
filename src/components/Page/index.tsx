import React, { useState } from 'react'
import Button from '../Button'
import Modal from '../Modal'

const Page = () => {
  const [modal, setModal] = useState(false)
  const CloseModal = () => {
    setModal(false)
  }
  return (
    <>
      <Button onClick={() => setModal(true)}>Open Modal</Button>
      <Modal open={modal} onClose={CloseModal}>

      </Modal>
    </>
  )
}
export default Page