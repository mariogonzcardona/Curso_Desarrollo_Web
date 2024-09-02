// Programacion Orientada a Objetos

// Object Literal
const producto = {
    nombre: "Tablet",
    precio: 500
}

// Object Constructor
function Cliente(nombre, appelido) {
    this.nombre = nombre
    this.appelido = appelido
}
// Crear funciones que solo se utilizan en un objeto especifico.
Cliente.prototype.formatearCliente = function() {
    return `El Cliente ${this.nombre} ${this.appelido}`
}

function Producto(nombre, precio, disponible) {
    this.nombre = nombre,
        this.precio = precio,
        this.disponible = disponible
}

// Crear funciones que solo se utilizan en un objeto especifico.
Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de $${this.precio}`
}

const proucto2 = new Producto('Monitor Curvo de 56"', 800, true)
const proucto3 = new Producto('Dell Inspirion Gamin', 1600, false)
const cliente = new Cliente("Mario", "Gonzalez")


console.log(proucto2.formatearProducto());
console.log(proucto3.formatearProducto());
console.log(cliente.formatearCliente());