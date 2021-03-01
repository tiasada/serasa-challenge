import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import Btn from '../Button/style'

const Frm = styled.form`
  display: flex;
  flex-direction: column;
  color: rgba(0, 8, 38, 0.8);
`
export default Frm

export const Lbl = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 8px;
`
export const Inp = styled.input`
  border-radius: 10px;
  border: solid 1px rgba(0, 8, 38, 0.16);
  padding: 8px;
  box-sizing: border-box;
  height: 48px;
  &:hover :focus {
    border: solid 1px #0b64e0;
  }
`
export const Txt = styled.textarea`
  border-radius: 10px;
  border: solid 1px rgba(0, 8, 38, 0.16);
  padding: 8px;
  box-sizing: border-box;
  resize: none;
  min-height: 100px;
  max-height: 200px;
`
export const Group = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  color: rgba(0, 8, 38, 0.8);
`
export const Rating = styled.div`
  display: flex;
  flex-direction: row-reverse ;
  justify-content: space-around;
  margin-bottom: 16px;
`
type RateProp = {
  rated: boolean
}

export const Rate = styled(FontAwesomeIcon)<RateProp>`
  color: ${({ rated }) => rated ? 'orange' : '#373e55'};
  cursor: pointer;
  &:hover, :hover ~ &{
    color: rgba(255, 165, 0, 0.7);
  }
`
export const SubBtn = styled.div`
  display: flex;
  margin-top: 24px;
  justify-content: flex-end;
`