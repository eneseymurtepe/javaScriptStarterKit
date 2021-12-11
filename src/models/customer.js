import User from "./user.js";

export default class Customer extends User {
  constructor(id, firstName, lastName, city, age, creditCardNumber) {
    super(id, firstName, lastName, city, age); // User'da olan alanları, super ile otomatik olarak çektik.
    this.creditCardNumber = creditCardNumber;
  }
}