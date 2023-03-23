class Pizza {
    constructor(name) {
      this.name = name;
    }
  
    prepare() {
      console.log(`Preparing ${this.name} pizza`);
    }
  
    bake() {
      console.log(`Baking ${this.name} pizza`);
    }
}

class MargheritaPizza extends Pizza {
    constructor() {
      super("margherita");
    }
}
  
class CheesePizza extends Pizza {
    constructor() {
      super("cheese");
    }
}
  
class PepperoniPizza extends Pizza {
    constructor() {
      super("pepperoni");
    }
}
  
class VeggiePizza extends Pizza {
    constructor() {
      super("veggie");
    }
}
  
class PizzaFactory {
    static createPizza(type) {
        switch(type) {
            case 'cheese':
                return new CheesePizza()
            case 'pepperoni':
                return new PepperoniPizza()
            case 'veggie':
                return new VeggiePizza()
            default: 
                return new MargheritaPizza()
        }
    }
}

const cheesePizza = PizzaFactory.createPizza("cheese");
const pepperoniPizza = PizzaFactory.createPizza("pepperoni");