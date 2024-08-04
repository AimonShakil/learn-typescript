
// Practice Question
import inquirer from "inquirer";
let fName = await inquirer.prompt([
    {
        name: "fn",
        type: "string",
        message: "Please enter your full name"
    },
]);
let userName = "@" + fName.fn + fName.fn.length;
console.log(userName);








// Inquirer & Chalk packages

import chalk from "chalk";
import { input, number } from '@inquirer/prompts' /* Now we can use inquirer's functionality    
// Syntax inquirer.prompt([ Your prompt questions here ]);  */

import inquirer from 'inquirer';

//Prog 1
const answers = await input({message: 'How Old are you?'}) // curly brace as an object

console.log(chalk.bgBlue (`Insh Allah in 60 - ${answers} years you will be 60 years old`)); 

//Prog 2
let answers1 = await number ({message: "Enter your Age: "});

//console.log(`Insha Allah, in " + ${60 - answers1} + " years you will be 60 years old.`);


//Prog 3
const Solution = await ({ message : 'Please input number?'})
console.log(chalk.redBright(`Difference of number will be ${1000 - Solution.number}` ));

//Prog 4

let userInput = await inquirer.prompt([
{
    "name": "userFullName",
    "type" : "string",
    "message" : "Enter your Full Name \n" 

}
]);
console.log(`Your Full Name is ${userInput.userFullName}`)


//Prog 5 Making a Login Form and getting multiple Values

let user_Input = await inquirer.prompt([
{
    "name": "First Name",
    "type" : "string",
    "message" : "Please Enter you First Name \n",
},

{
    "name": "Last Name",
    "type" : "string",
    "message" : "Please Enter you Last Name \n",
},

{
    "name": "email",
    "type" : "string",
    "message" : "Please Enter you email address \n",

},

]);
console.log(`Your Full Name is ${user_Input.FirstName}`) 
console.table(user_Input); 


// prompt sycn library
// Prog 6


