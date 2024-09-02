const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Bocinas', precio: 300 },
    { nombre: 'Laptop', precio: 800 }
]

// ForEach
// carrito.forEach(function(producto) {
//     // console.log("Una vez por cada elemento");
//     console.log(producto);
// })
// ArrowFunction
// carrito.forEach(producto => console.log(producto))

// Map
// carrito.map(producto=>console.log(producto))

// ForEach sirve para iterar no tanto para regresar un arreglo
// Mar sirve para crear un nuevo arreglo y modificarlo si asi se quiere

// carrito.forEach(producto => console.log(producto.nombre))
const arreglo1 = carrito.forEach(producto => producto.nombre)
const arreglo2 = carrito.map(producto => producto.nombre)

console.log(arreglo1);
console.log(arreglo2);

const arreglo3 = carrito.map(producto => `${producto.nombre} - ${producto.precio}`)
console.log(arreglo3);