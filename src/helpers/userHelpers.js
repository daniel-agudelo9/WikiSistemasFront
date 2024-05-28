// userHelpers.js
import usuarios from '../data/login/Usuarios.json';

export const getUsers = () => {
    return usuarios;
};

export const findUser = (email) => {
    return usuarios.find(user => user.Correo === email);
};

export const addUser = (newUser) => {
    usuarios.push(newUser);
    // Aquí debería guardarse el archivo JSON actualizado
    // Pero en un entorno de navegador, la escritura en el sistema de archivos no es posible.
    // Normalmente, se haría una solicitud a un backend para actualizar el archivo JSON.
};
