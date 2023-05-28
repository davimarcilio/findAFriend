import { Button } from '@/components/Button'
import { Link } from 'react-router-dom'
import { InputForm } from '../../components/InputForm'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchemaValidator = z.object({
  email: z
    .string({ required_error: 'Email é obrigatório' })
    .email('Email inválido'),

  password: z
    .string({
      required_error: 'Senha é obrigatório',
    })
    .min(8, 'Senha deve conter no minímo 8 caracteres')
    .max(50, 'Senha não pode conter mais de 50 caracteres'),
})

type FormData = z.infer<typeof formSchemaValidator>

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchemaValidator),
  })

  function onSubmit(data: FormData) {
    console.log(data)
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
