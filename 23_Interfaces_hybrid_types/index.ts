
//   The concept of a hybrid type refers to an object that combines properties of both a function and an object.

// Purpose:
// Hybrid types are useful when working with 3rd-party JavaScript libraries or APIs.
// They allow you to fully describe the shape of an object that behaves both like a function and an object.

interface Counter {
    (start: number) : string; //Note there is no name assigned to the function signature
    interval : number;
    reset(): void

}

let c : Counter;
c = function (start : number ) {
    console.log(`start : ${start}`);
    return "done";   
} as Counter; //type assertion 

c.interval = 5.0;
c.reset = function () { console.log("Reset"); };



c(10);
c.reset();
console.log(`Interval: ${c.interval}`);

//When interacting with 3rd-party JavaScript, you may need to use patterns like the above to fully-describe the shape of the type.

//Note: The transpiled Javascript code will not run here it is being used as an example