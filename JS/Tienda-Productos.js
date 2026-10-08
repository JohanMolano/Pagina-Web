let totalCompra = 0;

function agregarAlCarrito(evento) {
    const boton = evento.target;
    
    const tarjeta = boton.parentElement;
    
    const textoPrecio = tarjeta.querySelector('.precio-producto').textContent;
    
    let precioLimpio = textoPrecio.replace('$', '').replace("'", "").replace('.', '');
    let precioNumero = Number(precioLimpio);
    
    totalCompra = totalCompra + precioNumero;
    
    let totalConDescuento = totalCompra;
    const mensajeDescuento = document.getElementById('mensaje-descuento');
    
    if (totalCompra >= 3000000) {
        totalConDescuento = totalCompra - (totalCompra * 0.15);
        mensajeDescuento.textContent = "¡15% de descuento aplicado!";
        mensajeDescuento.style.display = "block";
    } else if (totalCompra >= 1000000) {
        totalConDescuento = totalCompra - (totalCompra * 0.10);
        mensajeDescuento.textContent = "¡10% de descuento aplicado!";
        mensajeDescuento.style.display = "block";
    }

    document.getElementById('total-carrito').textContent = totalConDescuento.toLocaleString('es-CO');
    
    boton.textContent = "¡Agregado! ✔";
    setTimeout(function() {
        boton.textContent = "Agregar al Carrito";
    }, 1000);
}

const botonesAgregar = document.querySelectorAll('.tarjeta button:not(.btn-rojo)');

for (let i = 0; i < botonesAgregar.length; i++) {
    botonesAgregar[i].addEventListener('click', agregarAlCarrito);
}

document.getElementById('btn-pagar').addEventListener('click', function() {
    if (totalCompra > 0) {
        window.location.href = "Compra-Exito.html";
    } else {
        alert("Tu carrito está vacío. ¡Agrega productos primero!");
    }
});