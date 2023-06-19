import styled from 'styled-components/native'

interface ConatinerProps {
  backgroundColor: string
}

export const Container = styled.View<ConatinerProps>`
  width: 100%;
  height: 25%;
  padding: 15px;
  background-color: ${(props) => props.backgroundColor};
  justify-content: space-around;
`

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 80%;
`
