import { app } from '@/lib/axios'
import { CitiesResponse, StateResponse } from '@/models/interfaces/Location'
import { OptionsProps } from '@/models/interfaces/Select'
import { ReactNode, createContext, useEffect, useState } from 'react'

interface LocationContextProviderProps {
  children: ReactNode
}

interface LocationContextProps {
  states: OptionsProps[]
  cities: OptionsProps[]
  getCitiesByState: (state: string) => void
}

export const LocationContext = createContext({} as LocationContextProps)

export function LocationContextProvider({
  children,
}: LocationContextProviderProps) {
  const [states, setStates] = useState<OptionsProps[]>([])
  const [cities, setCities] = useState<OptionsProps[]>([])
  async function getStates() {
    const response = await app.get('/location/states')
    const treatedResponse: OptionsProps[] = response.data.states.map(
      (state: StateResponse) => {
        return {
          value: state.sigla,
          label: state.nome,
        }
      },
    )
    setStates(treatedResponse)
  }
  async function getCitiesByState(state: string) {
    const response = await app.get(`/location/citys/${state}`)

    const treatedResponse: OptionsProps[] = response.data.citys.map(
      (city: CitiesResponse) => {
        return {
          value: city.code,
          label: city.name,
        }
      },
    )
    setCities(treatedResponse)
  }

  useEffect(() => {
    getStates()
  }, [])

  return (
    <LocationContext.Provider
      value={{
        cities,
        states,
        getCitiesByState,
      }}
    >
      {children}
    </LocationContext.Provider>
  )
}
