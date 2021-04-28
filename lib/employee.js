// DEFINE EMPLOYEE INFO

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.position = "Employee";
  };

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  getPosition() {
    return this.position
  };
}

module.exports = Employee;

