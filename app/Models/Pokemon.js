export default class Pokemon {
  constructor({ name, weight, height, base_experience, id }) {
    this.name = name
    this.weight = weight
    this.height = height
    this.baseExperience = base_experience
    this.id = id
  }

  get Template() {

    return `
        <div class="card-body">
          <h4 class="card-title">${this.name}</h4>
          <p class="card-text">Weight: ${this.weight}</p>
          <p class="card-text">Height: ${this.height}</p>
          <p class="card-text">Experience: ${this.baseExperience}</p>
        </div>
      `
  }
}
