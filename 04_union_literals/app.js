"use strict";
/* Union Literals / Compounf Types
a union literal is a type that represents a specific set of literal values within a union type.
Union types allow to combine multiple types into one, and union literals take this a step further by specifying
exact values within the union.

// Union type describes a value that can be one of several types and use vertical bars (pipe) to seperarate each other
// it allow access to common location by different data types.

Could be anyone of these types we refer to each of these types as Union members

//ASSIGNING UNION TYPES to VARIABLES
let myname: string | null;

myname = null;
console.log(myname);

myname = "zia";
console.log(myname);

// myname = undefined; //Error
//myname = 12; //Error

let myAge: string | number;
myAge = 16; // narrowing
console.log(myAge);
//console.log(myAge.toLowerCase());//Error


myAge = "Dont Know";//narrowing
console.log(myAge);
console.log(myAge.toString()); // common to both types, can be called even without narrowing
console.log(myAge.toLowerCase());// Can be called on string , because of narrowing

// Example
let newAge = Math.random() > 0.6 ? "Khan": 60;
//newAge.toLowerCase();//Error: Transpiler cannot narrow

if (newAge === "Khan") {
    // Type of newAge: string
    newAge.toUpperCase(); // Can be called
}

if (typeof newAge === "string"){
    // Type of newAge: string
    newAge.toUpperCase(); // Can be called
}

typeof newAge === "string" ? newAge.toUpperCase() : newAge.toFixed(); // // Ok: string , Ok: number


//
let age: number | "died" | "unknown";

age = 90;//OK
age = "died";//OK
age = "unknown";//OK
//age = "living";//Error


let zia: "zia";

zia = "zia";
//zia = "khan";//Error

//
let score : number | string | boolean = 33;
score = true;
score = "Aimon";
console.log(score); // variable score storing latest assigned value

//Exm
/* this code uses a ternary operator to conditionally assign a value to yourName. Then, it checks if yourName is
truthy before attempting to call toUpperCase() on it, ensuring type safety within the if block.
yourName.toUpperCase();//Error: Object is possibly 'undefined'. */
let yourName = Math.random() > 0.6 ? "Hira" : undefined;
if (yourName === "string") {
    yourName.charAt(2);
}
if (yourName === "Hira") {
    yourName.length;
}
if (yourName === " ") {
    yourName.toUpperCase(); // Ok: string
}
yourName === null || yourName === void 0 ? void 0 : yourName.toUpperCase(); //OK
let result;
result = 2, true, "am";
let scores = 999;
let a = 10; // if we write '10' like this comes error
console.log(a * scores); // Preferes string type first over + sign
//
/* Useful case scnerio for this ( this way we can make our application less error Prone)*/
let seatAllotment;
seatAllotment = "aisle";
let clark = { name: "Am", id: 334 };
clark = { name: "Asa", id: 3934 };
console.log(clark);
// UNION LITERALS WITH FUNCTIONS
function printId(id) {
    console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// Error
//printId({ myID: 22342 });
//
function call1(id) {
    console.log(" Your Id is: " + id);
}
call1("Ninety");
call1(101);
call1("102");
//call1({2234}) // Error
// UNION TYPES WITH ARRAYS:
const data = [1, 2, 3, 4];
const data1 = ["1", "2", "3", "4"];
const data2 = [2, 3, 4,]; // cant be mix can be either of type number or Array
const data3 = "dd"; // either one type
const data4 = [2, 3, 4, "dd", "kk"]; // like this can have mix of both
const data5 = [2, 3, 4, "dd", "kk", false];
//Special case where we want to fix the value
let pi = 3.14; // this is a literal type of assignemnet
//pi =3.145 
// NARROWING: WORKING WITH UNION TYPES 
/* Narrowing occurs when TypeScript can deduce a more specific type for a value based on the structure of the code.*/
function printId1(id) {
    // console.log(id.toUpperCase()); // to correct this issue there comes concept of narrowing, narrow the union with code, without type annotations.  
}
function printsId(id) {
    if (typeof id === "string") { // union narrowing
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
    }
    else {
        // Here, id is of type 'number'
        console.log(id);
    }
}
// Another example is to use a function like Array.isArray:
function welcomePeople(x) {
    if (Array.isArray(x)) { //Array.isArray used a function here to narrow 
        // Here: 'x' is 'string[]'
        console.log("Hello, " + x.join(" and "));
    }
    else {
        // Here: 'x' is 'string'
        console.log("Welcome lone traveler " + x);
    }
}
//welcomePeople(["am", "ty", "Fi" ,"ma"]) or
welcomePeople("Aimon");
// Imp Concept:
// Return type is inferred as number[] | string
function getFirstThree(x) {
    // return x.slice(0, 3);
    return x;
    console.log(x);
}
getFirstThree([1, 2, 3, 4, 5]);
getFirstThree("Aimon");
/* If you want to return the first three elements of an array or the first three characters of a string, you can use
type guards or type assertions to help TypeScript understand which specific type you're working with inside the function.
Here's a modified version of your function that demonstrates one way to handle arrays and strings differently */
function getFirstThrees(x) {
    if (Array.isArray(x)) {
        return x.slice(0, 3); // Return the first three elements of the array
    }
    else if (typeof x === 'string') {
        return x.slice(0, 3); // Return the first three characters of the string
    }
    else {
        return null; // Return null for other types
    }
}
console.log(getFirstThrees([1, 2, 3, 4, 5])); // Output: [1, 2, 3]
console.log(getFirstThrees("Hello, world")); // Output: "Hello"
//console.log(getFirstThree(1));                // Output: null
// TYPE ASSERTION
//const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");
function printText(s, alignment) {
    // ...
}
const student = {
    name: "Dough",
    age: 10,
    class: [100, 200]
};
console.log(student.age);
