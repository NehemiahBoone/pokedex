import { ProxyState } from "../AppState.js"
import myPokemonsService from "../Services/MyPokemonsService.js"

function _drawActivePokemon() {
  let elem = document.getElementById('activePokie')
  if (ProxyState.activePokie) {
    elem.innerHTML = ProxyState.activePokie.Template
  } else {
    elem.innerHTML = ""
  }
}

function _drawMyPokemon() {
  let pokies = ProxyState.myPokies
  let template = ""
  pokies.forEach(p => template += `<li onclick="app.myPokemonsController('${p.id}')">${p.name}</li>`)
  document.getElementById('myPokies').innerHTML = template
}

export default class MyPokemonsController {
  constructor() {
    ProxyState.on('activePokie', _drawActivePokemon)
    ProxyState.on('myPokies', _drawMyPokemon)
    this.getMyPokemon()
  }

  getMyPokemon() {
    try {
      myPokemonsService.getMyPokemon()
    } catch (error) {
      console.error(error)
    }
  }

  setActive(id) {
    myPokemonsService.setActive(id)
  }

  addPokemon() {
    try {
      myPokemonsService.addPokemon()
    } catch (error) {
      console.error(error)
    }
  }

  removePokemon() {
    try {
      myPokemonsService.removePokemon()
    } catch (error) {
      console.error(error)
    }
  }
}