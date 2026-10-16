var clientController = new ClientController();

// When the page opens, load the clients using AJAX
clientController.load(function () {
  document.getElementById("messageClient").textContent =
    "Clients loaded: " + clients.length;
});

// When the form is submitted
document.getElementById("formClient").addEventListener("submit", function (e) {
  e.preventDefault(); // prevents the page from reloading

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