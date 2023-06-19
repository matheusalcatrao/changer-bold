import React from 'react'
import { IMovie, MovieType } from './movie'

export type MovieContextType = {
  movieInfo: IMovie | undefined
  isLoading: boolean
  setMovieinfo: (object: IMovie | undefined) => void
  setIsLoading: (text: boolean) => void
  setInputValue: (text: string) => void
  inputValue: string
  selectMovieType: MovieType | undefined
  setSelectMovieType: (text: MovieType) => void
}

export interface MovieContextProps {
  children: React.ReactNode
}
