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


