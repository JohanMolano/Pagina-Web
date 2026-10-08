// Capturar cada botón por su id
const btnPiedra =  document.getElementById("btnPiedra");
const btnPapel = document.getElementById("btnPapel");
const btnTijera = document.getElementById("btnTijera");
const resultado = document.getElementById("resultado");
// Conectar cada botón con una función
btnPiedra.addEventListener("click", () => jugar("piedra"));
btnPapel.addEventListener("click", () => jugar("papel"));
btnTijera.addEventListener("click", () => jugar("tijera"))
// Función prinipal
function jugar(jugador){

    const opciones = ["piedra","papel","tijera"]
    const numeroAleatorio = Math.floor(Math.random() * 3);
    const computador = opciones[numeroAleatorio]

    let veredicto = "";

    if (jugador === computador){

        veredicto = `¡Empate! Ambos eligieron ${jugador} :0`;
        
    } else if (
        (jugador === "piedra" && computador === "tijera") || (jugador === "papel" && computador === "piedra") || (jugador === "tijera" && computador === "papel") 
    ){ 
        veredicto = `¡Ganaste! ${jugador} vence a ${computador} :)`;
    } else {
        veredicto = `Perdiste... ${jugador} fue vencida por ${computador} :(`;
    }

    resultado.textContent = `Tu resultado es: ${veredicto}`
}