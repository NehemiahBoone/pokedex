import ApiPokemonsController from "./Controllers/ApiPokemonsController.js";

class App {
  pokemonsController = new ApiPokemonsController();
}

window["app"] = new App();
