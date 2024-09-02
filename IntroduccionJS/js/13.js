// Objeto
const producto = {
        nombreProducto: "Monitoe 20 Pulgadas",
        precio: 300,
        disponible: true
    }
    // Objeto
const medidas = {
    peso: "1kg",
    medida: "1m",
}

//Rest Operator
const newObj = {...producto, ...medidas }
console.log(newObj);