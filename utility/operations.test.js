const operations = require("./operations");

describe.skip("add", () => {
  test("adds two numbers using add function", () => {
    expect(operations.add(1, 2)).toEqual(3);
  });
  test("adds two numbers using operate function", () => {
    expect(operations.operate(operations.add, 1, 2)).toEqual(3);
  });
  test("works with negative numbers", () => {
    expect(operations.operate(operations.add, -1, 2)).toEqual(1);
  });
  test("works with string numbers", () => {
    expect(operations.operate(operations.add, "-1", "2")).toEqual(1);
  });
});

describe.skip("subtract", () => {
  test("subtracts two numbers using subtract function", () => {
    expect(operations.subtract(2, 1)).toEqual(1);
  });
  test("subtracts two numbers using operate function", () => {
    expect(operations.operate(operations.subtract, 2, 1)).toEqual(1);
  });
  test("works with smaller minuend", () => {
    expect(operations.operate(operations.subtract, 1, 2)).toEqual(-1);
  });
  test("works with negative numbers", () => {
    expect(operations.operate(operations.subtract, -1, 2)).toEqual(-3);
  });
});

describe.skip("multiply", () => {
  test("multiply two numbers using multiply function", () => {
    expect(operations.multiply(3, 2)).toEqual(6);
  });
  test("multiply two numbers using operate function", () => {
    expect(operations.operate(operations.multiply, 2, 1)).toEqual(2);
  });
  test("works with negative numbers", () => {
    expect(operations.operate(operations.multiply, -3, 2)).toEqual(-6);
  });
});

describe("divide", () => {
  test("divide two numbers using divide function", () => {
    expect(operations.divide(4, 2)).toEqual(2);
  });
  test("divide two numbers using operate function", () => {
    expect(operations.operate(operations.divide, 3, 2)).toEqual(1.5);
  });
  test("works with negative numbers", () => {
    expect(operations.operate(operations.divide, -3, 2)).toEqual(-1.5);
  });
  test("works with smaller dividend", () => {
    expect(operations.operate(operations.divide, 1, 2)).toEqual(0.5);
  });
  test("does not divide by zero", () => {
    expect(operations.operate(operations.divide, -3, 0)).toEqual(
      "Can't divide by zero!"
    );
  });
});
