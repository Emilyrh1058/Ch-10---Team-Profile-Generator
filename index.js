const inquirer = require("inquirer");
const fs = require("fs");
const generateHtml = require("./src/page-template");
const Manager = require("./lib/manager");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
let employeeArr = [];
// let employee = {};

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
      const manager = new Manager(
        response.name,
        response.id,
        response.email,
        response.officeNumber
      );
      employeeArr.push(manager);

      nextStep();
    });
}

function nextStep() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "option",
        message: "What would you like to do next?",
        choices: ["Add an Engineer", "Add an Intern", "Quit"],
      },
    ])

    .then(function (response) {
      if (response.option === "Add an Engineer") {
        engineerPrompt();
      } else if (response.option === "Add an Intern") {
        internPrompt();
      } else {
        console.log(employeeArr);
        console.log (generateHtml(employeeArr));
      }

    });

}

// function employeePrompt() {
//   inquirer
//     .prompt([
//       {
//         type: "input",
//         name: "employee",
//         message: "Please enter the name of employee you'd like to add:",
//       },
//       {
//         type: "input",
//         name: "id",
//         message: "Enter employee ID number:",
//       },
//       {
//         type: "input",
//         name: "email",
//         message: "Enter the employee's email:",
//       },
//       {
//         type: "list",
//         name: "position",
//         message: "What is their current position?",
//         choices: ["Engineer", "Intern"],
//       },
//   ])

//   .then(function (response) {
//     if (response.position === "Engineer") {
//       engineerPrompt();
//     } else {
//       internPrompt();
//     }
//   })
// };

function engineerPrompt() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
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
        type: "input",
        name: "github",
        message: "Enter employee's github username:",
      },
    ])
    .then(function (response) {
      const engineer = new Engineer(
        response.name,
        response.id,
        response.email,
        response.github
      );
      employeeArr.push(engineer);
      console.log("Engineer information collected successfully!");
      nextStep();
    });
}

function internPrompt() {
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
        type: "input",
        name: "school",
        message: "Enter intern's school:",
      },
    ])
    .then(function (response) {
      const intern = new Intern(
        response.name,
        response.id,
        response.email,
        response.school
      );
      employeeArr.push(intern);
      console.log("Intern information collected successfully!");
      nextStep();
    });
}

managerPrompt();

// RENDER THE HTML PAGE. USE FUNCTION, FS, EMPLOYEE ARR
// RENDER EMAIL AND GITHUB LINKS
