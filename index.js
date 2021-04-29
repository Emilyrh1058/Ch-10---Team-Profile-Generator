const inquirer = require("inquirer");
const fs = require("fs");
const generatePage = require('./src/page-template');
const Manager = require("./lib/manager");
const Employee = require("./lib/employee")
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
let employeeArr = [];
let employee = {};



// BEGIN EMPLOYEE INFO PROMPT
function managerPrompt() {
inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "Enter manager's name:",
    },
    {
      type: "input",
      name: "id",
      message: "Enter manager ID number:",
    },
    {
      type: "input",
      name: "email",
      message: "Enter manager's email:",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is their office number?",
    },
  ])

  .then(function (response) {
    console.log("Manager section is complete.");
    employee = response;
    const manager = new Manager (
      employee.name,
      employee.id,
      employee.email,
      employee.officeNumber,
    );
    employeeArr.push(manager);  

    nextStep();
  });
};

function nextStep() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "option",
        message: "What would you like to do next?",
        choices: ["Add another employee", "Quit"],
      },
    ])

    .then(function (response) {
      if (response.option === "Add another employee") {
        employeePrompt();
      } else {
        console.log(employeeArr);
        return generatePage(employeeArr);
      }
    })
}

function employeePrompt() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "employee",
        message: "Please enter the name of employee you'd like to add:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter employee ID number:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the employee's email:",
      },
      {
        type: "list",
        name: "position",
        message: "What is their current position?",
        choices: ["Engineer", "Intern"],
      },
  ])

  .then(function (response) {
    if (response.position === "Engineer") {
      engineerPrompt();
    } else {
      internPrompt();
    }
  })
};

function engineerPrompt() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "github",
        message: "Enter employee's github username:",
      },
  ])
  .then(function (response) {
    employee.github = response.github;
    const engineer = new Engineer(
      employee.name,
      employee.id,
      employee.email,
      employee.github
    );
    employeeArr.push(engineer); 
    console.log("Engineer information collected successfully!")
    nextStep();
  });
};

function internPrompt() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "school",
        message: "Enter intern's school:",
      },
  ])
  .then(function (response) {
    employee.school = response.school;
    const intern = new Intern(
      employee.name,
      employee.id,
      employee.email,
      employee.school
    );
    employeeArr.push(intern) 
    console.log("Intern information collected successfully!")
    nextStep();
  });
};


managerPrompt();

// RENDER THE HTML PAGE. USE FUNCTION, FS, EMPLOYEE ARR
// RENDER EMAIL AND GITHUB LINKS