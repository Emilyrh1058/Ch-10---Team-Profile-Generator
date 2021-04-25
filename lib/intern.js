// DEFINE MANAGER CLASS. MAKE SURE TO EXPORT AND LOOK AT EMPLOYEE.JS
// EMPLOYEE IS REQUIRED

const employee = require('./employee');

class intern extends employee {
  constructor(id, name, email, school) {
    super(id, name, email);
    this.school - school;
  }

  getPosition() {
    var position = "intern";
    return position;
  }

  getSchool() {
    return this.school;
  }
}  

module.exports = intern;