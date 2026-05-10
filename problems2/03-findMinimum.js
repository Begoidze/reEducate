// იპოვე მასივში მინიმალური რიცხვი let arr = [100,2,3,9]

let arr = [100, 2, 3, 9];

let min = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}

console.log(min);
