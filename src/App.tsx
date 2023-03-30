import { Router } from './routes'
import { BrowserRouter } from 'react-router-dom'
import './styles/global.css'

export function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}
