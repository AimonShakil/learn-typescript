"use strict";
//  enums are groups of constants we declare constants and can assign but not change, are predefined 
// when we need to used fixed values, let supose directions , make code more readable by enums, directons and signals etc
// enums defining adn accesinf
Object.defineProperty(exports, "__esModule", { value: true });
var color;
(function (color) {
    color[color["Red"] = 2] = "Red";
    color[color["Green"] = 4] = "Green";
    color[color["Blue"] = 55] = "Blue";
})(color || (color = {}));
; //  start with 0, custom values // homogeneous enum
var c = color.Green;
console.log(c); // output 4
var color1;
(function (color1) {
    color1[color1["Red"] = 1] = "Red";
    color1[color1["Green"] = 2] = "Green";
    color1[color1["Blue"] = 3] = "Blue";
})(color1 || (color1 = {}));
;
var colorName = color1[2];
console.log(colorName);
var color2;
(function (color2) {
    color2[color2["Red"] = 1] = "Red";
    color2[color2["Green"] = 2] = "Green";
    color2[color2["Blue"] = 4] = "Blue";
})(color2 || (color2 = {})); // can assign value to all // if have string can be hetrogeeneous
var colorIndex = color2["Blue"];
console.log(colorIndex);
; //  start with 0
var c, string = color[2]; // not allowed with const enum
console.log(colorName);
// Array
let array1 = [5, 6, 7, "hsfsus"];
console.log(array1[1]);
//alternative s
let array2, number;
 > ;
[1, 2, 3]; // alternative correct syntax
let array3 = []; // correct syntax 
let array4 = new number[2]; // error
let array5 = [];
// methods
array5.push(1234); //dynamically adding
console.log(1234);
let arr = [];
arr.push(6);
console.log(arr);
let p = arr.pop();
console.log();
//unshift
arr.unshift("6");
console.log(arr);
let p = arr.shift();
console.log(arr);
console.log(p);
let arr;
2, 3, 4;
let arr2 = [5, 6, 7];
let arr3 = arr.concat(arr2);
console.log(arr3);
let arr3 = arr.join("-");
console.log(arr3);
let arr3 = arr.slice(1, 3); // 2 argument in slice start and end
let arr3 = arr.splice(2, 2); // particular index pr add ke lein,  and del b krnta hai 
let arr4 = arr.splice(1, 2, 67);
// home work for nextt class array methds, complete project and understand and make calculator and chalk, class 10 steps mai quiz ho ga
