import React from 'react'
import { View, SafeAreaView, FlatList, Image } from 'react-native'
import {
  useTheme,
  Searchbar,
  Text,
  ActivityIndicator,
  Chip,
  Card,
} from 'react-native-paper'
import useMovie from '../../hooks/useMovie'
import { IMovie, ISearch } from '../../types/movie'

interface ItemType {
  Title: string
  Poster: string
}

const Item = ({ Title, Poster, Year, Type }: ISearch) => {
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

const Home: React.FC = () => {
  const {
    inputValue,
    setInputValue,
    handleSearch,
    movieInfo,
    cleanSearch,
    isLoading,
  } = useMovie()
  const theme = useTheme()

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: `center`, justifyContent: 'space-around' }}
    >
      <View
        style={{
          width: '100%',
          height: '20%',
          padding: 15,
          backgroundColor: theme.colors.onPrimaryContainer,
        }}
      >
        <Searchbar
          placeholder="Buscar filme"
          value={inputValue}
          onChangeText={setInputValue}
          onSubmitEditing={handleSearch}
          onClearIconPress={cleanSearch}
          theme={theme}
        />
        <View style={{ flexDirection: 'row' }}>
          <Chip icon="movie" selectedColor={theme.colors.primary} selected>
            Filme
          </Chip>
          <Chip icon="animation-play">Série</Chip>
          <Chip icon="gamepad">Games</Chip>
        </View>
      </View>

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
            renderItem={({ item }) => <Item {...item} />}
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

export default Home
