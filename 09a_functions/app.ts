// Functions 
//====================================
/*The return statement is used to terminate the execution of a function and return a value to the caller.
Terminating Execution , Returning Values:Functions can have zero or one return statements. If a function doesn't explicitly return a value, it implicitly returns undefined.*/
//In node environment this referers to an empty object
// In browser global object is window


//Note: All parameters are required
/* 1 .Named Functions
2. Anonymous Function
3. Anonyous Functions with Explicit Types
4. Lambda/ Arrow Function */
//======================================


// NAMED FUNCTION
function add(x: number, y: number): number {
    return x+y;
}

// EXAMPLES
//Different ways to take values & Passing Paramters
    
function loginUserMessage (username : string ="Sam" ) {
	if (!username) {
		console.log("Please enter a Value");
		return
	}
	return ` ${username} just logged in`
}
console.log(loginUserMessage("Ali")); // example of paramters importance 

//Passing Array to a Function
let myNewArray : number[] = [200,300,400,500];   
function returnSecondValue (getArray : number []) { // Inside returnSecondValue, getArray becomes [200, 300, 400, 500].
	return getArray[1];
}
console.log(returnSecondValue(myNewArray));


//==================================		
/* ANONYMOUS FUNCTION
What is anonymous function?
An anonymous function in programming is a set of instructions that does something specific (like adding numbers)/n
without being assigned a specific name, and you can store and use these instructions by assigning them to variables
like myAdd1.
Why it is called as anonymous function?
Imagine you have a friend who can do math really well, but this friend doesn't have a name. You might still refer to this friend as "the math whiz" or something similar
Similarly, in programming, you can create a piece of code that does something specific, like adding two numbers, without giving it a name.
Anonymous Function : which does not have function key word, needed because we create it, use and it get destroyed 
and not saved in memory

execute, return and end */
//==================================
let myAdd1 = function(x: number, y: number): number { 
				return x+y; 
};


//Anonymous function with explict type
let myAdd2: (x:number, y:number)=>number = 	function(x: number, y: number): number { 
												return x+y; 
											};

//type names dont matter
let myAdd3: (baseValue:number, increment:number)=>number = 	function(x: number, y: number): number { 
																return x+y; 
															};

//
const sizes = ["Small", "Medium" , "Large"];
    
sizes.forEach((s) => {console.log(s.toUpperCase)}); // here contextual typing applies to arow function




//LAMBDA FUNCTIONS / ARROW FUNCTION
// Lambda functions / arrow function /closures , main point scope {} accept all global variables, it can access all parent vaariables ehne passes as paparameter in a function it is called as closures / subfunction and all variables can access															
    () => {} // basic arrow function															


	let myAdd4 = (a : number, b : number) => a + b;
//output will be: var myAdd4 = function(a : number, b : number) {return a + b};

type GreetFunction1 = (a: string) => void;
function greeter_w (fn: GreetFunction) {
	//....
}

//Arrow function implicit return
    
const addtwo = (x: number, y : number) => x + y
let myAd4 = (a : number, b : number) => a + b;
//output will be: let myAdd4 = function(a : number, b : number) {return a + b};

let myAdd5 = (a : number, b : number) => (a + b) ; // puting brackets around x+y in react 

//passing an object in arrow function VVVVVVVVVV IMP concepts
const addtwo2 = (num1 : number, num2 : number ) => {
   return num1 + num2}

   
// const addTwo  = (numb1 : number , numb2: number) => numb1 + numb2 // here return happening

// const adddTwo = (num1 : number , num2 : number) => (num1 + num2) // here parenthesis return

// const addTwo = (num1 , num2) => ({username : "Aimon"}) // if we return like this Object will return

// Contextual typing also applies to arrow functions
// names.forEach((s) => {
// 	console.log(s.toUpperCase());
//   });

//++++++++++++++++++++++++++++++++++++

//FIRST CLASS FUNCTION
//The ability of function to be used as a value and can be passed this as an argument to another function and can be returned from the function is called as first class function.
//First class function = first class citizens (refer by this in some books and articles)
//Function Inside a function and control is with greeter function , function calling hold is going to program (concept is v Import)
//sort of a nested function , we need to think is it good or bad


//Nested Function 

type GreetFunction = (a: string) => void;
function greeter1(fn: GreetFunction) { // here we are passing a function in a parameter
	//....
}


type GreetingFunction = (a : string) => void;
function greets(says : GreetingFunction) {
    return console.log(greets);
    
}

// make its example , see in documentation and more complex examples there, thoroughly go through function documentation

type MyFunction = (a:string) => void; // Function inside a function
function mySelf(fn: MyFunction) {

}

//Example of First class function

function greetEnglish(name: string) :void{
    console.log(   `Hello, ${name}!`)
}

function greetFrench(name:string) :void{
    console.log('Bonjour, ${name}!')
}

function greeter (fn: GreetFunction) {
    fn:('Alice'); //parameter

}

// Passing the greetEnglish function to the greeter
greeter(greetEnglish); // Output: Hello, Alice!

// Passing the greetFrench function to the greeter
greeter(greetFrench); // Output: Bonjour, Alice!



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Function overloading:

function addd(arg1: string, arg2: string): string;//option 1
function addd(arg1: number, arg2: string): string;//option 2
function addd(arg1: number, arg2: number): number;//option 3
function addd(arg1: boolean, arg2: boolean): boolean;//option 4
function addd(arg1: any, arg2: any): any {
    return arg1 + arg2;
}

addd(33,"abc")
addd(1,2)
addd("Abc","ee")
addd(true,false)


//overloads give us type-checked calls

//its customary to order overloads from most specific to least specific
// function add(arg1: string, arg2: string): string;//option 1
// function add(arg1: number, arg2: number): number;//option 2
// function add(arg1: boolean, arg2: boolean): boolean;//option 3
// //this is not part of the overload list, 
// //so it has only three overloads
// function add(arg1: any, arg2: any): any {
//     return arg1 + arg2;
// }

// //Calling 'add' with any other parameter types would cause an error except for the three options
// console.log(add(1, 2));
// console.log(add("Hello", "World"));
// console.log(add(true, false));
