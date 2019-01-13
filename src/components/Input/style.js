import styled from "styled-components";

const InputStyle = styled.input`
  padding: 6px 10px;
  margin: 8px 0;
  box-sizing: border-box;
  font-size: ${ ({theme}) => theme.fonts.secondary.size};
  font-family: ${ ({theme}) => theme.fonts.secondary.family};
  border-radius: 6px;
`;
export { InputStyle };
