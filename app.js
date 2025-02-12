// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// creo un array vacío para almacenar el nombre de los amigos 
let nombreAmigos = [];


// función para agregar amigos
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

    }
}

//función para limpiar la caja para ingresar amigos
function limpiarCaja() {
    document.getElementById('amigo').value='';
}