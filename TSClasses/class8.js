"use strict";
// Step 09 a Functions
//inhances code resuabilty , arguments and parameters
//1 Named Functions
Object.defineProperty(exports, "__esModule", { value: true });
//  Anonymus function : execute ho kr destroy ho jae and memory mai save nae ho, java script hoisting , it will be behaving like a variable and all properities apply
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
//Lambda functions/ arrow function /closures , main point scope accept all global varables, can access all parent vaariables ehne passes as paparameter it is called as closures															
let myAdd4 = (a, b) => a + b;
//output will be: var myAdd4 = function(a : number, b : number) {return a + b};
//*type GreetFunction = (a: string) => void;
function greeter(fn) { }
function greeiter(fn) {
    //....
}
function greetEnglish(name) {
    console.log('hello, ${name}');
}
function greetFrench(name) {
    console.log('banjor, ${name}');
}
function greetere(fn) {
    fn('alice');
}
greetere(greetEnglish);
greetere(greetFrench);
// calling control is with greetere, 
//9b  Functional Optional Parameter
//Named function with optional parameters
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
let result1 = buildName("Bob"); //ok
let result2 = buildName("Bob", "Adams", "Sr."); //error, too many parameters exessice paramteter
var result3 = buildName("Bob", "Adams"); //also ok
//Default PAameter
function buildName1(firstName, lastName = "Khan") {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
//Rest Parameter - countless paramteter
function buildName12(firstName, ...restOfName) {
    return firstName + " " + restOfName.join(" ");
}
function addd(arg1, arg2) {
    return arg1 + arg2;
}
addd("am", "abc");
addd(22, 5);
addd(true, false);
//09e next class 9th 
// call backs functions (means call again), promosis, async function and await to clear concept also a video.
