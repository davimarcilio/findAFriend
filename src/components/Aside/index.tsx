// import { Select } from '@/components/Select'

import logo from '@/assets/icons/logo.svg'
import search from '@/assets/icons/search.svg'
import { Button } from '../Button'
import { SelectComponent } from '../Select'
import { useContext, useState } from 'react'
import { LocationContext } from '@/context/LocationContext'
import {
  ageOptions,
  energyOptions,
  independencyOptions,
  sizeOptions,
} from '@/utils/petsOptions'
import { UserContext } from '@/context/UserContext'
// import {
//   Container,
//   AsideHeader,
//   HeaderInput,
//   AsideContent,
//   ContentHeader,
//   ContentFilters,
// } from './styles'

export function Aside() {
  // function handleSearchPets() {
  //   // TO DO
  // }

  // function handleChangeSearchFilters() {
  //   // TO DO
  // }

  const [state, setState] = useState('')
  const [city, setCity] = useState('')

  const { states, cities, getCitiesByState } = useContext(LocationContext)
  const { registerUserLocation } = useContext(UserContext)
  function handleGetCitiesByState(state: string) {
    getCitiesByState(state)
  }
  function handleRegisterUserLocation() {
    registerUserLocation({ state, city })
  }
  return (
    <aside className="w-96 h-screen bg-red-500 overflow-y-auto">
      <div className=" bg-red-700">
        <div className="pt-20 px-14 pb-6 flex flex-col gap-6">
          <img className="w-11" src={logo} alt="" />
          <div className="flex flex-col gap-3">
            <SelectComponent
              id="UF"
              name="UF"
              selectLabel="Selecione um estado"
              className="flex justify-between hover:opacity-90 transition-all items-center border border-red-500 bg-transparent font-bold gap-1 py-4 px-10 rounded-2xl"
              options={states}
              onValueChange={(value) => {
                handleGetCitiesByState(value)
                setState(value)
              }}
              disabled={!(states.length > 0)}
            />
            <SelectComponent
              className="flex justify-between hover:opacity-90 transition-all gap-2 items-center py-4 bg-red-700 border font-bold w-full border-red-500 px-10 rounded-2xl"
              id="CITY_ID"
              name="Cidade"
              selectLabel="Selecione sua cidade"
              options={cities}
              disabled={!(cities.length > 0)}
              onValueChange={(value) => {
                setCity(value)
              }}
            />

            <Button
              onClick={handleRegisterUserLocation}
              disabled={!city || !state}
              className="w-full transition-all"
            >
              <img className="w-6" src={search} alt="ícone de lupa" />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-9 px-14">
        <h1 className="text-xl leading-8 mb-7">Filtros</h1>
        <div className="flex flex-col gap-8 overflow-y-auto">
          <SelectComponent
            name="Idade"
            options={ageOptions}
            id="age"
            selectLabel="Idade"
            label="Idade"
            className="flex font-bold justify-between gap-2 items-center py-4 bg-red-400 px-10 rounded-2xl"
          />
          <SelectComponent
            name="Nível de energia"
            options={energyOptions}
            id="energy"
            selectLabel="Nível de energia"
            label="Nível de energia"
            className="flex font-bold justify-between gap-2 items-center py-4 bg-red-400 px-10 rounded-2xl"
          />
          <SelectComponent
            name="Porte do animal"
            options={sizeOptions}
            id="size"
            selectLabel="Porte do Animal"
            label="Porte do Animal"
            className="flex font-bold justify-between gap-2 items-center py-4 bg-red-400 px-10 rounded-2xl"
          />
          <SelectComponent
            name="independência"
            options={independencyOptions}
            id="independency"
            selectLabel="Nível de independência"
            label="Nível de independência"
            className="flex font-bold justify-between gap-2 items-center py-4 bg-red-400 px-10 rounded-2xl"
          />
        </div>
      </div>
    </aside>
  )
}
