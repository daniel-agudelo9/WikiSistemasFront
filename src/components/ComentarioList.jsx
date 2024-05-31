import React from 'react';
import '../style/Comentario.css';

const ComentariosList = ({ comentarios }) => {
  return (
    <div className="comentarios-container">
      {comentarios.map((comentario, index) => (
        <div key={index} className="comentario-wrapper">
          <pre className="comentario-text">{comentario.descripcion}</pre>
        </div>
      ))}
    </div>
  );
};

export default ComentariosList;


