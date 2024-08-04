"use strict";
/* In TypeScript, we group and pass around data & represent through object types.
Passing Object as a parameter of function, named by Interface or a type Alias */
/* Type Aliases
A type alias is exactly that - a name for any type. The syntax for a type alias is:
type alias used to give a name to any type at all, not just an object type. For example, a type alias can name a union type: */
// anonymous
let teacher = {
    name: "clark",
    exp: 10
};
let student = {
    name: "clark",
    age: 10
};
let storeManager = {
    name: "clark"
};
let dresses = {
    name: "Pret",
    season: "Summers",
    size: 10,
};
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 100 });
function cords(param) {
    console.log(` we are printing coords ${param.x} and ${param.y}`);
}
cords({ x: 200, y: 500 });
let student_sch = {
    name: "Hira",
    // age: 30
    id: 25
};
console.log(student_sch["name"]);
console.log(student_sch.age);
const person = {
    name: 'Bobby Hadz',
};
person.address = {
    country: 'Chile',
    city: 'Santiago',
};
let store_Manager = {
    name: "hfhusuhg"
};
const Aimon = { DBID: 22, email: "a@a.com", UserID: 223, role: "admin", startTrail: () => {
        return "Trial started";
    },
    getCoupon: (Username, discount) => {
        return 10;
    },
    githubToken: "Github ID" };
