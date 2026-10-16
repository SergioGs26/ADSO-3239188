var reservationController = new ReservationController();

// Muestra la lista de reservas en la página
function showList() {
  var ul = document.getElementById("list");
  ul.innerHTML = "";
  for (var i = 0; i < reservations.length; i++) {
    var li = document.createElement("li");
    li.textContent =
      reservations[i].id + " - " + reservations[i].name +
      " (cliente " + reservations[i].client_id + ")";
    ul.appendChild(li);
  }
}

// Al abrir la página, carga las reservas con AJAX y las muestra
reservationController.load(showList);

// Cuando se envía el formulario
document.getElementById("formReservation").addEventListener("submit", function (e) {
  e.preventDefault();

  var r = new Reservation(
    null,
    document.getElementById("name").value,
    document.getElementById("description").value,
    document.getElementById("client_id").value
  );

  document.getElementById("message").textContent = reservationController.create(r);
  showList();
});