// Array that stores the reservations (works as a fake database)
var reservations = [];

class ReservationController {
  // Business logic: checks that the client exists
  clientExists(id) {
    for (var i = 0; i < clients.length; i++) {
      if (clients[i].id == id) {
        return true;
      }
    }
    return false;
  }

  // Business logic: all fields are required
  validate(r) {
    return r.name !== "" && r.description !== "" && r.client_id !== "";
  }

  // AJAX: requests the reservations.json file without reloading the page
  load(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "assets/docs/reservations.json");
    xhr.onload = function () {
      reservations = JSON.parse(xhr.responseText);
      callback();
    };
    xhr.send();
  }

  // Saves a reservation and returns a message
  create(r) {
    if (!this.validate(r)) {
      return "Missing data";
    }
    if (!this.clientExists(r.client_id)) {
      return "The client does not exist";
    }
    r.id = reservations.length + 1;
    reservations.push(r);
    return "Appointment booked";
  }
}