import Logo from '@/assets/icons/logo.svg'
import { Button } from '@/components/Button'
import { SignOut } from 'phosphor-react'

export function OrgCard() {
  return (
    <section className="flex justify-between w-full py-8 px-20 bg-blue-900 rounded-3xl">
      <img
        className="bg-orange-600 max-w-[64] max-h-16 rounded-2xl p-4"
        src={Logo}
        alt=""
      />
      <div className="flex flex-col justify-center items-start font-Nunito">
        <h1 className="text-3xl font-bold">Seu Cãopanheiro</h1>
        <p className="font-semibold text-base">
          Rua do meio, 123 , Boa viagem, Recife - PE
        </p>
      </div>
      <Button className="bg-blue-800 px-5">
        <SignOut weight="bold" size={24} />
      </Button>
    </section>
  )
}
