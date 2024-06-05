import React, { useEffect, useState } from 'react';
import { pedirRecursosPorMateria } from '../helpers/pedirDatos';
import Modal from './Modal';
import '../style/Recursos.css'; // Importa el archivo CSS para estilos
import { useParams } from 'react-router-dom';

const Recursos = () => {
  const [recursos, setRecursos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [descripcion, setDescripcion] = useState('');
  const [tipoRecursoId, setTipoRecursoId] = useState('1');
  const { id } = useParams();

  useEffect(() => {
    pedirRecursosPorMateria(id)
      .then((data) => setRecursos(data))
      .catch((error) => console.error('Error al pedir recursos:', error));
  }, [id]);

  const handleAddRecurso = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setDescripcion('');
    setTipoRecursoId('1');
  };

  const handleSaveRecurso = () => {
    const nuevoRecurso = {
      descripcion,
      materia_id: id,
      tipo_recurso_id: tipoRecursoId,
    };

    console.log('Enviando nuevo recurso:', nuevoRecurso);

    fetch('http://localhost:5000/recursos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nuevoRecurso),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en la respuesta del servidor');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Recurso guardado:', data);
        setRecursos([...recursos, data]);
        handleCloseModal();
      })
      .catch((error) => console.error('Error al guardar el recurso:', error));
  };

  return (
    <div className="recursos-container">
      <button className="add-recurso-button" onClick={handleAddRecurso}>
        Añadir Nuevo Recurso
      </button>
      {recursos.map((recurso) => (
        <div key={recurso.recurso_id} className="recurso-item">
          <h3 className="recurso-titulo">{recurso.nombre}</h3>
          <p className="recurso-descripcion">{recurso.descripcion}</p>
        </div>
      ))}
      <Modal
        show={showModal}
        handleClose={handleCloseModal}
        handleSave={handleSaveRecurso}
        descripcion={descripcion}
        setDescripcion={setDescripcion}
        tipoRecursoId={tipoRecursoId}
        setTipoRecursoId={setTipoRecursoId}
      />
    </div>
  );
};

export default Recursos;
