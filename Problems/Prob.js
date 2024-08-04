"use strict";
//++++++++++++++++++++ PROBLEMS
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* 1 : Temperature Conversion: Create a TypeScript program that converts temperatures from Celsius to Fahrenheit /n
and vice versa.Prompt the user to enter a temperature value and perform the conversion. */
const inquirer_1 = __importDefault(require("inquirer"));
let tempertureData = await inquirer_1.default.prompt([{
        name: "Temp",
        type: "number",
        message: " Please input todays Temperature"
    }]);
function CtoFconversion(tempertureData) {
    let Fahrenheit = (2 * tempertureData) + 30;
    console.log(Fahrenheit);
    return Fahrenheit;
}
let result = CtoFconversion(20);
function FtoCconversion(temF) {
    let Celsius = (temF - 30) / 2;
    console.log(Celsius);
    return Celsius;
}
let result2 = FtoCconversion(84);
//Circle Area Calculator: Write a program that calculates the area of a circle given its radius./n
// Prompt the user to enter the radius and compute the area using the formula area = π * radius^2.
function C_AreaCalc(radius) {
    let area = Math.PI * radius * radius;
    console.log(area);
    return area;
}
let results = C_AreaCalc(30);
//Conditional Variable Usage:
//Grade Calculator: Write a program that accepts a numeric grade from the user and displays the corresponding /n
//letter grade (A, B, C, D, or F) based on the grading criteria.
function GradeCalc(marks) {
    if (marks <= 30) {
        console.log("Your are passed with grade F");
    }
    else if (marks <= 50) {
        console.log("Your are passed with grade D");
    }
    else if (marks <= 65) {
        console.log("Your are passed with grade C");
    }
    else if (marks <= 80) {
        console.log("Your are passed with grade B");
    }
    else if (marks <= 95) {
        console.log("Your are passed with grade A");
    }
}
let reultss = GradeCalc(79);
//Q ; Get user to input a number using prompt ( "Enter a Number"), check if number is multiple of 5 or not?
// inquirer.prompt returns a promise, and you cannot use the await keyword outside of an asynchronous function. You need to wrap the code in an async function to use await.
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        let numInput = yield inquirer_1.default.prompt([
            {
                name: "num",
                type: "number",
                message: "Please Enter a Number",
            }
        ]);
        if (numInput.num % 5 === 0) {
            console.log(`Number : ${numInput.num} is a multiple of 5`);
        }
        else {
            console.log(`Number : ${numInput.num} is not a multiple of 5`);
        }
    });
}
main();
//Write a Code which gives grades to students according to their scores
function studentResult() {
    return __awaiter(this, void 0, void 0, function* () {
        let grades = yield inquirer_1.default.prompt([{
                name: "answer",
                type: "number",
                message: "Enter your Marks Please"
            }]);
        let scores = Number(grades.answer); // means it user input seventy two it converts input to number JS function
        if (scores >= 80 && scores <= 100) {
            console.log(` Congrats!! You have scored Grade : A `);
        }
        else if (scores >= 70 && scores <= 89) {
            console.log(` Congrats!! You have scored Grade : B `);
        }
        else if (scores >= 60 && scores <= 69) {
            console.log(` Congrats!! You have scored Grade : C `);
        }
        else if (scores >= 50 && scores <= 59) {
            console.log(` Congrats!! You have scored Grade : D `);
        }
        else if (scores >= 0 && scores <= 49) {
            console.log(` Congrats!! You have scored Grade : F`);
        }
        else {
            console.log("You have Failed");
        }
    });
}
;
studentResult();
for (let i = 0; i <= 10; i++) {
    console.log(`outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) { // talking same i inside same scope is problematic needs a j 
        //console.log(`inner loop value: ${j} and outer loop value ${i}`);
        console.log(i + '*' + j + ' = ' + i * j); // Prints tables upto 10
    }
    ;
    // Ticketing system Program , Changed prompt here and using 
    let country = ["Pakistan", "China", "Canada"];
    let voter_age = Math.round(Math.random() * 90);
    let domicile = ["Sindh", "Punjab", "KPK", "Balouchistan"];
    if (country[0] === "Pakistan") {
        if (voterage >= 18) {
            console.log(`Voter ager is : ${voter_age} and Here is your vote`);
        }
        else {
            console.error("Age restriction");
        }
    }
    else {
        console.log("Invalid country");
    }
    /*1. Age Verification:
    Write a program that prompts the user to enter their age. If the age is greater than or equal /n
    to 18, display "You are eligible to vote," otherwise, show "You are not eligible to vote yet."
    */
    let ages = Math.round(Math.random()); //  or can be a hard coded number
    if (ages >= 18) {
        console.log('You are eligible to vote');
        let show = ages;
    }
    else {
        console.log('You are not eligible to vote yet');
    }
    //2. Temperature Analyzer:
    /*Create a temperature analyzer that prompts the user to input the current temperature. /n
    If the temperature is greater than 30 degrees Celsius, display "It's a hot day!"; if it's between 20 /n
    and 30 degrees Celsius, show "The weather is pleasant"; and for temperatures below 20 degrees Celsius, /n
    display "It's a bit chilly today." */
    import inquirer from "inquirer";
    function tempAnalyzer() {
        return __awaiter(this, void 0, void 0, function* () {
            function tempAnalyzer() {
                return __awaiter(this, void 0, void 0, function* () {
                    let currentTemp = yield inquirer_1.default.prompt([{
                            name: "temp",
                            type: "number",
                            message: "Please enter temperature in Centigrade"
                        }]);
                    let tem = currentTemp.number;
                    if (tem >= 30) {
                        console.log('It\'s a Hot day!');
                    }
                    else if (tem >= 20) {
                        console.log('The weather is pleasant');
                    }
                    else {
                        console.log('It\'s a bit chilly today');
                    }
                });
            }
        });
    }
    tempAnalyzer();
    // Another simple Program
    let num1 = 9;
    if (num1 >= 10) {
        console.log('Number is greater than and equal to 10');
    }
    else {
        console.log('Number is Less than 10');
    }
    // 3. Odd or Even: (num % 2 === 0)
    // Develop a program that accepts a number from the user and checks if it's odd or even. If the number is even, output /n 
    //"The number is even"; if it's odd, display "The number is odd."
    function evenOdd() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield inquirer_1.default.prompt([{
                    name: "num",
                    type: "number",
                    message: "Please enter a number"
                }]);
            let num = result.num; // Extract the numeric value from the object, cannot directly perform methametical operation on Object
            if (num % 2 === 0) { //we can check if a number is even or odd using the modulo operator (%). When a number is divided/n 
                // by 2, if the remainder is 0, the number is even; otherwise, it's odd.
                console.log('The Number is even');
            }
            else {
                console.log('The Number is odd');
            }
        });
    }
    evenOdd();
    // 4 . Grade Calculator:
    // Write a grade calculator that prompts the user to enter a numeric grade. Based on the entered grade, show the /n 
    // corresponding letter grade using if-else constructs (e.g., A, B, C, D, F).
    function gradeCalc(numGrade) {
        if (numGrade >= 90) {
            console.log(' Congrats! You have secured Grade A');
        }
        else if (numGrade >= 85) {
            console.log(' Congrats! You have secured Grade B');
        }
        else if (numGrade >= 65) {
            console.log(' Congrats! You have secured Grade C');
        }
        else if (numGrade >= 45) {
            console.log(' Congrats! You have secured Grade D');
        }
        else if (numGrade >= 30) {
            console.log(' Congrats! You have secured Grade F');
        }
        else {
            console.log('You are Fail');
        }
        return numGrade;
    }
    gradeCalc(55);
    // Username Validator:
    // Create a program that prompts the user to enter a username. If the username matches a predefined value (e.g., "Admin")/n 
    // , display "Access granted"; otherwise, show "Access denied."
    function namevalidator() {
        return __awaiter(this, void 0, void 0, function* () {
            let userName = yield inquirer_1.default.prompt([{
                    name: "uname",
                    type: "string",
                    message: " Please enter a username"
                }]);
            let uName = userName.uname;
            if (uName == 'Admin') {
                console.log('Access granted');
            }
            else {
                console.log("Access Denied");
            }
        });
    }
    ;
    namevalidator();
    //5.  Nested If: 
    /* Syntax for Nested IF:
    if (condition1) {
        // Code block for condition1 being true
        
        if (condition2) {
            // Code block for condition2 being true
            // More nested if statements if needed
        
        } else {
            // Code block if condition2 is false
        }
    }
    else {
        // Code block if condition1 is false
    } */
    // nested if statements are constructed by placing one if statement inside another if statement or inside an else or /n 
    // else if block. This allows for multiple levels of conditions to be evaluated.
    // Example 
    // Let's consider an example where nested if statements are used to check conditions based on a person's age /n 
    // and their eligibility for certain activities:
    let age = 22;
    let isAdult = false;
    let canVote = false;
    if (age >= 18) {
        isAdult = true;
        if (age >= 22) {
            canVote = true;
            console.log("You can vote and drive a car.");
        }
        else if (age <= 21) {
            console.log("You are an adult but cannot drive a car.");
        }
    }
    else {
        console.log("You are not an adult yet.");
    }
    /*
    •	The outer if statement checks if the person is an adult (age 18 or older).
    •	If the person is an adult, the nested if statement checks if they are old enough to vote (age 21 or older).
    •	Based on these conditions, different messages are logged to the console.
    •	Additionally, two boolean variables (isAdult and canVote) are used to track the eligibility status. */
    //
    function checkTemperature(temperature) {
        if (temperature > 0) {
            if (temperature < 100) {
                console.log("The water is liquid.");
            }
            else if (temperature >= 100 && temperature <= 150) {
                console.log("The water is boiling.");
            }
        }
        else {
            console.log("The water is frozen.");
        }
    }
    /* In this example, the checkTemperature function contains nested if statements to determine the state of water based on the provided temperature.
    The outer if-else block checks if the temperature is greater than zero. If true, it enters another if-else block to further evaluate the temperature range.
    If the temperature is between 0 and 100, it prints "The water is liquid." If it's above 100, it prints "The water is boiling."
    If the temperature is not greater than zero, it prints "The water is frozen." */
    /*
    1. Book Ordering System:
    Develop a program for a bookstore that calculates the price of a book based on the customer's membership status and /n
    the quantity purchased. Apply discounts as follows:
    
    Regular customers get no discount.
    Silver members get a 10% discount.
    Gold members get a 20% discount.
    Platinum members get a 30% discount. */
    function BookOrderSystem() {
        return __awaiter(this, void 0, void 0, function* () {
            let mStatus = yield inquirer_1.default.prompt([
                {
                    name: 'selectedOption',
                    type: 'list',
                    message: 'For Membership status Please select an type',
                    choices: ['Regular customer', 'Silver member', 'Gold member', 'Platinum member']
                },
                {
                    name: 'bookNum',
                    type: 'number',
                    message: 'Please enter Number of books purchased'
                }
            ]);
            let unitPrice = 100;
            let status = mStatus.selectedOption;
            let bookPurchased = mStatus.bookNum;
            // Check membership status and calculate total bill
            let totalBill = bookPurchased * unitPrice;
            if (status !== 'Regular customer') {
                // Apply discount for non-regular customers
                let discountRate = 0;
                if (status === 'Silver member') {
                    discountRate = 0.1; // 10% discount for Silver members
                }
                else if (status === 'Gold member') {
                    discountRate = 0.2; // 20% discount for Gold members
                }
                else if (status === 'Platinum member') {
                    discountRate = 0.3; // 30% discount for Platinum members
                }
                // Apply discount to total bill
                totalBill -= totalBill * discountRate;
            }
            console.log(`Your total bill is: ${totalBill}`);
        });
    }
    BookOrderSystem();
    // made a basic object to register a user on website with arrow function
    //to refer current Context have to use this keyworf
    let user = {
        username: "cucumber",
        price: 999,
        welcomeMessae: function () {
            console.log(`${this.username}, welcome to website`); // here this means current Context means here we are using this to access variables within current scope
        }
    };
    user.welcomeMessae();
    user.username = "sam"; // we have chnaged the context here   
    user.username();
    //
    function oneNew() {
        console.log(this);
    }
    oneNew(); // we will get many objects but when did outside ,and if we write this.write in function it won't work 
    // Q2 : Create a game where we start with any random game number. Ask the user to keep guessing the game number until user /n
    // //enters correct value
    // import inquirer from "inquirer";
    // async function game() {
    //     let gameNum = await inquirer. prompt ([
    //     {
    //         name : "numG",
    //         type : "number",
    //         message : "Please enter & Guess any random number",
    //     },
    // ]);
    // let numGame : number = 6;       
    // let userGuess = Number(gameNum.numG);
    // while (numGame !== userGuess) { // may not use == use single so no need to convert
    //     console.log( `Sorry, thats not the correct number please try again! `);
    //     gameNum = await inquirer.prompt([
    //     {
    //         name: "numG",
    //         type: "number",
    //         message: "Please enter & Guess any random number",
    //     },
    // ]);
    //     userGuess = Number(gameNum.numG); // Update the user's guess
    // }
    // console.log("Congratulations! You guessed the correct number.");
    // console.log("Please start your Ludo game");
    // }
    // game();
    // // if (gameNum == 6) {
    // //     
    // // } else {
    // // }
    // // let v: number = 1;
    // // do {
    // //     console.log("Count is: " + i);
    // //     i++;
    // // } while (i <= 5);
    // // // This do-while loop will print the count starting from 1 to 5. Even if i is initially greater than 5, the loop executes at least once before evaluating the condition. The loop continues executing the block of code as long as i is less than or equal to 5.
    // // while (true) {
    // //     console.log("This is an infinite loop!");
    // // }
    // // // 4. Condition Controlled Loop - Infinite Loop
    // // while (true) {
    // //     console.log("This is an infinite loop!");
    // // }
    // // for (;;) {
    // //     console.log("This is an Gouda loop!");
    /;
}
