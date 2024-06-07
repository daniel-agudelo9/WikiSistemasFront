// RecursosList.jsx

import React from 'react';

const RecursosList = ({
  recursos,
  tipoRecursoId,
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
          <p>Tipo de Recurso: {tipoRecursoId}</p>
        </div>
      ))}
    </div>
  );
};

export default RecursosList;


