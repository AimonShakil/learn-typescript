//HT
//Modifier Keywords in TS
// especially focusing on two out of three which are Public and Private , look at source code which other people has written in the same language 


//Access_modifiers:
//public: Members marked as public can be accessed from anywhere in the program.

//private: Members marked as private can only be accessed within the class they are defined in.
//They are not accessible from outside the class or by any class that inherits from the class.

//protected: Members marked as protected can be accessed within the class they are defined in
//and by instances of classes that inherit from this class. They are not accessible from outside these two scopes.

//In TypeScript, each member is public by default.

// Access modifier restricts them how we want to call 
//Example of Private member:

class Animal {
    private name : string;
    constructor(theName : string) {
        this.name = theName
    }
    move(meters : number) {
        alert (this.name + "moved " + meters + "m." )
    }
}

let a = new Animal ("Cat").move;
console.log(a);


