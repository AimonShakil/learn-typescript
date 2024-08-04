"use strict";
//   The concept of a hybrid type refers to an object that combines properties of both a function and an object.
let c;
c = function (start) {
    console.log(`start : ${start}`);
    return "done";
}; //type assertion 
c.interval = 5.0;
c.reset = function () { console.log("Reset"); };
c(10);
c.reset();
console.log(`Interval: ${c.interval}`);
//When interacting with 3rd-party JavaScript, you may need to use patterns like the above to fully-describe the shape of the type.
//Note: The transpiled Javascript code will not run here it is being used as an example
