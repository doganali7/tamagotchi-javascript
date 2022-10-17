const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;
function Character(name) {
  this.name = name;
  this.age = 0;
  this.hunger = 0;
  this.fitness = 10;
}
Character.prototype.growUp = function () {
  this.age += 1;
  this.hunger += 5;
  this.fitness -= 3;
};

Character.prototype.walk = function () {
  if (this.fitness + 4 <= MAXIMUM_FITNESS) {
    this.fitness += 4;
  } else {
    this.fitness = MAXIMUM_FITNESS;
  }
};

Character.prototype.feed = function () {
  if (this.hunger - 3 >= MINIMUM_HUNGER) {
    this.hunger -= 3;
  } else {
    this.hunger = MINIMUM_HUNGER;
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
