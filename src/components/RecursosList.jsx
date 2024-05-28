// src/components/RecursosList.js
import React from 'react';

const RecursosList = ({
  recursos,
  recursoEditando,
  textoEditado,
  setTextoEditado,
  editarRecurso,
  eliminarRecurso,
  convertUrlsToLinks
}) => {
  return (
    <div className="recursos-container">
      {recursos.map((recurso, index) => (
        <div key={index} className="recurso-wrapper">
          {recursoEditando === index ? (
            <textarea
              value={textoEditado}
              onChange={(e) => setTextoEditado(e.target.value)}
              autoFocus
              rows="4"
              cols="50"
            />
          ) : (
            <>
              <pre className="recurso-text">{convertUrlsToLinks(recurso)}</pre>
              <button onClick={() => editarRecurso(index)}>Editar</button>
              <button onClick={() => eliminarRecurso(index)}>Eliminar</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default RecursosList;
