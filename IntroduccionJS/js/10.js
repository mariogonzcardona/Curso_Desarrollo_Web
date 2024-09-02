// Objteos
const nombreProducto = "Monitos 20 Pugadas"
const precio = 300
const disponible = true

const producto = {
    nombreProducto: "Monitoe 20 Pulgadas",
    precio: 300,
    disponible: true
}
console.log(producto);
// Sintaxis de Punto
// console.log(producto.nombreProducto);
// console.log(producto.precio);
// console.log(producto.disponible);
// console.log(producto["nombreProducto"]);
// console.log(producto["precio"]);
// console.log(producto["disponible"]);

// Agregar nuevaspropiedades
producto.imagen = "imagen.jpg"
console.log(producto);
// Eliminar nuevaspropiedades
delete producto.disponible
console.log(producto);