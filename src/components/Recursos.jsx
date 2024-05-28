import React, { useState } from 'react';
import RecursosList from './RecursosList';
import Modal from './Modal';

const Recursos = () => {
  const [recursos, setRecursos] = useState([]);
  const [textoEditado, setTextoEditado] = useState("");
  const [recursoEditando, setRecursoEditando] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const nuevoRecurso = event.target.recurso.value;
    setRecursos([...recursos, nuevoRecurso]);
    event.target.reset();
    setIsModalOpen(false);
  };

  const eliminarRecurso = (index) => {
    const recursosActualizados = recursos.filter((_, i) => i !== index);
    setRecursos(recursosActualizados);
  };

  const editarRecurso = (index) => {
    setRecursoEditando(index);
    setTextoEditado(recursos[index]);
    setIsEditModalOpen(true);
  };

  const actualizarRecurso = () => {
    const recursosActualizados = [...recursos];
    recursosActualizados[recursoEditando] = textoEditado;
    setRecursos(recursosActualizados);
    setTextoEditado("");
    setRecursoEditando(null);
    setIsEditModalOpen(false);
  };

  return (
    <div>
      <h1 className='main-title'>Recursos</h1>
      <button onClick={() => setIsModalOpen(true)}>Ingresar Nuevo Material</button>
      <br />
      <RecursosList
        recursos={recursos}
        recursoEditando={recursoEditando}
        textoEditado={textoEditado}
        setTextoEditado={setTextoEditado}
        editarRecurso={editarRecurso}
        eliminarRecurso={eliminarRecurso}
        convertUrlsToLinks={convertUrlsToLinks}
      />
      {recursoEditando !== null && (
        <button onClick={actualizarRecurso}>Guardar Cambios</button>
      )}
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleSubmit={handleSubmit}
      />
      <Modal
        isModalOpen={isEditModalOpen}
        setIsModalOpen={setIsEditModalOpen}
        handleSubmit={actualizarRecurso}
        textoEditado={textoEditado}
        setTextoEditado={setTextoEditado}
      />
    </div>
  );
};

const convertUrlsToLinks = (text) => {
  const urlRegex = /https?:\/\/[^\s]+/g;
  return text.split(urlRegex).reduce((acc, part, index, array) => {
    if (index < array.length - 1) {
      const urlMatch = text.match(urlRegex)[index];
      return acc.concat(part, <a href={urlMatch} target="_blank" rel="noopener noreferrer">{urlMatch}</a>);
    }
    return acc.concat(part);
  }, []);
};

export default Recursos;




