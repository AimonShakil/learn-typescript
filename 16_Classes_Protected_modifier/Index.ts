//protected keyword allows subclasses to gain visibility into the
// parent class without exposing this API to other parts of the code.

//protected: Members marked as protected can be accessed within the class they are defined in
//and by instances of classes that inherit from this class. They are not accessible from outside these two scopes.



//Example of protected memeber:

class Vehicle {
    private privateNumber: number;
    protected protectedNumber: number;
  
    constructor(privateNumber: number, protectedNumber: number) {
      this.privateNumber = privateNumber;
      this.protectedNumber = protectedNumber;
    }
  
    showProtectedNumber(): void {
      console.log(`Protected Number: ${this.protectedNumber}`);
    }
  }
  
  class Car extends Vehicle {
    constructor(privateNumber: number, protectedNumber: number) {
      super(privateNumber, protectedNumber);
    }
  
    showNumbers(): void {
      // console.log(`Private Number: ${this.privateNumber}`); // Error: Property 'privateNumber' is private and only accessible within class 'Vehicle'.
      console.log(`Protected Number: ${this.protectedNumber}`); // OK: Can access protected member
    }
  
  //   updatePassword():{
  //     password = newpassword
  //   }
  }
  
  const myVehicle = new Vehicle(123, 456);
  // myVehicle.privateNumber; // Error: Property 'privateNumber' is private and only accessible within class 'Vehicle'.
  // myVehicle.protectedNumber; // Error: Property 'protectedNumber' is protected and only accessible within class 'Vehicle' and its subclasses.
  
  const myCar = new Car(789, 1011);
  myCar.showNumbers(); // Outputs: Protected Number: 1011
  myVehicle.showProtectedNumber(); // Outputs: Protected Number: 456

  //2 Sir // Understand it through chat GPT

  class ListString { //parent Class
    private contents: string[];
    constructor() {
    this.contents = [];
  }

  protected setElement (index: number , item: string)  {
    this.contents[index] = item;
  }

}

class stackString extends ListString {
    currentIndex: number;

    constructor() {
        super();
        this.currentIndex = 0;
    }

    public push(item: string) {
        this.setElement(this.currentIndex, item);
        this.currentIndex++;
}
}
var stack = new stackString();
//stack.setElement(0, 1); // error 'setElement' is protected and only visible to subclasses 
