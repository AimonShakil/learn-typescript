
/* Union Literals / Compound Types
a union literal is a type that represents a specific set of literal values within a union type. 
Union types allow to combine multiple types into one, and union literals take this a step further by specifying 
exact values within the union.

// Union type describes a value that can be one of several types and use vertical bars (pipe) to seperarate each other
// it allow access to common location by different data types.

Could be anyone of these types we refer to each of these types as Union members 

//ASSIGNING UNION TYPES to VARIABLES
let myname: string | null; 

myname = null;
console.log(myname);

myname = "zia";
console.log(myname);

// myname = undefined; //Error
//myname = 12; //Error

let myAge: string | number;
myAge = 16; // narrowing
console.log(myAge);
//console.log(myAge.toLowerCase());//Error


myAge = "Dont Know";//narrowing
console.log(myAge);
console.log(myAge.toString()); // common to both types, can be called even without narrowing 
console.log(myAge.toLowerCase());// Can be called on string , because of narrowing

// Example
let newAge = Math.random() > 0.6 ? "Khan": 60;
//newAge.toLowerCase();//Error: Transpiler cannot narrow

if (newAge === "Khan") {
    // Type of newAge: string
    newAge.toUpperCase(); // Can be called
}

if (typeof newAge === "string"){
    // Type of newAge: string
    newAge.toUpperCase(); // Can be called
}

typeof newAge === "string" ? newAge.toUpperCase() : newAge.toFixed(); // // Ok: string , Ok: number


//
let age: number | "died" | "unknown";

age = 90;//OK
age = "died";//OK
age = "unknown";//OK
//age = "living";//Error


let zia: "zia";

zia = "zia";
//zia = "khan";//Error

//
let score : number | string | boolean = 33;
score = true;   
score = "Aimon";  
console.log(score); // variable score storing latest assigned value 

//Exm
/* this code uses a ternary operator to conditionally assign a value to yourName. Then, it checks if yourName is 
truthy before attempting to call toUpperCase() on it, ensuring type safety within the if block.
yourName.toUpperCase();//Error: Object is possibly 'undefined'. */


let yourName = Math.random() > 0.6 ? "Hira"  : undefined;

if (yourName === "string") {
  yourName.charAt(2);
}
if (yourName === "Hira") {
  yourName.length
}
if (yourName === " ") {
    yourName.toUpperCase(); // Ok: string
}

yourName?.toUpperCase();//OK


/* Function that can operate on strings or numbers
 We can also define a type alias */

type RawData = boolean | number | string | null | undefined;
let result: RawData;
result = 2, true, "am";


// TYPE ALIAS / COMBINING TYPES:

type Id = number | string;
type IdMaybe = Id | undefined | null;

//
type Primary_color = "red" | "green" |" yellow"
type colors = Primary_color | null | boolean 

//
type Raw_data = string | number;
type Final_Data = Raw_data | Boolean | undefined;


//UNION TYPES WITH CUSTOM DERIVED DATA TYPES:
/*Defining Type / Assigning Multiple Types by creating custom Type, One VAriable can have two types */

type Type1 = string |number;
type Type2 = Boolean | null;
type Type3 = Type1| Type2

let scores: Type3 = 999
let as: Type1 = 10 ; // if we write '10' like this comes error

console.log(as * scores); // Preferes string type first over + sign

//
/* Useful case scnerio for this ( this way we can make our application less error Prone)*/
let seatAllotment : "aisle" | "middle" |"window"
seatAllotment = "aisle"
// seatAllotment = "crewseat" // ERROR 

//
type  User = {
    name: string;
    id : number
}

type Admin = {
    name: string;
    id :  number
}

let clark : User | Admin = {name : "Am" , id : 334}
clark = {name : "Asa", id : 3934};
console.log(clark);



// UNION LITERALS WITH FUNCTIONS

function printId(id: number | string) {
    console.log("Your ID is: " + id);
  }
  // OK
  printId(101);
  // OK
  printId("202");
  // Error
  //printId({ myID: 22342 });

//
function call1 (id: number | string) {
    console.log(" Your Id is: " + id); 
}

call1("Ninety");
call1(101);
call1("102");
//call1({2234}) // Error


// UNION TYPES WITH ARRAYS:

const data : number[] = [ 1, 2 ,3 ,4]
const data1 : string[] = [ "1", "2" ,"3" ,"4"]

const data2 : string[] | number []=  [2, 3, 4, ] // cant be mix can be either of type number or Array

const data3 : string | number []=  "dd" // either one type

const data4 : (string | number) []=  [2 ,3 ,4, "dd", "kk"] // like this can have mix of both

const data5 : (string | number | Boolean) []=  [2 ,3 ,4, "dd", "kk" , false]


//Special case where we want to fix the value
let pi: 3.14 = 3.14 // this is a literal type of assignemnet
//pi =3.145 


// NARROWING: WORKING WITH UNION TYPES 
/* Narrowing occurs when TypeScript can deduce a more specific type for a value based on the structure of the code.*/   

function printId1(id: number | string) {
   // console.log(id.toUpperCase()); // to correct this issue there comes concept of narrowing, narrow the union with code, without type annotations.  
}

function printsId(id: number | string) {
    if (typeof id === "string") {  // union narrowing
      // In this branch, id is of type 'string'
      console.log(id.toUpperCase());
    } else {
      // Here, id is of type 'number'
      console.log(id);
    }
  } 

  
// Another example is to use a function like Array.isArray:
  function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) { //Array.isArray used a function here to narrow 
      // Here: 'x' is 'string[]'
      console.log("Hello, " + x.join(" and "));
    } else {
      // Here: 'x' is 'string'
      console.log("Welcome lone traveler " + x);
    }
  }

//welcomePeople(["am", "ty", "Fi" ,"ma"]) or
welcomePeople("Aimon")

// Imp Concept:

// Return type is inferred as number[] | string
function getFirstThree(x: number[] | string) {
   // return x.slice(0, 3);
   return x
   console.log(x)
  }

getFirstThree([1, 2 , 3, 4, 5])
getFirstThree ("Aimon")

/* If you want to return the first three elements of an array or the first three characters of a string, you can use 
type guards or type assertions to help TypeScript understand which specific type you're working with inside the function.
Here's a modified version of your function that demonstrates one way to handle arrays and strings differently */

function getFirstThrees(x: number[] | string): number[] | string | null {
    if (Array.isArray(x)) {
        return x.slice(0, 3); // Return the first three elements of the array
    } else if (typeof x === 'string') {
        return x.slice(0, 3); // Return the first three characters of the string
    } else {
        return null; // Return null for other types
    }
}

console.log(getFirstThrees([1, 2, 3, 4, 5])); // Output: [1, 2, 3]
console.log(getFirstThrees("Hello, world"));   // Output: "Hello"
//console.log(getFirstThree(1));                // Output: null

// TYPE ASSERTION
//const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");

function printText(s: string, alignment: "left" | "right" | "center") {
    // ...
  }
//printText("Hello, world", "left");


/*Index Signature -> when we are creating objects but we dont know the exact names of object keys

interface TransactionObj { // thts we have interface from that we will create an Object
Pizza : number;
Books: number;
Job: number
} */

interface TransactionObj {  // index signature
[index : string] : number // number | boolean | string could use union types here , keys can't be boolean but other
}

//
interface Student {
  [index : string] : number | string | number [] | undefined
  name: string,
  age : number,
  class? : number[]
}

const student : Student = {
  name : "Dough",
  age : 10,
  class: [100, 200]
}

console.log(student.age);


// Union type or Compound type: 
// Union type describes a value that can be one of several types and use vertical bars (pipe) to seperarate each other
// it allow access to common location by different data types.

let myVar : string| null |number;
myVar = "My Name";
console.log(typeof myVar);
myVar= null; 
console.log(typeof myVar);
myVar = 9; 
console.log(typeof myVar);
console.log(); // shortkey log+tab// 

//
let code: string | number;
code = 123;   // OK
code = "ABC"; // OK
//code = false; // Compiler Error

//Sample program:  
let money_in_Bank : number = 500;
let total_money = money_in_Bank + 1000;

console.log(total_money);

let hol_cost = 700;
let rem_money = total_money - hol_cost;
console.log(rem_money); // output 800

//Sample Program:
var nameT:string = "John"; 
var score1:number = 50;
var score2:number = 42.50
var sum = score1 + score2 
console.log("name"+nameT) 
console.log("first score: "+score1) 
console.log("second score: "+score2) 
console.log("sum of the scores: "+sum) 

// TYPE ASSERTION: changing a variable from one type to another, < > symbols and place it in front of the variable or expression. 
// The reason why it's not called "type casting" is that casting generally implies some sort of runtime support while, /n
//“type assertions” are purely a compile time construct and a way for you to provide hints to the compiler on how you want your code to be analyzed.

/* Type assertion in TypeScript is a way to tell the compiler about the type of a variable, overriding its default/n
 inference. */

//1 Angle-bracket syntax:
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

let seeString : any = " this is my String";
let seeStrLength : number = (<string>seeString).length // seeString as a string and allows access to string-specific properties and methods.
//.length retrives length of string


//As-syntax:
let someValue1: any = "this is a string";
let strLength1: number = (someValue as string).length;

/*  Type assertion does not change the runtime behavior of code. It's purely a way to tell the TypeScript 
compiler about the type of a variable when you know more about the data type than TypeScript does. should be cautious
when using type assertion because it bypasses type checking and can lead to runtime errors if the type assertion is incorrect. */

type One = string
type Two = string | number
type Three = 'hello'

//convert to more or less specific truthy or falsy return type boolean and need to convert throug casting

let a : One = 'hello'
let b = a as Two // less specific
let c = a as Three // more specific

let d = <One> 'world'
let e = <Two> 'world'

// Assertion for Narrowing - Praticle use case
const addorConcat = (a : number, b: number, c:'add' | 'concat'): number | string => {                
       // c could be union of literals specifically string add and string concat
    if (c === 'add') return a + b
    return '' + a + b
}
let myVal: string = <string> addorConcat(2, 2, 'concat') 

//
var str = '1' 
var str2: number = <number> <any> str   //str is now of type number 
console.log(typeof(str2));

/* The reason <any> is used in the type assertion is to circumvent TypeScript's type checking and allow the conversion
of the variable str to type number directly. It's a way of telling TypeScript to trust that the conversion from string to
number will succeed, even though it's not type-safe. */


//INFERRED TYPING

let num4 = 5;
console.log("value of num " + num4);
//num4 = "12";         // throw error, type string cannot be assigned to number



