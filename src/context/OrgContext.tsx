import { app } from '@/lib/axios'
import { LoginOrgResponse } from '@/models/interfaces/Auth'
import { LoginOrgFormData } from '@/validator/auth/LoginOrg'
import { ReactNode, createContext, useContext, useState } from 'react'
import { AlertContext } from './AlertContext'
import { isAxiosError } from 'axios'
import { Org } from '@/models/interfaces/Org'

interface OrgContextValues {
  token: string
  org: Org
  onLoginOrg: (body: LoginOrgFormData) => void
}

export const OrgContext = createContext({} as OrgContextValues)

interface OrgContextProviderProps {
  children: ReactNode
}

export function OrgContextProvider({ children }: OrgContextProviderProps) {
  const { alertDispatch } = useContext(AlertContext)

  const [token, setToken] = useState('')

  const [org, setOrg] = useState({} as Org)

  async function onLoginOrg(body: LoginOrgFormData) {
    try {
      const { data } = await app.post<LoginOrgResponse>('/auth/sessions', body)
      setToken(data.token)
      setOrg(data.org)
    } catch (error) {
      console.log(error)
      if (isAxiosError(error)) {
        alertDispatch({
          action: 'error',
          description: error.response.data.error,
          title: 'Falha',
        })
      }
    }
  }
  return (
    <OrgContext.Provider
      value={{
        org,
        token,
        onLoginOrg,
      }}
    >
      {children}
    </OrgContext.Provider>
  )
}
