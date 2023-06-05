import { useState } from 'react'
import { IMovie } from '../types/movie'
import { searchMovies } from '../services/client'
import { Alert } from 'react-native'

const useMovie = () => {
  const [movieInfo, setMovieinfo] = useState<IMovie>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>('')

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

  return {
    movieInfo,
    isLoading,
    inputValue,
    setInputValue,
    handleSearch,
    cleanSearch,
  }
}

export default useMovie
