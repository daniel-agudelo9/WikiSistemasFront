// pedirDatos.js

import { baseUrl } from "../utils/constans";

export const pedirMaterias = (id) => {
  return fetch(baseUrl + "/materias/semestre/" + id)
    .then(response => response.json())
    .then(data => { return data });
};

export const pedirMateria = (id) => {
  return fetch(baseUrl + "/materias/" + id)
    .then(response => response.json())
    .then(data => { return data });
};

export const pedirComentarios = () => {
  return fetch(baseUrl + "/comentarios")
    .then(response => response.json())
    .then(data => { return data });
};

export const pedirRecursosPorMateria = async (materiaId) => {
  try {
    const response = await fetch(`${baseUrl}/recursos/${materiaId}`);
    if (!response.ok) {
      throw new Error('No se pudieron obtener los recursos');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener recursos:', error.message);
    return [];
  }
};

export const obtenerProfesores = async () => {
  try {
    const respuesta = await fetch(baseUrl + "/profesores");
    if (!respuesta.ok) {
      throw new Error('Error al obtener profesores');
    }
    return await respuesta.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const obtenerMateriasPorProfesor = async (profesorId) => {
  try {
    const respuesta = await fetch(baseUrl + `/profesores/${profesorId}/materias`);
    if (!respuesta.ok) {
      throw new Error('Error al obtener materias del profesor');
    }
    return await respuesta.json();
  } catch (error) {
    throw new Error(error.message);
  }
};


export const pedirTareasPorUsuario = async (usuarioId) => {
  try {
    const response = await fetch(`${baseUrl}/tasks/user/${usuarioId}`);
    if (!response.ok) {
      throw new Error('No se pudieron obtener las tareas');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener tareas:', error.message);
    return [];
  }
};

export const crearTarea = async (tarea) => {
  try {
    const response = await fetch(`${baseUrl}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(tarea)
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al crear tarea:', error.message);
    return null;
  }
};

export const actualizarTarea = async (tareaId, tarea) => {
  try {
    const response = await fetch(`${baseUrl}/tasks/${tareaId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(tarea)
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al actualizar tarea:', error.message);
    return null;
  }
};

export const eliminarTarea = async (tareaId, usuarioId) => {
  try {
    const response = await fetch(`${baseUrl}/tasks/${tareaId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ usuario_id: usuarioId }) // Enviar usuario_id en el cuerpo de la solicitud
    });
    if (!response.ok) {
      throw new Error('No se pudo eliminar la tarea');
    }
    return true;
  } catch (error) {
    console.error('Error al eliminar tarea:', error.message);
    return false;
  }
};




