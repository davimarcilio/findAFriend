import { PetAside } from '@/components/PetAside'
import { OrgCard } from './components/OrgCard'
import { InputForm } from '@/components/InputForm'
import { SelectComponent } from '@/components/Select'
import {
  sizeOptions,
  independencyOptions,
  ageOptions,
  energyOptions,
  environmentOptions,
} from '@/utils/petsOptions'
import { ImagesInput } from './components/ImagesInput'
import { RequirementSection } from './components/RequirementSection'
import { Button } from '@/components/Button'

export function AdminPet() {
  return (
    <main className="flex max-md:flex-col bg-red-100">
      <PetAside />
      <section className="flex-1  flex flex-col items-center overflow-y-auto h-screen py-10 home">
        <div className="flex flex-col w-full max-w-3xl gap-7">
          <OrgCard />
          <form className="flex flex-col gap-6 w-full max-w-3xl bg-white border border-blue-50 rounded-3xl py-16 px-20">
            <h1 className="text-blue-900 font-extrabold text-4xl">
              Adicione um pet
            </h1>
            <hr />
            <InputForm label="Nome" />
            <div className="flex flex-col gap-2 select-none">
              <label
                htmlFor="Sobre"
                className="flex gap-6 items-center font-semibold text-blue-900"
              >
                Sobre
                <span className="text-xs text-blue-100">
                  Máximo de 300 catacteres
                </span>
              </label>
              <textarea
                id={'Sobre'}
                rows={5}
                className="bg-blue-10 text-blue-900 border border-blue-50 p-4 w-full rounded-xl placeholder:text-opacity-50 placeholder:text-blue-900 text-lg font-semibold"
              ></textarea>
            </div>

            <SelectComponent
              labelClassName="font-semibold text-blue-900 text-base"
              selectLabel="Idade"
              label="Idade"
              options={ageOptions.slice(1)}
              id="age"
              name="Idade"
              defaultValue={ageOptions[1].value}
              className="flex justify-between items-center bg-blue-10 text-blue-900 border border-blue-50 p-4 w-full rounded-xl placeholder:text-opacity-50 placeholder:text-blue-900 text-lg font-semibold"
            />
            <SelectComponent
              labelClassName="font-semibold text-blue-900 text-base"
              selectLabel="Porte"
              label="Porte"
              options={sizeOptions.slice(1)}
              id="size"
              name="Porte"
              defaultValue={sizeOptions[1].value}
              className="flex justify-between items-center bg-blue-10 text-blue-900 border border-blue-50 p-4 w-full rounded-xl placeholder:text-opacity-50 placeholder:text-blue-900 text-lg font-semibold"
            />
            <SelectComponent
              labelClassName="font-semibold text-blue-900 text-base"
              selectLabel="Nível de energia"
              label="Nível de energia"
              options={energyOptions.slice(1)}
              id="energy"
              name="Nível de energia"
              defaultValue={String(energyOptions[1].value)}
              className="flex justify-between items-center bg-blue-10 text-blue-900 border border-blue-50 p-4 w-full rounded-xl placeholder:text-opacity-50 placeholder:text-blue-900 text-lg font-semibold"
            />
            <SelectComponent
              labelClassName="font-semibold text-blue-900 text-base"
              selectLabel="Nível de independência"
              label="Nível de independência"
              options={independencyOptions.slice(1)}
              id="independency"
              name="Nível de independência"
              defaultValue={independencyOptions[1].value}
              className="flex justify-between items-center bg-blue-10 text-blue-900 border border-blue-50 p-4 w-full rounded-xl placeholder:text-opacity-50 placeholder:text-blue-900 text-lg font-semibold"
            />
            <SelectComponent
              labelClassName="font-semibold text-blue-900 text-base"
              selectLabel="Ambiente"
              label="Ambiente"
              options={environmentOptions}
              id="independency"
              name="Ambiente"
              defaultValue={environmentOptions[0].value}
              className="flex justify-between items-center bg-blue-10 text-blue-900 border border-blue-50 p-4 w-full rounded-xl placeholder:text-opacity-50 placeholder:text-blue-900 text-lg font-semibold"
            />
            <ImagesInput />
            <RequirementSection />
            <Button
              className="bg-yellow-500 text-blue-900 text-lg font-extrabold py-5 mt-5"
              type="submit"
            >
              Confirmar
            </Button>
          </form>
        </div>
      </section>
    </main>
  )
}
