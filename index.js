const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// CREATE THE PROMPTS FOR MANAGER HERE. USE INQUIRER
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
      message: "Enter ID number:",
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
    {             
      type: "confirm",
      name: "addEmployee",
      message: "Would you like to add an employee?",
      validate: (addEmployee) => {
        if (addEmployee) {return true;} 
        else {return ""}
      }
    },
    {
      type: "input",
      name: "employee",
      message: "Please list the names of the contributors.",
      when: ({ confirmContributors }) => {
          if (confirmContributors) {return true;} 
          else {return false;}
      }
  },


  ])

  .then(function (response) {
    console.log("Manager section is complete."); // CONSOLE OR RETURN?
  });
};

function employeePrompt() {
  inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "Enter employee's name:",
    },
    {
      type: "input",
      name: "id",
      message: "Enter ID number:",
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
    employee = response;
    if (response.position === "Intern") {
      internPrompt();
    } else {
      engineerPrompt();
    }
  })
};
