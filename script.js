let productos = [];

// const btn = document.getElementById("agregar");

// const lista = document.getElementById("carrito");

// btn.addEventListener("click", () => {
//     const producto = {
//         nombre: btn.dataset.nombre,
//         precio: parseFloat(btn.dataset.precio)
//     }
//     productos.push(producto);
//     mostrarCarrito();
// });


function listaCarrito(){
    let listacarrito = document.getElementById("card_content").querySelector("#nombre").textContent = JSON.stringify(productos);
        alert(`Tu lista de compra: ${listacarrito}`);
    }
    

function actualizarCarrito() {
    if (productos.length === 0) {
        alert("El carrito está vacío.");
    }else {
        return;
}

}

function verCarrito(){
    let verCarrito = document.getElementById("carrito");
    alert(`Productos en el carrito: ${productos.length}`);
}

// function mostrarCarrito() {
//     lista.innerHTML = "";
//     productos.forEach((producto, index) => {
//         const li = document.createElement("li");
//         li.textContent = `${producto.nombre}` + `- $${producto.precio}`;
//         lista.appendChild(li);
//     });
// }

function indiceCarrito() {
    document.getElementById("nav_text").textContent = JSON.stringify(productos.length);
}

function add() {
    let product = document.getElementById("agregar");
    productos.push(product);
    indiceCarrito();
}

function eliminar(){
    let eliminarProducto = document.getElementById("eliminar");;
    productos.pop(eliminarProducto);
    indiceCarrito();
    actualizarCarrito();
}


