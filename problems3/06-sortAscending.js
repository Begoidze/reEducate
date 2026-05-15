// დაალაგე რიცხვები ზრდადობით let numsArr = [1,-1,-2,-10,111,3,2,5]

let numsArr = [1, -1, -2, -10, 111, 3, 2, 5];

numsArr.sort(function(a, b) {
    return a - b;
});

console.log(numsArr);
