import { app } from '@/lib/axios'
import { LoginOrgResponse } from '@/models/interfaces/Auth'
import { LoginOrgFormData } from '@/validator/auth/LoginOrg'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { AlertContext } from './AlertContext'
import { isAxiosError } from 'axios'
import { Org } from '@/models/interfaces/Org'
import { RegisterOrgFormData } from '@/validator/auth/RegisterOrg'
import { ResponseError } from '@/models/interfaces/ApiResponse'
import { useNavigate } from 'react-router-dom'

interface OrgContextValues {
  token: string
  org: Org
  onLoginOrg: (body: LoginOrgFormData) => void
  onRegisterOrg: (body: RegisterOrgFormData) => void
}

export const OrgContext = createContext({} as OrgContextValues)

interface OrgContextProviderProps {
  children: ReactNode
}

export function OrgContextProvider({ children }: OrgContextProviderProps) {
  const { alertDispatch } = useContext(AlertContext)

  const [token, setToken] = useState('')

  const [org, setOrg] = useState({} as Org)

  const navigate = useNavigate()

  useEffect(() => {
    const tokenOnLocalStorage = localStorage.getItem('authorization')

    if (tokenOnLocalStorage && !token) {
      setToken(tokenOnLocalStorage)
      navigate('/')
    }

    if (token && token !== tokenOnLocalStorage) {
      localStorage.setItem('authorization', token)
    }
  }, [token])

  // async function validateToken(token: string) {
  //   try {
  //     const { data } = await app.patch<ResponseValidateToken>(
  //       '/auth/refresh-token',
  //       {
  //         token,
  //       },
  //     )
  //     localStorage.setItem('authorization', data.token)
  //     setToken(data.token)
  //     navigate('/map')
  //   } catch (error) {
  //     console.error('Revalidate Error', error)
  //     if (isAxiosError<ResponseError>(error)) {
  //       localStorage.removeItem('authorization')
  //       setToken('')
  //     }
  //   }
  // }

  async function onLoginOrg(body: LoginOrgFormData) {
    try {
      const { data } = await app.post<LoginOrgResponse>('/auth/sessions', body)
      setToken(data.token)
      setOrg(data.org)
      alertDispatch({
        action: 'success',
        description: 'Com sucesso',
        title: 'Login',
      })
      navigate('/')
    } catch (error) {
      console.error('Login', error)
      if (isAxiosError<ResponseError>(error)) {
        alertDispatch({
          action: 'error',
          description: error.response.data.error,
          title: 'Falha',
        })
      }
    }
  }

  async function onRegisterOrg(body: RegisterOrgFormData) {
    try {
      await app.post('/orgs', {
        whatsappNumber: `+55${body.phone}`,
        cep: body.zip,
        ...body,
      })
      alertDispatch({
        action: 'success',
        description: 'Com sucesso',
        title: 'Registro',
      })
      navigate('/login')
    } catch (error) {
      console.error('Register', error)

      if (isAxiosError<ResponseError>(error)) {
        alertDispatch({
          action: 'error',
          description: error.response.data.error,
          title: 'Erro',
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
        onRegisterOrg,
      }}
    >
      {children}
    </OrgContext.Provider>
  )
}
