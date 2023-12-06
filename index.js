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
    message: "What color you want the text to be?(keyword/hexadecimal)",
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
    message: "What color do you want the shape to be?(keyword/hexadecimal)",
    name: "shapeColor",
    default: "",
  },
];

// creates the svgString from the user's answers and uses it as an argument for the writeFile function. 
function writeToFile(fileName, answers) {
    // variable starts as empty, will be passed a value from the conditional statement
  let userShape;
  // checks the user input against string values of the predetermined shapes and then passes in the user's shapeColor and shape to the new Shape() class
  // renders a template literal containing the <g> tag, shape text, polygon points, and the shape color.
  // the return template literal is coming from the class constructor in the "/lib/shapes.js"
  if (answers.shape === "Triangle") {
    let triangle = new Triangle(answers.shapeColor, answers.shape);
    userShape = triangle.render();
  } else if (answers.shape === "Square") {
    let square = new Square(answers.shapeColor, answers.shape);
    userShape = square.render();
  } else {
    let circle = new Circle(answers.shapeColor, answers.shape);
    userShape = circle.render();
  }

  // stores all the svg parameters into an object of template literals and variables
  let svgObject = {
    version: `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`,
    shape: userShape,
    textParams: `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">`,
    text: `${answers.text}</text></g></svg>`,
  };

  // adds them all to the empty svg string
  let svgString = `${svgObject.version}${svgObject.shape}${svgObject.textParams}${svgObject.text}`;

  // writes the svgString to a logo.svg which was passed in from the writeToFile function from (index.js:81)
  fs.writeFile("logo.svg", svgString, (err) => {
    if (err) throw err;
  });
}

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