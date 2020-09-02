import { ProxyState } from "../AppState.js";
import { pokemonsService } from "../Services/PokemonsService.js";


//Private
function _draw() {

}

//Public
export default class PokemonsController {
  constructor() {
    ProxyState.on("values", _draw);
    _draw()
  }


}
