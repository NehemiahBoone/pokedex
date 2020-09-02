export const pokieApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon?limit=1050",
  timeout: 10000
})