import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { obtenerMateriasPorProfesor } from '../helpers/pedirDatos';
import {  pedirMaterias } from './../helpers/pedirDatos';
import { Link } from 'react-router-dom'

const MateriasPorProfesor = () => {
  const [materias, setMaterias] = useState([]);
  const { profesorId } = useParams();

  useEffect(() => {
    obtenerMateriasPorProfesor(profesorId)
      .then((data) => setMaterias(data))
      .catch((error) => console.error('Error al obtener materias:', error));
  }, [profesorId]);


  return (
    <div className='container'>
    <div className="materias-container">
      <h2 className="materias-title">Materias dictadas por el profesor seleccionado</h2>
      <br/>
      <div className="materias-list">
        {materias.map((materia) => (
          <div key={materia.materia_id} className="producto">
            <div>
            <h3 className="materia-name">{materia.nombre}</h3>
            <p className="materia-info">Código: {materia.codigo}</p>
            <p className="materia-info">Créditos: {materia.creditos}</p>
            <Link className='ver-mas' to={`/item/${materia.materia_id}`}>Ver mas</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default MateriasPorProfesor;
