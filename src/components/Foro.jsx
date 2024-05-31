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
    });
  }, []);

  const agregarComentario = (descripcion) => {
    fetch("http://localhost:5000/api/comentarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ descripcion, usuario_id: 5 }) // Asumiendo usuario_id=1
    })
    .then(response => response.json())
    .then(newComentario => {
      setComentarios([...comentarios, newComentario]);
    })
    .catch(error => {
      console.error('Error al agregar comentario:', error);
    });
  };

  return (
    <div className='container'>
      <h1 className='main-title'>Foro</h1>
      <button className="agregar-comentario" onClick={() => setIsModalOpen(true)}>Agregar Comentario</button>
      <ComentariosList comentarios={comentarios} />
      <ModalComentario
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleSubmit={agregarComentario}
      />
    </div>
  );
};

export default Foro;




