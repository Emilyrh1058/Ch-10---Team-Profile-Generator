// DEFINE MANAGER CLASS. MAKE SURE TO EXPORT AND LOOK AT EMPLOYEE.JS
// EMPLOYEE IS REQUIRED

const employee = require('./employee');

// REMEMBER THAT MANAGER IS "ABOVE" EMPLOYEE, SO IT SHOULD INHERIT INFO
// USE 'EXTEND' HERE

class manager extends employee {
  constructor(id, name, email, officeNumber) {
    super(id, name, email);
    this.officeNumber = officeNumber;
  }
  
  getPosition() {
    var position = "manager";
    return position;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}


module.exports = manager;