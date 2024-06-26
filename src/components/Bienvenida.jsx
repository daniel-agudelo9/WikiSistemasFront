import React from 'react';
import '../style/Bienvenida.css';
import { useAuth } from '../context/auth';

const Bienvenida = () => {
  const auth=useAuth();
  const user=auth.getMe();
  return (
    <div className='containerBienvenida'>
    <div className='bienvenida-container'>
      <div className='overlay'>
        <h1 className="welcome-message">¡Bienvenido {user?.nombre} a WikiSistemas!</h1>
        <p className="welcome-text">
          Tu fuente confiable de recursos educativos para Ingeniería de Sistemas. Explora, aprende y colabora con tus compañeros de la Universidad de Antioquia.
        </p>
      </div>
    </div>
    </div>
  )
}

export default Bienvenida;


