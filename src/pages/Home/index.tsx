import dogsHome from '../../assets/images/dogsHome.png'
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
    <main className="w-screen h-screen bg-red-500">
      <section className="flex justify-center items-center max-w-7xl ">
        <h1 className="text-7xl font-extrabold leading-3">
          Leve a felicidade para o seu lar
        </h1>
        <img src={dogsHome} alt="" />
      </section>
    </main>
  )
}
