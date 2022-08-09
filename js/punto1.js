// Crea una web con bootstrap y js, que contenga un botón comenzar el juego, 
// en ese momento se crea un número aleatorio que el usuario deberá adivinar, 
// la interfaz del usuario debe tener además un input para ingresar un número y 
// un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario 
// adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero 
// que ingreso es mayor o menor al número mágico.
// Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que
//  adivino el numero.

let numeroMagico = 0;
let formulario = document.querySelector('#formulario');

// agregar eventos desde java
formulario.addEventListener('submit', adivinar)


function comenzarJuego(){
    numeroAdivinar = Math.floor(Math.random()*(6 - 1 + 1) + 1)
    console.log(numeroAdivinar)
    
}
// submit para que no recargue la pagina para que se haga todo el trabajo
// objeto E o event tiene info


function adivinar(e){
    e.preventDefault();
    let numeroIngresado = document.querySelector('#inputAdivinar').value
    
    if(numeroIngresado === numeroAdivinar){
        alert ('Adivinaste!, el numero es ' +numeroMagico )
    }else if (numeroIngresado < numeroAdivinar){
        alert ('Tu numero ' +numeroIngresado+ ' es mayor al numero magico ')
    }else{
        alert ('Tu numero ' +numeroIngresado+ 'es menor al numero magico ')

    }
   
}









