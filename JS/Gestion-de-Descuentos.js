function calcular(){
    const valor = document.getElementById("valor").value
    let descuento = 0
    let total = valor
    if (valor >= 300000){
        descuento = valor * 0.15
        total = valor - descuento
    } else if (valor >= 100000){
        descuento = valor * 0.10
        total = valor - descuento
    } else if (valor >= 50000){
        descuento = valor * 0.05
        total = valor - descuento
    }
    document.getElementById("valor-a-pagar").textContent = `Su descuento aplicado fue de $${descuento}. Su valor a pagar es de $${total}.`
}
document.getElementById("compra").addEventListener("click", calcular)
