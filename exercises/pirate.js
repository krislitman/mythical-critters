class Pirate {
  constructor(name, job = 'Scallywag') {
    this.name = name;
    this.job = job;
    this.cursed = false;
    this.curseCounter = 0;
    this.booty = 0;
  }
  robShip() {
    this.booty += 100
    return "YAARRR!"
  }
  commitHeinousAct() {
    this.curseCounter += 1
    if (this.curseCounter === 3){
      this.cursed = true;
    } else {
      this.cursed = false;
    }
  }
}

module.exports = Pirate;
