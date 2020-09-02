import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { pokieApi } from "./AxiosService.js"

class ApiPokemonsService {

  async getAllApiPokies() {
    let result = await pokieApi.get('')
    ProxyState.apiPokies = result.data.results
  }

}

const apiPokemonsService = new ApiPokemonsService()
export default apiPokemonsService