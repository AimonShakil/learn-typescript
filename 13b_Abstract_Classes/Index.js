"use strict";
//What is an Abstract class?
//Think of an abstract class in programming like a blueprint for a house.
//This blueprint outlines some basic structures—like having walls and a roof—that all houses built from this blueprint
//must have. However, it doesn't specify what color the walls should be painted or what type of tiles should go
//on the roof. Those details are left for the builders of individual houses to decide.
//Abstract class in TS
//In TypeScript (a programming language that adds types to JavaScript), an abstract class is a special kind of class
//that cannot be used to create objects directly. Instead, it's used as a base class from which other
//classes can inherit. It can include details that are common to all subclasses, while also
//specifying "abstract" methods that the subclasses must define on their own.
// HTC: Difference Between Abstract Classes and Interfaces, why we use abstract classes when Intefaces are there and there 
// is little differnce between two Imp Interview Queston 
// in the world of Abstract Classes these are almost like blueprint, yes we have a blueprint    like interface but 
// in Abstract classes they are exactly a Blue print ,we cannot create an Object from it , it tis the rresponsiblity of class who is extending it 
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
}
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
    getReelTime() {
        // some calculation
        return 8;
    }
}
const aimon = new Instagram("On", "Ambient", 22); // v imp :Creating Object from a abstract class , it is the resaponsibilty of a class(extending) to make object who is extending it
aimon.getReelTime();
//Example:
// Define an abstract class called Shape
class Shape {
    display() {
        console.log(`The area is: ${this.area()}`);
    }
}
// const shape = new Shape(); // This is not allowed because Shape is an abstract class
// Define a subclass of Shape for squares
class Square extends Shape {
    constructor(sideLength) {
        super(); // Call the constructor of the base class, Shape
        this.sideLength = sideLength;
    }
    // Implement the abstract method area for Square
    area() {
        return this.sideLength * this.sideLength;
    }
}
// Create an Instance of Squre
const mySquare = new Square(5);
mySquare.display(); // Outputs: The area is: 25
//2 
class Base {
    foo() { return this.bar(); }
}
class E extends Base {
    bar() { return 1; }
}
// var obj1 = new Base();//Error, cannnot create a instance of a Abstract class
// console.log(obj1.foo());
