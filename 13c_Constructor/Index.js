"use strict";
// If parent class provide constructor(with or without argument) 
//then you must have to create constructor in child class
// and must call super()
// Below code will not work because it does not call super,
// Case 1:
// If parent class provide constructor and child class does not
// provide then child class will use parent's constrcutor
// and child's object creation will required use of parent's 
//constructor parameters 
class A {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log("A Constructor");
    }
}
class B extends A {
}
let a = new A("A", 4); // This is working as expected
let b = new B("c", 8); // This is working too as child class use parents constructor
//let c: B = new B (); // This is not working as child class must use parents constructor
//let d: B = new B("C");   // Thsi is also not working
// Case 2:
// If parent class does not provide constructor and child class provide constrcutor then 
// child class must call super() within child's class constructor
class C {
}
class D extends C {
    constructor(theName, age) {
        super();
        this.name = theName;
        console.log("D constrcutor");
    }
}
let aa = new C(); // This is working as expected
//let bb: D = new D(); // This is not working because child class has its 2 argumnet constrcutor
let cc = new D("C", 8); // This is working as expected
// Case 3:
// If parent class and child class both provide constructor 
// then child class must call super with same parameters as 
// they are in parent's constructor call to super
class E {
    constructor(name, age) {
        this.name = name;
        console.log("Constructor E");
    }
    displayName() {
        console.log("Name = " + this.name);
    }
}
class F extends E {
    constructor(theName) {
        super("am", 22);
        // Must call super with two arguments
        this.name = theName;
        console.log("F Constructor");
        //super("Hello",5); // Multiple supper call working, No error here -- seems to be some special case   
    }
}
let e = new E("E", 2);
let f = new F("F");
f.displayName(); // Display "F"
