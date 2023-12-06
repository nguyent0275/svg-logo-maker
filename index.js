// importing required packages and modules
const { Triangle, Square, Circle } = require("./lib/shapes");
const fs = require("fs");
const inquirer = require("inquirer");

// an array of inquirer prompt questions for the user
const questions = [
  {
    type: "input",
    message: "What is your company's acronym?",
    name: "text",
    default: "",
  },
  {
    type: "input",
    message: "What color you want the text to be?",
    name: "textColor",
    default: "",
  },
  {
    type: "list",
    message: "What shape do you want your logo to be?",
    name: "shape",
    choices: ["Triangle", "Square", "Circle"],
  },
  {
    type: "input",
    message: "What color do you want the shape to be?",
    name: "shapeColor",
    default: "",
  },
];

// creates the svgString from the user's answers and uses it as an argument for the writeFile function. 
function writeToFile(fileName, answers) {}

// stores the inquirer prompt questions within a function
const promptQuestions = () => {
    return inquirer
      .prompt(questions)
      .then((answers) => {
        console.log(answers);
        // checks user input for at least 3 characters, restarts the prompt if it is invalid
        if (answers.text.length > 3) {
          console.log("Please enter at least 3 characters");
          promptQuestions();
        } else {
          // passes the fileName and user's answers in as parameters to the writeToFile function (index.js:35)
          writeToFile("logo.svg", answers);
        }
      })
      .catch((error) => {
        if (error.isTtyError) {
          console.log("Prompt couldn't be rendered in the current environment")
        } else {
          console.log("Something else went wrong");
        }
      });
  };
  
  // creates a initialize function for the app start
  function init() {
    promptQuestions();
  }
  
  // runs on start
  init();