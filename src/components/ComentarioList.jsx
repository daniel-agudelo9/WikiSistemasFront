import React from 'react';
import '../style/Comentario.css';

const ComentariosList = ({ comentarios, onDelete }) => {
  return (
    <div className="comentarios-container">
      {comentarios.map((comentario, index) => (
        <div key={index} className="comentario-wrapper">
          <pre className="comentario-text">{comentario.descripcion}</pre>
          <button onClick={() => onDelete(comentario.comentario_id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default ComentariosList;