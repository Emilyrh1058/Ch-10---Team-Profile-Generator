const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// CREATE THE PROMPTS FOR MANAGER HERE. USE INQUIRER
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
    // {             // SHOULD I USE "ADD TEAM MEMBER" HERE?
    //   type: "",
    //   name: "",
    //   message: "",
    // },
  ])

  .then(function (response) {
    console.log("Manager section is complete."); // CONSOLE OR RETURN?
  });







