import { Button } from '@/components/Button'
import { Link } from 'react-router-dom'
import { InputForm } from '../../components/InputForm'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import {
  LoginOrgFormData,
  loginFormSchemaValidator,
} from '@/validator/auth/LoginOrg'
import { OrgContext } from '@/context/OrgContext'

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginOrgFormData>({
    resolver: zodResolver(loginFormSchemaValidator),
  })

  const { onLoginOrg } = useContext(OrgContext)

  async function onSubmit(data: LoginOrgFormData) {
    onLoginOrg(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-16 text-blue-900 max-w-lg flex-1"
    >
      <h1 className="text-6xl font-bold">Boas-vindas!</h1>
      <div className="flex flex-col gap-4">
        <InputForm
          {...register('email')}
          label="Email"
          type="email"
          placeholder="nome@email.com"
          errorMessage={errors.email?.message}
        />
        <InputForm
          {...register('password')}
          type="password"
          label="Senha"
          placeholder="*********"
          errorMessage={errors.password?.message}
        />
      </div>
      <div className="flex flex-col gap-4">
        <Button
          disabled={isSubmitting}
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
