// DEFINE MANAGER CLASS. MAKE SURE TO EXPORT AND LOOK AT EMPLOYEE.JS
// EMPLOYEE IS REQUIRED

const Employee = require('./Employee');

// REMEMBER THAT MANAGER IS "ABOVE" EMPLOYEE, SO IT SHOULD INHERIT INFO
// USE 'EXTEND' HERE

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  
  getPosition() {
    var position = "Manager";
    return position;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;