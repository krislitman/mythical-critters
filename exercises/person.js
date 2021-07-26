class Person {
  constructor(name) {
    this.name = name;
    this.stoned = false;
  }
  stone() {
    this.stoned = true;
  }
}

module.exports = Person;
