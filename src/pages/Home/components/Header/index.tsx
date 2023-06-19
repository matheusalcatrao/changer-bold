import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Chip, Searchbar, useTheme } from 'react-native-paper'
import useMovie from '../../../../hooks/useMovie'
import { Container, Content } from './styles'

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
    <Container
      testID="header"
      backgroundColor={theme.colors.onPrimaryContainer}
    >
      <Searchbar
        placeholder="Buscar filme"
        value={inputValue}
        onChangeText={setInputValue}
        onSubmitEditing={() => handleSearch(selectMovieType)}
        onClearIconPress={cleanSearch}
        theme={theme}
      />

      <Content>
        <TouchableOpacity onPress={() => handleSelectMovieType('movie')}>
          <Chip
            icon="movie"
            selectedColor={
              selectMovieType === 'movie' ? theme.colors.secondary : undefined
            }
            showSelectedOverlay
            selected={selectMovieType === 'movie'}
          >
            Filme
          </Chip>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelectMovieType('series')}>
          <Chip
            icon="animation-play"
            showSelectedOverlay
            selectedColor={
              selectMovieType === 'series' ? theme.colors.secondary : undefined
            }
            selected={selectMovieType === 'series'}
          >
            Série
          </Chip>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelectMovieType('episode')}>
          <Chip
            icon="gamepad"
            showSelectedOverlay
            selectedColor={
              selectMovieType === 'episode' ? theme.colors.secondary : undefined
            }
            selected={selectMovieType === 'episode'}
          >
            Games
          </Chip>
        </TouchableOpacity>
      </Content>
    </Container>
  )
}

export default Header
