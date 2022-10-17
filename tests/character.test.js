const { expect } = require("expect");
const Character = require("../src/character");

describe("constructor", () => {
  it("returns an object", () => {
    expect(new Character("Mametchi")).toBeInstanceOf(Object);
  });

  it("sets the name property", () => {
    const character = new Character("Mametchi");
    expect(character.name).toEqual("Mametchi");
  });

  it("has a initial age of 0", () => {
    const character = new Character("Mametchi");
    expect(character.age).toEqual(0);
  });
});

describe("growUp", () => {
  it("increments the age by 1", () => {
    const character = new Character("Mametchi");
    character.growUp();
    expect(character.age).toEqual(1);
  });

  it("increments the hunger by 5", () => {
    const character = new Character("Mametchi");
    character.growUp();
    expect(character.hunger).toEqual(5);
  });

  it("decrement the fitness by 3", () => {
    const character = new Character("Mametchi");
    character.growUp();
    expect(character.fitness).toEqual(7);
  });
});

describe("walk", () => {
  it("increases fitness by 4", () => {
    const character = new Character("Mametchi");

    character.fitness = 4;
    character.walk();

    expect(character.fitness).toEqual(8);
  });

  it("increases fitness by to a maximum of 10", () => {
    const character = new Character("Mametchi");

    character.fitness = 8;
    character.walk();

    expect(character.fitness).toEqual(10);
  });
});

describe("hunger", () => {
  it("decreases hunger by 3", () => {
    const character = new Character("Mametchi");
    character.hunger = 3;
    character.feed();
    expect(character.hunger).toEqual(0);
  });
  it("decreases hunger by 3", () => {
    const character = new Character("Mametchi");
    character.hunger = 1;
    character.feed();
    expect(character.hunger).toEqual(0);
  });
});

describe("checkUP", () => {
  it("check if pet's need to eat and walk", () => {
    const character = new Character("Mametchi");
    character.fitness = 1;
    character.hunger = 6;
    character.checkUp();
    expect.stringMatching(character.checkUp)("I am hungry and I need a walk");
  });
  it("check if pet's need to walk", () => {
    const character = new Character("Mametchi");
    character.fitness = 2;
    character.checkUp();
    expect(character.checkUp).toEqual("I need a walk");
  });
  it("check if pet's need to eat", () => {
    const character = new Character("Mametchi");
    character.hunger = 1;
    character.checkUp();
    expect(character.checkUp).toEqual("I am hungry");
  });
  it("check if pet's don't need anything", () => {
    const character = new Character("Mametchi");
    character.fitness = 5;
    character.hunger = 1;
    expect(character.checkUp).toEqual("I feel great!");
  });
});
