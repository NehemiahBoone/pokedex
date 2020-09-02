import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { pokieApi } from "./AxiosService.js"

class MyPokemonsService {
  getMyPokemon() {
    throw new Error("Method not implemented.")
  }
  setActive(id) {
    throw new Error("Method not implemented.")
  }
  addPokemon() {
    throw new Error("Method not implemented.")
  }
  removePokemon() {
    throw new Error("Method not implemented.")
  }
}

const myPokemonsService = new MyPokemonsService()
export default myPokemonsService