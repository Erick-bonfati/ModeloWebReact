import { createContext, useState } from "react"

export const UserContext = createContext()

export default function UserProvider({ children }) {
  const [usuario, setUsuario] = useState(null)

  const login = (nome) => {
    setUsuario({ nome })
  }

  const logout = () => {
    setUsuario(null)
  }

  return (
    <UserContext.Provider value={{ usuario, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}
