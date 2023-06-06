import { useContext } from 'react'
import { searchMovies } from '../services/client'
import { Alert } from 'react-native'
import { MovieContext } from '../context/MovieContext'

const useMovie = () => {
  const {
    inputValue,
    setInputValue,
    isLoading,
    setIsLoading,
    movieInfo,
    setMovieinfo,
    selectMovieType,
    setSelectMovieType,
  } = useContext(MovieContext)

  const handleSearch = async () => {
    try {
      if (!inputValue) {
        Alert.alert('Ops', 'Digite o nome de algum filme!')
        return
      }

      setIsLoading(true)
      const reponse = await searchMovies(inputValue)

      setMovieinfo(reponse)
    } catch (error) {
      Alert.alert('Ops!', 'Algo está errado, tente novamente mais tarde')
    } finally {
      setIsLoading(false)
    }
  }

  const cleanSearch = () => {
    setMovieinfo(undefined)
  }

  const handleSelectMovieType = (param: number) => {
    setSelectMovieType(param)
  }

  return {
    movieInfo,
    isLoading,
    inputValue,
    setInputValue,
    handleSearch,
    cleanSearch,
    selectMovieType,
    handleSelectMovieType,
  }
}

export default useMovie
