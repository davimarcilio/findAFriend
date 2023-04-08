export interface Region {
  id: number
  nome: string
  sigla: string
}

export interface State {
  id: number
  sigla: string
  nome: string
  regiao: Region
}

export interface City {
  code: string
  name: string
}
