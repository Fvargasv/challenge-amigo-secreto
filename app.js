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
        for (let i = 0; i < nombreAmigos.length; i++)
        asignarTextoElemento('listaAmigos',nombreAmigos[i]);
    //console.log(nombreAmigos[i]);
        //    }
    }
}

//función para limpiar la caja para ingresar amigos
function limpiarCaja() {
    document.getElementById('amigo').value='';
}

//Crea una función que recorra el array amigos y agregue cada nombre como un elemento 
// <li> dentro de una lista HTML. Usa innerHTML para limpiar la lista antes de agregar 
// nuevos elementos.

function asignarTextoElemento(listaA,nombre) {  

    //let lista = document.getElementById(listaA);
    //lista.innerHTML = nombre;
    //console.log(nombreAmigos);
   
        let ulNuevo = document.createElement("ul");
        let nombreT = document.createTextNode(nombre);
        ulNuevo.appendChild(nombreT);
       
       let ulActual = document.getElementById(listaA);
       document.body.insertBefore(ulNuevo, ulActual);    
  /*  if (nombreAmigos.includes(nombre)) {
        return lista.innerHTML = "";
    } else {
        return lista.innerHTML = nombre;
    }
   
*/
    

}

//asignarTextoElemento('p','Numero secreto es menor');