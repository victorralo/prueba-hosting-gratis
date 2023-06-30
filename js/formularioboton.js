var modal = document.getElementById("myModal");

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function submitForm(event) {
  event.preventDefault();
  // Aquí puedes agregar el código para enviar los datos a un servidor o hacer alguna otra acción con ellos
}

// Asignar eventos de clic para borrar el texto cuando se hace clic en el campo de entrada
var formInputs = document.querySelectorAll('.form-group input');
formInputs.forEach(function(input) {
  input.addEventListener('click', function() {
    this.value = '';
  });
});
