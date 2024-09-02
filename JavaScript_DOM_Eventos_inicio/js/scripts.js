// queryselector
const heading = document.querySelector('.header__texto h2'); //retorna 0 o un elemento
heading.textContent = 'Nuevo Heading';

// queryselectorAll
const enlaces = document.querySelectorAll('.navegacion a');
// console.log(enlaces);
enlaces[0].textContent = "Nuevo Texto Para Enlace";
enlaces[0].href = "https://www.google.com";
enlaces[0].classList.add = "nueva-clase";
enlaces[0].classList.remove = "navegacion__enlace";

// getElementById
const heading2 = document.getElementById('heading');
// console.log(heading2);

// Generar un eenlace
const nuevoEnlace = document.createElement("A");

// Agregar el href
nuevoEnlace.href = "https://www.google.com";
// agregar el texto
nuevoEnlace.textContent = "Tienda Virtual";
// Agregar clase
nuevoEnlace.classList.add("navegacion__enlace");
// Agregarlo a ldocumento
const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(nuevoEnlace);
// console.log(nuevoEnlace);

// Eventos
// console.log(1);

// window.addEventListener('load', function() { //load espera que el js y los archivos que dependen del html esten listos
//     console.log(2);
// })
// window.onload = function() {
//     console.log(3);
// }

// document.addEventListener('DOMContentLoaded', function() { //Espera por el html, pero no espera css o imagenes
//     console.log(4);
// })

// console.log(5);

// window.onscroll = function(e) {
//     console.log(e);
// }

// Seleccionar elementos y asociarles un evento
// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento) {
//     console.log(evento);
//     evento.preventDefault();
//     console.log("Enviando Forumario");
// })

// Evento de Submit
const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    // Validar el Formulario
    const { nombre, email, mensaje } = datos;
    // console.log(nombre);
    // console.log(email);
    // console.log(mensaje);
    if (nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta("Completar todos los campos", true);
        return;
    }
    mostrarAlerta("Todo OK, espere un momento...");
    // console.log("Enviando Forumario");
});

// Eventos de los inputs y textArea
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}
const nombreInput = document.querySelector('#nombre');
const emailInput = document.querySelector('#email');
const mensajeInput = document.querySelector('#mensaje');
nombreInput.addEventListener('input', leerTexto);
emailInput.addEventListener('input', leerTexto);
mensajeInput.addEventListener('input', leerTexto);

function leerTexto(e) {
    datos[e.target.id] = e.target.value
    console.log(e.target.value);
    // console.log(datos);
}


function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P')
    alerta.textContent = mensaje;
    if (error) {
        alerta.classList.add("error")
    } else {
        alerta.classList.add("correcto")
    }
    formulario.appendChild(alerta)
        // Desaparecer despues de 3 segundos
    setTimeout(() => {
        alerta.remove();
    }, 3000);
}