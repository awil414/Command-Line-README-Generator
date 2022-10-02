// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

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
        type: 'list',
        message: 'What table of contents items do you want to add?',
        choices: ['Installation', 'Usage', 'Credits', 'License', 'None'],
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
        name: 'contributing'
    },
    {
        type: 'list',
        message: 'What kind of license should your project have?',
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'BSD 3', 'GPL 3.0', 'Mozilla', 'None']
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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
