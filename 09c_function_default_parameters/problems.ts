/*
1. Calculator with Default Operation
Create a calculator function that takes two numbers as parameters and performs a default mathematical /n
operation (e.g., addition) if no operation is provided. */

function addCalculator (num1 : number , num2: number, operation : string = 'add') : number | string {
        
switch (operation.toLowerCase()) {
    case 'add':
        return num1 + num2;
    case 'subtract':
        return num1 - num2;
    case 'multiply' :
        return num1 * num2;
    case 'divide' :
        if (num2 ===0) {
            return "Cannot devide by 0"
        }
        return num1 / num2;
    default:
        return " Invalid Operation";

}

console.log(addCalculator(5,10));
console.log(addCalculator(5,10 , "power")); // shows default operation

}


/* 2. Greet User with Default Greeting
Develop a function to greet a user with their name. If no name is provided, use a default name like "Guest." */

function greet (name : string = 'Guest' ) :string {
    if (name)
        return `Welcome to Resturant: ${name}`;
 else 
    return `Welcome to Hotel Guest`
}

console.log (greet());


/* 3. Generate Welcome Message with Default Language
Write a function that generates a welcome message based on the provided language. If no language is provided, /n 
default to English. */

function generateWelcomeMessage(name: string, language: string = "English"): string {
    if (language === "English") {
        return `Welcome, ${name}!`;
    } else if (language === "Spanish") {
        return `Bienvenido, ${name}!`;
    } else if (language === "French") {
        return `Bienvenue, ${name}!`;
    } else {
        return `Unsupported language. Welcome, ${name}!`;
    }
}

// Example usage
console.log(generateWelcomeMessage("John")); // Output: Welcome, John!
console.log(generateWelcomeMessage("Maria", "Spanish")); // Output: Bienvenido, Maria!
console.log(generateWelcomeMessage("Thomas", "French")); // Output: Bienvenue, Thomas!
console.log(generateWelcomeMessage("Alex", "German")); // Output: Unsupported language. Welcome, Alex!


/* 4. Create Rectangle with Default Dimensions
Design a function to create a rectangle with specified dimensions. If no dimensions are provided, assume a default/n 
width and height. */

function rectangle (width : number =2 , height : number = 4) :  { width: number, height: number } {
return {width, height};
}

let rectangle1 = rectangle();
let rectangle2 = rectangle (15,30)

console.log(rectangle1); 
console.log(rectangle2);


/*5. Display Message with Default Font Size
Implement a function to display a message with a specified font size. If no font size is provided, use a default size.*/



//Anonymous function type with defult parameters 
//(Note that the parameter type will be optional when used with defult value)
let buildName1 : (firstName: string, lastName?: string) => string = function(firstName: string, lastName = "Khan") : string {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

/*Function Type Definition:
let buildName1: (firstName: string, lastName?: string) => string: This line declares a variable named buildName1 and specifies its type as a function that takes a string as firstName and an optional string as lastName (denoted by ?), and returns a string.

Function Assignment:
= function(firstName: string, lastName = "Khan"): string { ... }: This part of the code assigns an anonymous function to the variable buildName1.
The function takes a firstName parameter (required) and an optional lastName parameter with a default value of "Khan."
Inside the function, it checks if lastName is provided. If yes, it returns the full name; otherwise, it returns only the firstName. */

/*
1. Math Operations
Create an anonymous function that performs a mathematical operation (e.g., addition) on two numbers. Allow users to pass /n
custom numbers and provide default values if none are provided. */

let Opr_Math : (num_1 : number , num_2 : number) => number = function ( num_1 = 10 , num_2 : number = 55) : number {
    if (num_2)
    return num_1 +num_2;
else 
    return num_1
}


/* 2. Generate Greeting
Develop an anonymous function that generates a greeting message. Allow users to pass a name and specify a default /n 
greeting if none is provided. */

let greeter: (name1 : string , greeting? : string ) => string = function (name1 : string , greeting: string = "Hi" ) : string {
    return `${greeting}, ${name1}!`;
}
console.log(greeter("Aimon", "Good Morning"));



/* 3. Display Message with Default Font Size
Write an anonymous function to display a message with a specified font size. Allow users to customize the message /n 
and provide a default font size. */

let displayMessage  = function (message: string , fontSize : number = 10) : void {
console.log(`Message: ${message} , Font Size: ${fontSize}`)

};

displayMessage("Hello!");
displayMessage ("Custom Font", 20);


/*
4. Temperature Converter
Create an anonymous function to convert temperatures between Celsius and Fahrenheit. Allow users to pass a temperature value and specify a default unit if none is provided.

5. Generate User Profile
Design an anonymous function to generate a user profile. Allow users to pass a username and specify default values for other profile properties. */