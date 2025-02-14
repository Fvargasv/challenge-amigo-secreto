// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// creo un array vacío para almacenar el nombre de los amigos 
let nombreAmigos = [];


// función para agregar amigos On click
function agregarAmigo() {
    let nAmigo = document.getElementById('amigo').value;
    //console.log(amigo);
    //Validar entrada: mensaje de alerta en caso de que el campo esté vacío
    if (nAmigo=='') {
        alert("Por favor, inserte un nombre");
        
    }
    // si el campo no está vacío , agrego el nombre al array nombreAmigos
    else {
        
        nombreAmigos.push(nAmigo);
        console.log(nombreAmigos);
        limpiarCaja();
        asignarTextoElemento('listaAmigos',nAmigo);

    }
}

//función para limpiar la caja para ingresar amigos
function limpiarCaja() {
    document.getElementById('amigo').value='';
}

//Crea una función que recorra el array amigos y agregue cada nombre como un elemento 
// <li> dentro de una lista HTML. Usa innerHTML para limpiar la lista antes de agregar 
// nuevos elementos.

function asignarTextoElemento(elemento,texto) {  

    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;

}

//asignarTextoElemento('p','Numero secreto es menor');