"use strict";
//HTC
// Generics as when writng a lots of production level code bc generics is one such things which makes components reusable 
//and by the term component we means all of our functions even arrays are generics behind the scnens so really important to understand
// also dont pick up word ( Component is a broader term its means a chunk of something it can be tailwind chunk, a react chunk or just a function) 
// so bascically when we need to write a lots of function and want a different return type we use Generics
// we will be seeing different use cases 
const score = [];
const names = [];
// Case1
function IdnetityOne(value) {
    return value;
}
//Case 2
function identityTwo(val) {
    return val;
}
// case3
function identityThree(val) {
    return val;
}
identityThree(true);
identityThree("Aimon");
identityThree(23); // we are lockig a value
// But Common way of Doing is can also reference to any other letter Say H every where or word even
function identityfour(val) {
    return val;
}
identityfour({ brand: "Nike", type: 23 });
//How we can create or take Input as an Array and what could be the possible cases when we are returning some values 
function getSearchProducts(products) {
    // Do some database operations
    const myIndex = 3;
    return products[myIndex]; // in this generrics case we cannot return a number need  to return a parameter with val
}
// Now we are converting this same function to an arrow function, when we see on Github and find confusing
const getMoreSearchProducts = (products) => {
    // do some DB Operations 
    const myIndex = 4;
    return products[myIndex];
};
//function anotherFunction<T, U extends number> (valOne : T , valTwo : U) : object {
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
// anotherFunction (3 , 4.6)  // for fisrt function
anotherFunction(3, { connection: "ss", username: "sss", password: " sjffigfa" });
function isAdminAccount(account) {
    if ("isAdmin" in account) { // we are narrowing it using in Property
        return account.isAdmin; // accout automatically changes that it is 100% admin
    }
}
// Two more type how we can narrow down the type HTC, another video, this entire series is about how we go into more
//preciseness of the type so that we can take better action and that TS all about getting types and all narrow down 
// Instance of Narrowing 
new Date(); // date or any type of variable can be created by saying new and then we create a date just like that a new date is being created 
new Array(); // new Keyword instance of almost like not literally but almost typeof, typeof checks default types instance is of class or something else 
function logValue(x) {
    if (x instanceof Date) { // here x checks weather x is instance of date 
        console.log(x.toUTCString()); // here we are 100 % sure that x is date 
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined; // upper line returning pet is Fish specifies that we are not returning true but returning Fish
}
function getFood(pet) {
    if (isFish(pet)) { // isFish Method
        pet; // still the value or type of value is not identified
        return "fish food";
    }
    else {
        pet; // still the value or type of value is not identified
        return "Bird Food";
    }
}
function getTrueShape(shape) {
    if (shape.Kind === "Circle") {
        return Math.PI * shape.radius ** 2;
    }
    //  return shape.side * shape.side
}
// function getArea (shape : Shape) {
//     switch(shape.Kind) {
//     case "Circle": 
//     return Math.PI * shape.radius ** 2
//     case "square" :
//       return shape.side * shape.side
//     }
//     case "rectangle":   // rightly written but showing error
//         return shape.length * shape.width
//     default: 
//         const _defaultforShape : never = shape // this never runs its a default checker
//         return _defaultforShape
// }
