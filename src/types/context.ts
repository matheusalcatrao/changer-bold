import React from 'react'
import { IMovie } from './movie'

export type MovieContextType = {
  movieInfo: IMovie | undefined
  isLoading: boolean
  setMovieinfo: (object: IMovie | undefined) => void
  setIsLoading: (text: boolean) => void
  setInputValue: (text: string) => void
  inputValue: string
  selectMovieType: number | undefined
  setSelectMovieType: (text: number) => void
}

export interface MovieContextProps {
  children: React.ReactNode
}
