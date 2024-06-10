import React, { useEffect, useState } from 'react';
import { obtenerProfesores } from '../helpers/pedirDatos'; // Agrega la función para obtener profesores
import '../style/Profesores.css';

const Profesores = () => {
  const [profesores, setProfesores] = useState([]);

  useEffect(() => {
    obtenerProfesores()
      .then((data) => setProfesores(data))
      .catch((error) => console.error('Error al obtener profesores:', error));
  }, []); // Vacío para que solo se ejecute una vez al montar el componente

  return (
    <div className='container'>
    <div className="profesores-container">
      <h1 className="profesores-title">Profesores</h1>
      <div className="profesores-list">
        {profesores.map((profesor, index) => (
          <div key={index} className="profesor-item">
            <h2 className="profesor-name">{profesor.nombre}</h2>
            <p className="profesor-info">Correo: {profesor.correo}</p>
            <p className="profesor-info">Departamento: {profesor.departamento}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Profesores;
