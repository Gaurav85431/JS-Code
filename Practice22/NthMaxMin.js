let arr = [12, 23, 34, 54, 45, 56, 76, 68, 90, 78, 89];
let AscSort = arr.slice().sort((a, b) => a - b);
let DscSort = arr.slice().sort((a, b) => b - a);

let nth = 5;
console.log("Nth min ", AscSort[nth - 1]);
console.log("Nth max ", DscSort[nth - 1])