var clientController = new ClientController();

// Al abrir la página, carga los clientes con AJAX
clientController.load(function () {
  document.getElementById("messageClient").textContent =
    "Clientes cargados: " + clients.length;
});

// Cuando se envía el formulario
document.getElementById("formClient").addEventListener("submit", function (e) {
  e.preventDefault(); // evita que la página se recargue

  var c = new Client(
    null,
    document.getElementById("type_document").value,
    document.getElementById("document").value,
    document.getElementById("c_name").value,
    document.getElementById("address").value,
    document.getElementById("phone").value,
    document.getElementById("email").value
  );

  document.getElementById("messageClient").textContent = clientController.create(c);
});