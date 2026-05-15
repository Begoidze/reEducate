// დააბრუნეთ ორი ყველაზე მცირე რიცხვის ჯამს let arr = [-1,20,90,4,5,111]

let arr = [-1, 20, 90, 4, 5, 111];

arr.sort(function(a, b) {
    return a - b;
});

console.log(arr[0] + arr[1]);
