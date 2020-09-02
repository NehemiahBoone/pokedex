export default class Pokemon {
  constructor(data) {
    this.title = data.title
  }

  get Template() {

    return `
        <div class="card p-2 value">
            ${this.title}
        </div>
        `
  }
}
