import React from 'react';
import '../style/Comentario.css';
import { useAuth } from '../context/auth';

const ComentariosList = ({ comentarios, onDelete, onEdit }) => {
  const auth=useAuth();
  const user=auth.getMe();
  return (
    <div className="comentarios-container">
      {comentarios.map((comentario, index) => (
        <div key={index} className="comentario-wrapper">
          <pre className="comentario-text">{comentario.descripcion}</pre>
          <p> Hecho por: {comentario.Usuario.nombre} </p>
          {(user && user.usuario_id===comentario.usuario_id || user.rol_id==3) &&
            <>
              <button onClick={() => onDelete(comentario.comentario_id)}>Eliminar</button>
              <button onClick={() => onEdit(comentario)}>Editar</button>
            </>
          }
        </div>
      ))}
    </div>
  );
};

export default ComentariosList;
