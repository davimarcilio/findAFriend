import dogsHome from '../../assets/images/dogsHome.png'
import Logo from '../../assets/icons/logo.svg'
import * as Select from '@radix-ui/react-select'
import * as Label from '@radix-ui/react-label'
import { CaretDown, MagnifyingGlass } from 'phosphor-react'
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
      <div className="max-w-7xl py-10 h-full flex justify-between items-center flex-col">
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
          <form className="flex justify-center items-center gap-2">
            <Label.Root htmlFor="UF">Busque um amigo:</Label.Root>
            <Select.Root name="UF">
              <Select.Trigger
                id="UF"
                className="flex justify-center items-center border gap-1 py-4 px-2 rounded-2xl"
              >
                <Select.Value placeholder="UF" />
                <Select.Icon asChild>
                  <CaretDown size={16} weight="bold" />
                </Select.Icon>
              </Select.Trigger>
              <Select.Portal>
                <Select.Content>
                  <Select.Item value="SC">SC</Select.Item>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
            <Select.Root name="CITY">
              <Select.Trigger
                id="CITY"
                className="flex justify-center gap-2 items-center py-4 bg-red-700 px-10 rounded-2xl"
              >
                <Select.Value placeholder="Cidade" />
                <Select.Icon asChild>
                  <CaretDown size={16} weight="bold" />
                </Select.Icon>
              </Select.Trigger>
              <Select.Portal>
                <Select.Content>
                  <Select.Item value="Criciúma">Criciúma</Select.Item>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
            <button className="bg-yellow-500 p-3 rounded-2xl " type="submit">
              <MagnifyingGlass
                weight="bold"
                className="text-blue-900"
                size={26}
              />
            </button>
          </form>
        </section>
      </div>
    </main>
  )
}
