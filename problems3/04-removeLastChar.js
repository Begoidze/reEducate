// მოცემული სტრინგების მასივიდან წაშალე თითოეული სტრინგის ბოლო სიმბოლო
// let namesArr = ["giorgi","nika","mariami"]

let namesArr = ["giorgi", "nika", "mariami"];

for (let i = 0; i < namesArr.length; i++) {
    namesArr[i] = namesArr[i].slice(0, namesArr[i].length - 1);
}

console.log(namesArr);
