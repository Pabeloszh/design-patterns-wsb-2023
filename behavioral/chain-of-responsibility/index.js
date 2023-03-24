class Order {
    constructor(products) {
        this.products = products;
    }
}
  
class OrderValidator {
    setNext(validator) {
      this.nextValidator = validator;
    }
  
    validate(order) {
        if (this.nextValidator) {
            return this.nextValidator.validate(order);
        }
        return true;
    }
}
  
class PriceValidator extends OrderValidator {
    validate(order) {
        for (const product of order.products) {
            if (product.price <= 0) {
            console.log(`Error: invalid price for product ${product.name}`);
            return false;
            }
        }
        return super.validate(order);
    }
}
  
class QuantityValidator extends OrderValidator {
    validate(order) {
        for (const product of order.products) {
            if (product.quantity <= 0) {
                console.log(`Error: invalid quantity for product ${product.name}`);
                return false;
            }
        }
        return super.validate(order);
    }
}
  
class DescriptionValidator extends OrderValidator {
    validate(order) {
        for (const product of order.products) {
            if (!product.description) {
                console.log(`Error: missing description for product ${product.name}`);
                return false;
            }
        }
        return super.validate(order);
    }
}
  
const order = new Order([
    { name: 'Product 1', price: 10, quantity: 2, description: 'Description 1' },
    { name: 'Product 2', price: 0, quantity: 3, description: 'Description 2' },
    { name: 'Product 3', price: 20, quantity: 0, description: 'Description 3' },
    { name: 'Product 4', price: 15, quantity: 1, description: '' }
]);

const priceValidator = new PriceValidator();
const quantityValidator = new QuantityValidator();
const descriptionValidator = new DescriptionValidator();

priceValidator.setNext(quantityValidator);
quantityValidator.setNext(descriptionValidator);

const isValid = priceValidator.validate(order);
console.log(`Order is${isValid ? '' : ' not'} valid.`);