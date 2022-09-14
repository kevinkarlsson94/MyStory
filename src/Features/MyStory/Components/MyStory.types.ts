import { CategoryType } from "./Filter/Filter"

export interface Coords {
  latitude: number
  longitude: number
}
export interface Story {
  title: string
  country: string
  locationName: string
  description: string
  date: string
  coords: Coords
}
