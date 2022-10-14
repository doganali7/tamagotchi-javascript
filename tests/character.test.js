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

  it("increments the age by 1", () => {
    const character = new Character("Mametchi");

    character.growUp();

    expect(character.age).toEqual(1);
  });
});
