/* eslint-disable no-unused-vars */
export type MovieType = 'movie' | 'series' | 'episode'

export interface ISearch {
  Title: string
  Year: string
  imdbID: string
  Type: MovieType
  Poster: string
}

export interface IMovie {
  Search: ISearch[]
  totalResults: string
  Response: string
}
