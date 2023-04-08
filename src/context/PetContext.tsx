import { app } from '@/lib/axios'
import {
  Pet,
  PetAge,
  PetIndependence,
  PetParams,
  PetSize,
  PetType,
  ResponsePetUrl,
} from '@/models/interfaces/Pet'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { UserContext } from './UserContext'
import { AlertContext } from './AlertContext'

interface PetContextProviderProps {
  children: ReactNode
}

interface PetContextProps {
  isSubmitting: boolean
  petQuery: PetParams
  pets: Pet[]
  changePetAge: (age: PetAge) => void
  changePetIndependence: (independence: PetIndependence) => void
  changePetEnergy: (energy: number) => void
  changePetSize: (size: PetSize) => void
  changePetType: (type: PetType) => void
}

export const PetContext = createContext({} as PetContextProps)

export function PetContextProvider({ children }: PetContextProviderProps) {
  const [age, setAge] = useState('' as PetAge)
  const [independence, setIndependence] = useState('' as PetIndependence)
  const [energy, setEnergy] = useState<number>()
  const [size, setSize] = useState('' as PetSize)
  const [type, setType] = useState('' as PetType)
  const [pets, setPets] = useState<Pet[]>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { user } = useContext(UserContext)
  const { alertDispatch } = useContext(AlertContext)
  function changePetAge(age: PetAge) {
    setAge(age)
  }
  function changePetIndependence(independence: PetIndependence) {
    setIndependence(independence)
  }
  function changePetEnergy(energy: number) {
    setEnergy(energy)
  }
  function changePetSize(size: PetSize) {
    setSize(size)
  }
  function changePetType(type: PetType) {
    setType(type)
  }

  useEffect(() => {
    async function getPets() {
      try {
        setIsSubmitting(true)
        const response: ResponsePetUrl = await app.get(
          `/pets/${user.city ?? 'Sao Paulo'}`,
          {
            params: {
              age,
              independence,
              energy,
              size,
              type,
            },
          },
        )
        setPets(response.data.pets)
        setIsSubmitting(false)
      } catch (error) {
        alertDispatch({
          action: 'error',
          description: 'Não foi possível carregar os pets!',
          title: 'Falha',
        })
      } finally {
        setIsSubmitting(false)
      }
    }
    getPets()
  }, [age, independence, energy, size, type, user])

  return (
    <PetContext.Provider
      value={{
        isSubmitting,
        pets,
        petQuery: {
          age,
          energy,
          independence,
          size,
          type,
        },
        changePetAge,
        changePetEnergy,
        changePetIndependence,
        changePetSize,
        changePetType,
      }}
    >
      {children}
    </PetContext.Provider>
  )
}
