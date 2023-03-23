class Graphic {
    draw() {
        // metoda do rysowania grafiki
    }
  }
  
  class Square extends Graphic {
    draw() {
        // metoda do rysowania kwadratu
    }
  }
  
  class Group extends Graphic {
    constructor() {
        super();
        this.graphics = [];
    }
    
    add(graphic) {
        this.graphics.push(graphic);
    }
    
    remove(graphic) {
        const index = this.graphics.indexOf(graphic);
        if (index !== -1) {
            this.graphics.splice(index, 1);
        }
    }
    
    draw() {
        for (const graphic of this.graphics) {
            graphic.draw();
        }
    }
}
  
// Użycie wzorca Composite

const square1 = new Square();
const square2 = new Square();
const square3 = new Square();

const group1 = new Group();
group1.add(square1);
group1.add(square2);

const group2 = new Group();
group2.add(square3);
group2.add(group1);

group2.draw();