"use strict";
// Functions 
//====================================
/*The return statement is used to terminate the execution of a function and return a value to the caller.
Terminating Execution , Returning Values:Functions can have zero or one return statements. If a function doesn't explicitly return a value, it implicitly returns undefined.*/
//In node environment this referers to an empty object
// In browser global object is window
//Note: All parameters are required
/* 1 .Named Functions
2. Anonymous Function
3. Anonyous Functions with Explicit Types
4. Lambda/ Arrow Function */
//======================================
// NAMED FUNCTION
function add(x, y) {
    return x + y;
}
// EXAMPLES
//Different ways to take values & Passing Paramters
function loginUserMessage(username = "Sam") {
    if (!username) {
        console.log("Please enter a Value");
        return;
    }
    return ` ${username} just logged in`;
}
console.log(loginUserMessage("Ali")); // example of paramters importance 
//Passing Array to a Function
let myNewArray = [200, 300, 400, 500];
function returnSecondValue(getArray) {
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));
//==================================		
/* ANONYMOUS FUNCTION
What is anonymous function?
An anonymous function in programming is a set of instructions that does something specific (like adding numbers)/n
without being assigned a specific name, and you can store and use these instructions by assigning them to variables
like myAdd1.
Why it is called as anonymous function?
Imagine you have a friend who can do math really well, but this friend doesn't have a name. You might still refer to this friend as "the math whiz" or something similar
Similarly, in programming, you can create a piece of code that does something specific, like adding two numbers, without giving it a name.
Anonymous Function : which does not have function key word, needed because we create it, use and it get destroyed
and not saved in memory

execute, return and end */
//==================================
let myAdd1 = function (x, y) {
    return x + y;
};
//Anonymous function with explict type
let myAdd2 = function (x, y) {
    return x + y;
};
//type names dont matter
let myAdd3 = function (x, y) {
    return x + y;
};
//
const sizes = ["Small", "Medium", "Large"];
sizes.forEach((s) => { console.log(s.toUpperCase); }); // here contextual typing applies to arow function
//LAMBDA FUNCTIONS / ARROW FUNCTION
// Lambda functions / arrow function /closures , main point scope {} accept all global variables, it can access all parent vaariables ehne passes as paparameter in a function it is called as closures / subfunction and all variables can access															
() => { }; // basic arrow function															
let myAdd4 = (a, b) => a + b;
function greeter_w(fn) {
    //....
}
//Arrow function implicit return
const addtwo = (x, y) => x + y;
let myAd4 = (a, b) => a + b;
//output will be: let myAdd4 = function(a : number, b : number) {return a + b};
let myAdd5 = (a, b) => (a + b); // puting brackets around x+y in react 
//passing an object in arrow function VVVVVVVVVV IMP concepts
const addtwo2 = (num1, num2) => {
    return num1 + num2;
};
function greeter1(fn) {
    //....
}
function greets(says) {
    return console.log(greets);
}
function mySelf(fn) {
}
//Example of First class function
function greetEnglish(name) {
    console.log(`Hello, ${name}!`);
}
function greetFrench(name) {
    console.log('Bonjour, ${name}!');
}
function greeter(fn) {
    fn: ('Alice'); //parameter
}
// Passing the greetEnglish function to the greeter
greeter(greetEnglish); // Output: Hello, Alice!
// Passing the greetFrench function to the greeter
greeter(greetFrench); // Output: Bonjour, Alice!
function addd(arg1, arg2) {
    return arg1 + arg2;
}
addd(33, "abc");
addd(1, 2);
addd("Abc", "ee");
addd(true, false);
//overloads give us type-checked calls
//its customary to order overloads from most specific to least specific
// function add(arg1: string, arg2: string): string;//option 1
// function add(arg1: number, arg2: number): number;//option 2
// function add(arg1: boolean, arg2: boolean): boolean;//option 3
// //this is not part of the overload list, 
// //so it has only three overloads
// function add(arg1: any, arg2: any): any {
//     return arg1 + arg2;
// }
// //Calling 'add' with any other parameter types would cause an error except for the three options
// console.log(add(1, 2));
// console.log(add("Hello", "World"));
// console.log(add(true, false));
