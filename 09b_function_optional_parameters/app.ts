//Named function with optional parameters
function buildName(firstName: string, lastName?: string) : string { //1st value passing must
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Bob");  //ok
//let result2 = buildName("Bob", "Adams", "Sr.");  //error, too many parameters
var result3 = buildName("Bob", "Adams");  //also ok

//
function breed (anm_1: string , anm_2?: string) :string {
    if (anm_2)
    return `Animal Name is ${anm_1} ${anm_2}`
else 
return `Animal name is ${anm_1}`
}


let resultz = breed('Dog')
let resultz2 = breed('Dog', 'Canine')


//anonymous function type with optional parameters
//Syntax
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


let workMode = function (office : string, home?: string) : string {
    if (home) {
        return `Hi i am ${home} today`;
    } else {
        return `Hi i am ${office} today`
    }
}

console.log(workMode("wfh", "Office"));








