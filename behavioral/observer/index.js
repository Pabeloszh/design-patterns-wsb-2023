class Publisher {
    constructor() {
        this.subscribers = [];
    }
  
    subscribe(subscriber) {
        this.subscribers.push(subscriber);
    }
  
    unsubscribe(subscriber) {
        const index = this.subscribers.indexOf(subscriber);
        if (index !== -1) {
            this.subscribers.splice(index, 1);
        }
    }
  
    notify(message) {
        this.subscribers.forEach((subscriber) => {
            subscriber.update(message);
        });
    }
}
  
class Subscriber {
    constructor(name) {
        this.name = name;
    }
  
    update(message) {
        console.log(`${this.name} received message: ${message}`);
    }
}
  
const publisher = new Publisher();

const subscriber1 = new Subscriber('Subscriber 1');
const subscriber2 = new Subscriber('Subscriber 2');

publisher.subscribe(subscriber1);
publisher.subscribe(subscriber2);

publisher.notify('Hello World!');

publisher.unsubscribe(subscriber1);

publisher.notify('Hello again!');