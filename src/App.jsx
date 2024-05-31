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
      </Routes>
    </div>
  );
}

export default App;


