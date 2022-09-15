export interface Coords {
  latitude: number
  longitude: number
}
export interface Story {
  id: number
  title: string
  country: string
  locationName: string
  description: string
  date: string
  coords: Coords
  image?: any
}
