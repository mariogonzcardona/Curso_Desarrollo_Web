// Async / Await

function descargarNuevosClientes() {
    return new Promise(resolve => {
        console.log("Descargando Clientes... espere...");
        setTimeout(() => console.log("Los Clientes fueron Descargados"), 5000)
    })
}

function descargarUltimosPedidos() {
    return new Promise(resolve => {
        console.log("Descargando Pedidos... espere...");
        setTimeout(() => console.log("Los Pedidos fueron Descargados"), 3000)
    })
}

async function app() {
    try {
        // const clientes = await descargarNuevosClientes()
        // const pedidos = await descargarUltimosPedidos()
        // console.log(clientes);
        // console.log(pedidos);

        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()])
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}

app()

console.log("Este codigo no se bloquea");

// setTimeout(function() { console.log("Set Timeout"); }, 5000)
// setInterval(function() { console.log("Set Timeout"); }, 1000)