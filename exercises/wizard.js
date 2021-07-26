class Wizard {
  constructor({
    name,
    bearded = true
  }) {
    this.name = name;
    this.bearded = bearded;
    this.rested = true;
    this.restCounter = 0;
  }
  cast() {
    this.restCounter++;
    if (this.restCounter < 3) {
      return "MAGIC BULLET"
    } else {
      this.rested = false;
      return "I SHALL NOT CAST!!"
    }
  }
  incantation(spell) {
    return spell.toUpperCase();
  }
}

module.exports = Wizard;
