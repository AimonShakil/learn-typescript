"use strict";
//overloads give us type-checked calls
//this is not part of the overload list, 
//so it has only three overloads
function add(arg1, arg2) {
    return arg1 + arg2;
}
//Calling 'add' with any other parameter types would cause an error except for the three options
console.log(add(1, 2));
console.log(add("Hello", "World"));
console.log(add(true, false));
