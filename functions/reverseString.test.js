import reverseString from "./reverseString";

describe("reverseString function", () => {
  it("reverses a string", () => {
    const result = reverseString("hello");
    expect(result).toBe("olleh");
  });

  it("reverses another string", () => {
    const result = reverseString("house");
    expect(result).toBe("esuoh");
  });
});
