
//2 . PRIMITIVE DATA TYPES, ANALYZING & MODIFYING DATA TYPES

/* A data type is a classification of data which tells the compiler or interpreter how the programmer intends to /n
use the data. TS provides data types as a part of its optional Type System.  

0. Any is a special data-type, also the super data-type of all data types, Using the any type is equivalent to opting out of type checking for a variable.

1. Build in / Primitive data Types (7) : number , boolean, string, void, null, undefined , any

2. User-defined Data Types (UDT): is a data type that derived from an existing data type, Apart from built-in data types, user can also define its own data type. User-defined 
types include Enumerations (enums), classes, interfaces, arrays, and tuple.You can use UDTs to extend the built-in types 
already available and create your own customized data types

3. Null & Undefined: The null and undefined cannot be used to reference the data type of a variable. They can only be 
assigned as values to a variable. A variable initialized with undefined means that the variable has no value or object 
assigned to it while null means that the variable has been set to an object whose value is undefined.

number : number, binary, decimal, octal, Hexa Decimal all comes in number type

4. Template Literals :Literals or constants are the values we write in a conventional form whose value is obvious.
In contrast to variables, literals (123, 4.3, "hi") do not change in value. These are also called explicit constants or manifest constants.

Literals are constant values assigned to constant variables. Literals represent fixed values that cannot be modified. Literals are a synthetic representation of boolean, character, numeric, or string data, a medium of expressing particular values in the program.

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  */

// 3 . OPERATORS & TYPES : Aritmetic, logical , Relational , unary, assignment, Ternary/ conditional, string / type & bitwise opertors.

//1. Aritmatic Operators or Binary Operators takes two Operands
let a = 10;
let b = 5;
console.log("a + b = " , a+b);
console.log("a - b = ", a-b);
console.log("a * b = " , a*b);
console.log("a / b = " ,a/b);
console.log("a % b = " ,a%b); // remainder
console.log("a ** b = " , a ** b), // 5^2 5 to the power 2 = 25

// Another Way 
// let num1= 10;
// let num2= 5;
// let result=num1 + num2; // Addition Operator //
// console.log("Addition Operator +:"+result);

// result=num1 - num2; // Subtraction Operator //
// console.log("Subtraction Operator -:"+result);

// result=num1 * num2; // Multiplication Operator * //
// console.log("Multiplication Operator *:" +result);

// result=num1 % num2; // Remainder / Modulus Operator%  //
// console.log("Remainder / Modulus Operator %:"+result);

// result=num1 ** num2; // Exponential Operator ** //
// console.log("Exponential Operator **:" +result);

// result=num1 / num2; // Division / Operator //
// console.log("SDivision Operator /:"+result);

//2. UNARY OPERATORS:  
// a++  Post increment, Return value and then increment
// ++a  Pre Increment, Increment and then return value
// a-- Post decrement, decrement and then return value
// --a Pre decrement, return value and then decrement

//a = a + 1 ; is shortcut a ++ 
//a = a - 1 ; is shortcut a -- 
 
console.log("a++ = ", a++); //5 in post a opertor 1st display original value and after word reflect actual on next line
console.log("++a = ", ++a); //6
//console.log("++a =" , ++a);

//console.log( "--b = ", --b),
console.log("b-- =", b--); //in post a opertor 1st display original value and after word reflect actual on next line
console.log ( "b-- =", b)

//Examples

let x = 3;
console.log(x++) // x = x + 3 , result 3,  return value and then increment
console.log (++x) // x += 3 , result 5, Increment and then return a value

let T = 4;
console.log(T--); // T = T - 4 , result 4, return value and then decrment
console.log(--T); // T -= 4    , result 2, decrement and then return a value

 
/*  3. Relational / Comparison Operator: return boolean value : True / False
>,< , <= , >= , == ,!= (3 !=2 , means is 3 not equal to 2 , questioning remeber its a question and answr will 
come in true or false), ===, !==( strick checking) check boolean */
let A = 10;
let B = 20;

console.log("10 > 20" ,A > B);//False
console.log("10 < 20" ,A < B); // True
console.log("10 >= 20" ,A >= B); //False
console.log("10 <= 20" ,A <= B); // true
console.log("10 == 20" , A == B); // double equal for Comparison ,fals
console.log("10 === 20" ,A === B); //comparison with type as well, false
console.log("10 != 20" ,A!= B); // not equal // True, Logical not evalutes to true if the operand is false
console.log("10 !== 20" ,A!== B); //true

//6 != 4,  result true 

/* 4. LOGICAL OPERTORS:  used to combine multiple conditions in One and takes two operators && (And) || (or) ! (NOT) 
AND && Opr executes only when all conditions are met true and returns Boolean
The logical NOT operator (!) negates the value of a boolean expression. It returns true if the expression is false,
and false if the expression is true. */

//3 != 2 , Result True , returns opposite false

//!= not equal 
let H = 4
let L = 5

console.log(H != L )

//
let dd = 6;
let ea = 5;

let con1 = dd < ea;
let con2 = dd === ea; // equal with type

console.log(con1 && con2) // returns false
console.log( "con1 || con2 = " , con1 || con2 ) // returns false
console.log(!(dd < ea)); //Actually false return True Opposite
console.log(!(dd === ea)); // Actually false but returns true opposite


// 5. ASSIGNMENT OPERATORS: 

/* 1  = (Simple Assignment), Assign values from the right side operand to left sid eoperand

C = A + B will assign the value of A + B into C

2.    += (Add and Assignnent) : It adds the right operand to the left operand and assigns the result to the left operand.

C += A is equivalent to C = C + A

3.    -= (Subtract and Assignment) : It subtracts the right operand from the left operand and assigns the result to the left operand.

C -= A is equivalent to C = C - A

4.    *= (Multiply and Assignment) : It multiplies the right operand with the left operand and assigns the result to the left operand.

C *= A is equivalent to C = C * A

5. /= (Divide and Assignment) : It divides the left operand with the right operand and assigns the result to the left operand. */

//Example
let y  = 5;
let z = 2;

y += 4 // y = 5 + 4
console.log("y =" , y); //9

y -= 4 // y = 5 - 4
console.log("y =" , y); //1 or -1

y *= 4 // y = 5 * 4
console.log("y =" , y); //20

y /= 4 // y = 5 / 4
console.log("y =" , y); // exponesiation and Modulo aswell


//
let n4 = 1 
n4 += 5 // n4= 1+5 =6
console.log(n4);

let n = 1 
n -= 5 // n= 1 - 5
console.log(n);


// Short Programs:
let n1 = 5; // put value 5 in Variable n1 
console.log(n1); 
n1 += 5; // add 5 into n1 and put result again into n1 //10
console.log(n1);
n1 -= 5; //subract N and Put result into n again //0 result
console.log(n1); 

//Operators class:

let a1 = 2;
let ca = "2";

let a2 = 2;
let da = "2";
console.log(a1 + da);  // concatination operation answer 22 , string concatinates

//logical Operators and (&&) or(||)
let var1 = 4;
let var2 = 5;

let n2 = 2;
let n3 = 3;

console.log(n2 > n3 && var1 < var2);  // return us false
console.log(n2 > n3 || var1 < var2); // return true

/* Conditional Operator (?) /Terniary Operator , condition ? true : false

This operator is used to represent a conditional expression. The conditional operator is also sometimes 
referred to as the ternary operator. The syntax is as given below −
Test ? expr1 : expr2
•	Test − refers to the conditional expression
•	expr1 − value returned if the condition is true
•	expr2 − value returned if the condition is false */
let all = 22;
let sums = 55;
let returnState = all && sums ? "khan" : 60;
//
const iceTeaprice = 75;
iceTeaprice <= 80 ? console.log("less than 80") : console.log("more than 80"); // >=80 
//
let mealPrice = 300;
let determiner = mealPrice >= 500 ? "Full corse Meal" : "Its a starter";
console.log(determiner);


//Nullish coalescing Operator (??): null undefined 























