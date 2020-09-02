import { ProxyState } from "../AppState.js"
import apiPokemonsService from "../Services/ApiPokemonsService.js"

//Private
function _drawApiPokemons() {
  let template = ""
  let pokemon = ProxyState.apiPokies
  pokemon.forEach(p => template += `<li onclick="app.apiPokemonsController.getDetails('${p.index}')">${p.name}</li>`)
  document.getElementById('allPokies').innerHTML = template
}

//Public
export default class ApiPokemonsController {
  constructor() {
    ProxyState.on("apiPokies", _drawApiPokemons);
    this.getAllApiPokies()
  }

  getAllApiPokies() {
    try {
      apiPokemonsService.getAllApiPokies()
    } catch (error) {
      console.error(error)
    }
  }
}
