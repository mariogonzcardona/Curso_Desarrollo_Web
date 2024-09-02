// For, Forloop, dowhile, while

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log(`El numero: ${i} es par`);
//     }
// }

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

// for (let i = 0; i < carrito.length; i++) {
//     console.log(carrito[i]);
//     console.log(`El nombre es: ${carrito[i].nombre} y el precio es: ${carrito[i].precio}`);
// }

// While
// let i = 0
// while (i < carrito.length) {
//     console.log(carrito[i]);
//     console.log(`El nombre es: ${carrito[i].nombre} y el precio es: ${carrito[i].precio}`);
//     i++
// }

// Do While
let i = 0
do {
    console.log(i);
    i++
} while (i < 10)