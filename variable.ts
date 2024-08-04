/* String Literals VS Template Literals
/* Template Literal : also known as template strings a dynamic way of writing string using backticks allow for more flexible string interpolation and /n
multiline strings (allowing line breaks within the string without needing escape characters like \n) compared to/n
traditional string literals. enclosed in backticks (`), They can contain placeholders, indicated by ${}` */

// collective Printing using Template Literals. 

let myName1 = "Aimon";
let secName = "Shakeel";
let charT = "advance";
let prop_1 = "learner";
let printing = (` ${myName1} ${secName} ${charT} ${prop_1}`);
console.log(printing);


//Example 2
console.log(`My Intro will be ${myName1} ${secName} is a ${charT} ${prop_1}`); 

let emplName:string =  "Mohit Jain";    
let compName:string = "geeksforgeeks";    
// Pre-ES6   
let emplDetail1: string = emplName + " works in the " + compName + " company.";    
// Post-ES6   
let emplDetail2: string = `${emplName} works in the ${compName} company.`;    
console.log("Before ES6: " +emplDetail1);   
console.log("After ES6: " +emplDetail2); 

// Example 3
let mystring1a= "MS1";
let mystring2a= "MS2";
let mystring3a= "MS3";
let mystring4a= "MS4";

console.log("Value in my string"+mystring1a+mystring2a+mystring3a+mystring4a); 
console.log("\n"); // next paragraph
 // Template Literals, with \t there comes a tab gap// 
console.log(`Value in mystring${mystring1a}\n${mystring2a}\n${mystring3a}\n${mystring4a}`);
console.log(`Values in my string ${mystring1a}\n${mystring2a}\n${mystring3a}\n${mystring4a}`); // practice

