// TODO: Include packages needed for this application
const inquirer = require("./gitignore/node_modules/inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const api = require("./utils/api");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: " What is the project title?"
    },
    {
        type: "input",
        name: "badge",
        message: " Provide badges links?"
    },
    {
        type: "input",
        name: "description",
        message: " provide project description?"
    },
    {
        type: "input",
        name: "installation",
        message: " provide installation instructions?"
    },
    {
        type: "input",
        name: "usage",
        message: " What is the project usage?"
    },
    {
        type: "input",
        name: "licence",
        message: " Provide the project licence on the badge link?"
    },
    {
        type: "input",
        name: "contributions",
        message: " Who contributed into the project?"
    },
    {
        type: "input",
        name: "test",
         message: " Project tests"
    },
    {
        type: "input",
        name: "Github",
        message: " provide Github username"
    },
    {
        type: "input",
        name: "repo",
        message: " provide repo link"
    }
];

// TODO: Create a function to write README file
function validateContributors(num)
{
   var reg = /^\d+$/;
   return reg.test(num) || "Please enter a valid number";
}

function promptUser(){
    return inquirer.prompt(questions)
}


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if (err){
            console.error(err);
        }
    });
}

// TODO: Create a function to initialize app
async function init() {
    console.log("Welcome to the README Generator!")
    try {
        const answers = await promptUser();
        const user = await api.getUser(answers.GitHubUsername);
        const readMe = generateMarkdown(answers, user);
        writeToFile("GeneratedREADME.md", readMe);
        console.log("**README file successfully created!**");
        
    }catch(err) {
        console.log(err);
        
    }
    

}

// Function call to initialize app
init();
