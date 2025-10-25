import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"


export default function Dashboard() {
  const { usuario } = useContext(UserContext)

  return (
    <div className="dashboard">
      {usuario ? (
        <>
          <h1>Bem-vindo, {usuario.nome}!</h1>

        </>
      ) : (
        <h1>Acesso negado. Faça login primeiro.</h1>
      )}
    </div>
  )
}
