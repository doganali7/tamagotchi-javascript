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

const mametchi = new Character("Mametchi");
const gozarutchi = new Character("Gozarutchi");

mametchi.growUp = function () {
  this.age += 4;
};

gozarutchi.growUp = function () {
  this.age += 5;
};

module.exports = Character;
