//Interface functional types:
//In TypeScript, you can use interfaces to describe function types. This is particularly useful when you want
//to define a contract for a function, specifying the types of its parameters and its return type.
//It's like setting a blueprint for functions to ensure they have a specific structure and behavior.

//Example - calculator operations:
//Let's say we're creating a simple calculator application, and we want to define a set of operations
//like add, subtract, multiply, and divide. We can use an interface to define the functional type for these operations.

//creating an interface for operation:
interface Operation {
    (num1 : number , num2: number) : number;
  }

// Implementation function using Interface

const add : Operation = (num1 , num2) => num1 + num2;
const subtract : Operation = (num1, num2) => num1 - num2;
const multiply : Operation = (num1 , num2) => num1 * num2;
const divide : Operation = (num1 , num2) => (num2 ! == 0? num1 / num2 : Infinity)

console.log(add(5, 3)); // Outputs: 8
console.log(subtract(10, 4)); // Outputs: 6
console.log(multiply(7, 6)); // Outputs: 42
console.log(divide(8, 2)); // Outputs: 4
console.log(divide(8, 0)); // Outputs: Infinity (demonstrates handling division by zero)


  //We can use interfaces to describe function types, please note this is different from Java or C# 
//where we can only use interfaces to describe class types.

//We are defining a interface with a single function, any function with the same signature will have this type 

interface SearchFunc {
    (source: string, subString: string): boolean;//Note there is no name assigned to the function signature
  }
  
  
  var mySearch: SearchFunc = function(src: string, sub: string) {
                                var result = src.search(sub);
                                if (result == -1) {
                                  return false;
                                }
                                else {
                                  return true;
                                }
                             };
                             
    //For function types to correctly type-check, the name of the parameters do not need to match. 
    //Function parameters are checked one at a time, with the type in each corresponding parameter position checked against each other.