// let arr = [1,1,1,1,2,2,3,3,3] დააბრუნე let unique = [1,2,3]

let arr = [1, 1, 1, 1, 2, 2, 3, 3, 3];

let unique = [];

for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
        unique.push(arr[i]);
    }
}

console.log(unique);
