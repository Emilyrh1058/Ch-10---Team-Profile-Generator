// DEFINE CLASSES FOR EMPLOYEE INFO

class employee {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

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
    var position = "employee";
    return position;
  }
}

module.exports = employee

