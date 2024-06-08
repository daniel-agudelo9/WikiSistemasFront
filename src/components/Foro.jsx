import React, { useEffect, useState } from 'react';
import { pedirComentarios } from '../helpers/pedirDatos';
import ComentariosList from './ComentarioList';
import ModalComentario from './ModalComentario';
import '../style/Comentario.css';
import { useAuth } from '../context/auth';

const Foro = () => {
  const [comentarios, setComentarios] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [comentarioParaEditar, setComentarioParaEditar] = useState(null);
  const [loadComentarios, setLoadComentarios] = useState(true);
  const auth = useAuth();
  const user= auth.getMe();

  useEffect(() => {
    if(!loadComentarios){
      return 
    }
    pedirComentarios().then((res) => {
      setComentarios(res);
    }).catch(error => {
      console.error('Error al cargar comentarios:', error);
    });
    setLoadComentarios(false);
  }, [loadComentarios]);

  const agregarComentario = (descripcion) => {
    fetch("http://localhost:8080/comentarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ descripcion, usuario_id: user.usuario_id }) // Enviando usuario_id como null
    })
    .then(response => response.json())
    .then(newComentario => {
      // setComentarios([...comentarios, newComentario]);
      setLoadComentarios(true);
    })
    .catch(error => {
      console.error('Error al agregar comentario:', error);
    });
  };

  const eliminarComentario = (comentarioId) => {
    fetch(`http://localhost:8080/comentarios/${comentarioId}`, {
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

  const editarComentario = (id, descripcion) => {
    fetch(`http://localhost:8080/comentarios/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ descripcion, usuario_id: user.usuario_id })
    })
    .then(response => response.json())
    .then(updatedComentario => {
      // setComentarios(comentarios.map(comentario => comentario.comentario_id === id ? updatedComentario : comentario));
      setComentarioParaEditar(null);
      setLoadComentarios(true);
    })
    .catch(error => {
      console.error('Error al editar comentario:', error);
    });
  };

  const handleEditarClick = (comentario) => {
    setComentarioParaEditar(comentario);
    setIsModalOpen(true);
  };

  return (
    <div className='container'>
      <h1 className='main-title'>Foro</h1>
      { user &&
      <button className="agregar-comentario" onClick={() => setIsModalOpen(true)}>Agregar Comentario</button>
      }
      <ComentariosList comentarios={comentarios} onDelete={eliminarComentario} onEdit={handleEditarClick} />
      <ModalComentario
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleSubmit={comentarioParaEditar ? (descripcion) => editarComentario(comentarioParaEditar.comentario_id, descripcion) : agregarComentario}
        comentarioParaEditar={comentarioParaEditar}
      />
    </div>
  );
};

export default Foro;
