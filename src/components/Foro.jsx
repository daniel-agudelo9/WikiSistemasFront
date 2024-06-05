import React, { useEffect, useState } from 'react';
import { pedirComentarios } from '../helpers/pedirDatos';
import ComentariosList from './ComentarioList';
import ModalComentario from './ModalComentario';
import '../style/Comentario.css';

const Foro = () => {
  const [comentarios, setComentarios] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    pedirComentarios().then((res) => {
      setComentarios(res);
    }).catch(error => {
      console.error('Error al cargar comentarios:', error);
    });
  }, []);

  const agregarComentario = (descripcion) => {
    fetch("http://localhost:8080/api/comentarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ descripcion, usuario_id: null }) // Enviando usuario_id como null
    })
    .then(response => response.json())
    .then(newComentario => {
      setComentarios([...comentarios, newComentario]);
    })
    .catch(error => {
      console.error('Error al agregar comentario:', error);
    });
  };

  const eliminarComentario = (comentarioId) => {
    fetch(`http://localhost:8080/api/comentarios/${comentarioId}`, {
      method: "DELETE"
    })
    .then(response => {
      if (response.ok) {
        setComentarios(comentarios.filter(comentario => comentario.comentario_id !== comentarioId));
      } else {
        throw new Error('No se pudo eliminar el comentario');
      }
    })
    .catch(error => {
      console.error('Error al eliminar comentario:', error);
    });
  };

  return (
    <div className='container'>
      <h1 className='main-title'>Foro</h1>
      <button className="agregar-comentario" onClick={() => setIsModalOpen(true)}>Agregar Comentario</button>
      <ComentariosList comentarios={comentarios} onDelete={eliminarComentario} />
      <ModalComentario
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleSubmit={agregarComentario}
      />
    </div>
  );
};

export default Foro;
