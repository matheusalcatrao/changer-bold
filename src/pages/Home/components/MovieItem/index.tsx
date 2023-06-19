import { useTheme } from 'react-native-paper'
import { ISearch } from '../../../../types/movie'
import { Description, Name, Container, Image } from './styles'
import { View } from 'react-native'

export const MovieItem = ({ Title, Poster, Year, Type }: ISearch) => {
  const theme = useTheme()

  return (
    <Container color={theme.colors.secondaryContainer}>
      <Image
        source={{ uri: Poster }}
        style={{ width: 100, height: 120, borderRadius: 25 }}
        alt="movie"
        resizeMode="stretch"
      />
      <View>
        <Name color={theme.colors.onPrimaryContainer} variant="titleMedium">
          {Title}
        </Name>
        <Description color={theme.colors.secondary} variant="titleMedium">
          Ano: {Year} {'\n'}Tipo: {Type}
        </Description>
      </View>
    </Container>
  )
}
