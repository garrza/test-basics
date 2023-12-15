import calculator from "./calculator";

const newCalculator = calculator();

describe("calculator", () => {
  it("adds two numbers", () => {
    const result = newCalculator.add(1, 2);
    expect(result).toBe(3);
  });

  it("subtracts two numbers", () => {
    const result = newCalculator.subtract(2, 1);
    expect(result).toBe(1);
  });

  it("multiplies two numbers", () => {
    const result = newCalculator.multiply(2, 3);
    expect(result).toBe(6);
  });

  it("divides two numbers", () => {
    const result = newCalculator.divide(6, 2);
    expect(result).toBe(3);
  });
});
