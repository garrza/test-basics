import analyzeArray from "./analyzeArray";

describe("analyzeArray function", () => {
  it("returns an object", () => {
    expect(analyzeArray([1, 2, 3])).toBeInstanceOf(Object);
  });
  it("returns the average of the array", () => {
    expect(analyzeArray([1, 2, 3]).average).toBe(2);
  });
  it("returns the minimum of the array", () => {
    expect(analyzeArray([1, 2, 3]).min).toBe(1);
  });
  it("returns the maximum of the array", () => {
    expect(analyzeArray([1, 2, 3]).max).toBe(3);
  });
  it("returns the length of the array", () => {
    expect(analyzeArray([1, 2, 3]).length).toBe(3);
  });
});
