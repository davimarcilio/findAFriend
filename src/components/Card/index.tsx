import logo from '@/assets/icons/logo.svg'

// import { Container, Name, PetImage, TypeIcon } from './styles'

type CardProps = {
  path: string
  name: string
  type: 'dog' | 'cat'
}

export function Card({ path, name, type }: CardProps) {
  return (
    <div className="max-w-[280px] cursor-pointer w-full flex items-center group flex-col p-1 rounded-3xl bg-white overflow-hidden hover:bg-blue-900">
      <div className="group-hover:bg-blue-900 object-cover">
        <img className="w-full" src={path} alt={`Foto de ${name}`} />
      </div>
      <div className="group-hover:bg-blue-900">
        <div className="w-12 h-12 flex justify-center items-center my-0 mx-auto -mt-7 p-1 rounded-lg overflow-hidden bg-white">
          <div
            className="w-full h-full flex justify-center items-center border-inherit"
            style={{ backgroundColor: type === 'cat' ? '#F4D35E' : '#F15156' }}
          >
            <img className="w-4" src={logo} alt="" />
          </div>
        </div>
        <p className="text-lg group-hover:text-white leading-5 font-bold mt-2 mx-auto mb-4 text-blue-900">
          {name}
        </p>
      </div>
    </div>
  )
}
