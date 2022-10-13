const Character = require("../src/character");

describe("constructor", () => {
  it("returns an object", () => {
    expect(new Character("Mametchi")).toBeInstanceOf(Object);
  });

  it("sets the name property", () => {
    const character = new Character("Mametchi");
    expect(character.name).toEqual("Mametchi");
  });
});
