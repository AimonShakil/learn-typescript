
/* Tuple is a specialized kind of Array, with arranging set type in an Array in a precise order, usually 
API Take it like this

Tuple types have the advantage that we can accurately describe the type of an array of mixed types

A tuple is a typed array with a pre-defined length and types for each index.

*/

//Previously : const user : (string, number ) []  = [1, "ssdf", 4 ] in union type any order is fine and accepted 
//TUPLES

// define our tuple
let ourTuple: [number, boolean, string]; // here Tuple type annotation can have combination

// initialize correctly
ourTuple = [5, false, 'Coding God was here',];

let user1 : [boolean | number | string]; //here declares a variable named user1 with the tuple type annotation [boolean | number | string]. This means that user1 can hold a single value that is either a boolean, a number, or a string, but not a combination of them simultaneously.
user1 = [true];
 
//
var tuple: [number, string] = [1, "bob"];
var secondElement = tuple[1];  // secondElement now has type 'string' 

/* Typically an array contains zero to many objects of a single type. TypeScript has special analysis around
// arrays which contain multiple types, and where the order in which they are indexed is important. 

These are called tuples. Think of them as a way to connect some data, but with less syntax than keyed objects. */


// define our tuple
let ourTuples: [number, boolean, string];
// initialize correctly
ourTuples = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
ourTuples.push('Something new and wrong'); // this wll be pushed
console.log(ourTuples); 

const failingResponse = ["Not Found", 404];

// but you will need to declare its type as a tuple.

const passingResponse: [string, number] = ["{}", 200];

// 
let rgb : [number, number, number] = [255, 255, 255] // this way also restricting can add more than reference

//TYPES for TUPLES

type Userr = [ number, string ] // tuple type

const newUser : Userr = [1222, "ssdd"]

newUser[1] = "Ac.com" // we are overwritng this value which is not right about tuple, we can allow to use all methods of Array
//newUser.slice(55)




// If you hover over the two variable names you can see the
// difference between an array ( (string | number)[] ) and
// the tuple ( [string, number] ).

// As an array, the order is not important so an item at
// any index could be either a string or a number. In the
// tuple the order and length are guaranteed.

if (passingResponse[1] === 200) {
  const localInfo = JSON.parse(passingResponse[0]);
  console.log(localInfo);
}

// This means TypeScript will provide the correct types at the right index, and even raise an error if you try to
// access an object at an un-declared index.

//passingResponse[2]; // showing error

// A tuple can feel like a good pattern for short bits of connected data or for fixtures.

type StaffAccount = [number, string, string, string?];

const staff: StaffAccount[] = [
  [0, "Adankwo", "adankwo.e@"],
  [1, "Kanokwan", "kanokwan.s@"],
  [2, "Aneurin", "aneurin.s@", "Supervisor"],
];

// When you have a set of known types at the beginning of a
// tuple and then an unknown length, you can use the spread
// operator to indicate that it can have any length and the
// extra indexes will be of a particular type:

type PayStubs = [StaffAccount, ...number[]];

const payStubs: PayStubs[] = [
  [staff[0], 250],
  [staff[1], 250, 260],
  [staff[0], 300, 300, 300],
];

const monthOnePayments = payStubs[0][1] + payStubs[1][1] + payStubs[2][1];
const monthTwoPayments = payStubs[1][2] + payStubs[2][2];
const monthThreePayments = payStubs[2][2];

// You can use tuples to describe functions which take
// an undefined number of parameters with types:

declare function calculatePayForEmployee(id: number, ...args: [...number[]]): number;

calculatePayForEmployee(staff[0][0], payStubs[0][1]);
calculatePayForEmployee(staff[1][0], payStubs[1][1], payStubs[1][2]);

//
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#tuples-in-rest-parameters-and-spread-expressions
// https://auth0.com/blog/typescript-3-exploring-tuples-the-unknown-type/

const example = ['Dylan']

const codeNames: readonly string[] = ['Coding', 'God']

function ex(param1?: string){}