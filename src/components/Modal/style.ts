import styled from 'styled-components'

type Props = {
  open: boolean
}

const Mdl = styled.div<Props>`
  display: ${({ open }) => open ? 'flex' : 'none'};
  position: fixed;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`
export const Content = styled.div`
  background-color: #fff;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 90%;
  min-height: 20%;
  max-width: 400px;
  border-radius: 10px;
`
export const Overlay = styled.div`
  position: fixed;
  z-index: -1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`
export const Exit = styled.span`
  &:hover {
    color: black;
    text-decoration: none;
    cursor: pointer;

  }
  &:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
`
export const MdlTitle = styled.span`
  font-size: 26px;
  color: rgba(0, 8, 38, 0.8);
  font-weight: bold;
  margin-top: none;
  margin-bottom: 24px;
`
export default Mdl