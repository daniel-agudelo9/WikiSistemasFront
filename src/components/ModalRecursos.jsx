import React from 'react';
import '../style/Modal.css';

const ModalRecursos = ({ show, handleClose, handleSave, descripcion, setDescripcion, tipoRecursoId, setTipoRecursoId }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>Añadir Nuevo Recurso</h2>
        <label>
          Descripción:
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            rows="4"
          />
        </label>
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