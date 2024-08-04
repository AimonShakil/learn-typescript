"use strict";
function delay(milliseconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
}
//Using `then`, `catch`, and `finally`:
delay(1000)
    .then(() => {
    console.log('The delay is over');
})
    .catch((error) => {
    console.error('Something went wrong:', error);
})
    .finally(() => {
    console.log('This is always executed');
});
