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

Character.prototype = {
  get isAlive() {
    return this.age < 30 && this.hunger < 10 && this.fitness > 0;
  },
};

Character.prototype.growUp = function () {
  if (!this.isAlive) {
    throw new Error("Your character is no longer alive");
  }
  if (this.age + 1 <= MAXIMUM_AGE) {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
    this.isAlive = true;
  } else {
    MAXIMUM_AGE = 0;
    this.isAlive = false;
  }
};

Character.prototype.walk = function () {
  if (!this.isAlive) {
    throw new Error("Your character is no longer alive");
  }
  if (this.fitness + 4 <= MAXIMUM_FITNESS) {
    this.fitness += 4;
    this.isAlive = true;
  } else {
    this.fitness = MAXIMUM_FITNESS;
    this.isAlive = false;
  }

  this.isAlive = this.age < 30 && this.hunger < 10 && this.fitness > 0;
};

Character.prototype.feed = function () {
  if (!this.isAlive) {
    throw new Error("Your character is no longer alive");
  }
  if (this.hunger - 3 >= MINIMUM_HUNGER) {
    this.hunger -= 3;
    this.isAlive = true;
  } else {
    this.hunger = MINIMUM_HUNGER;
    this.isAlive = false;
  }
};

Character.prototype.checkUp = function () {
  if (!this.isAlive) {
    throw new Error("Your character is no longer alive");
  }
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

Character.prototype.isAlive = function () {
  return this.age < 30 && this.hunger < 10 && this.fitness > 0;
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
