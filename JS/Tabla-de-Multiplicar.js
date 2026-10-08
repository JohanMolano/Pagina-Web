// Referenciar los elementos del html

const inputNumero = document.getElementById("numero")
const inputLimite = document.getElementById("limite")
const btnGenerar = document.getElementById("btnGenerar")
const mensaje = document.getElementById("mensaje")
const listaResultado = document.getElementById("resultado")

// Funciones

function generarTabla(){
    // Leer los valores de la pantalla y convertilo a número
    const numero = Number(inputNumero.value)
    const limite = Number(inputLimite.value)

    // Borrar información visual anterior
    listaResultado.textContent = ""
    mensaje.textContent = ""

    if (inputNumero.value === "" || inputLimite.value === ""){
        mensaje.textContent = "Por favor complete los dos campos"
        return
    }

    if (limite < 1){
        mensaje.textContent = "El valor del 'Hasta' debe ser mayor a cero."
    }

    for (let i = 1; i <= limite; i++){
        // inicio,   final,    incremento
        let resultado = numero * i
        const item = document.createElement("li")
        item.textContent = `${numero} x ${i} = ${resultado}`
        listaResultado.appendChild(item)

        if (resultado % 2 === 0){
            item.classList.add("par")
        } else {
            item.classList.add("impar")
        }
    }
}

// Evento del bóton
btnGenerar.addEventListener("click", generarTabla)