class Werewolf {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.human = true;
    this.wolf = false;
  }
  change() {
    if (this.human === true) {
      this.human = false;
      this.wolf = true;
    } else {
      this.human = true;
      this.wolf = false;
    }
  }
}

module.exports = Werewolf;
