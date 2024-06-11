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

const obtenerProfesores = async () => {
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

const obtenerMateriasPorProfesor = async (profesorId) => {
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

export { obtenerProfesores, obtenerMateriasPorProfesor };
