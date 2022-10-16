function Character(name) {
  this.name = name;
  this.age = 0;
}
Character.prototype.growUp = function () {
  this.age += 1;
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
