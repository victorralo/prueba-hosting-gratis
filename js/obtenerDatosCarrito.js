function obtenerDatosCarrito() {
    const productosCarrito = [];
  
    if (productosEnCarrito && productosEnCarrito.length > 0) {
      productosEnCarrito.forEach(producto => {
        productosCarrito.push({
          titulo: producto.titulo,
          cantidad: producto.cantidad
        });
      });
    }
  
    return productosCarrito;
  }
  