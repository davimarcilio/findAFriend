import { ReactNode, createContext, useState } from 'react'

interface UserContextProviderProps {
  children: ReactNode
}

interface UserProps {
  state: string
  city: string
}

interface UserContextProps {
  user: UserProps
  registerUserLocation: ({ city, state }: UserProps) => void
}

export const UserContext = createContext({} as UserContextProps)

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [user, setUser] = useState({} as UserProps)

  function registerUserLocation({ city, state }: UserProps) {
    setUser({ city, state })
  }

  return (
    <UserContext.Provider
      value={{
        user,
        registerUserLocation,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
