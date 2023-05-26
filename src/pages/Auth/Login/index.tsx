import { AppCard } from '../components/AppCard'
import { LoginForm } from './components/LoginForm'

export function Login() {
  return (
    <main className="w-screen h-screen py-20 flex justify-center items-center gap-32">
      <AppCard />
      <LoginForm />
    </main>
  )
}
