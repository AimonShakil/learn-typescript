"use strict";
//protected keyword allows subclasses to gain visibility into the
// parent class without exposing this API to other parts of the code.
//protected: Members marked as protected can be accessed within the class they are defined in
//and by instances of classes that inherit from this class. They are not accessible from outside these two scopes.
//Example of protected memeber:
class Vehicle {
    constructor(privateNumber, protectedNumber) {
        this.privateNumber = privateNumber;
        this.protectedNumber = protectedNumber;
    }
    showProtectedNumber() {
        console.log(`Protected Number: ${this.protectedNumber}`);
    }
}
class Car extends Vehicle {
    constructor(privateNumber, protectedNumber) {
        super(privateNumber, protectedNumber);
    }
    showNumbers() {
        // console.log(`Private Number: ${this.privateNumber}`); // Error: Property 'privateNumber' is private and only accessible within class 'Vehicle'.
        console.log(`Protected Number: ${this.protectedNumber}`); // OK: Can access protected member
    }
}
const myVehicle = new Vehicle(123, 456);
// myVehicle.privateNumber; // Error: Property 'privateNumber' is private and only accessible within class 'Vehicle'.
// myVehicle.protectedNumber; // Error: Property 'protectedNumber' is protected and only accessible within class 'Vehicle' and its subclasses.
const myCar = new Car(789, 1011);
myCar.showNumbers(); // Outputs: Protected Number: 1011
myVehicle.showProtectedNumber(); // Outputs: Protected Number: 456
//2 Sir // Understand it through chat GPT
class ListString {
    constructor() {
        this.contents = [];
    }
    setElement(index, item) {
        this.contents[index] = item;
    }
}
class stackString extends ListString {
    constructor() {
        super();
        this.currentIndex = 0;
    }
    push(item) {
        this.setElement(this.currentIndex, item);
        this.currentIndex++;
    }
}
var stack = new stackString();
//stack.setElement(0, 1); // error 'setElement' is protected and only visible to subclasses 
