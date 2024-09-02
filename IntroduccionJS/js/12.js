"use strict" //Correr JavaScript en Modo Estricto

// Objeto
const producto = {
    nombreProducto: "Monitoe 20 Pulgadas",
    precio: 300,
    disponible: true
}

Object.freeze(producto) //congela el objeto evitando CRUD
    // Object.seal(producto)//Congela el objeto prermite modificar propiedades

// producto.imagen = "imagen.jpg"
console.log(Object.isFrozen(producto))
console.log(producto);