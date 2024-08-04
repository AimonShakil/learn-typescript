"use strict";
/* An enumeration (enum for short) is a special data type which contains a set of predefined constants.
You'll usually use an enum when dealing with values that aren't required to change, like days of the week, seasons
of the year, colors, and so on. */
Object.defineProperty(exports, "__esModule", { value: true });
//Generally enums are use when getting values from servers
// enums are groups of constants, we declare constants and can assign but not change, are predefined 
// when we need to used fixed values, let supose directions , make code more readable by enums, directons and signals etc
// enums defining and accesing, code make more readable with enums; like signals or directions 
// Defining enums and extraction/ excessing values
// Enums exist when we want to rstricts somebody's choice or with the value tha RE OFFERED HERE. Exm restricting order status
// whole idea is to how to restric users choice , easy ways to declare some constants , where we want to give more option.
// we can define Functions, Constants and Variables around it (IMPORTANT)
//===============
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
; //starts with 0
var c = Color.Green;
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 3] = "Blue";
})(Color1 || (Color1 = {}));
;
var colorName = Color1[2];
console.log(colorName);
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {}));
; //can assign values to all
var colorIndex = Color2["Blue"];
console.log(colorIndex);
// const AISLE = 0
// const Middle = 0;
// const WINDOW = 0 
// if  (seat === AISLE) // Instead of doing this enums serves well 
var cart;
(function (cart) {
    cart["dresses"] = "long";
    cart[cart["casuals"] = 1] = "casuals";
    cart["pret"] = "casuals";
    cart[cart["formals"] = 10] = "formals";
})(cart || (cart = {}));
const shopping = cart.dresses;
//
var Seatchoice;
(function (Seatchoice) {
    Seatchoice[Seatchoice["Aisle"] = 10] = "Aisle";
    Seatchoice[Seatchoice["Window"] = 11] = "Window";
    Seatchoice[Seatchoice["Middle"] = 12] = "Middle";
    Seatchoice[Seatchoice["Fourth"] = 13] = "Fourth";
})(Seatchoice || (Seatchoice = {}));
const AmSeat = Seatchoice.Middle;
// Homogeneous enum: starts with 0, custom values below znf if no values are there it gives 0, 1 , 2.. and referece
var color;
(function (color) {
    color[color["Red"] = 2] = "Red";
    color[color["Green"] = 3] = "Green";
    color[color["Blue"] = 55] = "Blue";
})(color || (color = {}));
; // by default value starts from zero, 1, 2
var c = color.Blue; // uses dot notation when uses constant and need to get some value
console.log(c); // output 55
//2 methods to access
//Accessing key using Value with squre bracket
var color1;
(function (color1) {
    color1[color1["Red"] = 1] = "Red";
    color1[color1["Green"] = 2] = "Green";
    color1[color1["Blue"] = 3] = "Blue";
})(color1 || (color1 = {}));
;
var colorName = color1[2]; // if we want to get key by giving its value then we use [] squre bracket method to access
console.log(colorName);
//Hetrogenous enums: if having a string & can assign values to all
var color2;
(function (color2) {
    color2[color2["Red"] = 1] = "Red";
    color2[color2["Green"] = 2] = "Green";
    color2[color2["Blue"] = 4] = "Blue";
})(color2 || (color2 = {}));
var colorIndex = color2["Blue"];
console.log(colorIndex);
// 
var primaryColors;
(function (primaryColors) {
    primaryColors[primaryColors["Red"] = 1] = "Red";
    primaryColors[primaryColors["Yellow"] = 2] = "Yellow";
    primaryColors[primaryColors["Blue"] = 3] = "Blue";
})(primaryColors || (primaryColors = {}));
; //  start with 0
//var c: colorName: string  = color[2]; // not allowed with const enum
console.log(colorName);
;
//var c: colorName: string = color[2]; //cant access through value due to const bc in backend reverse value nae bni and cant access as in enum
