// გაყავი მასივი ორ ცალკე მასივად (ლუწი და კენტი). მინიშნება: გამოიყენე % 2 === 0
// let arr = [1,2,3,4,5,6,7]

let arr = [1, 2, 3, 4, 5, 6, 7];

let even = [];
let odd = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        even.push(arr[i]);
    } else {
        odd.push(arr[i]);
    }
}

console.log("ლუწი:", even);
console.log("კენტი:", odd);
