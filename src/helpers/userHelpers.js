// userHelpers.js


export const getUsers = () => {
    // return usuarios;
};

export const findUser = (email) => {
    // return usuarios.find(user => user.Correo === email);
};

export const addUser = (newUser) => {
    return fetch("http://localhost:8080/usuarios", {
        method: "POST",
        body: JSON.stringify({ nombre:newUser.Nombre,correo:newUser.Correo,contrasena:newUser.Contrasena }), // Enviando usuario_id como null
        headers: {
          "Content-Type": "application/json"
        },
      })
      .then(response => response.json())
      .then(newUsuario => {
        return newUsuario;
      })
      .catch(error => {
        console.error('Error al agregar usuario:', error);
      });
};

export const login = (user)=>{
  return fetch("http://localhost:8080/usuarios/login", {
    method: "POST",
    body: JSON.stringify({ correo:user.correo,contrasena:user.contrasena }), // Enviando usuario_id como null
    headers: {
      "Content-Type": "application/json"
    },
  })
  .then(response => response.json())
  .then(newUsuario => {
    return newUsuario;
  })
  .catch(error => {
    console.error('Error al agregar usuario:', error);
  });
}
