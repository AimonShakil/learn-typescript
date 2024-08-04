"use strict";
//A class declaration creates two things: a type representing instances of the class and a constructor function. 
//Because classes create types, you can use them in the same places you would be able to use interfaces.
class Point {
    constructor() {
        this.x = 0;
        this.y = 1;
    }
}
var point3d = { x: 1, y: 2, z: 3 };
// Further Explaination
// 1.  A type representing instances of the class: This means that if you have a class Car, then you can create objects that are of type Car. These objects are instances of the Car class, and they can be used wherever this type is expected.
// TypeScript
class Car {
    constructor() {
        this.make = '';
        this.model = '';
    }
}
let myCar = { make: 'Toyota', model: 'Corolla' };
// 2. A constructor function: This is a function that is used to create new instances of the class. When you use the new keyword followed by the class name, you are calling the constructor function.
// TypeScript
class Car2 {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}
let myCar2 = new Car2('Toyota', 'Corolla');
