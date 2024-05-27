import React, { useState } from 'react';

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
                <pre className="recurso-text">{recurso}</pre>
                <button onClick={() => editarRecurso(index)}>Editar</button>
                <button onClick={() => eliminarRecurso(index)}>Eliminar</button>
              </>
            )}
          </div>
        ))}
      </div>
      {recursoEditando !== null && (
        <button onClick={actualizarRecurso}>Guardar Cambios</button>
      )}
      
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsModalOpen(false)}>&times;</span>
            <form className='formulario' onSubmit={handleSubmit}>
              <textarea name="recurso" placeholder='Ingrese material' rows="4" cols="50"></textarea>
              <button type="submit">Guardar</button>
            </form>
          </div>
        </div>
      )}

      {/* Modal de edición */}
      {isEditModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsEditModalOpen(false)}>&times;</span>
            <form className='formulario' onSubmit={actualizarRecurso}>
              <textarea name="recurso" value={textoEditado} onChange={(e) => setTextoEditado(e.target.value)} placeholder='Editar material' rows="4" cols="50"></textarea>
              <button type="submit">Guardar</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recursos;


