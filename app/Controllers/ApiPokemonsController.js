import { ProxyState } from "../AppState.js"
import apiPokemonsService from "../Services/ApiPokemonsService.js"
import Pokemon from "../Models/Pokemon.js"

//Private
function _drawApiPokemons() {
  let template = ""
  let pokemon = ProxyState.apiPokies
  pokemon.forEach(p => template += `<li onclick="app.apiPokemonsController.getDetails('${p.name}')">${p.name}</li>`)
  document.getElementById('allPokies').innerHTML = template
}

function _drawActive() {
  let active = ProxyState.activePokie
  document.getElementById("activePokie").innerHTML = `
    <div class="card-body">
      <h4 class="card-title">${this.name}</h4>
      <p class="card-text">Components</p>
    </div>`
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

  getDetails(name) {
    try {
      apiPokemonsService.getDetails(name)
    } catch (error) {
      console.error(error)
    }
  }
}
