// ModalRecursos.jsx
import React, { useState, useEffect } from 'react';
import '../style/Modal.css';

const ModalRecursos = ({ show, handleClose, handleSave, descripcion, setDescripcion, tipoRecursoId, setTipoRecursoId }) => {
  const [modalHeight, setModalHeight] = useState("80vh"); // Altura inicial del modal

  useEffect(() => {
    // Calcular la altura del modal según la ventana del navegador
    const windowHeight = window.innerHeight;
    const modalHeightCalc = windowHeight * 0.8; // El modal ocupará el 80% de la altura de la ventana
    setModalHeight(`${modalHeightCalc}px`);
  }, []);

  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal-content modal-recursos" style={{ height: modalHeight }}> {/* Cambio de nombre de clase y altura dinámica */}
        <h2>Añadir Nuevo Recurso</h2>
        <textarea
          placeholder='Ingrese el recurso...'
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          rows="15" // Ajustar la cantidad de filas según sea necesario
          style={{ width: '100%', marginBottom: '1rem' }} // Ajustar el ancho y margen inferior
        />
        <label>
          Tipo de Recurso:
          <select value={tipoRecursoId} onChange={(e) => setTipoRecursoId(e.target.value)}>
            <option value="1">Pdf</option>
            <option value="2">Texto</option>
            <option value="3">Video</option>
            <option value="4">Imagen</option>
            <option value="5">Audio</option>
            <option value="6">Otros</option>
          </select>
        </label>
        <div className="modal-buttons">
          <button onClick={handleSave}>Guardar</button>
          <button onClick={handleClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default ModalRecursos;
