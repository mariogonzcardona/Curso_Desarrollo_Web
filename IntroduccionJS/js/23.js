// Switch
const metodoPago = "efectivo"
switch (metodoPago) {
    case 'tarjeta':
        console.log("Pagaste con tarjeta");
        break;
    case 'cheque, revisaremos los fondos':
        console.log("Pagaste con cheque, revisaremos los fondos");
        break;
    default:
        console.log("Aun no has pagado");
        break;
}