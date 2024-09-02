// Clases
class Producto {
    constructor(nombre, precio, disponible) {
        this.nombre = nombre
        this.precio = precio
        this.disponible = disponible
    }
    formatearProducto() {
        return `El Cliente ${this.nombre} ${this.appelido}`
    }
}

const producto = new Producto("Dell Inspirion", 27000, true)
console.log(producto);

class Libro extends Producto {
    constructor(nombre, precio, disponible, isbn) {
        super(nombre, precio, disponible)
        this.isbn = isbn
    }
    formatearProducto() {
        return `El Libro es: ${this.nombre}, y su precio es: ${this.precio}, esta disponible: ${this.disponible}, y su ISBN es: ${this.isbn}`
    }
}

const libro = new Libro("Python", 1200, true, '123456789')
console.log(libro.formatearProducto());