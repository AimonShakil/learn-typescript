
/* An enumeration (enum for short) is a special data type which contains a set of predefined constants. 
You'll usually use an enum when dealing with values that aren't required to change, like days of the week, seasons 
of the year, colors, and so on. */


//Generally enums are use when getting values from servers
// enums are groups of constants, we declare constants and can assign but not change, are predefined 
// when we need to used fixed values, let supose directions , make code more readable by enums, directons and signals etc
// enums defining and accesing, code make more readable with enums; like signals or directions 
// Defining enums and extraction/ excessing values

// Enums exist when we want to rstricts somebody's choice or with the value tha RE OFFERED HERE. Exm restricting order status
// whole idea is to how to restric users choice , easy ways to declare some constants , where we want to give more option.

// we can define Functions, Constants and Variables around it (IMPORTANT)

//===============
enum Color {Red, Green, Blue};//starts with 0
var c: Color = Color.Green;

enum Color1 {Red = 1, Green, Blue};
var colorName: string = Color1[2];
console.log(colorName);

enum Color2 {Red = 1, Green = 2, Blue = 4};//can assign values to all
var colorIndex = Color2["Blue"];
console.log(colorIndex);

// ====================
import { log } from "console";

// const AISLE = 0
// const Middle = 0;
// const WINDOW = 0 

// if  (seat === AISLE) // Instead of doing this enums serves well 

enum cart { // we can put const in front of enum to create less code for Javascript
    dresses = "long", // we can put values of String and need to put values for all 
    casuals = 1,
    pret = "casuals",
    formals = 10,

}

const shopping = cart.dresses


//
enum Seatchoice {
    Aisle = 10, // rest values follow // can also provide Aisle = "aisle" and follow pattern for rest can break pattern and writa e number aftreward as well
    Window,
    Middle,
    Fourth
}

const AmSeat = Seatchoice.Middle

// Homogeneous enum: starts with 0, custom values below znf if no values are there it gives 0, 1 , 2.. and referece
enum color {Red = 2, Green = 3 , Blue = 55}; // by default value starts from zero, 1, 2
var c: color = color.Blue // uses dot notation when uses constant and need to get some value
console.log(c) // output 55

//2 methods to access
//Accessing key using Value with squre bracket
enum color1 { Red = 1, Green, Blue};
var colorName: string = color1[2] // if we want to get key by giving its value then we use [] squre bracket method to access
console.log(colorName);

//Hetrogenous enums: if having a string & can assign values to all

enum color2 {Red = 1, Green =2, Blue = 4}
var colorIndex = color2["Blue"];
console.log(colorIndex);

// 
enum primaryColors { Red = 1, Yellow = 2, Blue = 3}


//const enum

const enum color3 {Red = 1, Green, Blue}; //  start with 0
//var c: colorName: string  = color[2]; // not allowed with const enum
console.log(colorName)


const enum color3 { Yellow = 1, brown, pink};
//var c: colorName: string = color[2]; //cant access through value due to const bc in backend reverse value nae bni and cant access as in enum