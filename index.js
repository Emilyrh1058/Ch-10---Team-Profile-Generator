const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const employeeArr = [];
let employee = {};

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
    // {             
    //   type: "confirm",
    //   name: "addEmployee",
    //   message: "Would you like to add an employee?",
    //   validate: (addEmployee) => {
    //     if (addEmployee) {employeePrompt()} 
    //     else return
    //   },
    // },
    // {
    //   type: "input",
    //   name: "employee",
    //   message: "Please enter the name of employee you'd like to add:",
    //   when: ({ addEmployee }) => {
    //       if (addEmployee) {return true;} 
    //       else {return false;}
    //   }
    // },
  ])
  .then(function (response) {
    // console.log("Manager section is complete.");
    employee = response;
    const manager = new Manager (
      employee.name,
      employee.id,
      employee.email,
      employee.officeNumber,
    );
    employeeArr.push(manager);  //PUSHES EMPLOYEE INFO TO THE MANAGER FUNCTION
    // employeePrompt(); //CALLS THE EMPLOYEE PROMPT IF "Y" WAS SELECTED
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
        return;
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
    employeeArr.push(engineer); //PUSHES EMPLOYEE INFO TO ENGINEER
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
    employeeArr.push(intern) //PUSHES EMPLOYEE INFO TO INTERN
    console.log("Intern information collected successfully!")
    nextStep();
  });
};

// RENDER THE HTML PAGE. USE FUNCTION, FS, EMPLOYEE ARR
// RENDER EMAIL AND GITHUB LINKS

managerPrompt();
