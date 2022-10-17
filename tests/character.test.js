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
