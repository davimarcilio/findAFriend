
# Find A Friend

A plataforma foi desenvolvida para conectar pessoas interessadas em adotar um cão de estimação com abrigos de animais e resgates locais.

A aplicação oferece recursos intuitivos e amigáveis, permitindo que os usuários encontrem rapidamente cães disponíveis para adoção em sua área. Os abrigos e resgates podem cadastrar os animais disponíveis, fornecendo informações detalhadas sobre cada cão, incluindo fotos, idade, raça, temperamento e necessidades especiais, se houver.

Os usuários interessados em adotar podem pesquisar com base em critérios específicos, como tamanho, idade, nível de energia ou independência e visualizar os perfis dos cães correspondentes.


## WEB

https://github.com/davimarcilio/davimarcilio/assets/104699555/f84d929c-3a8b-41f4-acf6-dd1586cbfd85

## Mobile

https://github.com/davimarcilio/davimarcilio/assets/104699555/4d5052e5-465f-40ca-a01c-857a3a4e0c71
## Stack utilizada

**Front-end:** 
- 🚀 Desenvolvido com [React(Vite)](https://vitejs.dev/)
- ✅ Validação com [ZOD](https://zod.dev/)
- 🎨 Estilização com [TailwindCSS](https://tailwindcss.com/) Componentes com [Radix-UI](https://www.radix-ui.com/docs/primitives/overview/introduction)
- 📝 Validação de Formulário com [React-Hook-Form](https://react-hook-form.com/)
- ℹ️ Icones com [Phosphor-React](https://phosphoricons.com/)
- 📨 Comunicação com Server Side utilizando [Axios](https://axios-http.com/ptbr/docs/intro)
- 🎲 Padronização de código com [Eslint](https://eslint.org/)


**Back-end:** 
- 🚀 Desenvolvido com [Node](https://nodejs.org/en)
- ✅ Validação com [ZOD](https://zod.dev/)
- 🪧 Rotas com [Fastify](https://www.fastify.io/)
- 📨 Comunicação com APIs utilizando [Axios](https://axios-http.com/ptbr/docs/intro)
- 🎲 Banco de Dados com [Prisma ORM](https://www.prisma.io/)
- 🎲 Padronização de código com [Eslint](https://eslint.org/)

## Rodando localmente

- Requisitos
  - Tenha o [Server Side](https://github.com/davimarcilio/findAFriendApi) rodado localmente

Clone o projeto

```bash
  git clone git@github.com:davimarcilio/findAFriend.git
```

Entre no diretório do projeto

```bash
  cd findAFriend
```

Instale as dependências

```bash
  npm install
```

Inicie a aplicação

```bash
  npm run dev
```


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env.local

`VITE_SERVER_URL`

`VITE_GOOGLE_MAPS_API`

Para conseguir a chave de api do google maps siga o [tutorial](https://maplink.global/blog/como-obter-chave-api-google-maps/)


## Funcionalidades

- Cadastro de organização
- Login de organização
- Consulta de PETs
- Integrado com google maps dinamicamente
- Extremamente validado com zod e react-hook-form
- etc...


## Licença

[MIT](https://choosealicense.com/licenses/mit/)

