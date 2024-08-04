//When comparing types that have 'private' members, we treat these
// differently. For two types to be considered compatible, 
//if one of them has a private member, then the other must have a 
//private member that originated in the same declaration. 
//This allows us to implement Nominative types in TypeScript 
class Human {
    private name: string;
    
    constructor(name: string){
        this.name = name;
    }
    
    eat(){
        console.log(this.name + " is a Human and is eating");
    }
}

class Animal {
    private name: string;
    
    constructor(name: string){
        this.name = name;
    }
    
    eat(){
        console.log(this.name + " is a Animal and is eating");
    }
}

class Robot {
    private name: string;
    
    constructor(name: string){
        this.name = name;
    }
    
}

let h: Human = new Human("Tom");
let a: Animal = new Animal("Goat");
let r: Robot = new Robot("R2-D2");

// let r0 : Robot =  new Animal("Donkey") /now because of pivate variable this is not possible

let h2 = h;
//h = a; //both have same properties and methods therefore are compatible but because of private variable not same type
h.eat();
let a2 = a;

let r2 = r;
//r = a;//Animal has a name, Robot also has a name, but now it is an Error
//a = r2;//Error, Robot does not have eat method