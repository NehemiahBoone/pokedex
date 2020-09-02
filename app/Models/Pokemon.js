export default class Pokemon {
  constructor({ name, weight, height, base_experience, _id, img, sprites }) {
    this.name = name
    this.weight = weight
    this.height = height
    this.baseExperience = base_experience
    this.id = _id
    this.img = img || sprites.front_default
  }

  get Template() {

    return `
        <div class="card-body">
          <img class="card-img-top" src="${this.img}" alt="">
          <h4 class="card-title">${this.name}</h4>
          <p class="card-text">Weight: ${this.weight}</p>
          <p class="card-text">Height: ${this.height}</p>
          <p class="card-text">Experience: ${this.baseExperience}</p>
          ${this.Button}
        </div>
      `
  }

  get Button() {
    if (this.id) {
      return `<button onclick="app.myPokemonsController.removePokemon()" class="btn btn-danger">Release</button>`
    }
    return `<button onclick="app.myPokemonsController.addPokemon()" class="btn btn-success">Capture Pokemon</button>`
  }
}
