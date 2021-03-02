import { faStar } from '@fortawesome/free-solid-svg-icons'
import React, { FormEvent, useState } from 'react'
import Button from '../Button'
import StyleForm, { Group, Input, Label, Rate, Rating, SubmitButton, Text, Error } from './styles'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { post } from '/api'

type Props = {
  onClose: () => void
}

toast.configure()
const Form = ({ onClose }: Props) => {
  const [name, setName] = useState('')
  const [rate, setRate] = useState(0)
  const [message, setMessage] = useState('')
  const [showError, setShowError] = useState(false)
  const body = { name, rate, message }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (rate === 0) {
      setShowError(true)
    } else {
      post(body)
        .then(() =>
          toast.success('Obrigado por nos enviar esse feedback!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
          })
        )
        .catch(() =>
          toast.error('Erro ao enviar feedback!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
          })
        )
      onClose()
      setName('')
      setRate(0)
      setMessage('')
    }
  }
  return (
    <StyleForm onSubmit={onSubmit}>
      <Group>
        <Label>Seu nome:(opcional)</Label>
        <Input
          id='name'
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </Group>
      <Label>Sua nota:</Label>
      <Rating>
        <Rate
          onClick={() => setRate(5)}
          id='5'
          icon={faStar}
          rated={rate >= 5}
          size='2x'
        />
        <Rate
          onClick={() => setRate(4)}
          id='4'
          icon={faStar}
          rated={rate >= 4}
          size='2x'
        />
        <Rate
          onClick={() => setRate(3)}
          id='3'
          icon={faStar}
          rated={rate >= 3}
          size='2x'
        />
        <Rate
          onClick={() => setRate(2)}
          id='2'
          icon={faStar}
          rated={rate >= 2}
          size='2x'
        />
        <Rate
          onClick={() => setRate(1)}
          id='1'
          icon={faStar}
          rated={rate >= 1}
          size='2x'
        />
      </Rating>
      <Error show={showError}>É necessário avaliar </Error>
      <Group>
        <Label>Sua mensagem:(opcional)</Label>
        <Text
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
      </Group>
      <SubmitButton>
        <Button type='submit'>Enviar</Button>
      </SubmitButton>
    </StyleForm>
  )
}
export default Form
