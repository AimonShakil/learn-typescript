
let myname: unknown = "Zia";
console.log((myname as string).length);
console.log((<string> myname).length)

//
let x = 'hello';
//console.log(((x as unknown) as number).length); // x is not actually a number so this will return undefined

// Cating with <> works same
let x1: unknown = 'hello';
console.log((<string>x1).length);