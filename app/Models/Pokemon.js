export default class Pokemon {
  constructor({ name, url }) {
    this.name = name
    this.url = url
  }

  get Template() {

    return `
         <div class="card-body">
      <h4 class="card-title">${this.name}</h4>
      <p class="card-text">Components</p>
    </div>
        `
  }
}
