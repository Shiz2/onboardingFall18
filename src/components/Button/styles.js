// Create a Title component that'll render an <h1> tag with some styles
import styled, { css } from 'styled-components'

const ButtonStyle = styled.button`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 12px;
  padding: 10px;
  margin: 10px;
  background: ${ ({theme}) => theme.colors.primary};
  color: white;
  border: none;
  font-family: ${({ theme }) => theme.fonts.secondary.family};
  font-size: ${({ theme }) => theme.fonts.secondary.size};
`
export { ButtonStyle }