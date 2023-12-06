class Shape {
    constructor(color, shape) {
      this.color = color;
      this.shape = shape;
    }
    // methods are for testing purposes only
    setColor(color){
        this.color = color
    }
    setShape(shape){
        this.shape = shape
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<g>${this.shape}<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<g>${this.shape}<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<g>${this.shape}<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Triangle, Square, Circle };