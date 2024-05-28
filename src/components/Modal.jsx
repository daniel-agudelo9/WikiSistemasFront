// src/components/Modal.js
import React from 'react';

const Modal = ({ isModalOpen, setIsModalOpen, handleSubmit, textoEditado, setTextoEditado }) => {
  return (
    isModalOpen && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={() => setIsModalOpen(false)}>&times;</span>
          <form className='formulario' onSubmit={handleSubmit}>
            <textarea
              name="recurso"
              placeholder='Ingrese material'
              value={textoEditado}
              onChange={(e) => setTextoEditado(e.target.value)}
              rows="4"
              cols="50"
            ></textarea>
            <button type="submit">Guardar</button>
          </form>
        </div>
      </div>
    )
  );
};

export default Modal;
