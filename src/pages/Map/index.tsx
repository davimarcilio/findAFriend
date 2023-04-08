import { Aside } from '@/components/Aside'
import { Card } from '@/components/Card'
import { SelectComponent } from '@/components/Select'
import { petOptions } from '@/utils/petsOptions'
import { useContext } from 'react'
import { PetContext } from '@/context/PetContext'

export function Map() {
  // function handleFilterByPetType() {
  //   // TO DO
  // }

  const { pets } = useContext(PetContext)

  return (
    <div className="flex">
      <Aside />

      <div className="flex-1 bg-red-100 pt-40 px-8 pb-12 h-screen overflow-y-scroll home">
        <div className="flex items-center justify-between mb-11 ">
          <p className="text-xl leading-8 font-normal text-blue-900">
            Encontre <span className="font-extrabold">324 amigos</span> na sua
            cidade
          </p>
          <div className="relative">
            <SelectComponent
              name="pets"
              selectLabel="Selecione os tipos"
              id="pets"
              options={petOptions}
              defaultValue={petOptions[0].value}
              className="w-52 h-12 flex items-center justify-between py-4 px-5 border-none rounded-2xl bg-red-150 outline-none appearance-none font-Nunito text-base text-blue-900"
            />
          </div>
        </div>
        <div className="grid grid-cols-1.5 gap-8">
          {!!pets &&
            pets.map((pet) => (
              <Card
                key={pet.id}
                path={pet.photo_url}
                type={pet.type}
                name={pet.name}
              />
            ))}

          {/* <Card path={dog} type="cat" name="Tobia" />
          <Card path={dog} type="dog" name="Alfredo" />
          <Card path={dog} type="cat" name="Tobia" />
          <Card path={dog} type="dog" name="Alfredo" />
          <Card path={dog} type="cat" name="Tobia" />
          <Card path={dog} type="dog" name="Alfredo" />
          <Card path={dog} type="cat" name="Tobia" /> */}
        </div>
      </div>
    </div>
  )
}
