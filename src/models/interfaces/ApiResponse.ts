import { City } from './Location'
import { Pet } from './Pet'

export interface ResponsePetUrl {
  data: {
    pets: Pet[]
  }
}

export interface ResponseLocationCities {
  data: {
    citys: City[]
  }
}
