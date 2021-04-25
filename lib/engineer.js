// DEFINE ENGINEER CLASS. MAKE SURE TO EXPORT AND LOOK AT EMPLOYEE.JS
// EMPLOYEE IS REQUIRED

const Employee = require('./Employee');


class Engineer extends Employee{
  constructor(name, id, email, github) {
    super(name, id, email);
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