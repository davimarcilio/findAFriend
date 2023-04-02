import * as Label from '@radix-ui/react-label'
import { MagnifyingGlass } from 'phosphor-react'
import { app } from '@/lib/axios'
import { useEffect, useState } from 'react'
import { CitiesResponse, StateResponse } from '@/models/interfaces/Location'
import { Button } from '@/components/Button'
import { OptionsProps, SelectComponent } from '@/components/Select'

export function Form() {
  const [states, setStates] = useState<OptionsProps[]>([])
  const [cities, setCities] = useState<OptionsProps[]>([])
  const [selectedState, setSelectedState] = useState('')

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

  useEffect(() => {
    if (selectedState) {
      getCitiesByState(selectedState)
    }
  }, [selectedState])

  return (
    <form className="flex justify-center items-center gap-2">
      <Label.Root htmlFor="UF_ID">Busque um amigo:</Label.Root>

      <SelectComponent
        className="flex justify-center items-center border gap-1 py-4 px-2 rounded-2xl"
        id="UF_ID"
        name="UF"
        selectLabel="Selecione seu estado"
        options={states}
        onValueChange={(value) => {
          setCities([])
          setSelectedState(value)
        }}
        disabled={!(states.length > 0)}
      />
      <SelectComponent
        className="flex justify-center gap-2 items-center py-4 bg-red-700 px-10 rounded-2xl"
        id="CITY_ID"
        name="Cidade"
        selectLabel="Selecione sua cidade"
        options={cities}
        disabled={!(cities.length > 0)}
      />
      <Button>
        <MagnifyingGlass weight="bold" className="text-blue-900" size={26} />
      </Button>
    </form>
  )
}
