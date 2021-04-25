// DEFINE MANAGER CLASS. MAKE SURE TO EXPORT AND LOOK AT EMPLOYEE.JS
// EMPLOYEE IS REQUIRED

const Employee = require('./Employee');

class Intern extends Employee {
  constructor(id, name, email, school) {
    super(id, name, email);
    this.school - school;
  }

  getPosition() {
    var position = "Intern";
    return position;
  }

  getSchool() {
    return this.school;
  }
}  

module.exports = Intern;