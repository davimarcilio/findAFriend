export type PetAge = 'cub' | 'adolescent' | 'elderly'
export type PetIndependence = 'low' | 'medium' | 'high'
export type PetSize = 'small' | 'medium' | 'big'
export type PetType = 'cat' | 'dog'
export interface PetParams {
  age: PetAge
  energy: number
  independence: PetIndependence
  size: PetSize
  type: PetType
}

export interface Pet {
  id: string
  name: string
  description: string
  city: string
  age: PetAge
  energy: number
  size: PetSize
  independence: PetIndependence
  type: PetType
  photo: string
  orgId: string
  photo_url: string
}
