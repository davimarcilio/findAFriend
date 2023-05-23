import { PetContext } from '@/context/PetContext'
import { useContext } from 'react'
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api'
import Marker from '@/assets/icons/marker.svg'

export function MapSection() {
  const { orgCoords } = useContext(PetContext)

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API,
  })

  return (
    <section className="bg-blue-900 flex flex-col justify-center items-center rounded-2xl mt-20">
      {orgCoords.latitude && isLoaded ? (
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
            {orgCoords.longitude && (
              <MarkerF
                position={{
                  lat: Number(orgCoords.latitude),
                  lng: Number(orgCoords.longitude),
                }}
                icon={Marker}
              />
            )}
          </GoogleMap>
          <button className="font-bold text-lg text-yellow-500 my-5 cursor-pointer">
            Ver rotas no Google Maps
          </button>
        </>
      ) : (
        <h1 className="text-xl font-bold text-yellow-500">Carregando</h1>
      )}
    </section>
  )
}
