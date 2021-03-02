import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled, { css } from 'styled-components'
import { desktop, tablet } from '/theme'

const StyleForm = styled.form`
  display: flex;
  flex-direction: column;
  color: rgba(0, 8, 38, 0.8);
`
export default StyleForm

export const Label = styled.label`
  display: block;
  font-size: 14px;
  margin-top: 16px;
  margin-bottom: 4px;
  ${tablet(css`
    font-size: 16px;
    margin-top: 20px;
    margin-bottom: 6px;
  `)}
  ${desktop(css`
    font-size: 16px;
    margin-top: 24px;
    margin-bottom: 8px;
  `)}
`
export const Input = styled.input`
  border-radius: 10px;
  border: solid 1px rgba(0, 8, 38, 0.16);
  padding: 8px;
  box-sizing: border-box;
  height: 48px;
  &:hover :focus {
    border: solid 1px #0b64e0;
  }
`
export const Text = styled.textarea`
  border-radius: 10px;
  border: solid 1px rgba(0, 8, 38, 0.16);
  padding: 8px;
  box-sizing: border-box;
  min-height: 200px;
  max-height: 300px;
  resize: none;
  ${tablet(css`
    min-height: 200px;
    max-height: 300px;
  `)}
  ${desktop(css`
    min-height: 100px;
    max-height: 200px;
  `)}
`
export const Group = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 14px;
  color: rgba(0, 8, 38, 0.8);
  ${tablet(css`
    margin-bottom: 16px;
  `)}
  ${desktop(css`
    margin-bottom: 16px;
  `)}
`
export const Rating = styled.div`
  display: flex;
  flex-direction: row-reverse ;
  justify-content: space-around;
  margin-top: 12px;
  margin-bottom: 14px;
  ${tablet(css`
    margin-top: 12px;
    margin-bottom: 16px;
  `)}
  ${desktop(css`
    margin-top: 12px;
    margin-bottom: 16px;
  `)}
`
type RateProp = {
  rated: boolean
}

export const Rate = styled(FontAwesomeIcon) <RateProp>`
  color: ${({ rated }) => rated ? 'orange' : '#373e55'};
  cursor: pointer;
  &:hover, :hover ~ &{
    color: rgba(255, 165, 0, 0.7);
  }
`
type ErrorProps = {
  show: boolean
}
export const Error = styled.span<ErrorProps>`
  color: #e74c3c;
  font-size: 14px;
  display: ${({ show }) => show ? 'flex' : 'none'};
  ${tablet(css`
    font-size: 16px;
  `)}
  ${desktop(css`
    font-size: 16px;
  `)}
`
export const SubmitButton = styled.div`
  display: flex;
  margin-top: 16px;
  justify-content: center;
  width: 100%;

  ${tablet(css`
    margin-top: 24px;
    display: flex;
    justify-content: center;
    width: auto;
  `)}
  ${desktop(css`
    margin-top: 24px;
    display: flex;
    justify-content: flex-end;
    width: auto;
  `)}
`