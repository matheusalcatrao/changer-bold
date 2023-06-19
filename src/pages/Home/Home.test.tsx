import { render, screen } from '@testing-library/react-native'
import Home from './index'
import { MovieContext } from '../../context/MovieContext'

const setMovieinfo = () => {}
const isLoading = true
const setIsLoading = () => {}
const inputValue = 'Marvel'
const setInputValue = () => {}
const selectMovieType = 'movie'
const setSelectMovieType = () => {}

test('should be render component header ', () => {
  render(<Home />)

  const header = screen.getByTestId('header')

  expect(header).toBeTruthy()
})

test('should be render loading', () => {
  render(
    <MovieContext.Provider
      value={{
        movieInfo: undefined,
        setMovieinfo,
        isLoading,
        setIsLoading,
        inputValue,
        setInputValue,
        selectMovieType,
        setSelectMovieType,
      }}
    >
      <Home />
    </MovieContext.Provider>,
  )

  const loading = screen.getByTestId('loading')

  expect(loading).toBeTruthy()
})
