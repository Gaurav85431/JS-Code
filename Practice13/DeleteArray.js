let arr = [23, 24, 42, 5, 3948, 46, 6, 7, 7, 6, 93, 5, 45, 46, 64, 4, 34, 34, 34];

let DLast = arr.pop();
console.log("1 ", arr)
let DFirst = arr.shift();
console.log("2 ", arr)
let nth = arr[4];
console.log("3 ", arr)


arr.length = arr.length - 1;
console.log("4 ", arr)


arr.splice(4, 1, 'Gaurav');
console.log("After modification ", arr)