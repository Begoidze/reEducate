// გაფილტრე ისეთი რიცხვები რომლებიც იყოფა უნაშთოდ 3-ზე

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let result = arr.filter(function(num) {
    return num % 3 === 0;
});

console.log(result);
