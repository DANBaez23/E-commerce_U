let productos = [];

function add(button) {
    const card = button.closest('.card');
    const nombreElement = card.querySelector('.product-name');
    const nombre = nombreElement ? nombreElement.textContent.trim() : 'Producto Desconocido';
    const precioElement = card.querySelector('.card_price');
    const precioNumerico = precioElement ? parseInt(precioElement.getAttribute('data-price')) : 0;
    const productoAgregado = {
        nombre: nombre,
        precio: precioNumerico
    }
    productos.push(productoAgregado);
    indiceCarrito();
    alert(`Producto agregado: ${nombre}`);
}

function listaCarrito() {
    let listaProductos = "🛒 Tu lista de compra:\n\n";
    let totalPrecio = 0;

    if (productos.length === 0) {
        alert("Tu carrito está vacío.");
        return; // Salir de la función si no hay productos
    }

    // Iterar sobre el array de objetos 'productos'
    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];
        
        // Formatear el precio con separadores de miles para mayor legibilidad
        const precioFormateado = producto.precio.toLocaleString('es-CO'); // Adaptar al formato local
        
        // Agregar la línea de producto a la cadena
        listaProductos += `- ${producto.nombre} | $${precioFormateado}\n`;
        
        // Sumar al total
        totalPrecio += producto.precio;
    }

    const totalFormateado = totalPrecio.toLocaleString('es-CO');
    listaProductos += `\n----------------------\n`;
    listaProductos += `💰 Total a pagar: $${totalFormateado}`;

    // Mostrar la lista en el alert
    alert(listaProductos);
}
    

function actualizarCarrito() {
    if (productos.length === 0) {
        alert("El carrito está vacío.");
    }else {
        return;
}

}

function indiceCarrito() {
    document.getElementById("nav_text").textContent = JSON.stringify(productos.length);
    
}



function eliminar(){
    let eliminarProducto = document.getElementById("eliminar");;
    productos.pop(eliminarProducto);
    indiceCarrito();
    actualizarCarrito();
}


