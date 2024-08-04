"use strict";
// oop concepts
//Concepts Revsison
// University GPT AI and Applications Coursera like model also for schools 
//Callbacks
//Proomise
const emptyPromise = new Promise((resolve) => {
    resolve(() => { });
});
emptyPromise.then(r => {
    console.log("empty promise :: ");
}).then(r => {
    console.log("Task 1 Done");
}).then(r => {
    console.log("Task 2 Done");
}).then(r => {
    console.log("Task 3 Done");
});
//Callback Hell
// Coffee Machine Program
//Promise
// Promise Chaining
//Async/ Await 
//OPP
//real life objects , Class blueprint
class Student {
    constructor(id, program) {
        this.id = id;
        this.program = program;
    }
    //methods
    study() {
        console.log("Study all CS Course");
    }
    exam() {
        console.log("Will give exams");
    }
}
const std1 = new Student(12, "usaman");
const std2 = new Student(13, "Bilal");
console.log(std1.id);
console.log(std2.id);
class person {
    constructor(race, origin, religion) {
        this.race = race;
        this.origin = origin;
        this.religion = religion;
    }
    // method
    travel() {
        console.log("person will travel");
    }
    study() {
        console.log("person wll study");
    }
}
const person1 = new person("white", "pakistani", "Islam");
console.log(person1.race);
//class structural typng, fresh case mai object properites same na ho tu error deita hai
let h = new Human("Tom"); // object are being formed h, a and r
let a = new Animal("Goat");
let r = new Robot("R2-D2");
let h2 = h;
h2 = a;
h2.eat();
