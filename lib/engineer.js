// DEFINE ENGINEER CLASS. MAKE SURE TO EXPORT AND LOOK AT EMPLOYEE.JS
// EMPLOYEE IS REQUIRED

const employee = require('./employee');


class engineer extends employee{
  constructor(id, name, email, github) {
    super(id, name, email);
    this.github = github;
  }

  getPosition() {
    var position = "engineer";
    return position;
  }

  getGitHub() {
    return this.github;
  }
}

module.exports = engineer;