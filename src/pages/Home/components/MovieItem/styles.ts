import { Text } from 'react-native-paper'
import styled from 'styled-components/native'

interface Props {
  color: string
}

export const Container = styled.View<Props>`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  border-radius: 15px;
  max-width: 98%;
  background-color: ${(props) => props.color};
`

export const Image = styled.Image`
  width: 100px;
  height: 120px;
  border-radius: 25px;
`
export const Name = styled(Text)<Props>`
  font-weight: 600;
  max-width: 280px;
  margin-left: 8px;
`

export const Description = styled(Text)<Props>`
  font-weight: 600;
  margin-left: 8px;
`
