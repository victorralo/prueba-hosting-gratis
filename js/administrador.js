// administrador.js

document.addEventListener("DOMContentLoaded", () => {
    const datosCliente = document.querySelector("#datos-cliente");
    const productosCarrito = document.querySelector("#productos-carrito");

    // Obtener el pedido almacenado en el LocalStorage
    const pedido = JSON.parse(localStorage.getItem("pedido"));

    if (pedido) {
        // Mostrar los datos del cliente
        datosCliente.innerHTML = `
            <p><strong>Nombre:</strong> ${pedido.cliente.nombres}</p>
            <p><strong>Correo electrónico:</strong> ${pedido.cliente.correo}</p>
            <p><strong>Teléfono:</strong> ${pedido.cliente.telefono}</p>
            <p><strong>Ciudad:</strong> ${pedido.cliente.ciudad}</p>
        `;

        // Mostrar los productos en el carrito
        productosCarrito.innerHTML = pedido.productos.map(producto => `
            <div>
                <p><strong>Título:</strong> ${producto.titulo}</p>
                <p><strong>Cantidad:</strong> ${producto.cantidad}</p>
                <p><strong>Precio:</strong> $${producto.precio}</p>
                <p><strong>Subtotal:</strong> $${producto.precio * producto.cantidad}</p>
            </div>
        `).join("");
    }
});
