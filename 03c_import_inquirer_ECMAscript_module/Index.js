"use strict";
// Inquirer & Chalk packages
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const prompts_1 = require("@inquirer/prompts"); /* Now we can use inquirer's functionality
// Syntax inquirer.prompt([ Your prompt questions here ]);  */
const inquirer_1 = __importDefault(require("inquirer"));
//Prog 1
const answers = await (0, prompts_1.input)({ message: 'How Old are you?' }); // curly brace as an object
console.log(chalk_1.default.bgBlue(`Insh Allah in 60 - ${answers} years you will be 60 years old`));
//Prog 2
let answers1 = await (0, prompts_1.number)({ message: "Enter your Age: " });
//console.log(`Insha Allah, in " + ${60 - answers1} + " years you will be 60 years old.`);
//Prog 3
const Solution = await ({ message: 'Please input number?' });
console.log(chalk_1.default.redBright(`Difference of number will be ${1000 - Solution.number}`));
//Prog 4
let userInput = await inquirer_1.default.prompt([
    {
        "name": "userFullName",
        "type": "string",
        "message": "Enter your Full Name \n"
    }
]);
console.log(`Your Full Name is ${userInput.userFullName}`);
//Prog 5 Making a Login Form and getting multiple Values
let user_Input = await inquirer_1.default.prompt([
    {
        "name": "First Name",
        "type": "string",
        "message": "Please Enter you First Name \n",
    },
    {
        "name": "Last Name",
        "type": "string",
        "message": "Please Enter you Last Name \n",
    },
    {
        "name": "email",
        "type": "string",
        "message": "Please Enter you email address \n",
    },
]);
console.log(`Your Full Name is ${user_Input.FirstName}`);
console.table(user_Input);
// prompt sycn library
// Prog 6
