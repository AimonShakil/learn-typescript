"use strict";
// use const where variable values do not change
const a = 5;
const b = 18;
const c = "Best";
//use let instead of var becoz let has block scope
if (true) {
    let z = 4;
    //use z
}
else {
    let z = "string";
    //use z
}
//console.log("let: " + z) Error z is not defined in this scope
