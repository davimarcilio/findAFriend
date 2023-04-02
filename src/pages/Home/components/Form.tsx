import * as Label from '@radix-ui/react-label'
import { MagnifyingGlass } from 'phosphor-react'
import { useContext } from 'react'
import { Button } from '@/components/Button'
import { SelectComponent } from '@/components/Select'
import { LocationContext } from '@/context/LocationContext'

export function Form() {
  const { cities, states, getCitiesByState } = useContext(LocationContext)

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
          getCitiesByState(value)
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
