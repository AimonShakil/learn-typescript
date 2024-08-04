"use strict";
// A book with all properties
const completeBook = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    publicationYear: 1937,
};
// A book with only the title and author
const partialBook = {
    title: "Meditations",
    author: "Marcus Aurelius",
};
// A book with only the title
const titleOnlyBook = {
    title: "The Little Prince",
};
function createSqure(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width;
    }
    return newSquare;
}
var mySqure = createSqure({ color: "black " });
console.log(mySqure.area);
//The advantage of optional properties is that you can describe these possibly available properties
//while still also catching properties that you know are not expected to be available. 
