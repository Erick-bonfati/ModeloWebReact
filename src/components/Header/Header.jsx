import './Header.css'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"

export default function Header() {
  const { usuario, logout } = useContext(UserContext)
  const navigate = useNavigate();

  function sair() {
    logout()
    navigate("/")
  }

  return (
    <header className="header">
      <h2>My Application</h2>
      <nav>
        <ul className="nav-links">
          <li className="li-links"><Link to="/">Home</Link></li>
          <li className="li-links"><Link to="/dashboard">Dashboard</Link></li>
          {!usuario ? (
            <>
              <li className="li-links"><Link to="/login">Login</Link></li>
            </>
          ) : (
            <li className="li-links" onClick={sair}><Link to="/logout">Sair</Link></li>
          )} 
           

        </ul>
      </nav>  
    </header>
  )
}