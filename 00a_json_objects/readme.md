# JSON ( Javascript Object Notation )

JSON stands for Javascript Object Notation.

JSON is a text-based data format that is used to store and transfer data.

// JSON syntax

{

 "name": "Vipin",

 "age": 21,

 "gender": "male",
}

But wait, Is JSON is similar to javaScript objects?

The Answer is No.

JavaScript objects can contain functions but JSON not.
JavaScript objects can only be used in JavaScript but JSON can be created and used by other programming languages.

## JSON Data

JSON data consists of key/value pairs similar to JavaScript object properties.
The key and values are written in double quotes separated by a :.
Example :
// JSON data

    "name": "Vipin"
JSON data requires double quotes for the key.

## JSON Object

The JSON object is written inside curly braces { }.

JSON objects can contain multiple key/value pairs.

Example :

 // JSON object

 { "name": "Vipin", "age": 21 }
JSON Array
JSON array is written inside square brackets [ ].

Example :

## JSON array

 [ "Vipin", "Ankit", "Raj"]
Accessing JSON Data
We can access JSON data using the dot notation.

Example :

 // JSON object

 const detail = { "name": "Vipin", "age": 21 }

 // accessing JSON object

 console.log(detail. name); // Vipin
We can also use square bracket syntax [] to access JSON data.

Example :

 // JSON object

 const detail = {

     "name": "Vipin",

     "age": 21
 }
// accessing JSON object

console.log(detail["age"]); // Vipin

Use of JSON
JSON is the most commonly used format for transmitting data (data interchange) from a server to a client and vice-versa.
JSON data are very easy to parse and use.
JSON is language independent(We can create and use JSON in other programming languages too).
Examples of JSON
package.json
tsconfig.json
Reference Twitter Post on JSON