"use strict";
//Interface for Array types;
let userNames;
userNames = ["Alice", "Bob", "Charlie"];
console.log(userNames); // Outputs: ["Alice", "Bob", "Charlie"]
let ages;
ages = { Alice: 30, Bob: 25, Charlie: 28 };
console.log(ages); // Outputs: { Alice: 30, Bob: 25, Charlie: 28 }
let myArray = ["Bob", "Fred"];
var first = myArray[0];
let myDictionary = { "first": "Bob", "second": "Fred" };
var first = myDictionary["first"];
//let myDictionary2: Dictionary2 = {"first": "Bob", "second": "Fred"}; // Will not work, property length is required
let myDictionary3 = { "first": "Bob", "second": "Fred", length: "2" }; // Will work, length property is defined but not much usefull 
var first = myDictionary3["first"];
