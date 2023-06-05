/* eslint-disable no-unused-vars */
enum Type {
  Movie = 'movie',
  Series = 'series',
}

export interface ISearch {
  Title: string
  Year: string
  imdbID: string
  Type: Type
  Poster: string
}

export interface IMovie {
  Search: ISearch[]
  totalResults: string
  Response: string
}
