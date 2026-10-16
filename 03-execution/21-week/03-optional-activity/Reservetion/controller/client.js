// Array that stores the clients (works as a fake database)
var clients = [];

class ClientController {
  // Business logic: document and name are required
  validate(c) {
    return c.document !== "" && c.name !== "";
  }

  // AJAX: requests the clients.json file without reloading the page
  load(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "assets/docs/clients.json");
    xhr.onload = function () {
      clients = JSON.parse(xhr.responseText); // converts the text into an array
      callback(); // notifies that the data has arrived
    };
    xhr.send();
  }

  // Saves a client and returns a message
  create(c) {
    if (!this.validate(c)) {
      return "Missing data";
    }
    c.id = clients.length + 1;
    clients.push(c);
    return "Client created. Its ID is: " + c.id;
  }
}