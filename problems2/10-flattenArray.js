// let arr = [1,[2,[3]],[4]] შენი მიზანია მიიღო [1,2,3,4]

let arr = [1, [2, [3]], [4]];

let flat = arr.flat(Infinity);

console.log(flat);
