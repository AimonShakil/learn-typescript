//HTC

// Generics as when writng a lots of production level code bc generics is one such things which makes components reusable 
//and by the term component we means all of our functions even arrays are generics behind the scnens so really important to understand
// also dont pick up word ( Component is a broader term its means a chunk of something it can be tailwind chunk, a react chunk or just a function) 

// so bascically when we need to write a lots of function and want a different return type we use Generics
// we will be seeing different use cases 
const score: Array<number> = [] 
const names : Array <string> = []

// Case1
function IdnetityOne(value : boolean | number) : boolean | number { // it can either except number or Boolean
    return value

}

//Case 2
function identityTwo (val : any) : any {
    return val;
}

// case3

function identityThree <Type> (val : Type) : Type { // once here we pass any type the value is logged , then return type will automatically becomes number
    return val;
}

identityThree(true);
identityThree("Aimon");
identityThree(23) // we are lockig a value

// But Common way of Doing is can also reference to any other letter Say H every where or word even
function identityfour <T>(val : T) : T {
    return val;
}

// 
interface Bottle {
    brand : string,
    type : number;
}

identityfour <Bottle> ({brand : "Nike" , type: 23})


//How we can create or take Input as an Array and what could be the possible cases when we are returning some values 

function getSearchProducts <T> (products : T[]) :T {
    // Do some database operations
    const myIndex = 3
    return products[myIndex] // in this generrics case we cannot return a number need  to return a parameter with val
}

// Now we are converting this same function to an arrow function, when we see on Github and find confusing

const getMoreSearchProducts = <T,> (products : T[]) : T => { // Generic arrow Method, | sometimes sees T, its means indicating this is a Generric not a tag means ppl working in react tht thisis not JSX code
    // do some DB Operations 
    const myIndex = 4
    return products [myIndex]
}


// Using Type Parameters in Generic Constraints

interface DataBase {
    connection : string,
    username : string,
    password : string,
}



//function anotherFunction<T, U extends number> (valOne : T , valTwo : U) : object {

function anotherFunction<T, U extends DataBase> (valOne : T , valTwo : U) : object {    
    return  {
        valOne,
        valTwo,
    }
}

// anotherFunction (3 , 4.6)  // for fisrt function

anotherFunction (3 , {connection : "ss", username :"sss" , password :" sjffigfa"});

// Narrowing In Operator Natrowing
//Detection

interface User{

    name : string;
    email : string;

}

interface Admin {
    name : string;
    email : string;
    isAdmin : Boolean
}

function isAdminAccount (account : User | Admin) {
    if("isAdmin" in account) { // we are narrowing it using in Property
        return account.isAdmin // accout automatically changes that it is 100% admin
    }


}

// Two more type how we can narrow down the type HTC, another video, this entire series is about how we go into more
//preciseness of the type so that we can take better action and that TS all about getting types and all narrow down 

// Instance of Narrowing 
new Date() // date or any type of variable can be created by saying new and then we create a date just like that a new date is being created 
new Array() // new Keyword instance of almost like not literally but almost typeof, typeof checks default types instance is of class or something else 

function logValue (x : Date |  string) {
    if  (x instanceof Date) { // here x checks weather x is instance of date 
        console.log(x.toUTCString()); // here we are 100 % sure that x is date 
        
    } else {
        console.log(x.toUpperCase());
        
    }
}


//using Type predicates

type Fish = { swim : () => void};
type Bird = { fly : () => void};


function isFish(pet : Fish | Bird) : pet is Fish { // this method going to validate weather the input value was given isa  fish or not or not really simple it could be 
    return (pet as Fish).swim !== undefined         // upper line returning pet is Fish specifies that we are not returning true but returning Fish

}

function getFood (pet : Fish | Bird) {
    if (isFish(pet)) { // isFish Method
    pet // still the value or type of value is not identified
    return "fish food"
    } else {
        pet // still the value or type of value is not identified
        return "Bird Food"
    }
}

//Final Steps of Type Narrowing

//Discriminated Unions

interface Circle {
    Kind : "Circle", // we can have kind for all of them
    radius : number
}

interface Square {
    Kind : "square",
    side : number
}

interface Rectangle {
    Kind : "rectangle",
    length : number,
    width : number
}

type Shape = Circle | Square  | Rectangle //in future can be available for rectangle as well, like in payment status, Captured, refunded or Initiated latest introduced Authorized 

function getTrueShape (shape : Shape) {
    if (shape.Kind === "Circle" ) {
        return Math.PI * shape.radius ** 2

    }
    //  return shape.side * shape.side
}

// function getArea (shape : Shape) {
//     switch(shape.Kind) {
//     case "Circle": 
//     return Math.PI * shape.radius ** 2


//     case "square" :
//       return shape.side * shape.side
//     }
//     case "rectangle":   // rightly written but showing error
//         return shape.length * shape.width

//     default: 
//         const _defaultforShape : never = shape // this never runs its a default checker
//         return _defaultforShape
// }
