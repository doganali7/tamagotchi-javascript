const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;
const MAXIMUM_AGE = 30;
function Character(name) {
  this.name = name;
  this.age = 0;
  this.hunger = 0;
  this.fitness = 10;
  this.isAlive;
}
Character.prototype.growUp = function () {
  if (this.age + 1 <= MAXIMUM_AGE) {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
    return true;
  } else {
    MAXIMUM_AGE = 0;
    return false;
  }
};

Character.prototype.walk = function () {
  if (this.fitness + 4 <= MAXIMUM_FITNESS) {
    this.fitness += 4;
    return true;
  } else {
    this.fitness = MAXIMUM_FITNESS;
    return false;
  }
};

Character.prototype.feed = function () {
  if (this.hunger - 3 >= MINIMUM_HUNGER) {
    this.hunger -= 3;
    return true;
  } else {
    this.hunger = MINIMUM_HUNGER;
    return false;
  }
};

Character.prototype.checkUp = function () {
  if (this.fitness <= 3 && this.hunger >= 5) {
    return "I am hungry and I need a walk";
  } else if (this.fitness <= 3) {
    return "I need a walk";
  } else if (this.hunger >= 5) {
    return "I am hungry";
  } else if (this.fitness >= 3 && this.hunger <= 5) {
    return "I feel great!";
  }
};

// const mametchi = new Character("Mametchi");
// const gozarutchi = new Character("Gozarutchi");

const mametchi = new Character("Mametchi");
const mametchi2 = new Character("Mametchi");

mametchi.growUp = function () {
  this.age += 4;
};

mametchi2.growUp = function () {
  this.age += 5;
};

module.exports = Character;
