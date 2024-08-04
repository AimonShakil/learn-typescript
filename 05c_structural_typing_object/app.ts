// These two interfaces are completely
// transferrable in a structural type system:

interface Ball {
    diameter: number;
}

interface Sphere {
    diameter: number;
}
  
  let ball: Ball = { diameter: 10 };
  let sphere: Sphere = { diameter: 20 };
  
  sphere = ball;
  ball = sphere;
  
  // If we add in a type which structurally contains all of
  // the members of Ball and Sphere, then it also can be
  // set to be a ball or sphere.
  
  interface Tube {
    diameter: number;
    length: number;
  }
  
  let tube: Tube = { diameter: 12, length: 3 };
  
  //tube = ball;//Error
  ball = tube;
  
  // Because a ball does not have a length, then it cannot be
  // assigned to the tube variable. However, all of the members
  // of Ball are inside tube, and so it can be assigned.
  
  // TypeScript is comparing each member in the type against
  // each other to verify their equality.

//===================================================

// Now lets do it Case By Case


//Case when "FRESH"" object literal are assigned to a variable 
//Rule: When a fresh object literal is assigned to a variable or passed for a parameter of a non-empty target type, 
//it is an error for the object literal to specify properties that don't exist in the target type.
//The rationale for the below two errors is that since the fresh types of the object literals are 
//never captured in variables, static knowledge of the excess or misspelled properties should not be silently lost. 

let myType = { name: "Zia", id: 1 };

//Case 1
myType = { id: 2,  name: "Tom" };//Case 1: can only assign a type which has the the same properties
									//Object literals can only have properties that exist in contextual type


//Case 2a
myType = { id: 2,  name_person: "Tom" };//Case 2a: Error, renamed or missing property

//Case 2b 
//A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects:

var x: { id: number, [x: string]: any };//Note now 'x' can have any name, just that the property should be of type string

x = { id: 1, fullname: "Zia" };  // Ok, `fullname` matched by index signature


//Case 3
myType = { id: 2,  name: "Tom", age: 22 };//Case 3: Error, excess property



//=================================================


//Case when STALE object literal are assigned to a variable 

let myType2 = { id: 2,  name: "Tom" };

//Case 1
myType = myType2;//Case 1: can only assign a type which has the the same properties, rule same for fresh and stale object

let myType3 = { id: 2,  name_person: "Tom" };
//Case 2a
myType = myType3;//Case 2: Error, renamed or missing property, rule same for stale and fresh object 


//Case 2b
//A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects:

var x: { id: number, [x: string]: any };//Note now 'x' can have any name, just that the property should be of type string
var y = { id: 1, fullname: "Zia" };
x = y;// Ok, `fullname` matched by index signature


var myType4 = { id: 2,  name: "Tom", age: 22 };

//Case 3
myType = myType4;//Case 3: Ok, excess property allowed in case of stale object which is different from fresh object



/*
var x: { foo: number };
x = { foo: 1, baz: 2 };  // Error, excess property `baz`

var y: { foo: number, bar?: number };
y = { foo: 1, baz: 2 };  // Error, excess or misspelled property `baz`



var a: { foo: number };
var a1 = { foo: 1, baz: 2 };
a = a1;//No Error

var z: { foo: number, bar?: number };
var z1 = { foo: 1, baz: 2 };
z = z1;//No Error
*/



/*Structural Typing in Object Literals & OBJECT BEHAVIOURS

TypeScript is a Structural Type System. A structural type system means that when comparing types, TypeScript only
takes into account the members on the type.

This is in contrast to nominal type systems, where you could create two types but could not assign them to each other.

TYPE COMPATIBILITY: */
//STRUCTURAL TYPING:
interface Pet {
    name: string;
  }
  let pet: Pet;
  // dog's inferred type is { name: string; owner: string; }
  let dog = { name: "Lassie", owner: "Rudd Weatherwax" };// rule of structural type system says that  x is compatible with y if y has at least the same members as x.
  pet = dog; // here dog satisfies one property , same member as pet
  
  //
  interface animal {
    name : string,
  };
  let pet1 : animal;
  let cat = {name : "Brownie", breed : "Dakota"};
  pet1 = cat
  
  // 
  
  //The same rule for assignment is used when checking function call arguments:
  
  interface Pet {
    name: string,
   };
  let hen = { name: "chicke", owner: "Rudd" };
  function greet(pet: Pet) {
    console.log("Hello, " + pet.name);
  }
  greet(hen); // OK
  
  
  // let hen : Pet = { name : "chicke" ,  owner : "Am"}
  
  // COMPARING TWO FUNCTIONS
  let xs = (a: number) => 0;
  let y = (b: number, s: string) => 0; // Note that names of Parammters are nor considered but only types
  y = xs; // OK
  //xs = y; // Error
  
  //Function Parameter Bivariance : 
  enum EventType {
    Mouse,
    Keyboard,
  }
  interface Event {
    timestamp: number;
  }
  interface MyMouseEvent extends Event {
    x: number;
    y: number;
  }
  interface MyKeyEvent extends Event {
    keyCode: number;
  }
  function listenEvent(eventType: EventType, handler: (n: Event) => void) {
    /* ... */
  }
  // Unsound, but useful and common
  //listenEvent(EventType.Mouse, (e: MyMouseEvent) => console.log(e.x + "," + e.y));
  // Undesirable alternatives in presence of soundness
  listenEvent(EventType.Mouse, (e: Event) =>
    console.log((e as MyMouseEvent).x + "," + (e as MyMouseEvent).y)
  );
  listenEvent(EventType.Mouse, ((e: MyMouseEvent) =>
    console.log(e.x + "," + e.y)) as (e: Event) => void);
  // Still disallowed (clear error). Type safety enforced for wholly incompatible types
  //listenEvent(EventType.Mouse, (e: number) => console.log(e));
  

    /* combining literals into unions, you can express a much more useful concept - for example, functions 
    that only accept a certain set of known values: */
  
    function printText(s: string, alignment: "left" | "right" | "center") {
      // ...
    }
    printText("Hello, world", "left");
    //printText("G'day, mate", "centre"); // type mispelled
    printText("G'day, mate", "center");
  
    //Numeric literal types work the same way:
  
  function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
  }
  
  
  
  
  
  
  
  
    
    
  