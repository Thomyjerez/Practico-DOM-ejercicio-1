// Crea una web con bootstrap y js, que contenga un botón comenzar el juego, 
// en ese momento se crea un número aleatorio que el usuario deberá adivinar, 
// la interfaz del usuario debe tener además un input para ingresar un número y 
// un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario 
// adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero 
// que ingreso es mayor o menor al número mágico.
// Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que
//  adivino el numero.

let numeroAdivinar = 0;
let formulario = document.querySelector('#formulario');

// agregar eventos desde java
formulario.addEventListener('submit', adivinar)


function comenzarJuego(){
    numeroAdivinar = Math.floor(Math.random()*(6-1+1) + 1)
    let comenzarBtn = document.querySelector('#comenzarBtn')
    comenzarBtn.className = 'btn btn-primary my-2'
    comenzarBtn.innerHTML = 'El juego a comenzado!'
    
}
// submit para que no recargue la pagina para que se haga todo el trabajo
// objeto E o event tiene info

function adivinar(e){
    e.preventDefault();
    let numeroIngresado = document.querySelector('#inputAdivinar').value;
    let mensaje = document.querySelector('#msjAlert')
    if(numeroIngresado == numeroAdivinar){
        mensaje.className = 'alert alert-primary'
        mensaje.innerHTML = '¡Adivinaste!, el numero ingresado es: ' +numeroIngresado
        comenzarBtn.className = 'btn btn-primary my-2'
        comenzarBtn.innerHTML = 'Comenzar el juego'
    }else if (numeroIngresado < numeroAdivinar){
        mensaje.className = 'alert alert-primary'
        mensaje.innerHTML = 'El numero que ingresaste es mayor al numero magico'
    }else{
        mensaje.className = 'alert alert-primary'
        mensaje.innerHTML = 'El numero que ingresaste es menor al numero magico'
       
    }
   
}









