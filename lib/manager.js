const Employee = require('./employee');

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.position = "Manager"
  }
  
  getPosition() {
    return this.position;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;