import axios from 'axios'
import { IMovie, MovieType } from '../types/movie'
import { API_KEY } from '../../contants'

const baseUrlMovie = `https://www.omdbapi.com/?apikey=${API_KEY}&i=tt3896198`
// const baseUrlMovieImg = `https://img.omdbapi.com/?apikey=${process.env.API_KEY}&i=tt3896198`

export async function searchMovies(
  name: string,
  type?: MovieType,
): Promise<IMovie> {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  let url = baseUrlMovie
  if (type) {
    url += `&type=${type}`
  }
  const { data } = await axios.get(`${url}&s=${name}`)
  return data
}
