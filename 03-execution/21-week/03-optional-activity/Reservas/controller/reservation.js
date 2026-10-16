// Arreglo donde se guardan las reservas (hace de base de datos)
var reservations = [];

class ReservationController {
  // Lógica: revisa que el cliente exista
  clientExists(id) {
    for (var i = 0; i < clients.length; i++) {
      if (clients[i].id == id) {
        return true;
      }
    }
    return false;
  }

  // Lógica: todos los campos son obligatorios
  validate(r) {
    return r.name !== "" && r.description !== "" && r.client_id !== "";
  }

  // AJAX: pide el archivo reservations.json sin recargar la página
  load(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "assets/docs/reservations.json");
    xhr.onload = function () {
      reservations = JSON.parse(xhr.responseText);
      callback();
    };
    xhr.send();
  }

  // Guarda una reserva y devuelve un mensaje
  create(r) {
    if (!this.validate(r)) {
      return "Faltan datos";
    }
    if (!this.clientExists(r.client_id)) {
      return "El cliente no existe";
    }
    r.id = reservations.length + 1;
    reservations.push(r);
    return "Cita reservada";
  }
}