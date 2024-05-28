// RegisterForm.jsx
import React, { useState } from 'react';

const RegisterForm = ({ onRegister, toggleForm }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onRegister(name, email, password);
  };

  return (
    <div>
      <h2>Registrarse</h2>
      <form onSubmit={handleSubmit}>
        <div className="login-form-group">
          <label htmlFor="username">Nombre de Usuario:</label>
          <input type="text" id="username" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="login-form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="login-form-group">
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="login-button">Registrarse</button>
      </form>
      <p className="login-toggle">
        ¿Ya tienes una cuenta? <span onClick={toggleForm}>Inicia Sesión</span>
      </p>
    </div>
  );
};

export default RegisterForm;

