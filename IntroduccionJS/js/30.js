// Promise

const usuarioAutenticado = new Promise((resolve, reject) => {
    const auth = true

    if (auth) {
        resolve("Usuario Autenticado") // El promise se cumple 
    } else {
        reject("No se pudo iniciar sesion") //El promise no se cumple
    }
})
usuarioAutenticado.then(result => console.log(result)).catch(error => console.log(error))
    // console.log(usuarioAutenticado);

// En los promise existen 3 valores.
// Pending: No se ha cumplido pero tampoco se ha rechazado.
// Fulfilled: Ya se cumplio.
// Rejected: Se ha rechazado o no se pudo complir.