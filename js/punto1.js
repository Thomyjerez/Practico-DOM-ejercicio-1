// Crea una web con bootstrap y js, que contenga un botón comenzar el juego, 
// en ese momento se crea un número aleatorio que el usuario deberá adivinar, 
// la interfaz del usuario debe tener además un input para ingresar un número y 
// un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario 
// adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero 
// que ingreso es mayor o menor al número mágico.
// Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que
//  adivino el numero.

let numeroMagico;
let bntEnviar = document.querySelector('#btnEnviar')
console.log(bntEnviar)

function numeroRandom (min,max){

    return Math.floor(Math.random()*(max -min) + min)
}

function juego(){
    numeroMagico = numeroRandom (1, 100),
    console.log (numeroMagico)
    btnComenzar.className ="btn btn-primary btn-lg my-5 text-center"
    btnComenzar.innerHTML= 'El juego comenzo'
    btnComenzar.disabled = true 

    let formJuego = document.querySelector('#formJuego')
    formJuego.reset()
    
}
function numeroIngresado(){
    
    let numeroIngresado = document.querySelector('#numeroIngresado').value
    let mensaje = document.querySelector('#msjAlert')
    if (numeroIngresado == numeroMagico) {
        mensaje.className = "alert alert-primary"
        mensaje.innerHTML = '!Adivinaste el numero¡'
        bntEnviar.className = "btn btn-primary"
        bntEnviar.innerHTML = 'Volver a empezar'
        bntEnviar.disabled = false;
        
    }else if (numeroIngresado > numeroMagico){
        mensaje.className = "alert alert-primary"
        mensaje.innerHTML = 'Numero incorrecto, el numero es menor, intente adivinar de nuevo'
    }else {
        mensaje.className = "alert alert-primary"
        mensaje.innerHTML = 'Numero incorrecto, el numero es mayor, intente adivinar de nuevo'
    }
}



