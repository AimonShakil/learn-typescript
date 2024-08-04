/* In TypeScript, we group and pass around data & represent through object types.
Passing Object as a parameter of function, named by Interface or a type Alias */

/* Type Aliases
A type alias is exactly that - a name for any type. The syntax for a type alias is: 
type alias used to give a name to any type at all, not just an object type. For example, a type alias can name a union type: */


// anonymous
let teacher : { name : string , exp : number} = {
    name : "clark",
    exp : 10
}


//Aliased Object Type
type Student = {
    name : string,
    age? : number
}

let student : Student = {
    name : "clark",
    age : 10

}

//Interfaces

interface Manager {
    name : string,
    subordinates? : number
}

let storeManager : Manager = {
    name : "clark"
}

// +++++++++++++++++++++++++

type shop = string | number | number []; //one way
type dresses = "Formals" | "Casuals" | "Pret"; // Custom types are type Aliases
type category = {formals : string , Casuals : String, Pret: string} 
let dresses : { name : string , season : string , size : number} = { // Object Aliased
  name : "Pret",
  season : "Summers",
  size : 10,
}

interface Human {name : string, race : string, age : number} // it is loose form of class, can be reopen and add props later

//+++++++++++++++++++++++++++


// ALIASED OBJECT TYPE: EXAMPLES
// one way
type ID = number | string; 
type ID1 = number | string[];

type PrimaryColor = "Blue" | "red" | "yellow"; // custom types and made a type Alias of a Primary Color
type SecColrs = "Orange" | "Green" | "violet";

// 2nd way
type Point = { 
  x: number;
  y: number;
};


function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
   
  printCoord({ x: 100, y: 100 });

function cords(param : Point) {
  console.log (` we are printing coords ${param.x} and ${param.y}`);
  
}

cords({x: 200 , y: 500});


// Aliased Object Type with optional property
type Student1 = {
    name: string,
    age?: number
    id : number
}

let student_sch: Student1 = {
    name: "Hira",
    // age: 30
    id : 25
}

console.log(student_sch["name"]);
console.log(student_sch.age);


//Using Type Alias type nested Object
/* If you don't have all of the values of the nested object ahead of time, you can mark them as optional,
 by using a question mark in the type's definition . here this ex is different from below both are righ we can 
 put optional value inside obj initialization and also sepertely outside if not know at that time.
 */

 type Person = {
    name: string;
    address?: { // 👈️ address is optional 
      country: string;
      city: string;
    };
  };
  
  const person: Person = {
    name: 'Bobby Hadz',
    
};
  
  person.address = { // Since address is marked as optional in the Person type definition, TypeScript allows us to set this property after the initial declaration.
    country: 'Chile',
    city: 'Santiago',
  };



// INTERFACES : EXAMPES
// Interface is more like class this is loose form of class very broad overview

interface Manager {
    name: string,
    subordiates?: number
}

let store_Manager: Manager = {
    name: "hfhusuhg"
}


/* we are assuming a scenerio we are creating a new user and this user has some of the properties like maybe email 
may be user ID and or Google Loginn and DB ID as well , and we are going to start a trial for this user for watever
the services we are selling and also we wan 
to give them discount code as well: */

interface User {
    readonly DBID : 22 // All must to put in except Optional one 
    email : string,
    UserID : number,
    googleID? : string,
    //startTrail : () => string, // this is also must ,
    startTrail (): string, // another better way to write it 
    getCoupon(couponname : string, discount : number) : number,
  
  }
  
  const Aimon : Admin = {DBID : 22, email :"a@a.com", UserID : 223, role: "admin", startTrail : () => {// here needs to put literal value for role
    return "Trial started"
  },
  getCoupon : (Username : "Aimon", discount: 223) => { // paramter names used as reference can be changed as well and we ned to pass compulsory paramters
    return 10;
  },
  githubToken : "Github ID"
  };
  
  
/* Important to consider that assume above Interface is a library we have of some developer and we want to add into it as \
github ID as well, so we can add in and access that library by writing Interface and name and add in that key property pair
into it */

interface User {
    githubToken : string, // allowed to add in that we cannt do in type, reopening of interface.
  
  }
  
  //Interface Inheritence
  
  interface Admin extends User {
    role : "admin" | "ta" |"learner",
  }