// importing shape classes from shapes.js
const { Triangle, Square, Circle } = require("./shapes.js");

// Tests for a triangle
describe("Triangle Test", () => {
  test("tests for a triangle", () => {
    // passes in two arguements to match the expect
    const shape = new Triangle();
    shape.setColor("purple");
    shape.setShape("Triangle");
    expect(shape.render()).toEqual(
      '<g>Triangle<polygon points="150, 18 244, 182 56, 182" fill="purple" />'
    );
  });
});

// Tests for a square
describe("Square Test", () => {
  test("tests for a square", () => {
    const shape = new Square();
    shape.setColor("red");
    shape.setShape("Square");
    expect(shape.render()).toEqual(
      '<g>Square<rect x="73" y="40" width="160" height="160" fill="red" />'
    );
  });
});

// Tests for a circle
describe("Circle Test", () => {
  test("tests for a circle", () => {
    const shape = new Circle();
    shape.setColor("blue");
    shape.setShape("Circle");
    expect(shape.render()).toEqual,
      '<g>Circle<circle cx="150" cy="115" r="80" fill="blue" />';
  });
});
