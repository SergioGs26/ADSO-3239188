var reservationController = new ReservationController();

// Shows the list of reservations on the page
function showList() {
  var ul = document.getElementById("list");
  ul.innerHTML = "";
  for (var i = 0; i < reservations.length; i++) {
    var li = document.createElement("li");
    li.textContent =
      reservations[i].id + " - " + reservations[i].name +
      " (client " + reservations[i].client_id + ")";
    ul.appendChild(li);
  }
}

// When the page opens, load the reservations using AJAX and show them
reservationController.load(showList);

// When the form is submitted
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