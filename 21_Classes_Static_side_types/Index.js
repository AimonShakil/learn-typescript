"use strict";
// In TypeScript, classes have two types:
class Clock {
    constructor(h, m) {
        this.currentTime = new Date();
    }
}
// var cs: ClockStatic = Clock; // Error
// var newClock: ClockInterface = new cs(7, 30);
