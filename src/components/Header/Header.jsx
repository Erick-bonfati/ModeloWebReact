import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
      <h2>My Application</h2>
      <nav>
        <ul className="nav-links">
          <li className="li-links"><Link to="/">Home</Link></li>
          <li className="li-links"><Link to="/login">Login</Link></li>
          <li className="li-links"><Link to="/dashboard">Dashboard</Link></li>
        </ul>
      </nav>  
    </header>
  )
}