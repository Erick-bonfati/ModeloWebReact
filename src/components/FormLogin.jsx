import './FormLogin.css'
import { useRef, useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from '../contexts/UserContext'

export default function Login() {

  const usuarioRef = useRef()
  const senhaRef = useRef()
  const [erro, setErro] = useState("")
  const navigate = useNavigate();
  const { login } = useContext(UserContext)

  const validaForm = (e) => {
    e.preventDefault() // Impede enviar comportamento padrão do navegador

    const usuario = usuarioRef.current.value.trim()
    const senha = senhaRef.current.value.trim()


    if(!usuario || !senha) {
      setErro("Preencha todos os campos")
      return;
    }

    if(senha.length < 4) {
      setErro("A senha precisa ter mais de 4 caracteres")
      return;
    }

    if(usuario !== "admin" || senha !== "1234") {
      setErro("Usuário ou senha incorretos.")
    } 

    login(usuario)
    navigate("/dashboard")
    
  }

  function ValidaLogin() {
    return "oi";
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={validaForm}>
        <h2>Entrar</h2>
        <div className="form-group">
          <label htmlFor="username">Usuário</label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-input"
            placeholder="Digite seu usuário"
            ref={usuarioRef}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-input"
            placeholder="Digite sua senha"
            ref={senhaRef}
            required
          />
        </div>
        <button type="submit" className="login-button">
          Entrar
        </button>

        {erro && <p className="erro">{erro}</p>}
      </form>
    </div>
  )
}