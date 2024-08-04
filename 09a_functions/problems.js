"use strict";
// Documentation Examples
//Function type expressions 
Object.defineProperty(exports, "__esModule", { value: true });
function greeter(fn) {
    fn: ('Hello, World');
}
function printToconsole(s) {
    console.log(s);
}
greeter(printToconsole);
function greeter1(fn) {
    // ...
}
function construction(fn) {
    console.log(fn.description + "returned" + fn(6));
}
function build(someArg) {
    return someArg > 3;
}
build.description = " My Home Function ";
construction(build);
function tn(pbr) {
    return new pbr("pink");
}
//Generic Functions
//PROBLEMS 
/* 1 Named Functions
   2 Anonymous Functions
   3 Anonymous Function with Explicit types
   4. Lambda/ Arrow / Closures
   5. Nested Functions
   6. First Class Functions */
//Named Functions
//Even or Odd:
// Create a function named isEven that takes a number as an argument and returns true if it's even and false if it's odd.  
function isEven(value) {
    if (value % 2 === 0)
        console.log('Number is even');
    else {
        console.log('Number is Odd');
    }
    return true;
}
isEven(7);
//Reverse String:
//Implement a function called reverseString that takes a string as input and returns the reversed version.
function reverseString(input) {
    return input.split('').reverse().join('');
}
let orgString = "Hi Am";
let reverseStg = reverseString(orgString);
console.log(`Reversed string: ${reverseStg}`);
// Anonymous Functions Problems:
/*1: Square Function:

Write an anonymous function that takes a number as a parameter and returns its square.*/
let squre = function (num) {
    return num * num;
};
let reult = squre(8);
console.log(`squre is ${reult}`);
/* 2 Random Number Generator:

Create an anonymous function that generates a random number between 1 and 100.*/
let generateRandomNumber = function () {
    return Math.floor(Math.random() * 100) + 1;
};
// Example usage:
let randomNum = generateRandomNumber();
console.log(`Random number between 1 and 100: ${randomNum}`);
/*Array Filter:

Write an anonymous function that filters even numbers from an array of integers.
Sum of Squares:

Implement an anonymous function that calculates the sum of squares for an array of numbers.

String Length Checker:

Create an anonymous function that takes a string and returns true if its length is greater than 5, otherwise false.


Mixed (Named and Anonymous Functions):
Higher-Order Function:

Write a function called applyOperation that takes two numbers and a function as parameters. The function should apply the given operation (passed as a function) to the two numbers.
Multiplication Table Generator:

Create a function that generates the multiplication table for a given number. Use both named and anonymous functions.
Palindrome Checker:

Implement a function that checks if a given string is a palindrome. Use both named and anonymous functions.
Temperature Converter:

Write a program that converts temperatures between Celsius and Fahrenheit. Use named functions for conversion logic.
Power Function:

Implement a function named power that takes a base and an exponent and calculates the result. Use an anonymous function for the actual power calculation.

*/
