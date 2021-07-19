class Hobbit{
  constructor(name, disposition='homebody'){
    this.name = name;
    this.disposition = disposition;
    this.age = 0;
    this.adult = this.findAge();
    this.isShort = true;
    this.hasRing = this.theOne()
  }
  theOne(){
    if (this.name === 'Frodo'){
      return true;
    }else{
      return false;
    }
  }
  celebrateBirthday(){
    this.age += 1;
  }
  findAge(){
    if (this.age === 33){
      return true;
    }else if (this.age < 32) {
      return false;
    }
  }
}

module.exports = Hobbit;
