import { BrowserRouter, Router, Routes, Route} from 'react-router-dom'

import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'



function App() {

  return (
    <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </main>
        <Footer />
    </div>
  )
}

export default App
