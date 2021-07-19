class Dragon{
  constructor(name, rider, color){
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.hungry = true;
    this.food_counter = 0;
  }
  eat(){
    this.food_counter += 1;
    if (this.food_counter >= 3){
      this.hungry = false;
    } else if (this.food_counter < 3){
      this.hungry = true;
  }
  }
}

module.exports = Dragon;
