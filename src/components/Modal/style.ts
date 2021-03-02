import styled, { css } from 'styled-components'
import { desktop, tablet } from '/theme'

type Props = {
  open: boolean
}

const StyleModal = styled.div<Props>`
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
export default StyleModal
export const Content = styled.div`
  background-color: #fff;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 90%;
  min-height: 100vh;

  border-radius: 10px;
  ${tablet(css`
    min-height: 20%;
    max-width: 350px;
  `)}
  ${desktop(css`
    min-height: 20%;
    max-width: 400px;
  `)}
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
  font-size: 26px;
  font-weight: bold;
  ${tablet(css`
    font-size: 28px;
  `)}
  ${desktop(css`
    font-size: 32px;
  `)}
`
export const ModalTitle = styled.span`
  font-size: 24px;
  color: rgba(0, 8, 38, 0.8);
  font-weight: bold;

  ${tablet(css`
    font-size: 26px;
  `)}
  ${desktop(css`
    font-size: 28px;
  `)}
`