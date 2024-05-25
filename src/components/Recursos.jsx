import React, { useState } from 'react';
import './App.css'; // Importa el archivo de estilos CSS

const Recursos = () => {
  const [recursos, setRecursos] = useState([]);
  const [textoEditado, setTextoEditado] = useState("");
  const [recursoEditando, setRecursoEditando] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const nuevoRecurso = event.target.recurso.value;
    setRecursos([...recursos, nuevoRecurso]);
    event.target.reset();
  };

  const eliminarRecurso = (index) => {
    const recursosActualizados = recursos.filter((_, i) => i !== index);
    setRecursos(recursosActualizados);
  };

  const editarRecurso = (index) => {
    setRecursoEditando(index);
    setTextoEditado(recursos[index]);
  };

  const actualizarRecurso = () => {
    const recursosActualizados = [...recursos];
    recursosActualizados[recursoEditando] = textoEditado;
    setRecursos(recursosActualizados);
    setTextoEditado("");
    setRecursoEditando(null);
  };

  return (
    <div className="container">
      <h1 className='main-title'>Recursos</h1>
      <form className='formulario' onSubmit={handleSubmit}>
        <textarea name="recurso" placeholder='Ingrese material' rows="4" cols="50"></textarea>
        <button type="submit">Guardar</button>
      </form>
      <br />
      <div className="recursos-container">
        {recursos.map((recurso, index) => (
          <div key={index} className="recurso-wrapper">
            {recursoEditando === index ? (
              <input
                type="text"
                value={textoEditado}
                onChange={(e) => setTextoEditado(e.target.value)}
                autoFocus
              />
            ) : (
              <>
                <div className="recurso-text">{recurso}</div>
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
    </div>
  );
};

export default Recursos;





