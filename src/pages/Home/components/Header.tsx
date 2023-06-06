import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Chip, Searchbar, useTheme } from 'react-native-paper'
import useMovie from '../../../hooks/useMovie'

const FILM = 0
const SERIES = 1
const GAMES = 2

const Header: React.FC = () => {
  const theme = useTheme()
  const {
    handleSearch,
    cleanSearch,
    inputValue,
    setInputValue,
    selectMovieType,
    handleSelectMovieType,
  } = useMovie()

  return (
    <View
      style={{
        width: '100%',
        height: '25%',
        padding: 15,
        backgroundColor: theme.colors.onPrimaryContainer,
        justifyContent: 'space-around',
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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '80%',
        }}
      >
        <TouchableOpacity onPress={() => handleSelectMovieType(FILM)}>
          <Chip
            icon="movie"
            // rippleColor={theme.colors.secondary}
            selectedColor={
              selectMovieType === FILM ? theme.colors.secondary : undefined
            }
            showSelectedOverlay
            selected={selectMovieType === FILM}
          >
            Filme
          </Chip>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelectMovieType(SERIES)}>
          <Chip
            icon="animation-play"
            showSelectedOverlay
            selectedColor={
              selectMovieType === SERIES ? theme.colors.secondary : undefined
            }
            selected={selectMovieType === SERIES}
          >
            Série
          </Chip>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelectMovieType(GAMES)}>
          <Chip
            icon="gamepad"
            showSelectedOverlay
            selectedColor={
              selectMovieType === GAMES ? theme.colors.secondary : undefined
            }
            selected={selectMovieType === GAMES}
          >
            Games
          </Chip>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header
