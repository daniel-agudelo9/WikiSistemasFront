import React from 'react'
import { Link } from 'react-router-dom'


function NavBar() {
  return (
    <div className='container'>
      <nav className='navbar'>
          <Link to="/" className='logo'><h1>WikiSistemas</h1></Link>
          <ul className='menu-horizontal'>
              <li><Link className='menu-link' to="/comentarios">Foro</Link></li>
              <li><Link className='menu-link' to="/calculadora">Calculo de Notas</Link></li>
              <li><Link className='menu-link' to="/nosotros">Nosotros</Link></li>
              <li><Link className='menu-link' to="/login">Login</Link></li>
          </ul>
      </nav>
    </div>

  )
}

export default NavBar