import { Button } from '@/components/Button'
import { InputForm } from '../../components/InputForm'
import { Link } from 'react-router-dom'
import { Map } from '@/components/Map'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchemaValidator = z
  .object({
    name: z
      .string({
        required_error: 'Nome é obrigatório',
      })
      .min(3, 'O nome deve conter pelo menos 3 caracteres')
      .max(100, 'O nome deve conter no máximo 100 caracteres'),
    email: z
      .string({ required_error: 'Email é obrigatório' })
      .email('Email inválido'),
    zip: z
      .string({
        required_error: 'CEP é obrigatório',
      })
      .regex(/^[0-9]{8}$/, 'CEP inválido'),
    address: z.string({
      required_error: 'Endereço é obrigatório',
    }),
    phone: z
      .string({
        required_error: 'Telefone é obrigatório',
      })
      .min(11, 'Telefone inválido'),
    password: z
      .string({
        required_error: 'Senha é obrigatório',
      })
      .min(8, 'Senha deve conter no minímo 8 caracteres')
      .max(50, 'Senha não pode conter mais de 50 caracteres'),
    confirmPassword: z
      .string({
        required_error: 'Senha é obrigatório',
      })
      .min(8, 'Senha deve conter no minímo 8 caracteres')
      .max(50, 'Senha não pode conter mais de 50 caracteres'),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: 'custom',
        message: 'As senhas não conferem',
        path: ['confirmPassword'],
      })
    }
  })

type FormData = z.infer<typeof formSchemaValidator>

export function RegisterForm() {
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
      className="flex flex-col py-10 gap-16 text-blue-900"
    >
      <h1 className="text-6xl font-bold w-full text-center ">
        Cadastre sua organização
      </h1>
      <div className="flex flex-col gap-4">
        <InputForm
          {...register('name')}
          label="Nome do responsável"
          placeholder="Fulano de tal"
          errorMessage={errors.name?.message}
        />
        <InputForm
          {...register('email')}
          label="Email"
          placeholder="nome@email.com"
          type="email"
          errorMessage={errors.email?.message}
        />
        <InputForm
          {...register('zip')}
          label="CEP"
          placeholder="13254000"
          type="text"
          errorMessage={errors.zip?.message}
        />
        <InputForm
          {...register('address')}
          label="Endereço"
          placeholder="Rua do meio"
          type="text"
          errorMessage={errors.address?.message}
        />
        <div className="border-2 border-dashed border-blue-900 rounded-2xl border-opacity-50">
          <Map
            coords={{
              latitude: '-27.445166150794126',
              longitude: '-48.40008290258068',
            }}
          />
        </div>
        <InputForm
          {...register('phone')}
          label="Whatsapp"
          placeholder="48991256373"
          type="text"
          errorMessage={errors.phone?.message}
        />
        <InputForm
          {...register('password')}
          label="Senha"
          placeholder="*********"
          type="password"
          errorMessage={errors.password?.message}
        />
        <InputForm
          {...register('confirmPassword')}
          label="Confirmar Senha"
          placeholder="*********"
          type="password"
          errorMessage={errors.confirmPassword?.message}
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
