import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { group } from 'console'
import { defaultCipherList } from 'constants'
import React, { FormEvent, useState } from 'react'
import Button from '../Button'
import Frm, { Group, Inp, Lbl, Rate, Rating, SubBtn, Txt } from './styles'

type Props = {
  onClose: () => void
}

const Form = ({ onClose }: Props) => {
  const [name, setName] = useState('')
  const [rate, setRate] = useState(0)
  const [message, setMessage] = useState('')
  const body = { name, rate, message }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    fetch('https://5f4b11f341cb390016de37aa.mockapi.io/api/v1/feedback',
      {
        method: 'POST',
        body: JSON.stringify(body)
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        console.log(data);
      })

    onClose()
  }
  return (
    <Frm onSubmit={onSubmit}>
      <Group>
        <Lbl>Seu nome:</Lbl>
        <Inp
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </Group>
      <Lbl>Sua nota:</Lbl>
      <Rating>
        <Rate
          onClick={() => setRate(5)}
          id='5'
          icon={faStar}
          rated={rate>= 5}
          size='2x'
        />
        <Rate
          onClick={() => setRate(4)}
          id='4'
          icon={faStar}
          rated={rate>= 4}
          size='2x'
        />
        <Rate
          onClick={() => setRate(3)}
          id='3'
          icon={faStar}
          rated={rate>= 3}
          size='2x'
        />
        <Rate
          onClick={() => setRate(2)}
          id='2'
          icon={faStar}
          rated={rate>= 2}
          size='2x'
        />
        <Rate
          onClick={() => setRate(1)}
          id='1'
          icon={faStar}
          rated={rate>= 1}
          size='2x'
        />
      </Rating>
      <Group>
        <Lbl>Sua mensagem:</Lbl>
        <Txt
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
      </Group>
      <SubBtn>
        <Button type='submit'>Enviar</Button>
      </SubBtn>
    </Frm>
  )
}
export default Form