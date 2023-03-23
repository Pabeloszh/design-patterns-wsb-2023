class Color {
    getColor() {}
}
  
class Red extends Color {
    getColor() {
        return "red";
    }
}
  
class Blue extends Color {
    getColor() {
        return "blue";
    }
}
  
class Shape {
    constructor(color) {
        this.color = color;
    }
    
    draw() {}
    
    setColor(color) {
        this.color = color;
    }
  }
  
class Circle extends Shape {
    draw() {
        return `Drawing a circle in ${this.color.getColor()} color.`;
    }
  }
  
class Square extends Shape {
    draw() {
        return `Drawing a square in ${this.color.getColor()} color.`;
    }
}

const square = new Square(new Red())
console.log(square.draw())

square.setColor(new Blue())
console.log(square.draw())
  