"use strict";
var square1 = {};
square1.color = "blue";
square1.sideLength = 10;
let arr;
let square = {}; //type assertion
square.color = "blue";
square.sideLength = 10;
var square2 = {}; //Alternative syntax for casting
square2.color = "blue";
square2.sideLength = 10;
square2.penWidth = 5.0;
//what is type assertion?
//Type assertion in TypeScript is a way to tell the compiler, "I know more about the type of this variable 
//than you do." It's like saying, "Trust me, I know what I'm doing," allowing you to treat an object 
//as a different type than the one TypeScript inferred.
//Example
let fetchedValue = "123"; // This value is a string according to TypeScript
let numericValue;
// Type assertion using the 'as' syntax
numericValue = parseInt(fetchedValue);
// Now, you can use numericValue as a number
console.log(numericValue + 100); // 223
// Or, using the angle-bracket syntax
numericValue = parseInt(fetchedValue);
// Again, use numericValue as a number
console.log(numericValue + 100); // 223
