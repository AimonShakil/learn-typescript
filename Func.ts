//Function Declaration / defining 
//Block of code that performs a specific task , can be invked whenever needed.Function saves from redundancy means repeating 
// Function Definition & Function Call or Invoke

function myFunction (msg : string) { // parameters -> inputs
  console.log(msg)
}

myFunction("I love TS"); // arguments

// Function to Calculate Sum & return
// Imp is that function parameters -> like local variable -> Block scope of function

function sumFunction (a: number , b: number) : number {   //function signature before curly brackets
 let s = a + b;
 return s; // returns are last to right else what ever written after will definetly not run

}
let val = sumFunction(3,4)
console.log(val);
//
function sumFunction2 ( a: number , b: number) : number {
  const result = a + b;
  return result
}

let total = sumFunction2(22, 55)
console.log(total);


// OPTIONAL PARAMETERS in Functions / parameterized function

function disp_details( id:number, name:string, mail_id?:string ) { //  mail_id is an optional parameter.
console.log("ID:", id);
console.log("Name",name); 
if(mail_id!=undefined) // The function prints the value of mail_id only if the argument is passed a value.
console.log("Email Id",mail_id); //If an optional parameter is not passed a value during the function call, the parameter’s value is set to undefined
}
disp_details(123,"John");
disp_details(111,"mary","mary@xyz.com");



function emp_details (id : number , pass: 2244339, name: string, emailid?: string) {
if( pass == 2244339 ) {
  console.log("You are Welcome"); 
} else {
  console.log("Pls enter correct password")
}

return 

const StudentInfo = {id, pass, name, emailid} 

}













//ARROW FUNCTION. Compact way of writing a Function , Arrow function stores its value in a variable.
// () => {} Syntax for Arrow Function
// () : number => {}
let arrowFunction = (x : number , y : number ) => {
  let sum = x+y
  return sum;
}
let vals = arrowFunction(8,10)
console.log(vals);



//Q: Function that takes a String as an argument and returns the number of Vowels in the string
function countVowels (word: string ) : number {
  
  word = word.toLowerCase();
  let count = 0;
  for (let chr of word) {
    if ( 
    chr ==="a" || 
    chr ==="e" ||
    chr === "i" ||  
    chr ==="o" || 
    chr ==="u" 
    )
  {
    count++;
   
  }
  }
  return count;
}

const inputWord = "Apna College";
const vowelCount = countVowels(inputWord);
console.log(`Number of vowels in "${inputWord}": ${vowelCount}`);

// Create an arrow funtion to perform same task

let countvowels = ( word : string) => {
  word = word.toLowerCase();
  let count = 0;
  for (let chr of word) {
    if ( 
    chr ==="a" || 
    chr ==="e" ||
    chr === "i" ||  
    chr ==="o" || 
    chr ==="u" 
    )
  {
    count++;
   
  }
  }
  return count;
}

const inputWords = "Apna College";
const vowelsCount = countVowels(inputWord);
console.log(`Number of vowels in "${inputWord}": ${vowelCount}`);

// Callback Function: In TS a function can be passed as an arguemnts to another funtion 
// for an array (only used for Arrays) forEach method is used by using call back funtion
// Interview Question: forEach is also called as Higher order function/ Method having parameters/n
// and return other function as output, where there is a call back function as paramter in another function it becomes a higher order function.

let arr1 : string[] = [ "Islamabad", "lahore", "Karachi"];
arr1.forEach((val, idx, arr) =>{
  console.log(val.toUpperCase(), idx, arr);
}
);

//Practice Question : for a given array , print squre of each value using forEach loop.
let arryNum : number[]= [1,2,3,4,5,6];
arryNum.forEach((val) => {
 console.log(val * val)
}
); 

// Or another way 
// let calSqure =(val) =>  {
//   console.log(val * val)
  
//  }
//  arryNum.forEach(calSqure);






function calculateAverage (num1: number, num2: number) { // this method name is Calculate averge and we have passed two parranmeters num1 and num2, or this method is beng defined with two Parameters
    return (num1+num2)/2; // when this method return value its type will be number
}
let avg = calculateAverage(20,50); //20 +50/2 =35
console.log(avg);

//same method with arrow Function


// let avg2 = (num1: number, num2: number) => (num1+num2)/2; 

let avg2 =(num1: number, num2: number) => {
let myAvg = (num1+num2)/2;
return myAvg;
}

// a Function which do not return a value 

function calculateAverage2() {
    console.log("Calculating Average");   
}

// using thsi function in a variable to store a value

let avg3 = calculateAverage2();
console.log(avg3)

let f3 = (age:number,  name:String) => {
return `Mr .${name}, your age is ${age}`;
}

console.log(f3 (100,"Aimon")); 


//Optional Parameters

function optParmas(param1?:number, param2:string = "Gamma",param3:number=10){  // Optional parameter should be at aend, if all 3 parameters are optional itr will work
    console.log(`${param1}, ${param2}, ${param3}`);
    return `${param1}, ${param2}, ${param3}`;
}

let xyz = optParmas(10,"Alpha",20); // if we set some varibale default at the end as above 
console.log(xyz);

let xyz2 = optParmas(10,"Beta") //  if we call it this way what should print here
console.log(xyz2); // what would print here, printing two times as once in method and once we ourself printing

let xyz3 = optParmas(10); // where there is a no value and make that print it is rule of thum that underfined print there and first parameter can never be optional
console.log(xyz3);

// why first parameter can not be optional below
// before required paramter there could not be a optional paramter this is rule of thum
function optParams2(num1?:number , num2?:number) {
console.log(num1);
console.log(num2);
}

//optParams2();
//optParams2(10);
optParams2(10,20);

//Functions - and syntax:

// function fun_name(parameter) {
//code
// }

//function declaration
function greet(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!");
  }
  greet("John"); //function call
  
  
  //function declaration
  function Welcome(parameter: string) {
    console.log(`Welcome ${parameter}`);
  }
  
  Welcome("wania"); //function call
  
  Welcome("Class 54");
  
  function getFavoriteNumber(): string {
    return "Value is positive";
  }
  
  // console.log(getFavoriteNumber())
  getFavoriteNumber();
  
  //Arrow Function
  let sum1 = (x: number, y: number): number => {
    return x + y;
  };
  
  // console.log(sum1(2,3))
  
  
  //Arrays
  let arr = [1, 2, 3, 4, 5, 6];
  
  console.log(arr[0]);

// how to return accurate
function addTwo (num : number) : number {
  return num +2
   //return "Hello" // this is a point of concern  , this can be avoided by adding a retuen type
}
let results = addTwo(5)

// returning more than one types, can be done by using union types
function getValue (myVal : number) : boolean | string {
   if (myVal > 5) {
       return true
       
   }
   return "200 K"
}

function handlerr (errmsg : string) : never { // it terminates a function
   throw new Error ("this is an error")
}














