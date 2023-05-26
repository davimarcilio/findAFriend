import { AppCard } from '../components/AppCard'
import { RegisterForm } from './components/RegisterForm'

export function Register() {
  return (
    <main className="w-screen h-screen py-20 flex justify-center items-center overflow-x-hidden gap-32 home">
      <AppCard />
      <div className="h-full w-full max-w-lg home">
        <RegisterForm />
      </div>
    </main>
  )
}
