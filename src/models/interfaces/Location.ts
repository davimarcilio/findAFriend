export interface RegionResponse {
  id: number
  nome: string
  sigla: string
}

export interface StateResponse {
  id: number
  sigla: string
  nome: string
  regiao: RegionResponse
}

export interface CitiesResponse {
  code: string
  name: string
}
