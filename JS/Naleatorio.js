const numero = document.getElementById("numeroIngreso")
const btnAdivinar = document.getElementById("btnAdivinar")
const resultado = document.getElementById("resultado")
const intentos = document.getElementById("intentos")
const reiniciar = document.getElementById("reset")


let numeroAleatorio = Math.floor(Math.random() * 100) + 1
let intentosjuego = 7

function reiniciarjuego(){
    console.log(numero.value)
    numeroAleatorio = Math.floor(Math.random() * 100) + 1
    intentosjuego = 7
    numero.value =""
    resultado.textContent = ""
    intentos.textContent = ""
}


function jugar(){
    if (intentosjuego > 0){
        if (numero.value >= 1 && numero.value <= 100){
            if (numero.value === numeroAleatorio){
                resultado.textContent = `ADIVINASTESSSSSSSS :0000 es ${numeroAleatorio}`
                intentos.textContent = ""
            } else if (numero.value > numeroAleatorio){
                intentosjuego -= 1
                resultado.textContent = `¡El número a adivinar es menor al que ingresaste!`
                intentos.textContent = `Te quedan ${intentosjuego} intentos!`
            } else{
                intentosjuego -= 1
                resultado.textContent = `El número a adivinar es mayor al que ingresaste!`
                intentos.textContent = `Te quedan ${intentosjuego} intentos!`
            }
        } else{
            resultado.textContent = "¡Debes ingresar un número mayor a 0 o menor a 100!"
        }
    } else{
        intentos.textContent = `Te quedastes sin intentos. Reinicia el juego :(`
    }
}


btnAdivinar.addEventListener("click", jugar)

reiniciar.addEventListener("click", reiniciarjuego)