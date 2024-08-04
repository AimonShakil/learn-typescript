"use strict";
// // Starting Step 3C Inquirer - to take input from user
// import inquirer from "inquirer"
// //Background of Exporting and Importing from a File 
// // Inquirer : Need to install package
// //Login Form to take Input from User
// let userloginInfo = await inquirer.prompt ([
//     {
//         name : "Firstname",  // need to figure out undefined output
//         type : "string",
//         message : "Please enter first name?"
//     },
//     {
//         name : "Education",
//         type : "string",
//         message : "Please enter last qualification?"
//     },
//     {
//         name : "Age",
//         type : "number",
//         message : "Please enter Age"
//     },
// ]);
// console.log(`Your name : ${userloginInfo.FirstName} Education : ${userloginInfo.Education} and Age is ${userloginInfo.Age}`)
// console.table (userloginInfo);
// // 
// let answer = await inquirer.prompt ([{
//     name : "age",
//     type : "number",
//     message : "Enter Your Age: " 
// }]);
// console.log(`InshAllah in ${60 - answer.age} years you will be 60 Years old`);
// //Step 4 Practice Union Literals
// //Narrowing Concept in Union Literals:  as functions specific for strings not available if input given is of Number
// let myName : string | null;
// myName = "Aimon";
// console.log(myName);
// // myName = "Null";
// console.log(myName);
let myAge;
myAge = "Ninteen"; //narrowing, Need to understand narrowing concept
console.log(myAge.toUpperCase());
console.log(myAge.toString());
console.log(myAge.toLowerCase());
// Example 2
let newAge = Math.random() > 0.6 ? "Khan" : 60;
//newAge.toLowerCase();//Error: Transpiler cannot narrow
if (newAge === "Khan") {
    // Type of newAge: string
    newAge.toUpperCase(); // Can be called
}
if (typeof newAge === "string") {
    // Type of newAge: string
    newAge.toUpperCase(); // Can be called
}
typeof newAge === "string"
    ? newAge.toUpperCase() // Ok: string
    : newAge.toFixed(); // Ok: number
// Example
let age;
age = 90; //OK
age = "died"; //OK
age = "unknown"; //OK
//age = "living";//Error
// 
let aimon;
aimon = "aimon";
// aimon = "78" or "Khan";  // Error
//Example
let yourName = Math.random() > 0.6 ? "Hira" : undefined; // conditional Operator or Ternary operator
if (yourName) {
    yourName.toUpperCase();
}
console.log(yourName);
let myData;
function createUser(user) {
    return { name: "", email: "", isActive: true }; // here not just return object but its values
}
createUser({ name: "", email: "", isActive: true }); // whever createuser will be used anywhere it asks for all properties
let userScore = 1010;
let average = 'Ninety Eight Percent';
console.log(`User got ${userScore} with total Average : ${average}`);
let signal;
function Traffic_light(signal) {
    for (let i = 0; i > 10; i++)
        if (signal === "Red") {
            console.log("Please Stop!");
        }
        else if (signal === "Yellow") {
            console.log("Please wait");
        }
        else {
            console.log("Go!");
        }
}
Traffic_light("Red");
//Rest example in Union literals file for further practice
let yourName1 = Math.random() > 0.6 ? "Hira" : undefined;
//if (yourName === "string") {
// if (yourName === "Hira")
if (yourName1 === " ") {
    yourName1.toUpperCase(); // Ok: string
}
