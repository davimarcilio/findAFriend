// import { Aside } from '~/Aside'
// import { Card } from '~/Card'

import chevron from '@/assets/icons/chevron-bottom-blue.svg'
// import dog from '@/assets/images/dog.png'

// import {
//   Container,
//   Content,
//   SelectWrapper,
//   Header,
//   HeaderSelect,
//   Display,
// } from './styles'

export function Map() {
  // function handleFilterByPetType() {
  //   // TO DO
  // }

  return (
    <div className="flex">
      {/* <Aside /> */}

      <div className="flex-1 bg-red-100 pt-40 px-8 pb-12 h-screen overflow-y-scroll">
        <div className="flex items-center justify-between mb-11 ">
          <p className="text-xl leading-8 font-normal text-blue-900">
            Encontre <span className="font-extrabold">324 amigos</span> na sua
            cidade
          </p>
          <div className="relative">
            <select
              className="w-52 h-12 py-4 px-5 border-none rounded-2xl bg-red-150 outline-none appearance-none font-Nunito text-base text-blue-900"
              name="size"
              id="size"
            >
              <option value="all">Gatos e Cachorros</option>
              <option value="cats">Gatos</option>
              <option value="dogs">Cachorros</option>
            </select>
            <img
              className="absolute right-4 top-1/2 translate-y-1/2"
              src={chevron}
              alt=""
            />
          </div>
        </div>
        <div className="grid grid-cols-1.5 gap-8">
          {/* <Card path={dog} type="dog" name="Alfredo" />
          <Card path={dog} type="cat" name="Tobia" />
          <Card path={dog} type="dog" name="Alfredo" />
          <Card path={dog} type="cat" name="Tobia" />
          <Card path={dog} type="dog" name="Alfredo" />
          <Card path={dog} type="cat" name="Tobia" />
          <Card path={dog} type="dog" name="Alfredo" />
          <Card path={dog} type="cat" name="Tobia" /> */}
        </div>
      </div>
    </div>
  )
}
