const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"]

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

// forEach
meses.forEach(function(mes) {
    if (mes == "Marzo") {
        console.log("Marzo si existe");
    }
});

// Oncludes
const resultado = meses.includes("Marzo")
console.log(resultado);

// Some ideal para arreglo de objetos
resultado2 = carrito.some(function(producto) {
    return producto.nombre === "Celular"
})
console.log(resultado2);

// Arrow functions
resultado3 = carrito.some(producto => producto.nombre === "Laptop")
console.log(resultado3);

// Reduce
resultado4 = carrito.reduce(function(total, producto) {
    return total + producto.precio
}, 0)
console.log(resultado4);

resultado4 = carrito.reduce((total, producto) => total + producto.precio, 0)
console.log(resultado4);

// Filter
resultado5 = carrito.filter(producto => producto.precio > 400)
console.log(resultado5);