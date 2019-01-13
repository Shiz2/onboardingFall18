import styled from "styled-components";

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary.famil};
  font-weight: ${({ theme }) => theme.fonts.primary.weight};
  color: ${({ theme }) => theme.fonts.primary.color};
`;

const SectionHeader = styled.h2`
  font-family: ${({ theme }) => theme.fonts.secondary.famil};
  font-weight: ${({ theme }) => theme.fonts.secondary.weight};
  color: ${({ theme }) => theme.fonts.secondary.color};
  margin: 2px 0px;
` 
// const Row = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-start;
//   flex-wrap: nowrap;
// `

const Container = styled.div`
  padding: 12px;
  margin: 4px 0px;
`

const MainContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  padding: 12px;
  margin: 4px;
`

export { Title, SectionHeader, Container, MainContainer };
