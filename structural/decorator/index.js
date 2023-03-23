class Order {
    getPrice() {
        return 1000;
    }
}
  
class OrderDecorator {
    constructor(order) {
        this.order = order;
    }
  
    getPrice() {
        return this.order.getPrice();
    }
}
  
class LoyaltyDiscount extends OrderDecorator {
    getPrice() {
        return this.order.getPrice() * 0.9;
    }
}
  
class FreeShipping extends OrderDecorator {
    getPrice() {
        const price = this.order.getPrice();
        if (price > 1000) {
            return price;
        } else {
            return price + 100; // dodatkowa opłata za wysyłkę
        }
    }
}

const order = new Order();
console.log(order.getPrice());

const orderWithLoyaltyDiscount = new LoyaltyDiscount(order);
console.log(orderWithLoyaltyDiscount.getPrice());

const orderWithFreeShipping = new FreeShipping(order);
console.log(orderWithFreeShipping.getPrice());

const orderWithLoyaltyDiscountAndFreeShipping = new FreeShipping(new LoyaltyDiscount(order));
console.log(orderWithLoyaltyDiscountAndFreeShipping.getPrice()); // 990 (10% zniżki + darmowa dostawa)
  