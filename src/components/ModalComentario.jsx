import React, { useState } from 'react';
import '../style/Comentario.css';

const ModalComentario = ({ isModalOpen, setIsModalOpen, handleSubmit }) => {
  const [descripcion, setDescripcion] = useState("");

  const handleGuardar = (event) => {
    event.preventDefault();
    handleSubmit(descripcion);
    setDescripcion("");
    setIsModalOpen(false);
  };

  return (
    isModalOpen && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={() => setIsModalOpen(false)}>&times;</span>
          <form className='formulario' onSubmit={handleGuardar}>
            <textarea
              name="descripcion"
              placeholder='Ingrese su comentario'
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
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

export default ModalComentario;



