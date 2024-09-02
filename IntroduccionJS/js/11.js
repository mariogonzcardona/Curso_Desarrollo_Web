const producto = {
        nombreProducto: "Monitoe 20 Pulgadas",
        precio: 300,
        disponible: true
    }
    // Forma anterior
    // const precioProducto = producto.precio
    // const nombreProducto = producto.nombreProducto
    // console.log(precioProducto);
    // console.log(nombreProducto);

// Descructuring
// const { precio } = producto
// const { nombreProducto } = producto
// const { disponible } = producto
const { nombreProducto, precio, disponible } = producto
console.log(nombreProducto);
console.log(precio);
console.log(disponible);