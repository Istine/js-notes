class Store {
  #paymentProcessor;
  constructor(paymentProcessor) {
    this.#paymentProcessor = paymentProcessor;
  }

  payForItem(item, amountInDollars) {
    this.#paymentProcessor.pay(item, amountInDollars);
  }
}

class StripeProcessor {
  constructor(user) {
    this.stripe = new Stripe(user);
  }

  pay(item, amount) {
    this.stripe.makePayment(item, amount);
  }
}

class PaypalProcessor {
  constructor(user) {
    this.user = user;
    this.payPal = new Paypal();
  }

  pay(item, amount) {
    this.payPal.makePayment(this.user, item, amount);
  }
}

class Stripe {
  constructor(user) {
    this.user = user;
  }

  makePayment(item, amount) {
    console.log(`${amount} has been paid for ${item} by ${this.user}`);
  }
}

class Paypal {
  makePayment(user, item, amount) {
    console.log(`${amount} has been paid for ${item} by ${user}`);
  }
}

const store = new Store(new StripeProcessor("John"));
const store2 = new Store(new PaypalProcessor("Bob"));
store.payForItem("Harry Potter Book", 2000);
store2.payForItem("Meet the Johnson's Movie", 30000);
