import { PetAside } from '@/components/PetAside'
import { useContext, useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { PetContext } from '@/context/PetContext'
import {
  Circle,
  CornersIn,
  CornersOut,
  Lightning,
  WhatsappLogo,
} from 'phosphor-react'
import { PetIndependence, PetSize } from '@/models/interfaces/Pet'
import { PropsSection } from './components/PropsSection'
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'
import Logo from '@/assets/icons/logo.svg'
export function Pet() {
  const [currentSelectedImage, setCurrentSelectedImage] = useState('')
  const {
    orgCoords,
    currentPet,
    currentPetGallery,
    getUniquePet,
    getPetGallery,
  } = useContext(PetContext)
  const { id } = useParams()
  const location = useLocation()

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API, // ,
    // ...otherOptions
  })

  console.log(import.meta.env.VITE_SERVER_URL)

  useEffect(() => {
    getUniquePet(id)
    getPetGallery(id).then((url) => setCurrentSelectedImage(url))
  }, [location, id])

  function formatIndependenceString(independence: PetIndependence) {
    switch (independence) {
      case 'low':
        return 'Ambiente pequeno'
      case 'high':
        return 'Ambiente médio'
      default:
        return 'Ambiente amplo'
    }
  }

  function formatIndependenceIcon(independence: PetIndependence) {
    switch (independence) {
      case 'low':
        return <Circle className="text-blue-900" size={20} />
      case 'high':
        return <CornersIn className="text-blue-900" size={20} />
      default:
        return <CornersOut className="text-blue-900" size={20} />
    }
  }

  function formatSize(size: PetSize) {
    switch (size) {
      case 'small':
        return 0
      case 'medium':
        return 1
      default:
        return 2
    }
  }

  function formatSizeString(size: PetSize) {
    switch (size) {
      case 'small':
        return 'Pequenino'
      case 'medium':
        return 'Médio'
      default:
        return 'Grande'
    }
  }

  // async function getPetCoordinates() {
  //   await
  // }
  if (currentPet) {
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
                <PropsSection id="Energy">
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
                </PropsSection>
                <PropsSection id="Independence">
                  <div className="flex justify-start items-center">
                    {formatIndependenceIcon(currentPet.independence)}
                  </div>
                  <p className="text-blue-900 text-lg font-semibold">
                    {formatIndependenceString(currentPet.independence)}
                  </p>
                </PropsSection>

                <PropsSection id="Size">
                  <div className="flex justify-start items-center">
                    {Array.from({ length: 3 }, (_, index) => index).map(
                      (Size) => (
                        <Circle
                          weight={'fill'}
                          opacity={
                            formatSize(currentPet.size) >= Size ? 1 : 0.3
                          }
                          className="text-blue-900"
                          size={20}
                          key={Size}
                        />
                      ),
                    )}
                  </div>
                  <p className="text-blue-900 text-lg font-semibold">
                    {formatSizeString(currentPet.size)}
                  </p>
                </PropsSection>
              </section>
              <section className="bg-blue-900 flex flex-col justify-center items-center rounded-2xl mt-20">
                {/* <LoadScript googleMapsApiKey="AIzaSyAjvX-rDyrpW--Ix9OnRSq6wcGss-nmKMg"> */}
                {isLoaded && orgCoords.latitude ? (
                  <>
                    <GoogleMap
                      mapContainerStyle={{
                        width: '100%',
                        height: 225,
                        borderRadius: '1rem',
                      }}
                      center={{
                        lat: Number(orgCoords.latitude),
                        lng: Number(orgCoords.longitude),
                      }}
                      zoom={15}
                      options={{
                        streetViewControl: false,
                        panControl: false,
                        fullscreenControl: false,
                        zoomControl: false,
                        mapTypeControl: false,
                      }}
                    >
                      {orgCoords.latitude && (
                        <Marker
                          position={{
                            lat: Number(orgCoords.latitude),
                            lng: Number(orgCoords.longitude),
                          }}
                        />
                      )}
                    </GoogleMap>
                    <button className="font-bold text-lg text-yellow-500 my-5 cursor-pointer">
                      Ver rotas no Google Maps
                    </button>
                  </>
                ) : (
                  <h1>Carregando</h1>
                )}
              </section>
              {currentPet.org && (
                <>
                  <hr className="my-10" />
                  <section className="flex flex-col">
                    <div className="flex gap-4">
                      <img
                        className="bg-orange-600 max-w-[64] max-h-16 rounded-2xl p-4"
                        src={Logo}
                        alt=""
                      />
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-col text-blue-900">
                          <h1 className="font-bold text-3xl">
                            {currentPet.org.nome}
                          </h1>
                          <p className="font-semibold text-base">
                            {currentPet.org.address}, {currentPet.city}
                          </p>
                        </div>
                        <span className="flex gap-2 text-blue-900 justify-center items-center text-lg bg-blue-900 bg-opacity-10 py-3 rounded-xl">
                          <WhatsappLogo weight="fill" size={24} />
                          {currentPet.org.whatsappNumber}
                        </span>
                      </div>
                    </div>
                  </section>
                  <hr className="my-10" />
                </>
              )}
            </div>
          </section>
        </div>
      </main>
    )
  }
}
