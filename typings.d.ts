export interface Genre {
  id: number
  name: string
}

export interface Movie {
  title: string
  backdrop_path: string
  media_type?: string
  release_Date?: string
  first_air_date: string
  genre_ids: number[]
  id: number
  origin_country: string[]
  origin_language: string
  overview: string
  popularity: number
  poster_path: string
  vote_avarage: number
  vote_count: number

}

export interface Element {
  type:
  | 'Bloopers'
  | 'Featurette'
  | 'Behind the Scenes'
  | 'Clip'
  | 'Trailer'
  | 'Tease'
}