// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// const generateReadMe = require('./src/readme-template');


// TODO: Create an array of questions for user input
const questions = () => {
 return inquirer.prompt([
  {
   type: 'input',
   name: 'projectName',
   message: 'What is your project title?',
   validate: projectNameInput => {
    if (projectNameInput) {
      return true;
    }
    else {
      console.log('Please enter your project name');
      return false;
    }
  }
  },
  {
   type: 'input',
   name: 'description',
   message: 'Give a clear project description.'
  },
  {

  }
 ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
 questions();
}

// Function call to initialize app
init();
