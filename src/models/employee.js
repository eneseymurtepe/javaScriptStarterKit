import User from "./user.js";

export default class Employee extends User {
  constructor(id, firstName, lastName, city, age, salary) {
    super(id, firstName, lastName, city, age); // User'da olan alanları, super ile otomatik olarak çektik.
    this.salary = salary;
  }
}