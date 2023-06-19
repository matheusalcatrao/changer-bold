import { Text } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

interface TitleProps {
  color: string
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`

export const Title = styled(Text)<TitleProps>`
  align-self: flex-start;
  font-weight: bold;
  color: ${(props) => props.color};
`
