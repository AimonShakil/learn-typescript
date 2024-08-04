//  enums are groups of constants we declare constants and can assign but not change, are predefined 
// when we need to used fixed values, let supose directions , make code more readable by enums, directons and signals etc
// enums defining adn accesinf

import { log } from "console";

enum color {Red = 2, Green = 4, Blue = 55}; //  start with 0, custom values // homogeneous enum
var c: color = color.Green;
console.log (c) // output 4

enum color1 {Red = 1, Green, Blue};
var colorName: string = color1[2];

console.log(colorName);

enum color2 {Red =1, Green = 2, Blue =4} // can assign value to all // if have string can be hetrogeeneous
var colorIndex = color2["Blue"];
console.log(colorIndex);

//const enum

const enum color3 {Red = 1, Green, Blue}; //  start with 0
var c: colorName: string  = color[2]; // not allowed with const enum
console.log(colorName)

// Array
let array1 :(number | string) [] = [5,6,7,"hsfsus"]; 
console.log(array1[1])
//alternative s

let array2 : Array,number> = [1 ,2, 3]; // alternative correct syntax

let array3 : number[] =[]; // correct syntax 
let array4 : number[] =new number[2]; // error

let array5 : number[] =[];
// methods
array5.push(1234); //dynamically adding
console.log(1234); 

let arr: number[] = []
arr.push(6)
console.log(arr)

let p = arr.pop()
console.log()

//unshift
arr.unshift("6")
console.log(arr)
let p = arr.shift ()
console.log(arr)
console.log(p)

let arr: number[1,2,3,4]
let arr2: number [] = [5,6,7]

let arr3 = arr.concat(arr2)
console.log(arr3)

let arr3 = arr.join("-")
console.log(arr3)

let arr3 = arr.slice (1,3) // 2 argument in slice start and end

let arr3 = arr.splice (2,2) // particular index pr add ke lein,  and del b krnta hai 

let arr4 = arr.splice (1,2,67) 


// home work for nextt class array methds, complete project and understand and make calculator and chalk, class 10 steps mai quiz ho ga













