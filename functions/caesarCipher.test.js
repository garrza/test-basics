import caesarCipher from "./caesarCipher";

describe("caesarCipher function", () => {
  it("shifts a letter by a given number (1)", () => {
    const result = caesarCipher("a", 1);
    expect(result).toBe("b");
  });

  it("shifts a letter by a given number (2)", () => {
    const result = caesarCipher("a", 2);
    expect(result).toBe("c");
  });

  it("shifts a letter by a given number (3)", () => {
    const result = caesarCipher("a", 3);
    expect(result).toBe("d");
  });
});
