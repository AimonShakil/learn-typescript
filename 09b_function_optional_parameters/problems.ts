/* 1. Named funtion with Optional Parameters */

function multiply(a: number, b: number, c?: number): number {

    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}

function t_do (a: string, b : string, c? :string ) : string {

    if (typeof c!== 'undefined') {
    return a + b + c;
    }

    return a + b;   
}

let result = t_do("Aimon", "is" , "Brilliant");
console.log(result);



/* 1. Shopping Cart Calculator
Create a function to calculate the total cost of items in a shopping cart. Allow users to pass item prices, quantities, and an optional discount percentage. If no discount is provided, assume a default of 0%.

2. User Profile Generator
Develop a function that generates a user profile based on provided information. Allow users to pass the first name, last name, and an optional parameter for their age. If the age is provided, include it in the profile; otherwise, omit it.

3. Temperature Converter
Write a function to convert temperatures between Celsius and Fahrenheit. Allow users to pass a temperature value and an optional parameter indicating the desired unit ('C' for Celsius, 'F' for Fahrenheit). If no unit is provided, default to Celsius.

4. Circle Area Calculator
Create a function to calculate the area of a circle based on the provided radius. Allow users to pass the radius and an optional parameter for precision (number of decimal places). If precision is not provided, assume a default of 2 decimal places.

5. Password Generator
Develop a function that generates a random password. Allow users to specify the desired length of the password and include an optional parameter to allow or disallow special characters. If special characters are allowed, include them in the password; otherwise, generate a password with only alphanumeric characters. */


// Anonymous Functions with Optional Parameters
let greetUser = function (firstName: string, lastName?: string): string {
    if (lastName) {
        return `Hello, ${firstName} ${lastName}!`;
    } else {
        return `Hello, ${firstName}!`;
    }
};

// Example usage
console.log(greetUser("John")); // Output: Hello, John!
console.log(greetUser("Alice", "Smith")); // Output: Hello, Alice Smith!

//2

let answer_s = function (q_1 : string , q_2 : string , q_3? : string ) : string 
{
    if (q_3) 
    {
        return `Hello, ${q_1}, ${q_2}, ${q_3}`;     
    } 
    else 
    {
        return `Hello, ${q_1}, ${q_2}`;
    }
};  

console.log (answer_s("Aimon", "Asif", "Shan"));


/*
1. Employee Information Formatter:
Create an anonymous function that takes an employee's first name, last name, and an optional parameter for their job /n
title. If a job title is provided, display "Employee: [First Name] [Last Name], [Job Title]"; otherwise, /n 
display "Employee: [First Name] [Last Name]". */

let formatter = function (first_N: string , last_N : string , job_T? : string) : string {
if (job_T !== undefined) {
    return ` Your Data shows, Name : ${first_N}, last Name : ${last_N}, Job Title : ${job_T}`;
} else {
    return `Your Data shows, Name : ${first_N}, last Name : ${last_N}`;
}
};

console.log (formatter("Aimon", "Khan", "HR Officer"));


/*2. Product Price Calculator:
Develop an anonymous function to calculate the total price of a product. Allow users to pass the unit price, /n 
quantity, and an optional parameter for a discount percentage. If a discount is provided, apply it to the total /n 
price; otherwise, calculate the total without any discount. */

let Calculatetotal_P = function (unit_p : number , quantity : number , D_per? : number) : number {
    let total_P = unit_p * quantity;
    
    if (D_per !==undefined) {

        const dis_Amount = (D_per / 100) *total_P;
        total_P -= dis_Amount;
    }
    return total_P;
}

let  unitPrice = 20;
let quantity = 5;

// Case 1: Calculating total price without discount
const totalPriceWithoutDiscount = Calculatetotal_P(unitPrice, quantity);
console.log(`Total Price without Discount: ${totalPriceWithoutDiscount}`);

// Case 2: Calculating total price with a 10% discount
const discountPercentage = 10;
const totalPriceWithDiscount = Calculatetotal_P(unitPrice, quantity, discountPercentage);
console.log(`Total Price with ${discountPercentage}% Discount: $${totalPriceWithDiscount}`);


/* 3. Movie Review Generator:
Write an anonymous function that generates a movie review. Allow users to pass the movie title, a brief review, and /n
an optional parameter for the reviewer's name. If a reviewer's name is provided, include it in the review; otherwise,/n
generate a review without mentioning the reviewer. */ 






/*

4. Task Reminder:
Create an anonymous function to remind users of a task. Allow users to pass the task description and an optional
parameter for the due date. If a due date is provided, display "Task: [Task Description], Due on: [Due Date]"; 
otherwise, display "Task: [Task Description]".

5. Weather Forecaster:
Develop an anonymous function that provides a weather forecast. Allow users to pass the temperature and an 
optional parameter for weather conditions. If weather conditions are provided, display "Temperature: 
[Temperature]°C, Weather: [Conditions]"; otherwise, display only the temperature. */