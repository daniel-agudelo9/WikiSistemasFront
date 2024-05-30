import data from "../data/nivel/data.json";
import data2 from "../data/nivel/data2.json";
import data3 from "../data/nivel/data3.json";
import data4 from "../data/nivel/data4.json";
import data5 from "../data/nivel/data5.json";
import data6 from "../data/nivel/data6.json";
import data7 from "../data/nivel/data7.json";
import data8 from "../data/nivel/data8.json";
import data9 from "../data/nivel/data9.json";
import data10 from "../data/nivel/data10.json";
import { baseUrl } from "../utils/constans";

const datasets = [data, data2, data3, data4, data5, data6, data7, data8,data9,data10];

export const pedirDatos = (nivel) => {
    return new Promise((resolve, reject) => { //fetch link peticion del back localhost:8080/materias/...
        setTimeout(() => { //convertir lo que me manda el fetch al json 
            if (nivel >= 1 && nivel <= 10) { //
                resolve(datasets[nivel - 1]);
            } else {
                reject(new Error("Hola mundo"));
            }
        }, 0);
    });
}


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

export const pedirItemPorId = (id, nivel) => {
    return new Promise((resolve, reject) => {
        if (nivel >= 1 && nivel <= 10) {
            const dataset = datasets[nivel - 1];
            const item = dataset.find((el) => el.id === id);
            if (item) {
                resolve(item);
            } else {
                reject(new Error("No se encontró el producto"));
            }
        } else {
            reject(new Error("Nivel no válido"));
        }
    });
}

