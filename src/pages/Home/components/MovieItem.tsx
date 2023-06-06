import { Image, View } from 'react-native'
import { Text, useTheme } from 'react-native-paper'
import { ISearch } from '../../../types/movie'

export const MovieItem = ({ Title, Poster, Year, Type }: ISearch) => {
  const theme = useTheme()

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.colors.secondaryContainer,
        padding: 10,
        borderRadius: 15,
      }}
    >
      <Image
        source={{ uri: Poster }}
        style={{ width: 100, height: 120, borderRadius: 25 }}
        alt="movie"
        resizeMode="stretch"
      />
      <View>
        <Text
          variant="titleMedium"
          style={{
            color: theme.colors.onPrimaryContainer,
            fontWeight: '600',
            maxWidth: 300,
            marginLeft: 8,
          }}
        >
          {Title}
        </Text>
        <Text
          variant="titleMedium"
          style={{
            color: theme.colors.secondary,
            fontWeight: '600',
            marginLeft: 8,
          }}
        >
          Ano: {Year} {'\n'}Tipo: {Type}
        </Text>
      </View>
    </View>
  )
}
