// LoginForm.jsx
import React, { useState } from 'react';

const LoginForm = ({ onLogin, toggleForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(email, password);
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="login-form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="login-form-group">
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="login-button">Iniciar Sesión</button>
      </form>
      <p className="login-toggle">
        ¿No tienes una cuenta? <span onClick={toggleForm}>Regístrate</span>
      </p>
    </div>
  );
};

export default LoginForm;

