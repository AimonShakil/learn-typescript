"use strict";
/*

Object Oriented programming (OOP) is a programming paradigm that relies on the concept of classes and objects.
It is used to structure a software program into simple, reusable pieces of code blueprints (usually called classes),
which are used to create individual instances of objects

TypeScript has full class support, has access modifiers, and type annotations like most object-oriented
programming languages. and have an overview of its implementation with the three principles of object-oriented programming: Inheritance,
Encapsulation, and Polymorphism.

Object programming is well-suited for programs that are large, complex and actively updated or maintained.

TypeScript‘s type system is based on Structural typing. In a structurally typed system, a type is considered
to be compatible with another type if the type has all the properties and methods of that type.
But JavaScript is a duck-typed language. Since Typescript Compiles to JavaScript, you can take the benefit
of duck typing also.

TypeScript‘s type system is based on Structural typing. In a structurally typed system, a type is considered
to be compatible with another type if the type has all the properties and methods of that type. But JavaScript
 is a duck-typed language. Since Typescript Compiles to JavaScript, you can take the benefit of duck typing also.


Benefits of Object Oriented Programming
Some of the benefits of Object Oriented Programming are as follows:

Easier debuging
Reuse of code through inheritance
Flexibility through polymorphism
Effective problem solving
Project decoupling (Separate project into groups)

Class : A class is a blueprint used to create an instance of an object. It is made up of variables
(called instance variables) and methods. Every object instantiated from a class will have all the properties of the class that instantiated it.

Constructor Functions
A constructor function is a class function responsible for initializing a class’s instance variables.

Constructors in TypeScript are defined using the constructor keyword. The constructor function takes all class’s
instance variables as parameters, initializes them, and assigns their values in its body.


*/
//hitesh
class User {
    constructor(name, email, city) {
        this.DBID = 12;
        this.address = "H.2, st 5";
        this.email = email;
        this.name = name;
        this.city = city;
    }
}
let aimon = new User("am", "am@am.com", "Islamabad"); // creating object from this class
// aimon.DBID = 13
console.log(aimon);
//aimon.DBID // writng like this its means its accessible outside class & we dont want it to be accessible to anyone, we can
//go ahead and say we can have it as private & once we have this Private it is marked, it will be only accessible with in class
// rest we dont marked as Public Automatically in TS World
// Shortcut way , in production grade coding it is preferred to write this way professional people actually go ahead and use modifires
class Admin {
    constructor(name, email, city) {
        this.name = name;
        this.email = email;
        this.city = city;
        this.DBID = 23;
    }
}
//1 understanding basic layout of class in TS
class Point {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}
const pt = new Point();
pt.x = 0;
pt.y = 0;
console.log(`${pt.x},${pt.y}`);
//2
class Vehicle {
    constructor(type, model, price) {
        this.type = "vehicle";
        this.model = "2020";
        this.price = "$200k";
    }
    honk() {
        console.log("Beep Beep");
    }
}
let tesla = new Vehicle("Vehicle", "2020", "$200k");
tesla.honk();
//3
class Human {
    constructor(gender, nationality) {
        this.gender = "Male";
        this.nationality = "Pakistani";
    }
    eat() {
        console.log(`whats for dinner`);
    }
    speak() {
        console.log(`My gender iss${this.gender} and i am ${this.nationality} `);
    }
}
