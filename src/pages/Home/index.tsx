import React from 'react'
import { View, FlatList } from 'react-native'
import { useTheme, withTheme } from 'react-native-paper'
import useMovie from '../../hooks/useMovie'
import { MovieItem } from './components/MovieItem'
import Header from './components/Header'
import { Container, Title } from './styles'
import Loading from './components/Loading'

const Home: React.FC = () => {
  const { movieInfo, isLoading } = useMovie()
  const theme = useTheme()

  return (
    <Container>
      <Header />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <FlatList
            data={movieInfo?.Search}
            extraData={movieInfo?.Search && movieInfo?.Search[0].imdbID}
            contentContainerStyle={{ padding: 10 }}
            ItemSeparatorComponent={() => <View style={{ margin: 10 }} />}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <MovieItem {...item} />}
            ListHeaderComponent={
              <Title
                color={theme.colors.onPrimaryContainer}
                variant="titleLarge"
              >
                Resultados
              </Title>
            }
          />
        </>
      )}
    </Container>
  )
}

export default withTheme(Home)
