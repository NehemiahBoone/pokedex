import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { pokieApi } from "./AxiosService.js"

class MyPokemonsService {
  async getMyPokemon() {
    throw new Error("Method not implemented.")
  }
  async setActive(id) {
    throw new Error("Method not implemented.")
  }
  async addPokemon() {
    throw new Error("Method not implemented.")
  }
  async removePokemon() {
    throw new Error("Method not implemented.")
  }
}

const myPokemonsService = new MyPokemonsService()
export default myPokemonsService