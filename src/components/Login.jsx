// Login.jsx
import React, { useState } from 'react';
import '../style/Login.css';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { getUsers, addUser, findUser } from './../helpers/userHelpers';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState('');

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setMessage('');
  };

  const handleLogin = (email, password) => {
    const user = findUser(email);
    if (user && user.Contraseña === password) {
      setMessage('Inicio de sesión exitoso');
    } else {
      setMessage('Correo o contraseña incorrectos');
    }
  };

  const handleRegister = (name, email, password) => {
    if (findUser(email)) {
      setMessage('El correo ya está registrado');
    } else {
      addUser({ Nombre: name, Correo: email, Contraseña: password });
      setMessage('Registro exitoso');
      toggleForm();
    }
  };

  return (
    <div className='container-login'>
      <div className="login-form-container">
        {isLogin ? (
          <LoginForm onLogin={handleLogin} toggleForm={toggleForm} />
        ) : (
          <RegisterForm onRegister={handleRegister} toggleForm={toggleForm} />
        )}
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default Login;

