// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [ 
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please write a short description of your project.',
        name: 'description'
    },
    {
        type: 'checkbox',
        message: 'What table of contents items do you want to add?',
        choices: ['Installation', 'Usage', 'Contributing', 'License', 'None'],
        name: 'contents'
    },
    {
        type: 'input',
        message: 'What are the steps required to intstall your project?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Please provide instructions for using the repo.',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Please list your collaborators, if any.',
        name: 'credits'
    },
    {
        type: 'list',
        message: 'What kind of license should your project have?',
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'BSD 3', 'Mozilla', 'None']
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'test'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('Success! Your README.md file has been generated.')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses => {
            console.log('Generating README...');
            writeToFile('README.md', generateMarkdown({ ...inquirerResponses}))
        }));
};

// Function call to initialize app
init();
