// გაამრავლე ყველა ელემენტი მასივში 2-ზე და შემდეგ ამოიღე რიცხვები, რომლებიც იყოფა 3-ზე

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let doubled = arr.map(function(num) {
    return num * 2;
});

let result = doubled.filter(function(num) {
    return num % 3 === 0;
});

console.log(result);
