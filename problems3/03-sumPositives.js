// დააბრუნე ყველა დადებითი რიცხვის ჯამი

let arr = [1, -2, 3, -4, 5, -6, 7];

let positives = arr.filter(function(num) {
    return num > 0;
});

let sum = 0;

for (let i = 0; i < positives.length; i++) {
    sum += positives[i];
}

console.log(sum);
