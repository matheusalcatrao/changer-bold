import React, { createContext } from 'react'

export const MovieContext = createContext({
  movieInfo: {},
  setMovieinfo: Function,
  isLoading: Boolean,
  setIsLoading: Function,
  inputValue: String,
  setInputValue: Function,
})

const MovieProvider = ({ children }: React.ReactNode) => {
  return <MovieContext.Provider>{children}</MovieContext.Provider>
}

export default MovieProvider
