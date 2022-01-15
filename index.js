// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateReadMe = require('./utils/generateMarkdown');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = () => {
 return inquirer.prompt([
  {
   type: 'input',
   name: 'projectName',
   message: 'What is your project title? (Required)',
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
   message: 'Describe your project.'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are your installation instructions?'
  },
  {
    type: 'input',
    name: 'usageInfo',
    message: 'What can you tell me about the usage information?'
  },
  {
    type: 'input',
    name: 'feature',
    message: 'Do you want this to be featured?'
  },
  {
    type: 'list',
    name: 'license',
    message: 'What type of license is this?',
    choices: ['MIT', 'Boost', 'None']
  },
  {
    type: 'input',
    name: 'contributions',
    message: 'What did you contribute?'
  },
  {
    type: 'input',
    name: 'testInstructions',
    message: 'What are your test instructions?'
  }
 ])
};

// TODO: Create a function to write README file
function writeToFile(data) {
  fs.writeFile('./dist/newThing.md', data, err => {
    if (err) throw err;
      console.log('page was created!');
  });
  
};

// TODO: Create a function to initialize app
function init() {
  questions()
  .then(answers => {
    if (answers) {
      console.log('success');
    } else {
      console.log('error');
    }

    const generate = generateReadMe(answers);

    writeToFile(generate);
  });
}

// Function call to initialize app
init();
