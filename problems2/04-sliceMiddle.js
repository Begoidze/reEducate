// ამოიღე შუა 3 ელემენტი slice-ით. let arr = [1,2,3,4,5,6,7]

let arr = [1, 2, 3, 4, 5, 6, 7];

let middle = Math.floor(arr.length / 2);
let middleThree = arr.slice(middle - 1, middle + 2);

console.log(middleThree);
