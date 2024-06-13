import React, { useState, useEffect } from 'react';
import '../style/Task.css';

const ModalTask = ({ isModalOpen, setIsModalOpen, handleSubmit, taskParaEditar }) => {
  const [descripcion, setDescripcion] = useState("");
  const [fecha, setFecha] = useState("");

  useEffect(() => {
    if (taskParaEditar) {
      setDescripcion(taskParaEditar.descripcion);
      setFecha(taskParaEditar.fecha.split('T')[0]); // Formatear fecha para el input de fecha
    } else {
      setDescripcion("");
      setFecha("");
    }
  }, [taskParaEditar]);

  const handleGuardar = (event) => {
    event.preventDefault();
    handleSubmit({ descripcion, fecha });
    setDescripcion("");
    setFecha("");
    setIsModalOpen(false);
  };

  return (
    isModalOpen && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={() => setIsModalOpen(false)}>&times;</span>
          <form className='formulario' onSubmit={handleGuardar}>
            <input
              type="text"
              name="descripcion"
              placeholder="Descripción de la tarea"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
            <input
              type="date"
              name="fecha"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
            <button type="submit">Guardar</button>
          </form>
        </div>
      </div>
    )
  );
};

export default ModalTask;
