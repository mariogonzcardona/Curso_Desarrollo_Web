function sumar(n1 = 0, n2 = 0) {
    return n1 + n2
}
const res = sumar(15, 35)
console.log(res);


let total = 0

function agregarCarrito(precio) {
    return total += precio
}

function calcularImpuesto(total) {
    return 1.16 * total
}

total = agregarCarrito(200)
total = agregarCarrito(300)
total = agregarCarrito(500)
console.log(total);

const totalPagar = calcularImpuesto(total)
console.log(totalPagar);

console.log(`El total a pagar con impuestos es de: $${totalPagar}`);