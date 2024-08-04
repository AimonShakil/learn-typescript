"use strict";
// Array, to store multiple values of same kind with a key as indecies and are a kind of an array
//How to type arrays
/* Background and significance of Arays
in progrmaming related or same type of information storing is relatedly conveneinet to store in a lineant form a and preferably want to give a common name like
an array form. here we give one array to an array and position matters here/  index matters.
creating array let or const array can diclared, generally array of signle type is preffered to made and with union type it is possible for two as well.
arrays are mutable means can be changed */
Object.defineProperty(exports, "__esModule", { value: true });
//alternatives way of defining Array
// let array7 : Array<number | string> = [1 ,2, 3]; // alternative correct syntax
// let array8 : number[] =[]; // correct syntax to define and empty array
// //let array9 : number[] =new number[2]; // error
// // Array Methods : Push , Pop, 
// array5.push(1234); //dynamically adding in empty array
// console.log(1234); 
// let arr: number[] = [1,2,3,4]
// let arr1: number[] = []
// arr.push(6) 
// arr.pop()
// arr.shift() // takes first ement return others
// arr.unshift(9)
// arr.concat()
// arr.join('-')
// arr.slice(1)
// arr.indexOf(0)
// arr.includes(0)
// //console.log(arr)
// let p = arr.pop())
// console.log(p)
// //shift
let array1 = [5, 6, 7]; //correct syntax
console.log(array1[1]); //correct syntax
let array2 = [1, 2, 3]; //alternative correct syntax
let array3 = []; //correct syntax to define an empty array
let anArray = []; // says array of Any Type
let anArrays = []; // here this array is an Empty array
const numps = [1, 2, 3, 4]; // syntax
//anArrays.push("spiderman")  shows that not assignnable to paramter type never
anArray.push("Spiderman");
//let array4: number[] = new number[2];//error
let array5 = [];
array5.push(1234); //dynamically adding
// Numbers Array
let marks = [22, 55, 44, 66, 98];
console.log(marks.length); // property
// Strings Array
let hreos = ["batman", "thor", "ironman", "superman"];
console.log(hreos);
console.log(typeof hreos); // Type of array would be Object
//Array Indices & Changing Values of Arrays
let markss = [22, 55, 44, 66, 98];
marks[1] = 77;
console.log(markss);
let cnincs = []; //empty array declayed but not initilaized 
// Union Types - Arrays
let mixType = ["Singleton", "true", "10"];
let mixType2 = [true, false];
let mixType3 = [1, 2, 3, 4,];
mixType.push("Alpha");
//mixType.push("True");
//mixType.push("10");
let mixArray2 = [123,]; // here we can have only one type string or number, one type at a time
mixArray2.push(123);
mixArray2.push(124);
mixArray2.push(34);
mixArray2.push(11);
console.log(mixArray2);
mixArray2 = ["Alpha", "Beta", "Gamma"];
console.log(mixArray2);
//Another way , Arrays is an object having properties and Functions
let mixArray = ["Alpha", "124"]; /* can have here both types of data,2 types ja sakhte hai but decison initiliaze krty tim ekrna ho  this is direct initiliazation */
//Another Array
mixArray2.reverse().reverse;
console.log(mixArray2);
let array6 = [5, 6, 7, "hsfsus"];
console.log(array6[1]);
//alternatives way of defining Array
let array7 = [1, 2, 3,]; // alternative correct syntax
let array8 = []; // correct syntax to define and empty array
//let array9 : number[] =new number[2]; // error
// Looping over an Array:
// Loop iterables (Array , string, objects) through using them really understand loops concenpt
// important : Index value of an Array always remain (less)<= to length of an array
// Array Lenght is last index + 1 
//Looping over an Array Using - For Loop.
let hreoss = ["batman", "thor", "ironman", "superman"]; // 
for (let i = 0; i < hreoss.length; i++) // stopping condition should be known 
    console.log(hreoss[i]);
// Practice Question 1: with a given array of marks of students [ 85, 97, 44, 37,76, 60] /n
//Find the Average marks of entire class
// let studentMarks : number[] = [85, 97, 44, 37,76, 60];
// let sum: number = 0;
// for ( let val of studentMarks) { // for of loop used to take sum
//     sum +=val;
// }
// let avg = sum / studentMarks.length;
// console.log(`Average marks of class is = ${avg}`);
// /* Practice Q No 2 : IMP Concepts 
// For a given array with prices of 5 items [250, 645,300, 900, 50]
// All Items have an Offer of 10% off on them. Change the array to store final price after applying offer */
// // we can change index indirectly with For Off loop, should/ can use For, while or do while loop as well
// // with for Loop
let items = [250, 645, 300, 900, 50];
for (let i = 0; i < items.length; i++) {
    let offer = items[i] / 10;
    items[i] -= offer;
}
console.log(items);
// Important: Thats how using array we are using loops and we do that work in loop which we wanted to do for each element
//Same Task Second Method with For of Loop: 
//let i = 0;
// for (let val of items) {
//     let offer = val /10;
//     items[i]  = items[i] - offer
//     console.log(`value of index ${i} = ${val}`);
//     i++
// }
//In websites Internally mostly data stores in the form of Array.
// ARRAYS METHODS : in Arrays there are two types of methods, a method that changes that same array and other method is which returns a new array
// 1. Push Method:  Push() add Item at the end & chnages in existing Arrays
let foodItems = ["Milk", "Chips", "Apples", "Banana"];
foodItems.push("Litchi");
console.log(foodItems);
//2 . Pop() : Delete from the end and Return & Changes in Original Array
let numbers = [61, 32, 33, 44, 55, 65, 77, 99, 22];
let deletedItems = numbers.pop();
console.log(numbers);
console.log(`Deleted Item = ${deletedItems}`);
//3. toString (); to convert an array into string & do not changes in original array as it remain intact & return new string
let foodsItems = ["Milk", "Chips", "Apples", "Banana"];
console.log(foodsItems);
console.log(foodsItems.toString());
//4.concat() : Join Multiples arrays & return result, does not changes in original array return new one.
let marvel_heroes = ["thor", "ironman", "batman"];
let dc_heroes = ["superman", "hulk"];
let heroes = marvel_heroes.concat(dc_heroes); // can add multiple array by putting , after 1st in brackets.
console.log(heroes);
console.log(marvel_heroes); // original arrays remains same
console.log(dc_heroes);
// other prefferred method to use at place of concat
const allNew_heros = [...marvel_heroes, ...dc_heroes];
console.log(allNew_heros);
//5.unshift() : work like push : add to start & changes original array
let marvelheroes = ["thor", "ironman", "batman"];
marvelheroes.unshift("antman");
console.log(marvelheroes);
//6. shift() : works like PoP : Delete from start & return new array
let marvelHeroes = ["thor", "ironman", "batman"];
let val = marvelHeroes.shift();
console.log(`deleted ${val}`);
console.log(marvelHeroes);
//7. Slice(): return a piece of an array, slice (startIndx , endIndx) & do not change in original array/n
// but imp is that end index is non Inclusive.
let marvelsHeroes = ["thor", "ironman", "batman", "hunk", "antman"];
console.log(marvelsHeroes.slice(1, 2));
//Or just add start index it give all values | otherwise if we write full without arguments it returns full array and used to make a copy sometimes.
let marvelssHeroes = ["thor", "ironman", "batman", "hunk", "antman"];
console.log(marvelsHeroes.slice(1));
//8. splice() : Change original array (add, remove, replace)
// let arrNum : number[] = [1,2,3,4,5,6,7];
// arrNum.splice(2, 2, 101, 102 );
// console.log(arrNum);
// Add Element : Pass index where we want to add
let arrNums = [1, 2, 3, 4, 5, 6, 7];
arrNums.splice(2, 0, 101);
console.log(arrNums);
// Delete Element
let arrNumss = [1, 2, 3, 4, 5, 6, 7];
arrNumss.splice(3, 1);
console.log(arrNumss);
//Replace Element 
let arrNumsss = [1, 2, 3, 4, 5, 6, 7];
arrNumsss.splice(4, 1, 666);
console.log(arrNumsss);
/* Array Method MAP:
Map Method is quite similar to Far Each (It goes to each index of Array to perform some Operation)
MAP methods some how do same & v similar to for Each difference is MAP returns a new array
arr.map (callbackFnx(value, index, array)) Generally using just value */
let nums = [67, 52, 39];
let newArr = nums.map((val) => {
    return val * val;
});
console.log(newArr);
// Map Continue
const coding1 = [" JS", "Ts", "Ruby", "cpp"];
const values = coding1.forEach((item) => {
});
console.log(values);
// 
const myNum2 = [1, 2, 3, 4];
const resultNum2 = myNum2.map(vals => {
    return vals + 2;
});
console.log(resultNum2);
//Filter Method () : Another case if we want to work on a signle item of an Array and return, filter also takes callback
let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//const newNums = myNums.filter ((num) => num > 4 );
const newNums = myNums.filter((num) => {
    return num > 4;
}); // Explicit return , writing without return gives empty Array
console.log(newNums);
// Doing same achieving return using foreach Array
let myNumss = [];
myNumss.forEach((num) => {
    if (num > 4) {
        myNumss.push(num);
    }
});
console.log(myNumss);
// Filter Method: goes on each index of an Array to condition / Filter for true value eg all even element, for elemnt condition is true i will save in new Array , not false one 
let arra = [1, 2, 3.4, 5, 6, 7];
let evenArray = arrNums.filter((val) => {
    return val % 2 === 0; // for odd values !== 0; or for values greater than 3 val > 3
});
console.log(evenArray);
// Reduce Method : this method is used for array where we rduce array to one element
let arr = [1, 2, 3, 4];
const output = arr.reduce((res, curr) => {
    return res + curr;
});
console.log(output); //output 10
console.log(Array.isArray("Aimon"));
console.log(Array.from("Aimon")); //converts data of object or string type to an array 
//console.log(Array.from({name : "hitesh"})), // intersting interview questions , gives an empty array ( need to tell that want key or value array)
//Converting multiple variables to an Array
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
// study more about is, of and from metho dof an array
// Iteration on Array
// for each loop, this loop is directly in properties of Arrays
const coding = ["Ts", "python", "Ruby"];
coding.forEach((val, index, arr) => {
    // console.log(val)
    console.log(val, index, arr);
});
//Iterating over an Arrays as values comes from DB in objects of Array form,, 
const myCoding = [
    {
        languageName: "Ts",
        languageFileName: "ts"
    },
    {
        languageName: "Js",
        languageFileName: "js"
    },
    {
        languageName: "Python",
        languageFileName: "ps"
    },
];
myCoding.forEach((item) => {
    console.log(item.languageFileName);
});
//PRACTICE QUESTIONS:
/* Create an array to store companies names
a. Remove the first company from the array.
b. Remove Uber and add Ola in its Place.
c. Add Amazon at the end. */
let companiesIn = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companiesIn.shift();
console.log(companiesIn);
companiesIn.splice(2, 1, "Ola"); // here now original array index has changed
companiesIn.push("Amazon");
//companiesIn.splice(6,0,"Amazon");
console.log(companiesIn);
// // this is the data and if user put filters and wan to print
// let books : number[] | String[] | Boolean[] = [{ title: " Book One", genre: "Fiction" , publish :1981 , 
//  edition : 2024 },
//  { title : " Book One", genre: "Fiction" , publish :1981 , 
//  edition : 2024 },
//  { title : " Book One", genre: "Fiction" , publish :1981 , 
//  edition : 2024 },
//  { title : " Book One", genre: "Fiction" , publish :1981 , 
//  edition : 2024 },
//  { title : " Book One", genre: "Fiction" , publish :1981 , 
//  edition : 2024 },
//  { title : " Book One", genre: "Fiction" , publish :1981 , 
//  edition : 2024 },
//  { title : " Book One", genre: "Fiction" , publish :1981 , 
//  edition : 2024 },
//  { title : " Book One", genre: "Fiction" , publish :1981 , 
//  edition : 2024 },
//  { title : " Book One", genre: "Fiction" , publish :1981 , 
//  edition : 2024 },
// ];
// let userBooks  = books.filter((bk) => bk.genre === 'Fiction')   //bk we are calling objects in array
// console.log(userBooks);
// userBooks = book.filter (() => {return books.publish >=2000} )
// console.log(userBooks);
//map
let myNumsss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newNumsss = myNumss.map((num) => { return num + 10; });
console.log(newNumsss);
//reduce method
let numbers2 = [1, 2, 3];
let mytotal = numbers2.reduce((acc, currval) => {
    console.log(`acc: ${acc} and currval : ${currval}`);
    return acc + currval;
}, 0);
console.log(mytotal);
// Reduce using arrow function
let numbers3 = [1, 2, 3];
let mytotals = numbers3.reduce((acc, currval) => acc + currval, 0);
// Shopping cart & adding values of Objects in an Array
let shoppingCart = [
    {
        itemName: " Ts course",
        Price: 999
    },
    {
        itemName: " Py course",
        Price: 2222
    },
    {
        itemName: " JS course",
        Price: 8888
    },
    {
        itemName: " Ruby course",
        Price: 8789
    },
];
const PriceToPAy = shoppingCart.reduce((acc, item) => acc + item.Price, 0); // item denoting to each object in an Array
console.log(PriceToPAy);
const allUsers = [{ name: "Am", Id: 122 }];
//allUsers.push ({""}) // doest allow to push empty Objects not allowed
//allUsers.push ({name : "am", Id : 2556 }) also this is a right way.
//allUsers.push ({name : " ", Id : 2556 }) also this is a right way, passed empty array
const MLModels = [
    [255, 255, 255],
    []
];
