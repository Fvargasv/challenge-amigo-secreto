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
        
       // if (nombreAmigos.includes(nAmigo)) {
            
       //     alert("Nombre ya ingresado, prueba con otro")
       //     limpiarCaja();
       //     }
        //else {
        nombreAmigos.push(nAmigo);
        console.log(nombreAmigos);
        limpiarCaja();
        actualizarLista();

       // for (let i = 0; i < nombreAmigos.length; i++)
      //  asignarTextoElemento('listaAmigos',nombreAmigos[i]);
    //console.log(nombreAmigos[i]);
        //    }
    }
}


//Crea una función que recorra el array amigos y agregue cada nombre como un elemento 
// <li> dentro de una lista HTML. Usa innerHTML para limpiar la lista antes de agregar 
// nuevos elementos.

function actualizarLista() {

// Obtener el elemento de la lista
    const lista = document.getElementById("listaAmigos") //|| document.createElement("ul"); 
    //lista.id = "listaAmigos";
  //  document.body.appendChild(lista);
    lista.innerHTML = ""; // Limpiar la lista antes de agregar nuevos elementos.
    
    for (let i = 0; i < nombreAmigos.length; i++) {
        const elemento = document.createElement("li"); // Crear un <li>
        elemento.textContent = nombreAmigos[i]; // Asignar el nombre del amigo
        lista.appendChild(elemento); // Agregar el <li> a la lista
    }
}



//función para limpiar la caja para ingresar amigos
function limpiarCaja() {
    document.getElementById('amigo').value='';
}

//funcion para sortear amigos

function sortearAmigo() {
    
    if (nombreAmigos.length === 0) {
        alert("Por favor, inserte un nombre");   
    
    }

    else {
        let indiceNombreAmigo = Math.floor(Math.random()*nombreAmigos.length);
        console.log(indiceNombreAmigo);
        //console.log(nombreAmigos.length);
        console.log(nombreAmigos[indiceNombreAmigo]);
        let amigoSecreto = document.getElementById('resultado');
        amigoSecreto.innerHTML= nombreAmigos[indiceNombreAmigo];

    }

}