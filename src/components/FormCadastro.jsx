import './FormCadastro.css'
import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from '../contexts/UserContext'
import { cadastraUsuario } from '../service/userService'

export default function Cadastro() {

  const usuarioRef = useRef()
  const senhaRef = useRef()
  const [erro, setErro] = useState("")
  const navigate = useNavigate();

  const validaForm = async (e) => {
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

    const resposta = await cadastraUsuario(usuario, senha)

    if(resposta.sucesso) {
      navigate("/login")
    } else {
      setErro(resposta.erro)
    }
    
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={validaForm}>
        <h2>Registre-se</h2>
        <div className="form-group">
          <label htmlFor="username">Usuário</label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-input"
            placeholder="Digite um nome para seu usuario"
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
            placeholder="Digite uma senha"
            ref={senhaRef}
            required
          />
        </div>
        <button type="submit" className="login-button">
          Criar usuário
        </button>

        {erro && <p className="erro">{erro}</p>}
      </form>
    </div>
  )
}