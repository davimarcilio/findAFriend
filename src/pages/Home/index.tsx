import dogsHome from '../../assets/images/dogsHome.png'
import Logo from '../../assets/icons/logo.svg'
import { Form } from './components/Form'

export function Home() {
  // function handleSearchPets() {
  //   // TO DO
  // }

  // function handleChangeState() {
  //   // TO DO
  // }

  // function handleChangeCity() {
  //   // TO DO
  // }

  return (
    <main className="w-screen h-screen bg-red-500 flex justify-center items-center">
      <div className="max-w-7xl max-h-[572px] py-10 h-full flex justify-between items-center flex-col">
        <header className="flex self-start justify-center items-center gap-3">
          <img className="h-14" src={Logo} alt="" />
          <h1 className="font-bold text-xl">FindAFriend</h1>
        </header>
        <section className="flex justify-between items-center w-full">
          <h1 className="font-extrabold text-7xl leading-[90%] self-end max-w-lg">
            Leve a felicidade para o seu lar
          </h1>
          <img className="max-w-xl" src={dogsHome} alt="Dogs" />
        </section>
        <section className="flex justify-between items-center w-full">
          <h2 className="text-2xl font-semibold max-w-sm">
            Encontre o animal de estimação ideal para seu estilo de vida!
          </h2>
          <Form />
        </section>
      </div>
    </main>
  )
}
