import { Router } from './routes'
import { BrowserRouter } from 'react-router-dom'
import './styles/global.css'
import { LocationContextProvider } from './context/LocationContext'
import { AlertContextProvider } from './context/AlertContext'
import { UserContextProvider } from './context/UserContext'

export function App() {
  return (
    <AlertContextProvider>
      <LocationContextProvider>
        <UserContextProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </UserContextProvider>
      </LocationContextProvider>
    </AlertContextProvider>
  )
}
