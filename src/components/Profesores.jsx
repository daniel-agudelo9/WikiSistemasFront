import React, { useState, useEffect } from 'react';
import { obtenerProfesores, obtenerMateriasPorProfesor } from '../helpers/pedirDatos';
import '../style/Profesores.css';
import { Link } from 'react-router-dom'; // Nueva importación

const Profesores = () => {
  const [profesores, setProfesores] = useState([]);

  useEffect(() => {
    obtenerProfesores()
      .then((data) => setProfesores(data))
      .catch((error) => console.error('Error al obtener profesores:', error));
  }, []);

  return (
    <div className='container'>
      <div className="profesores-container">
        <h1 className="profesores-title">Profesores</h1>
        <div className="profesores-list">
          {profesores.map((profesor) => (
            <div key={profesor.profesor_id} className="profesor-item">
              <h2 className="profesor-name">{profesor.nombre}</h2>
              <p className="profesor-info">Correo: {profesor.correo}</p>
              <p className="profesor-info">Departamento: {profesor.departamento}</p>
              {/* Enlace a la nueva ruta */}
              <Link to={`/profesores/${profesor.profesor_id}`} className="profesor-link">Materias que dicta</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profesores;
