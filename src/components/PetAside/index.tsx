import { ArrowLeft } from 'phosphor-react'
import { Button } from '../Button'
import logo from '@/assets/icons/logo.svg'
import { useNavigate } from 'react-router-dom'

export function PetAside() {
  const navigate = useNavigate()

  return (
    <aside className="w-24 flex flex-col items-center justify-between h-screen sticky py-8 max-md:h-fit max-md:w-full max-md:overflow-y-hidden overflow-y-auto bg-red-500">
      <img className="w-11" src={logo} alt="" />
      <Button onClick={() => navigate('/map')} className="w-min">
        <ArrowLeft className="text-blue-900" size={30} />
      </Button>
    </aside>
  )
}
