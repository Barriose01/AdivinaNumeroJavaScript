var numIntentos = 0;
var intentos = document.getElementById("intentos");
var numeroIngresado = document.getElementById("numero");
var btnAdivinar = document.getElementById("btnAdivinar");
var btnReiniciar = document.getElementById("btnReiniciar");
var mensaje = document.getElementById("mensaje");
var numeroSecreto = 0;

function iniciar(){
    numIntentos = 0;
    intentos.textContent = numIntentos;
    numeroIngresado.disabled = false;
    numeroIngresado.value = "";
    btnAdivinar.disabled = false;
    mensaje.textContent = "";
    //Se usa esto para obtener un numero entero aleatorio entre 1 y 10
    numeroSecreto = Math.floor(Math.random() * (11 - 1) + 1);
}

function adivinar(){
    if(isNaN(numeroIngresado.value) || numeroIngresado.value > 10 || numeroIngresado.value < 1){
        alert("Debe ingresar un numero valido");
        numeroIngresado.value = "";
    }else{
        numIntentos++;
        intentos.textContent = numIntentos;
        if(numIntentos < 5 && numeroIngresado.value != numeroSecreto){
            if(numeroIngresado.value < numeroSecreto){
                mensaje.textContent = "Un poco bajo. Intentelo de nuevo";
            }else{
                mensaje.textContent = "Un poco alto. Intentelo de nuevo";
            }
        }else if(numeroIngresado.value == numeroSecreto){
            mensaje.textContent = "Felicitaciones! Has adivinado el numero secreto en " + numIntentos + " intentos";
            terminar();
        }else{
            mensaje.innerHTML = "Lo lamento. No has adivinado el numero secreto.<br>";
            mensaje.innerHTML += "El numero secreto era: " + numeroSecreto;
            terminar();
        }       
    } 
}
function terminar(){
    numeroIngresado.disabled = true;
    btnAdivinar.disabled = true;
}

document.addEventListener("DOMContentLoaded", iniciar, false);
btnReiniciar.addEventListener("click", iniciar, false);
btnAdivinar.addEventListener("click", adivinar, false);