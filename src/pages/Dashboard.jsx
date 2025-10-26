import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"
import { useEffect, useState } from "react"
import { pegaMensagem } from "../service/userService"

export default function Dashboard() {
  const { usuario } = useContext(UserContext)
  const [mensagem, setMensagem] = useState("")

  useEffect(() => {
    async function carregaMensagem() {
      const resposta = await pegaMensagem();
      setMensagem(resposta.texto)
    }

    carregaMensagem()
  }, [])

  return (
    <div className="dashboard">
      {usuario ? (
        <>
          <h1>Bem-vindo, {usuario.nome}!</h1>


          <p>{mensagem}</p>
        </>
      ) : (
        <h1>Acesso negado. Faça login primeiro.</h1>
      )}
    </div>
  )
}
