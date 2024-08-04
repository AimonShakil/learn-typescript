
// // Starting Step 3C Inquirer - to take input from user



// //Step 4 Practice Union Literals

// //Narrowing Concept in Union Literals:  as functions specific for strings not available if input given is of Number
// let myName : string | null;
// myName = "Aimon";
// console.log(myName);

// // myName = "Null";
// console.log(myName);

let myAge: string | number;

myAge = "Ninteen" ;//narrowing, Need to understand narrowing concept
console.log(myAge.toUpperCase());
console.log(myAge.toString());
console.log(myAge.toLowerCase());

// Example 2

let newAge = Math.random() > 0.6 ? "Khan" : 60
//newAge.toLowerCase();//Error: Transpiler cannot narrow

if (newAge === "Khan") {
    // Type of newAge: string
    newAge.toUpperCase(); // Can be called
}

if(typeof newAge === "string"){
    // Type of newAge: string
    newAge.toUpperCase(); // Can be called
}

typeof newAge === "string"
? newAge.toUpperCase() // Ok: string
: newAge.toFixed(); // Ok: number

// Example

let age : number |"died" |"unknown";
age = 90;//OK
age = "died";//OK
age = "unknown";//OK
//age = "living";//Error

// 
let aimon : "aimon";
aimon = "aimon";
// aimon = "78" or "Khan";  // Error

//Example
let yourName = Math.random () > 0.6 ? "Hira" : undefined // conditional Operator or Ternary operator
if (yourName) {
    yourName.toUpperCase()
}

console.log(yourName);

//TYPE ALIASES

// One way
type RawData = Boolean | string | number | null | undefined; // One way directlt setting type Aliases
let myData : RawData;

// Another way : Good Use case 

type User = {
    name : string
    email : string;
    isActive : Boolean
}
function createUser (user :User) : User { // if we dont return then could simply write
    return {name : "", email : "", isActive: true} // here not just return object but its values
}

createUser({name : "", email : "", isActive: true}) // whever createuser will be used anywhere it asks for all properties


//Combining Type Aliases
type Id = string | number;

type MyId = Id |undefined |null;



// Defining Types / Assigning Multiple Types by creating custom Type , different types can be assigned to a variable

type Type1 = string | number;
type Type2 = null | undefined;
type Type3 = Type1 | Type2

let userScore :Type3 = 1010;
let average : Type1 = 'Ninety Eight Percent';
console.log(`User got ${userScore} with total Average : ${average}`)

//1. Traffic Light Simulation:
/*Define a type for a traffic light that can only have the values "red," "yellow," or "green." Write a function that
simulates the behavior of a traffic light by cycling through these colors. */

 type Tlight = "Red" | "Green" | "Yellow";   //this Exm can be done using other methods like for loop and settimout async Functi
 let signal : Tlight;

function Traffic_light (signal : Tlight) {
    for (let i= 0; i > 10 ; i++)
    if (signal === "Red") {
        console.log("Please Stop!");
    } else if (signal === "Yellow") {
        console.log("Please wait")
    } else {
        console.log("Go!");
        
    }   
}

Traffic_light ("Red");

//Rest example in Union literals file for further practice

let yourName1 = Math.random() > 0.6 ? "Hira"  : undefined;

//if (yourName === "string") {
// if (yourName === "Hira")
if (yourName1 === " ") {
    yourName1.toUpperCase(); // Ok: string
}
