class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }
  stare(victim) {
    if (this.statues.length === 3) {
      return
    } else {
      this.statues.push(victim);
      victim.stone()
    }
  }
}

module.exports = Medusa;
