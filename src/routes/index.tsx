import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Map } from '../pages/Map'
import { Pet } from '@/pages/Pet'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<Map />} />
      <Route path="/pet/:id" element={<Pet />} />
    </Routes>
  )
}
