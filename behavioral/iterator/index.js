class Fruit {
    constructor(name) {
        this.name = name
    }
    getName() {
        return this.name
    }
}

class FruitIterator {
    constructor(data) {
      this.data = data;
      this.index = 0;
    }
  
    first() {
      this.reset();
      return this.current();
    }
  
    previous() {
      if (this.index > 0) return this.data[this.index--];
    }
  
    current() {
      return this.data[this.index];
    }
  
    next() {
      if (this.hasMore()) return this.data[this.index++]; 
    }
  
    last() {
      this.index = this.data.length - 1;
      return this.current();
    }
  
    each(callback) {
      for (this.first(); this.hasMore(); this.next()) {
        callback(this.current());
      }
    }
  
    reset() {
      this.index = 0;
    }
  
    hasMore() {
      return this.index < this.data.length;
    }
}

const fruitsArray = ["apple", "banana", "cherry", "orange", "kiwi", "grapefruit", "pear", "plum", "mango", "watermelon"].map((fruit) => new Fruit(fruit))
const fruitsIterator = new FruitIterator(fruitsArray)

