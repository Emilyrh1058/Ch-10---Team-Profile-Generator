// DEFINE ENGINEER CLASS. MAKE SURE TO EXPORT AND LOOK AT EMPLOYEE.JS
// EMPLOYEE IS REQUIRED

const Employee = require('./Employee');


class Engineer extends Employee{
  constructor(id, name, email, github) {
    super(id, name, email);
    this.github = github;
  }

  getPosition() {
    var position = "Engineer";
    return position;
  }

  getGitHub() {
    return this.github;
  }
}

module.exports = Engineer;