// IMP Concepts
/* variable any define it can alow any type to pass string, function boolean  , TS purpose is to restric our 
varibale to a specific type , so we should not define any in TS which defies TS basic purpose difference in any
& unknow ; in unknown we declare variable at this stage we dont know type and later whenwe get to know we will define,
also cant perform operation.

Never Type: 

The never type represents the type of values that never occur. For instance, never is the return type for 
a function expression or an arrow function expression that always throws an exception or one that never returns. 
Variables also acquire the type never when narrowed by any type guards that can never be true.

The never type is a subtype of, and assignable to, every type; however, no type is a subtype of, or assignable to, 
never (except never itself). Even any isn’t assignable to never. */




//OBJECT with TYPE ANY:

let obj :any = { x: 0}
obj.foo();
obj();
obj.bar =100;
obj ="Hello";
const n : number = obj // None of these lines throw compiler error , using any disabled type checking

// Any

let myval: any; // defies the purpose of TS which is type checking

myval = true; // OK
myval = 42; // OK
myval = "hey!"; // OK
myval = []; // OK
myval = {}; // OK
myval = Math.random; // OK
myval = null; // OK
myval = undefined; // OK
myval = () => { console.log('Hey again!'); }; // OK


//Unknown

let value: unknown; // also states that value dont know at this time so allow all types of values

value = true; // OK
value = 42; // OK
value = "hey!"; // OK
value = []; // OK
value = {}; // OK
value = Math.random; // OK
value = null; // OK
value = undefined; // OK
value = () => { console.log('Hey again!'); }; // OK


// Assigning a value of type unknown to variables of other types

let val: unknown;

const val1: unknown = val; // OK
const val2: any = val; // OK
// const val3: boolean = val; // Will throw error
// const val4: number = val; // Will throw error
// const val5: string = val; // Will throw error
// const val6: Record<string, any> = val; // Will throw error
// const val7: any[] = val; // Will throw error
// const val8: (...args: any[]) => void = val; // Will throw error


// Never

// Function returning never must not have a reachable end point
function error(message: string): never {
  throw new Error(message);
}
 
// Inferred return type is never
function fail() {
  return error("Something failed");
}
 
// Function returning never must not have a reachable end point
function infiniteLoop(): never {
  while (true) {}
}