"use strict";
//Interface functional types:
//In TypeScript, you can use interfaces to describe function types. This is particularly useful when you want
//to define a contract for a function, specifying the types of its parameters and its return type.
//It's like setting a blueprint for functions to ensure they have a specific structure and behavior.
// Implementation function using Interface
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => (num2 == 0 ? num1 / num2 : Infinity);
console.log(add(5, 3)); // Outputs: 8
console.log(subtract(10, 4)); // Outputs: 6
console.log(multiply(7, 6)); // Outputs: 42
console.log(divide(8, 2)); // Outputs: 4
console.log(divide(8, 0)); // Outputs: Infinity (demonstrates handling division by zero)
var mySearch = function (src, sub) {
    var result = src.search(sub);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
};
//For function types to correctly type-check, the name of the parameters do not need to match. 
//Function parameters are checked one at a time, with the type in each corresponding parameter position checked against each other.
