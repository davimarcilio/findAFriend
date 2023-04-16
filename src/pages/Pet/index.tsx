import { PetAside } from '@/components/PetAside'
import { useContext, useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { PetContext } from '@/context/PetContext'
import { Lightning } from 'phosphor-react'

export function Pet() {
  const [currentSelectedImage, setCurrentSelectedImage] = useState('')
  const { currentPet, currentPetGallery, getUniquePet, getPetGallery } =
    useContext(PetContext)
  const { id } = useParams()
  const location = useLocation()

  useEffect(() => {
    getUniquePet(id)
    getPetGallery(id).then((url) => setCurrentSelectedImage(url))
  }, [location, id])

  return (
    <main className="flex">
      <PetAside />
      <div className="flex-1 flex flex-col items-center gap-10 bg-red-100 px-8 py-10 h-screen max-md:overflow-y-hidden overflow-y-auto home">
        <p className="text-blue-100 text-lg font-semibold">Seu novo amigo</p>
        <section className="flex flex-col max-w-3xl rounded-t-2xl w-full bg-white">
          <img
            className="rounded-t-2xl max-h-80 w-full object-cover"
            src={currentSelectedImage}
            alt={currentPet.name}
          />
          <div className="flex flex-col w-full px-16 py-8">
            {currentPetGallery.length > 0 && (
              <RadioGroup.Root
                defaultValue={currentPetGallery[0].photo_url}
                onValueChange={(value) => {
                  if (value) {
                    setCurrentSelectedImage(value)
                  } else {
                    setCurrentSelectedImage(currentPet.photo_url)
                  }
                }}
                className="flex gap-4 focus:shadow-none"
              >
                {currentPetGallery.map((image) => (
                  <RadioGroup.Item
                    asChild
                    key={image.id}
                    value={image.photo_url}
                  >
                    <img
                      className="rounded-2xl hover:brightness-75 cursor-pointer w-20 h-20 object-cover data-[state=checked]:ring-4 data-[state=checked]:ring-blue-900 data-[state=unchecked]:opacity-50"
                      src={image.photo_url}
                      alt={image.image}
                    />
                  </RadioGroup.Item>
                ))}
              </RadioGroup.Root>
            )}
            <section
              className="flex flex-col gap-6 mt-16"
              id="title&description"
            >
              <h1 className="text-blue-900 text-6xl font-extrabold">
                {currentPet.name}
              </h1>
              <p className="text-blue-900 font-semibold text-lg">
                {currentPet.description}
              </p>
            </section>
            <section
              className="mt-11 flex justify-between items-center"
              id="stats"
            >
              <div
                id="Energy"
                className="flex flex-col justify-center items-start gap-1 border border-blue-900 border-opacity-20 w-fit rounded-3xl p-6"
              >
                <div className="flex justify-start items-center">
                  {Array.from({ length: 5 }, (_, index) => index).map(
                    (energy) => (
                      <Lightning
                        weight={
                          energy >= currentPet.energy ? 'fill' : 'regular'
                        }
                        opacity={energy >= currentPet.energy ? 0.3 : 1}
                        className="text-blue-900"
                        size={20}
                        key={energy}
                      />
                    ),
                  )}
                </div>
                <p className="text-blue-900 text-lg font-semibold">
                  {currentPet.energy <= 2
                    ? 'Pouca energia'
                    : currentPet.energy > 2 && currentPet.energy < 4
                    ? 'Normal'
                    : 'Muita energia'}
                </p>
              </div>
              <div
                id="Independence"
                className="flex flex-col justify-center items-start gap-1 border border-blue-900 border-opacity-20 w-fit rounded-3xl p-6"
              >
                <div className="flex justify-start items-center">
                  {Array.from({ length: 5 }, (_, index) => index).map(
                    (energy) => (
                      <Lightning
                        weight={
                          energy >= currentPet.energy ? 'fill' : 'regular'
                        }
                        opacity={energy >= currentPet.energy ? 0.3 : 1}
                        className="text-blue-900"
                        size={20}
                        key={energy}
                      />
                    ),
                  )}
                </div>
                <p className="text-blue-900 text-lg font-semibold">
                  Muita energia
                </p>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  )
}
