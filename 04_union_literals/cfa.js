"use strict";
/* Control Flow Analysis
CFA nearly always takes a union and reduces number of types inside the union based on logic in our code.
most of time CFA works inside natural Javascript boolean logic, but there are ways to define
your own function which affects how TS narrow Types */
//If Statement
// most narrowing comes form expression inside if statement , different operations narrow inside if scope 
// const input = getUserInput()
// input
// if (typeof input ==="string") {
//     input
// } 
