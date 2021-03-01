import Styled from 'styled-components'

const Btn = Styled.button`
  width: 256px;
  height: 48px;
  border-radius: 10px;
  padding: 0;
  background-color: #e63888;
  color: #ffffff;
  box-shadow: none;
  outline: none;
  border: 0;
  font-size: 16px;
  font-weight: bold;
  &:hover {
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
    border: 2px solid #CC196B;
  }
`
export default Btn