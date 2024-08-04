
// Defining an Object

let studentClass = {
    "name-st": "Aimon",
    Id: 53,
    emailid :"s@s.com",
    isLoggedIn: true
}

//Accessing
console.log(studentClass["name-st"]);
console.log(studentClass.isLoggedIn)

//Another Method of writing Keys and accesing throuh [ ] method

let myUniverity = {
    "Uni-name" : "Air University",
    "Location" : "E - Nine",
    "Fee"      : 20000,
}

console.log(myUniverity["Uni-name"]); // VS automatically converts

// Nested Objects

let house = {
    name : "Villa",
    design : "Squre",
    size : "1500sqft",
    color : "white",
    accomodation : {
        person: 300,
        rooms : {
            single: 200,
            deluxe : 300,
        }
    }

}

console.log(house.accomodation.rooms.deluxe)
house.accomodation.rooms.single =201; // here we have updated its value
console.log(house.accomodation.rooms.single);

//Typing Nested Objects Inline

let accessories : {
    tools : string,
    ropes : string,
    materials : { natural :string, synthetic : string}
} = {
    tools : "hammers",
    ropes : "Strings",
    materials : { natural :"cement", synthetic : "chalk"}

}

//Type Alias 

type PrimaryColor = "Blue" | "red" | "yellow";
type SecColrs = "Orange" | "Green" | "violet";

type studies = {
    students : "string",
    classes : PrimaryColor

}
//Object Alisase anonymous
let teacher : {name : string, subject : string} = {
    name : "Aimon",
    subject: "CS"
}

function printText(s: string, alignment: "left" | "right" | "center") {
    // ...
  }
  printText("Hello, world", "left");
  //printText("G'day, mate", "centre"); // type mispelled
  printText("G'day, mate", "center");


  let ourTuples: [number, boolean, string];
  // initialize correctly
  ourTuples = [5, false, 'Coding God was here'];
  // We have no type safety in our tuple for indexes 3+
  ourTuples.push('Something new and wrong');
  console.log(ourTuples);















//Nested Type for Object:





//Object Aliased with Optional properties





//Fresh Objects and Stale Object Concpet





//Putting Loop on Objects





