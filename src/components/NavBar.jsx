import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/auth';


function NavBar() {

  const auth = useAuth();
  const user= auth.getMe();
  return (
    <div className='container'>
      <nav className='navbar'>
          <Link to="/" className='logo'><h1>WikiSistemas</h1></Link>
          <ul className='menu-horizontal'>
              { user &&
              <>
              <li><Link className='menu-link' to="/comentarios">Foro</Link></li>
              <li><Link className='menu-link' to="/profesores">Profesores</Link></li>
              </>
              }
              <li><Link className='menu-link' to="/calculadora">Cálculo de Notas</Link></li>
              <li><Link className='menu-link' to="/nosotros">Nosotros</Link></li>
              <li><Link className='menu-link' to="/login">Login</Link></li>
          </ul>
      </nav>
    </div>

  )
}

export default NavBar