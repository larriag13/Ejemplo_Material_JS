const para = document.querySelector('p');//selecciona el primer elemento p
para.addEventListener('click', actualizarNombre);//añade un evento al elemento p anterior

function actualizarNombre() {//funcion que se ejecuta al hacer click en el elemento p
  let nombre = prompt('Introduce un nuevo nombre');//pide un nombre por pantalla y lo guarda en la variable nombre
  para.textContent = 'Jugador 1: ' + nombre;//cambia el texto del elemento p por el texto 'Jugador 1: ' + nombre
}