"use strict";
//Async Function, Call stack flowx` program execution and memory heap 
function a() {
    console.log("a");
}
a();
console.log("End");
//2 
console.log("Hi");
setTimeout(function cb1() {
    console.log('cb1');
}, 5000);
console.log('Bye');
//call back functions, calling other function
// Two Call Back Functions
// when time is less 
