import { Router } from './routes'
import { BrowserRouter } from 'react-router-dom'
import './styles/global.css'
import { LocationContextProvider } from './context/LocationContext'
import { AlertContextProvider } from './context/AlertContext'

export function App() {
  return (
    <AlertContextProvider>
      <LocationContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </LocationContextProvider>
    </AlertContextProvider>
  )
}
