// import { Select } from '@/components/Select'

import logo from '@/assets/icons/logo.svg'
import search from '@/assets/icons/search.svg'
import { Button } from '../Button'
import { SelectComponent } from '../Select'
// import {
//   Container,
//   AsideHeader,
//   HeaderInput,
//   AsideContent,
//   ContentHeader,
//   ContentFilters,
// } from './styles'

const ageOptions = [
  {
    label: 'Filhote',
    value: 'cub',
  },
  {
    label: 'Adolescente',
    value: 'adolescent',
  },
  {
    label: 'Idoso',
    value: 'elderly',
  },
]
const energyOptions = [
  {
    label: 'Muito baixa',
    value: 1,
  },
  {
    label: 'Baixa',
    value: 2,
  },
  {
    label: 'Média',
    value: 3,
  },
  {
    label: 'Alta',
    value: 4,
  },
  {
    label: 'Muito alta',
    value: 5,
  },
]
const sizeOptions = [
  {
    label: 'Pequenino',
    value: 'small',
  },
  {
    label: 'Médio',
    value: 'medium',
  },
  {
    label: 'Grande',
    value: 'big',
  },
]
const independencyOptions = [
  {
    label: 'Baixo',
    value: 'low',
  },
  {
    label: 'Médio',
    value: 'medium',
  },
  {
    label: 'Alto',
    value: 'high',
  },
]

export function Aside() {
  // function handleSearchPets() {
  //   // TO DO
  // }

  // function handleChangeSearchFilters() {
  //   // TO DO
  // }

  return (
    <aside className="w-96 h-screen bg-red-500 overflow-y-auto">
      <div className="h-60 bg-red-700">
        <div className="pt-20 px-14 pb-6 flex flex-col gap-6">
          <img className="w-11" src={logo} alt="" />
          <div className="flex gap-3">
            <input
              className="w-52 h-14 font-bold text-base text-white py-5 px-4 rounded-2xl bg-transparent border border-red-500 outline-none placeholder:text-red-50"
              type="text"
              placeholder="Insira uma cidade"
            />
            <Button className="w-14 h-14">
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
