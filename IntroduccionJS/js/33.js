// Con Promises
function getEmployes() {
    const archivo = 'empleados.json'
    fetch(archivo)
        .then(resultado => resultado.json())
        .then(datos => {
            // console.log(datos);
            // Destructuring
            const { empleados } = datos
            console.log(empleados);

            // empleados.forEach(empleado => {
            //     console.log(empleado.id);
            //     console.log(empleado.nombre);
            //     console.log(empleado.puesto);
            //     document.querySelector('.contenido').textContent += empleado.nombre
            // });
        })
}

getEmployes()

// Con Async / Await
async function getEmployes2() {
    const archivo = 'empleados.json';
    const resultado = await fetch(archivo);
    const datos = await resultado.json()
    console.log(datos)
}

getEmployes2()