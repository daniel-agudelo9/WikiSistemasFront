import React, { useEffect, useState } from 'react';
import { pedirRecursosPorMateria } from '../helpers/pedirDatos';
import ModalRecursos from './ModalRecursos';
import '../style/Recursos.css';
import { useParams } from 'react-router-dom';

const Recursos = () => {
  const [recursos, setRecursos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [descripcion, setDescripcion] = useState('');
  const [tipoRecursoId, setTipoRecursoId] = useState('1');
  const [recursoId, setRecursoId] = useState(null); // Estado para manejar el id del recurso en edición
  const { id } = useParams();

  useEffect(() => {
    pedirRecursosPorMateria(id)
      .then((data) => setRecursos(data))
      .catch((error) => console.error('Error al pedir recursos:', error));
  }, [descripcion]);

  const handleAddRecurso = () => {
    setShowModal(true);
    setRecursoId(null); // Limpiar el id del recurso en edición
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setDescripcion('');
    setTipoRecursoId('1');
    setRecursoId(null); // Limpiar el id del recurso en edición
  };

  const handleSaveRecurso = () => {
    const nuevoRecurso = {
      descripcion,
      materia_id: id,
      tipo_recurso_id: tipoRecursoId,
    };

    const url = recursoId ? `http://localhost:8080/recursos/${recursoId}` : 'http://localhost:8080/recursos';
    const method = recursoId ? 'PUT' : 'POST';

    console.log('Enviando recurso:', nuevoRecurso);

    fetch(url, {
      method,
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
        if (recursoId) {
          // Actualizar la lista de recursos
          setRecursos(recursos.map((rec) => (rec.recurso_id === recursoId ? data : rec)));
        } else {
          setRecursos([...recursos, data]);
        }
        handleCloseModal();
      })
      .catch((error) => console.error('Error al guardar el recurso:', error));
  };

  const handleEditRecurso = (recurso) => {
    setDescripcion(recurso.descripcion);
    setTipoRecursoId(recurso.tipo_recurso_id.toString());
    setRecursoId(recurso.recurso_id); // Cambio aquí
    setShowModal(true);
  };

  const handleDeleteRecurso = (recursoId) => {
    fetch(`http://localhost:8080/recursos/${recursoId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en la respuesta del servidor');
        }
        // Actualizar la lista de recursos
        setRecursos(recursos.filter((rec) => rec.recurso_id !== recursoId));
      })
      .catch((error) => console.error('Error al eliminar el recurso:', error));
  };

  return (
    <div className="recursos-container">
      <button className="add-recurso-button" onClick={handleAddRecurso}>
        Añadir Nuevo Recurso
      </button>
      {recursos.map((recurso, index) => (
        <div key={index} className="recurso-item">
          <h3 className="recurso-titulo">{recurso.nombre}</h3>
          <p className="recurso-descripcion">{recurso.descripcion}</p>
          <p className="recurso-tipo">Tipo: {recurso.tipo_recurso_id}</p>
          <button className="edit-button" onClick={() => handleEditRecurso(recurso)}>Editar</button>
          <button className="delete-button" onClick={() => handleDeleteRecurso(recurso.recurso_id)}>Eliminar</button>
        </div>
      ))}
      <ModalRecursos
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
