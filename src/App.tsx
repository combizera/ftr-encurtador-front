import { ButtonPrimary } from "./components/ButtonPrimary";

export function App() {

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Olá
      </h1>
      <ButtonPrimary href="/alguma-rota">
        Acessar
      </ButtonPrimary>
      <ButtonPrimary href="#" disabled>
        Indisponível
      </ButtonPrimary>

    </>
  )
}
