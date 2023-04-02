import { Router } from './routes'
import { BrowserRouter } from 'react-router-dom'
import './styles/global.css'
import { LocationContextProvider } from './context/LocationContext'

export function App() {
  return (
    <LocationContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </LocationContextProvider>
  )
}
