import React, { createContext, useState } from 'react'
import { IMovie, MovieType } from '../types/movie'
import { MovieContextProps, MovieContextType } from '../types/context'

export const MovieContext = createContext<MovieContextType>({
  movieInfo: undefined,
  isLoading: false,
  setMovieinfo: (object: IMovie | undefined) => {},
  setIsLoading: (param: boolean) => {},
  setInputValue: Function,
  inputValue: '',
  selectMovieType: undefined,
  setSelectMovieType: (param: MovieType) => {},
})

const MovieProvider: React.FC<MovieContextProps> = ({ children }) => {
  const [movieInfo, setMovieinfo] = useState<IMovie>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>('')
  const [selectMovieType, setSelectMovieType] = useState<MovieType>()

  return (
    <MovieContext.Provider
      value={{
        movieInfo,
        setMovieinfo,
        isLoading,
        setIsLoading,
        inputValue,
        setInputValue,
        selectMovieType,
        setSelectMovieType,
      }}
    >
      {children}
    </MovieContext.Provider>
  )
}

export default MovieProvider
