import styled from 'styled-components'

export type StyledProps = {
  color: string
}
export type Props = {
  background?: boolean
}

export const Box = styled.div<StyledProps>`
  width: 125px;
  margin-top: 20px;
  height: 90px;
  display: inline-block;
  border-radius: 6px;
  text-align: center;
  background-color: ${({ color }) => color};
`
export const Background = styled.div<Props>`
  width: 140px;
  height: 150px;
  border-radius: 6px;
  text-align: center;
  align-items: center;
  justify-items: center;
  background-color: ${({ background }) => background ? 'gray' : 'none'};
`