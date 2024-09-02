// Arreglos o Arrays
const numeros = [10, 20, 30, 40, 50]
    // console.log(numeros);
console.table(numeros);

// const meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio")
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"]
console.table(meses)

const arreglo = ["Hola", 22, true, "si", {
    nombreProducto: "Monitoe 20 Pulgadas",
    precio: 300,
    disponible: true
}]
console.log(arreglo);

// Acceder a valores de un arreglo
console.log(numeros[4]);

// Conocer la extension de un arreglo
console.log(meses.length);

meses.forEach(function(mes) { console.log(mes); })

numeros[5] = 60
console.table(numeros);

numeros.push(100) // Agregar al ultimo
numeros.unshift(-10) // Agregar al principio
numeros.pop(10) //Elimina del ultimo
numeros.shift(-10) //Elimina del principio

meses.splice(2, 1) //Elimina un determinado elemento

// Rest Operator o Spred Operator
const newArray = [...meses, "Junio"]
    // const newArray = ["Junio", ...meses]
console.log(newArray);