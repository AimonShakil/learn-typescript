



let mySymb = Symbol("Key1")

let tsUser = {
    name: "Aimon",
    age: 18,
    "ful name": "Aimon Shakeel",  // way to access this kind of key
    // [mySym] : "mykey1", // to set this key as symbol right syntax is putting [] with key , needs to figure out for TS
    location: "Islamabad",
    email: "Am.s@hotmail.com",
    isLoggedin: false,
    lastloginDays: ["Monday", "Saturday"]
}


//accesing an object
console.log(tsUser.email); // accessing this way dont need eamil with ""
console.log(tsUser["email"]); // accessing this way need email with "" with squre brackets
console.log(tsUser["ful name"]); // automatically set to access like this 

// Interview question take in symbol put in as key shown above 
//console.log(tsUser[mySym])

//Changing / overriting Values of an Object
tsUser.email = "aimon.s@yahoo.com"

//2: NESTED OBJECT 
let teacher = {  // here object is teacher and name, age and experience are its properties
    name: "Aimon",
    experience: "10",
    age: 30,
    address: {                //Nested Object
        city: "Islamabad",
        country: "Pakistan"

    }
}
console.log(teacher.address.country) // two methods to access with . method and with squre brackets
console.log(teacher["experience"])
teacher.address.country = "Nepal"; // here we hve updated its value
console.log(teacher.address.country);





//2nd Method [ ], why we use 
let teacher1 = {
    "first-Name": "Aimon", // why we made this key a string and how to access this , bc data coming in any form point is data can comes in any form, error coming in accesing - operator we uses and in projects data is coming in the form of array of objects we will be accesing with 2nd method if a keys are coming in thta - form
    "age": 50
}

//console.log(teacher1.first-Name) // gives error through dot method
console.log(teacher1["first-Name"]) // accesing key with first name


// Object.freeze(tsUser); this freezes an object
console.log(tsUser)

// Example 2
let regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Aimon",
            lastname: "Shakeel"


        }
    }
}

//Accessing values through dot notation
console.log(regularUser.fullname.userfullname.lastname);

// Type Declaration
// Typing nested objects inline, should be avoided as difficul to read

const person: {
    name: string;
    address: { country: string; city: string };
} = {
    name: 'Bobby Hadz',
    address: {
        country: 'Chile',
        city: 'Santiago',
    },
};


//
let student: {
    name: string,
    age: number
}

student = {
    name: "Hira",
    age: 30
}

console.log(student.name);
console.log(student.age);


//incorporating Functions in Objects
// tsUser.greeting = function() {
//     console.log("Hello TS user")
// }

// console.log(tsUser.greet())

// +++++++++++++++++++++ 2 Singleton Object Declaration of Object from Constructor
//let instaUser = new Object (); // Singelton Object
// let instauser = {}; // Non Singleton Object Imp for Interview
// console.log(instauser);


//COMBINING AN OBJECTS

let Obj1 = {
    1: "a",
    2: "b",
}
let Obj2 = {
    3: "c",
    4: "d",
}

//let obj3 = {Obj1, Obj2};
//let obj3 = Object.assign({},Obj1, Obj2);

let obj3 = { ...Obj1, ...Obj2 }; //  most widely this one will be in use
console.log(obj3);

// When Values will be Coming from Database, it comes in the form of array of Object

let objDs = [
    {
        name: "Am",
        class: "16",
    },
    {

    }
]
console.log(objDs[1].name);

console.log(Object.keys(objDs)); // V imp & interseting return object key in array form to preform loops and other functions 
console.log(Object.values(objDs));
console.log(Object.keys(objDs));

console.log(objDs.hasOwnProperty("islogged")); // returns true False

let dataEmp = [
    {
        name : "Srsa",
        class : 16,
    },
    
]

console.log(dataEmp);


//Object Descructuring  
let course = {
    name: "TS Course",
    Instructor: "Ams",
}

let { Instructor: IE } = course
console.log(IE);

//API and Objects concepts : values coming from backend and how we write them, now values from backend in jason


// method 2  - Using Interface 

interface University { // here Every word must be capital
    id: string,
    courses: number;
    departments: number
}

let university: University = {
    id: "AIR",
    courses: 10,
    departments: 15
}

//method 3 - Using Type , defining custom type> minor difference in type and Interface we can use both to get the method is same

type Manager = {
    name: string,
    department: string,
}

let manager: Manager = {
    name: "Aimon",
    department: "IT"
}
console.log(manager.name)

//Example - structural typing 

interface Ball {
    diameter: number
}

let cricket_ball: Ball = {
    diameter: 10
}

interface Sphere {
    diameter: number
    color: string
}
let sphere: Sphere = {
    diameter: 10,
    color: "Blue"
}

cricket_ball = sphere // left hand side Object properties in comparison must be satisfied (Important)

//Nested typing

type Author = { // custom type
    firstName: string,
    lastName: string
}

type Book = {
    author: Author,
    publishDate: string
}

let book: Book = {
    author: {
        firstName: "Aimon",
        lastName: "Khan"
    },
    publishDate: "2222"
}

console.log(book.author.firstName)

//OBJECT TYPES

// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });


function printBooks(pt: { english: string; maths: number }) {
    console.log(" The Print of English will be in " + pt.english);
    console.log("The Print of Maths Books will be in" + pt.maths);

}

printBooks({ english: "English", maths: 100000 });
//Practice accesing property of objects this way.


//OPTIONAL PROPERTIES
//The parameter's type annotation is an object type
function printName(obj: { first: string; last?: string }) {
    // ...
}
// Both OK
printName({ first: "Zab" });
printName({ first: "Alice", last: "Alisson" });


//2
function uni1(subj: { comp: string, opt?: string }) { // Imp: also take 1 property assignement against each property
    console.log(subj.opt?.toUpperCase()); // modern javascript syntax
}
//uni1({comp : "Science", opt: "English"})


//Putting loops on Objects : Objects Iteration , we use forIn for loops


const myObject: Record<string, string> = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby on Rails",
    swift: "Swift by Apple"
};

for (const key of Object.keys(myObject)) {
    // console.log(`${key} is a shortcut for ${myObject[key]}`);
}

// Applying for in loop on array, Arrays have keys and by default start from 0,  but in Object we can add whatever key we want

const programming: string[] = ['cpp', 'Java', 'Ts',]
for (const key in programming) {
    // console.log(key);
    console.log(programming[key]);
}

//for Arrays we use for in. for Objects we sue for off