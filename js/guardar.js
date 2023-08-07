function guardar() {
  const nombre = document.getElementById("nombres").value;
  const email = document.getElementById("mail").value;
  const ciudad = document.getElementById("ciudad").value;
  const fecha = document.getElementById("fecha").value;

  // Validación de campos obligatorios
  if (nombre === "" || email === "" || ciudad === "" || fecha === "") {
      alert("Por favor, complete los campos obligatorios.");
      return;
  }

  const telefono = document.getElementById("telefono").value;

    // Obtener los datos del carrito
    const productosCarrito = obtenerDatosCarrito();
  
    db.collection("clientes").add({
      nombre: nombre,
      email: email,
      telefono: telefono,
      ciudad: ciudad,
      carrito: productosCarrito,
      fecha: fecha  // Agregar los datos del carrito como un campo del documento
    })
    
    .then((docRef) => {
      alert("Registro exitoso");
      // Redirigir después de un breve retraso (por ejemplo, 1 segundo)
      setTimeout(() => {
          window.location.href = 'index.html';
      }, 1000);
  })
  .catch((error) => {
      alert("Error en el registro");
  });
}

  