import { Button } from '@/components/Button'
import { InputForm } from '../../components/InputForm'
import { Link } from 'react-router-dom'
import { Map } from '@/components/Map'

export function RegisterForm() {
  return (
    <form className="flex flex-col py-10 gap-16 text-blue-900">
      <h1 className="text-6xl font-bold w-full text-center ">
        Cadastre sua organização
      </h1>
      <div className="flex flex-col gap-4">
        <InputForm label="Nome do responsável" placeholder="Fulano de tal" />
        <InputForm label="Email" placeholder="nome@email.com" type="email" />
        <InputForm label="CEP" placeholder="13254-000" type="text" />
        <InputForm label="Endereço" placeholder="Rua do meio" type="text" />
        <div className="border-2 border-dashed border-blue-900 rounded-2xl border-opacity-50">
          <Map
            coords={{
              latitude: '-27.445166150794126',
              longitude: '-48.40008290258068',
            }}
          />
        </div>
        <InputForm label="Whatsapp" placeholder="48991256373" type="text" />
        <InputForm label="Senha" placeholder="*********" type="password" />
        <InputForm
          label="Confirmar Senha"
          placeholder="*********"
          type="password"
        />
      </div>
      <div className="flex flex-col gap-4">
        <Button
          type="submit"
          className="py-5  text-white font-extrabold text-xl bg-blue-900 "
        >
          Cadastrar
        </Button>
        <Link
          to={'/login'}
          type="button"
          className="py-5 flex justify-center items-center rounded-xl text-blue-900 font-extrabold text-xl underline"
        >
          Já possui conta?
        </Link>
      </div>
    </form>
  )
}
