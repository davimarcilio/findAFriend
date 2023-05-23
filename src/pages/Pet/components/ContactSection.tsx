import { WhatsappLogo } from 'phosphor-react'

export function ContactSection() {
  return (
    <section id="contact">
      <a
        className="text-white flex justify-center items-center py-5 w-full rounded-3xl bg-green-400 gap-4"
        href={`https://api.whatsapp.com/send?phone=5548991256373&text=Ol%C3%A1%20vim%20pelo%20aplicativo%20Find%20A%20Friend`}
      >
        <WhatsappLogo weight="bold" size={24} />
        <p className="text-lg font-extrabold">Entrar em contato</p>
      </a>
    </section>
  )
}
