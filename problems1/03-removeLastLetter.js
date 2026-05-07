// let str = "luka" ამოიღეთ ბოლო ასო და გადააქციეთ upperCase-ად

let str = "luka";
// remove last letter and uppercase the rest
let result = str.slice(0, -1).toUpperCase();
console.log(result); // "LUK"

// get last letter and uppercase it
let lastLetter = str[str.length - 1].toUpperCase();
console.log(lastLetter); // "A"
