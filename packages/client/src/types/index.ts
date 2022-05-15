export type City = {
  country: string
  id: number
  name: string
  visited: boolean
  wishlist: boolean
}

export type CityProps = {
  name: string
  id: number
  visited: boolean
  wishlist: boolean
  route?: boolean
}

export type Children = {
  props: string
}
