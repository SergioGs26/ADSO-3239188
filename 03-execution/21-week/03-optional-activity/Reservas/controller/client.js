// Arreglo donde se guardan los clientes (hace de base de datos)
var clients = [];

class ClientController {
  // Lógica: documento y nombre son obligatorios
  validate(c) {
    return c.document !== "" && c.name !== "";
  }

  // AJAX: pide el archivo clients.json sin recargar la página
  load(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "assets/docs/clients.json");
    xhr.onload = function () {
      clients = JSON.parse(xhr.responseText); // convierte el texto en arreglo
      callback(); // avisa que ya llegaron los datos
    };
    xhr.send();
  }

  // Guarda un cliente y devuelve un mensaje
  create(c) {
    if (!this.validate(c)) {
      return "Faltan datos";
    }
    c.id = clients.length + 1;
    clients.push(c);
    return "Cliente creado. Su ID es: " + c.id;
  }
}