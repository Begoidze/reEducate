// გაამრავლე ყველა ელემენტი 2-ზე და დატოვე მხოლოდ ისინი, რომლებიც 5-ზე მეტია

let arr = [1, 2, 3, 4, 5, 6, 7];

let doubled = [];

for (let i = 0; i < arr.length; i++) {
    doubled.push(arr[i] * 2);
}

doubled = doubled.filter(function(num) {
    return num > 5;
});

console.log(doubled);
