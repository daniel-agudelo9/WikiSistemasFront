// Login.jsx
import React, { useState } from 'react';
import '../style/Login.css';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { getUsers, addUser, findUser, login } from './../helpers/userHelpers';
import { useAuth } from '../context/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState('');
  const auth = useAuth();
  const navigate=useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setMessage('');
  };

  const handleLogin = async (email, password) => {
    const response = await login({correo:email,contrasena:password});
    console.log(response)

    if (response.status==200) {
      setMessage('Inicio de sesión exitoso');
      auth.saveUser(response.usuario)
    } else {
      setMessage('Correo o contraseña incorrectos');
    }
  };

  const handleRegister = async (name, email, password) => {
    const response = await addUser({ Nombre: name, Correo: email, Contrasena: password }); 
    if (response.status==200) {
      setMessage('Inicio de sesión exitoso');
      auth.saveUser(response.usuario)
    } else {
      setMessage('Error: Correo ya esta registrado');
    }

    // setMessage('El correo ya está registrado');
    // setMessage('Registro exitoso');
    // toggleForm();
  };

  return (
    <div>
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
    </div>
  );
};

export default Login;

