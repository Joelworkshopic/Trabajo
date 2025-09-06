// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista donde se guardan los nombres
let listaAmigos = [];

// Obtener elementos del DOM
const listaElement = document.getElementById('listaAmigos');
const inputAmigo = document.getElementById('amigo');
const resultadoElement = document.getElementById('resultado');

// Función para añadir un nombre a la lista
function agregarAmigo() {
    const nombre = inputAmigo.value.trim();

    if (nombre === '') {
        alert('Por favor, escribe un nombre.');
        return;
    }

    if (listaAmigos.includes(nombre)) {
        alert('Ese nombre ya fue añadido.');
        inputAmigo.value = '';
        return;
    }

    // Agregar a la lista de amigos
    listaAmigos.push(nombre);

    // Mostrarlo en la lista visual
    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = nombre;
    listaElement.appendChild(nuevoElemento);

    //  Borrar el resultado del sorteo al añadir nuevos nombres
    resultadoElement.innerHTML = '';

    // Limpiar el input
    inputAmigo.value = '';
    inputAmigo.focus();
}

// Función para sortear un único nombre aleatorio
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('Agrega al menos un nombre para sortear.');
        return;
    }

    const indiceGanador = Math.floor(Math.random() * listaAmigos.length);
    const ganador = listaAmigos[indiceGanador];

    //  Mostrar solo el último ganador
    resultadoElement.innerHTML = `<li>🎉 El amigo secreto es: <strong>${ganador}</strong></li>`;

    //  Reiniciar la lista de amigos
    listaAmigos = [];
    listaElement.innerHTML = '';
}