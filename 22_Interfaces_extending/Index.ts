interface Shape1 {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

var square1 = <Square>{};
square1.color = "blue";
square1.sideLength = 10;
//square1.a = 5;//Error

//2

interface a {
    name: string;
}

interface b extends a {
    age: number;
}

interface Shape {
    color: string;
    name: number
}

interface Square extends Shape {
    sideLength: number;
}
let arr: number[]

let square = <Square>{}; //type assertion
square.color = "blue";
square.sideLength = 10;
//square.a = 5;//Error


//An interface can extend multiple interfaces, creating a combination of all of the interfaces:

interface PenStroke {
    penWidth: number;
}

interface Square2 extends Shape, PenStroke {

    sideLength: number;
}

var square2 = {} as Square2;//Alternative syntax for casting
square2.color = "blue";
square2.sideLength = 10;
square2.penWidth = 5.0;



//what is type assertion?
//Type assertion in TypeScript is a way to tell the compiler, "I know more about the type of this variable 
//than you do." It's like saying, "Trust me, I know what I'm doing," allowing you to treat an object 
//as a different type than the one TypeScript inferred.



//Example
let fetchedValue = "123"; // This value is a string according to TypeScript
let numericValue: number;

// Type assertion using the 'as' syntax
numericValue = parseInt(fetchedValue) as number;

// Now, you can use numericValue as a number
console.log(numericValue + 100); // 223

// Or, using the angle-bracket syntax
numericValue = <number>parseInt(fetchedValue);

// Again, use numericValue as a number
console.log(numericValue + 100); // 223