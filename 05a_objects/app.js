"use strict";
/* Objects : Key value pairs , in varibale we delare and store value and memory allocated, for objects we dont know about size for and reserve unlimted space in memeory
in Object unlimted space with no limit , key is referanence and value is which we are storing
Creating Object,
TS structural typing based on objects

//Object Literals:  is a way of Declaring an Object
/* OUTLINE
1. Declaring an Object
2. Accessing an Object
3. Nested Objects
4. Combing Objects **/
let teacher = {
    name: "Zee",
    experience: "10"
};
console.log(teacher.name);
console.log(teacher["experience"]);
//Type Declaration
let student;
student = {
    name: "Ali",
    age: 21
};
console.log(student["name"]);
console.log(student.age);
