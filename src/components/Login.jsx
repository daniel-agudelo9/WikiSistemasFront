// Login.js
import React, { useState } from 'react';
import '../style/Login.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className='container-login'>
      <div className="login-form-container">
        {isLogin ? (
          <div>
            <h2>Iniciar Sesión</h2>
            <form>
              <div className="login-form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" required />
              </div>
              <div className="login-form-group">
                <label htmlFor="password">Contraseña:</label>
                <input type="password" id="password" required />
              </div>
              <button type="submit" className="login-button">Iniciar Sesión</button>
            </form>
            <p className="login-toggle">
              ¿No tienes una cuenta? <span onClick={toggleForm}>Regístrate</span>
            </p>
          </div>
        ) : (
          <div>
            <h2>Registrarse</h2>
            <form>
              <div className="login-form-group">
                <label htmlFor="username">Nombre de Usuario:</label>
                <input type="text" id="username" required />
              </div>
              <div className="login-form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" required />
              </div>
              <div className="login-form-group">
                <label htmlFor="password">Contraseña:</label>
                <input type="password" id="password" required />
              </div>
              <button type="submit" className="login-button">Registrarse</button>
            </form>
            <p className="login-toggle">
              ¿Ya tienes una cuenta? <span onClick={toggleForm}>Inicia Sesión</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;