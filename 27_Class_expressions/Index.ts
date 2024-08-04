
// HTC Uisng Class Types in Generics

interface Quiz {
    name : string,
    type : string,

}

interface Course {
    name : string,
    author : string,
    subject : string
}

class Sellable <T>{
    public cart : T[] = [];

    addToCart (products : T) {
        this.cart.push ()
    }
}


//Detection another Topic 

function detectTypes( val : number | string) {
   if (typeof val  === "string"){
    return val.toLowerCase()
   }
   return val + 3
}

function provideId (id : string | null ) {
    if (!id ) { // means No ID say Null
        console.log("Please provide Id");
        return   
    }

    id.toLowerCase();
}


function printAll(strs: string | string[] | null) {
    
    if (strs) {
      if (typeof strs === "object") {
        for (const s of strs) {
          console.log(s);
        }
      } else if (typeof strs === "string") {
        console.log(strs);
      }
    }
  }


// In Opertaor in narrowing 
interface User {
    name : string,
    email : string,

}

interface Admin {
    name : string,
    email : string,
    isAdmin : boolean
}

function isAdmin (account : User | Admin) {

}