import capitalize from "./capitalize";

describe("capitalize function", () => {
  it("capitalizes the first letter of a word", () => {
    const result = capitalize("hello");
    expect(result).toBe("Hello");
  });

  it("does not modify an already capitalized word", () => {
    const result = capitalize("World");
    expect(result).toBe("World");
  });

  it("works with an empty string", () => {
    const result = capitalize("");
    expect(result).toBe("");
  });
});
