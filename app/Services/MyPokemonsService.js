import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { sandboxApi } from "./AxiosService.js"

class MyPokemonsService {
  async getMyPokemon() {
    let result = await sandboxApi.get('')
    ProxyState.myPokies = result.data.data.map(p => new Pokemon(p))
  }

  async setActive(id) {
    ProxyState.activePokie = ProxyState.myPokies.find(p => p.id == id)
  }

  async addPokemon() {
    let result = await sandboxApi.post('', ProxyState.activePokie)
    ProxyState.myPokies = [...ProxyState.myPokies, new Pokemon(result.data.data)]
  }

  async removePokemon() {
    await sandboxApi.delete(ProxyState.activePokie.id)
    ProxyState.myPokies = ProxyState.myPokies.filter(p => p.id != ProxyState.activePokie.id)
    ProxyState.activePokie = null
  }
}

const myPokemonsService = new MyPokemonsService()
export default myPokemonsService