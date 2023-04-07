import * as Label from '@radix-ui/react-label'
import { MagnifyingGlass } from 'phosphor-react'
import { FormEvent, useContext, useState } from 'react'
import { Button } from '@/components/Button'
import { SelectComponent } from '@/components/Select'
import { LocationContext } from '@/context/LocationContext'
import { UserContext } from '@/context/UserContext'
import { useNavigate } from 'react-router-dom'

export function Form() {
  const { cities, states, getCitiesByState } = useContext(LocationContext)
  const { registerUserLocation } = useContext(UserContext)

  const [state, setState] = useState('')
  const [city, setCity] = useState('')

  const navigate = useNavigate()

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    registerUserLocation({
      state,
      city,
    })
    navigate('/map')
  }

  function handleGetCitiesByState(state: string) {
    setCity('')
    getCitiesByState(state)
    setState(state)
  }

  function handleGetCity(city: string) {
    setCity(city)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center gap-2"
    >
      <Label.Root htmlFor="UF_ID">Busque um amigo:</Label.Root>

      <SelectComponent
        className="flex justify-center items-center border gap-1 py-4 px-2 rounded-2xl"
        id="UF_ID"
        name="UF"
        selectLabel="Selecione seu estado"
        options={states}
        onValueChange={(value) => {
          handleGetCitiesByState(value)
        }}
        disabled={!(states.length > 0)}
      />
      <SelectComponent
        className="flex justify-center gap-2 items-center py-4 bg-red-700 px-10 rounded-2xl"
        id="CITY_ID"
        name="Cidade"
        selectLabel="Selecione sua cidade"
        options={cities}
        onValueChange={(value) => {
          handleGetCity(value)
        }}
        disabled={!(cities.length > 0)}
      />
      <Button disabled={!state || !city}>
        <MagnifyingGlass weight="bold" className="text-blue-900" size={26} />
      </Button>
    </form>
  )
}
