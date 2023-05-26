import { Button } from '@/components/Button'
import { Link } from 'react-router-dom'
import { InputForm } from '../../components/InputForm'

export function LoginForm() {
  return (
    <form className="flex flex-col gap-16 text-blue-900 max-w-lg flex-1">
      <h1 className="text-6xl font-bold">Boas-vindas!</h1>
      <div className="flex flex-col gap-4">
        <InputForm label="Email" placeholder="nome@email.com" />
        <InputForm type="password" label="Senha" placeholder="*********" />
      </div>
      <div className="flex flex-col gap-4">
        <Button
          type="submit"
          className="py-5  text-white font-extrabold text-xl bg-blue-900 "
        >
          Login
        </Button>
        <Link
          to={'/register'}
          type="button"
          className="py-5 flex justify-center items-center rounded-xl text-blue-900 font-extrabold text-xl bg-opacity-5 bg-blue-900"
        >
          Cadastrar minha organização
        </Link>
      </div>
    </form>
  )
}
