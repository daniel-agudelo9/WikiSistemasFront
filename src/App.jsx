import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import HamburguesaMenu from './components/HamburguesaMenu';
import Nosotros from './components/Nosotros';
import Bienvenida from './components/Bienvenida';
import Niveles from './components/Niveles';
import ItemDetailContainer from './components/ItemDetailContainer';
import Login from "./components/Login";
import Calculadora from './components/Calculadora';
import Foro from './components/Foro';
import { AuthProvider } from './context/auth';
import Profesores from './components/Profesores';
import MateriasPorProfesor from './components/MateriasPorProfesor';
import MisMaterias from './components/MisMaterias'
import Task from './components/Task'

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

function Main() {
  const [nivel, setNivel] = useState(1);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const match = path.match(/^\/Niveles\/(\d+)$/);
    if (match) {
      const nivelNumero = parseInt(match[1], 10);
      if (!isNaN(nivelNumero)) {
        setNivel(nivelNumero);
      }
    }
  }, [location]);

  return (
    <div className='app-background'>
      <AuthProvider>
        <NavBar />
        <HamburguesaMenu />
        <Routes>
          <Route path='/' element={<Bienvenida />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/calculadora' element={<Calculadora/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/Niveles/:nivel' element={<Niveles />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/comentarios' element={<Foro/>} />
          <Route path='/profesores' element={<Profesores/>} />
          <Route path='/profesores/:profesorId' element={<MateriasPorProfesor />} />
          <Route path='/task' element={<Task/>} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;


