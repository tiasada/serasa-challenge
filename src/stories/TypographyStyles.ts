import styled, { css } from 'styled-components'
import { desktop, tablet } from './theme'

export type StyledProps = {
  color: string
  bold?: boolean
}

export const fontFaces = css`
  @font-face {
    font-family: 'Roboto', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
    font-style: normal;
  }
  font-family: 'Roboto', sans-serif;
`
export const Display = styled.h1<StyledProps>`
  ${tablet(css`
    font-size: 40px;
    line-height: 44px;
  `)}
  ${desktop(css`
    font-size: 48px;
    line-height: 52px;
  `)}
  letter-spacing: -1.2 ;
  font-weight: 700;
  color: ${({ color }) => color};
`

export const HeadingL = styled.h2<StyledProps>`
  ${tablet(css`
    font-size: 32px;
    line-height: 36px;
  `)}
  ${desktop(css`
    font-size: 40px;
    line-height: 44px;
  `)}

  letter-spacing: -1 ;
  font-weight: 700;

  color: ${({ color }) => color};
`

export const HeadingM = styled.h3<StyledProps>`
  ${tablet(css`
    font-size: 24px;
    line-height: 28px;
  `)}
  ${desktop(css`
    font-size: 32px;
    line-height: 36px;
  `)}

  letter-spacing: -0.8 ;
  font-weight: 700;

  ${({ color }) => css`color: ${color};`};
`
export const HeadingS = styled.h4<StyledProps>`
  ${tablet(css`
    font-size: 20px;
    line-height: 24px;
  `)}
  ${desktop(css`
    font-size: 24px;
    line-height: 28px;
  `)}

  letter-spacing: -0.6 ;
  font-weight: 700;

  ${({ color }) => css`color: ${color};`};
`
export const HeadingXS = styled.h5<StyledProps>`
    ${tablet(css`
    font-size: 18px;
    line-height: 22px;
  `)}
  ${desktop(css`
    font-size: 20px;
    line-height: 24px;
  `)}

  font-weight: 700;
  
  ${({ color }) => css`color: ${color};`};
  `
export const Subheading = styled.h6<StyledProps>`
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  
  ${({ color }) => css`color: ${color};`};
`

export const BodyM = styled.p<StyledProps>`
  font-size: 16px;
  line-height: 24px;
  font-weight: ${({ bold }) => bold ? '700' : '400'};
  
  ${({ color }) => `color: ${color};`};
`
