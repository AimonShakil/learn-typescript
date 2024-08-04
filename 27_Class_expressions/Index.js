"use strict";
// HTC Uisng Class Types in Generics
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(products) {
        this.cart.push();
    }
}
//Detection another Topic 
function detectTypes(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) { // means No ID say Null
        console.log("Please provide Id");
        return;
    }
    id.toLowerCase();
}
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
function isAdmin(account) {
}
