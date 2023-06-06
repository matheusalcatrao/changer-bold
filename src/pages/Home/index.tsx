import React from 'react'
import { View, FlatList } from 'react-native'
import {
  useTheme,
  Text,
  ActivityIndicator,
  withTheme,
} from 'react-native-paper'
import useMovie from '../../hooks/useMovie'
import { MovieItem } from './components/MovieItem'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from './components/Header'

const Home: React.FC = () => {
  const { movieInfo, isLoading } = useMovie()
  const theme = useTheme()

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: `center`, justifyContent: 'space-around' }}
    >
      <Header />
      {isLoading ? (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator
            animating
            color={theme.colors.onPrimaryContainer}
            // style={{ marginTop: 100 }}
          />
        </View>
      ) : (
        <>
          <FlatList
            data={movieInfo?.Search}
            extraData={movieInfo?.Search[0].imdbID}
            contentContainerStyle={{ padding: 10 }}
            ItemSeparatorComponent={() => <View style={{ margin: 10 }} />}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <MovieItem {...item} />}
            ListHeaderComponent={
              <Text
                variant="titleLarge"
                style={{
                  alignSelf: 'flex-start',
                  fontWeight: 'bold',
                  color: theme.colors.onPrimaryContainer,
                  marginTop: 20,
                  marginBottom: 18,
                }}
              >
                Resultados
              </Text>
            }
          />
        </>
      )}
    </SafeAreaView>
  )
}

export default withTheme(Home)
