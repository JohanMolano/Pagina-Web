// Capturar los elementos html
const pantalla = document.getElementById("pantalla")
const btnLimpiar = document.getElementById("btnLimpiar")
const btnBorrar = document.getElementById("btnBorrar")
const btnIgual = document.getElementById("btnIgual")
const teclas = document.querySelectorAll(".btn-tecla")

let expresion = "";

// Funciones
function actualizarPantalla(){

    if (expresion === ""){
        pantalla.textContent = "0"
    } else{
        pantalla.textContent = expresion
    }
}

function limpiar(){
    expresion = ""
    actualizarPantalla()
}

function borrar(){
    expresion = expresion.slice(0, -1)
    actualizarPantalla()
}

function calcular(){
    try{
        expresion = eval(expresion).toString()
    } catch(error){
        expresion = "Error"
    }
    actualizarPantalla()
}

function escribir(valor){
    expresion = expresion + valor
    actualizarPantalla()
}

// Llamado de las funciones
btnLimpiar.addEventListener("click", limpiar)
btnBorrar.addEventListener("click", borrar)
btnIgual.addEventListener("click", calcular)

// teclas = [bton"7", boton"9", boton"9", boton"+".....]
teclas.forEach(function(tecla){
    tecla.addEventListener("click", function(){
        escribir(tecla.textContent)
    })
})


actualizarPantalla()