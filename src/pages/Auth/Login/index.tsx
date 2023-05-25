import { Eye, EyeSlash } from 'phosphor-react'
import { AppCard } from '../components/AppCard'
import { useState } from 'react'
import { Button } from '@/components/Button'
import { Link } from 'react-router-dom'

export function Login() {
  const [isPasswordShow, setIsPasswordShow] = useState(false)

  function handleChangePassword() {
    setIsPasswordShow((state) => !state)
  }

  return (
    <main className="w-screen h-screen py-20 flex justify-center items-center gap-32">
      <AppCard />
      <form className="flex flex-col gap-16 text-blue-900 max-w-lg flex-1">
        <h1 className="text-6xl font-bold">Boas-vindas!</h1>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Email</p>
            <input
              className="bg-blue-10 border border-blue-50 p-4 rounded-xl placeholder:text-blue-900 text-lg font-semibold"
              type="text"
              placeholder="nome@email.com"
            />
          </div>
          <div className="flex flex-col gap-2 select-none">
            <p className="font-semibold">Senha</p>
            <div className="w-full h-min relative">
              <input
                className="bg-blue-10 border border-blue-50 p-4 w-full rounded-xl placeholder:text-blue-900 text-lg font-semibold"
                type={isPasswordShow ? 'password' : 'text'}
                placeholder={isPasswordShow ? '*************' : 'Senha'}
              />
              {isPasswordShow ? (
                <EyeSlash
                  className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer"
                  size={24}
                  onClick={handleChangePassword}
                />
              ) : (
                <Eye
                  className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer"
                  size={24}
                  onClick={handleChangePassword}
                />
              )}
            </div>
          </div>
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
    </main>
  )
}
