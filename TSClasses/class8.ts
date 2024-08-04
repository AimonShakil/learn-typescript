// Step 09 a Functions
//inhances code resuabilty , arguments and parameters
//1 Named Functions

import { log } from "console";

//  Anonymus function : execute ho kr destroy ho jae and memory mai save nae ho, java script hoisting , it will be behaving like a variable and all properities apply

let myAdd1 = function(x: number, y: number): number { 
    return x+y; 
};
//Anonymous function with explict type
let myAdd2: (a:number, b:number)=>number = 	function(x: number, y: number): number { 
    return x+y; 
};

//type names dont matter
let myAdd3: (baseValue:number, increment:number)=>number = 	function(x: number, y: number): number { 
    return x+y; 
};													
//Lambda functions/ arrow function /closures , main point scope accept all global varables, can access all parent vaariables ehne passes as paparameter it is called as closures															
let myAdd4 = (a : number, b : number) => a + b;
//output will be: var myAdd4 = function(a : number, b : number) {return a + b};

//*type GreetFunction = (a: string) => void;
function greeter(fn: GreetFunction) {} 
	


type GreetFunction = (a: string) => void;  //arrow function
function greeiter(fn: GreetFunction) {
	//....
}
 
function greetEnglish(name: string):void{
    console.log('hello, ${name}');
}
 
function greetFrench(name: string):void{
    console.log('banjor, ${name}');
}

function greetere(fn:GreetFunction)
{
    fn('alice');
}
greetere(greetEnglish);
greetere(greetFrench);
// calling control is with greetere, 



//9b  Functional Optional Parameter
//Named function with optional parameters
function buildName(firstName: string, lastName?: string) : string {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Bob");  //ok
let result2 = buildName("Bob", "Adams", "Sr.");  //error, too many parameters exessice paramteter
var result3 = buildName("Bob", "Adams");  //also ok

//Default PAameter
function buildName1(firstName: string, lastName: string = "Khan") : string {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

//Rest Parameter - countless paramteter


function buildName12(firstName: string, ...restOfName: string []) {
    
        return firstName + " " + restOfName.join(" ");
}
//Function overload

function addd (arg1: string, arg2: string) : string;
function addd (arg1: number, arg2: number) : number;
function addd (arg1: boolean, arg2: boolean) : boolean;  // multiple signatures defined

function addd (arg1: any, arg2: any) : any {

    return arg1 + arg2
 }

 addd("am","abc")
 addd(22, 5)
 addd(true,false)



//09e next class 9th 
// call backs functions (means call again), promosis, async function and await to clear concept also a video.










