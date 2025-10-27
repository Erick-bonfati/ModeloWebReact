import { createContext, useState, useEffect } from "react"

export const UserContext = createContext()

export default function UserProvider({ children }) {
  const [usuario, setUsuario] = useState(null)

  // Condição para armazenar login de usuário no localStorage por 7 dias
  useEffect(() => {
    const usuarioSalvo = localStorage.getItem("usuario")
    if(usuarioSalvo) {
      const {nome, dataExpira } = JSON.parse(usuarioSalvo)
      if(Date.now() < dataExpira) {
        setUsuario(nome)
      } else {
        localStorage.removeItem("usuario")
      }
    }
  })

  const login = (nome) => {
    setUsuario({ nome })
    localStorage.setItem("usuario", JSON.stringify({
      nome,
      dataExpira: Date.now() + 7 * 24 * 60 * 60 * 1000 // 7 DIAS
    }))
  }

  const logout = () => {
    setUsuario(null)
    localStorage.removeItem("usuario")
  }

  return (
    <UserContext.Provider value={{ usuario, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}
