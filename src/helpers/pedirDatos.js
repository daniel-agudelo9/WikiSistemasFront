import { baseUrl } from "../utils/constans";


export const pedirMaterias=(id)=>{
    return fetch(baseUrl+"/materias/semestre/"+id)
        .then(response => response.json())
        .then(data => {return data})
}

export const pedirMateria=(id)=>{
    return fetch(baseUrl+"/materias/"+id)
        .then(response => response.json())
        .then(data => {return data})
}


export const pedirComentarios = () => {
    return fetch(baseUrl + "/comentarios")
      .then(response => response.json())
      .then(data => { return data });
  }

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
  
  


