"use strict";
class Human {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} is human and is eating`);
    }
}
class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} is Animal and is eating`);
    }
}
class WildAnimal {
    constructor(title) {
        this.title = title;
    }
    eat() {
        console.log(`${this.title} is Animal and is eating`);
    }
}
class Robot {
    constructor(name) {
        this.name = name;
    }
}
/* the new keyword is used to create instances of classes. When you write new Human("Tom"), it means you are
creating a new object based on the Human class, and the constructor function of the Human class is invoked
to initialize the new object.

Here's what happens when you execute new Human("Tom"):

The new keyword creates a new empty object.
It invokes the constructor function of the Human class, passing "Tom" as an argument.
Inside the constructor, this.name = name; assigns the value of "Tom" to the name property of the newly created object.
The constructor finishes execution, and the new object with its properties initialized is returned.
The variable h now holds a reference to the new Human object, with the name property set to "Tom".
In summary, new Human("Tom") is used to create an instance of the Human class with a specific name, and the
new keyword is essential for object instantiation in TypeScript and JavaScript.

*/
let h = new Human("Tom");
let a = new Animal("Goat");
let r = new Robot("R2 - D2");
/* TypeScript is a structural type system which is different from
Java, C#, etc. When we compare two different types,
regardless of where they came from, if the types of each member
are compatible, then we say the types themselves are compatible. */
let h2 = h;
h = a; //both have same properties and methods therefore are compatible
h.eat();
let r2 = r;
r = a; //Animal has name and robot also has a name
r2 = a; // fine coz robot properties satisfies 
// "a" is a stale object therefore extra eat() method in "a" is ok
//a = r2;//Error, Robot does not have eat method// But Fresh or stale both have same properties and methods
// therefore compatible
let hum = new Animal("Dog"); // Fresh Object
// But Fresh or stale both have same properties and methods
// therefore compatible
//let wild : Animal = new WildAnimal("Deer")
// But Fresh or stale both have different property names
// therefore not compatible
let r0 = new Animal("Donkey"); //how is this possible?
//another issue is that Donkey is a fresh object
// therefore why is it allowing extra eat function in Robot type
//without giving an error? I dont know must be missing something
var isItRobot = r0 instanceof Robot;
console.log("Is Donkey a Robot: " + isItRobot); //false, giving the right results
var isItAnimal = r0 instanceof Animal;
console.log("Is Donkey a Animal: " + isItAnimal); //true, giving the right results
//Now it is your reposibility to figure out 
//why the above code is not giving an Error?
