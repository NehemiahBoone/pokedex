import { ProxyState } from "../AppState.js"
import apiPokemonsService from "../Services/ApiPokemonsService.js"

//Private
function _drawApiPokemons() {

}

//Public
export default class ApiPokemonsController {
  constructor() {
    ProxyState.on("values", _draw);
    _draw()
  }


}
