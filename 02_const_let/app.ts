// use const where variable values do not change
const a = 5;
const b : number = 18;
const c = "Best";

//use let instead of var becoz let has block scope

if (true) {
    let z = 4;
    //use z
} else {
    let z = "string";
    //use z
}
//console.log("let: " + z) Error z is not defined in this scope


//+++++++++++++++++++++++++++++

/* FALSY AND TRUTHY VALUES CONCEPT.
Truthy and falsy values exist in TypeScript, just like in JS. Truthy and falsy values are values that
evaluate to true or false when used in a boolean context.
In TypeScript (as in JavaScript), the following values are considered falsy:

false: The boolean value false.
0: The number zero.
-0: Negative zero.
0n: BigInt zero.
'' or "": An empty string.
null: The value null.
undefined: The value undefined.
NaN: Not a Number.
All other values are considered truthy. This includes non-empty strings, non-zero numbers, non-empty arrays, /n
objects, functions, and any non-null object.

Truthy : "0", 'false', " " ,[] Array empty , {} object empty , function (){} empty function */
//Detecting if array or Object is empty or not like below
const emptyObj = {};
if (Object.keys(emptyObj).length === 0) { // return an array 
    console.log("Object is empty");
}