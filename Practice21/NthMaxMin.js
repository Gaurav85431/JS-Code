let arr = [12, 32, 34, 54, 56, 78, 65, 89, 98, 19];
let nth = 4;
let AscSort = arr.slice().sort((a, b) => a - b);
let DscSort = arr.slice().sort((a, b) => b - a);
let Max = AscSort[nth - 1];
let Min = DscSort[nth - 1];
console.log("Max and Min are ", Max, " and ", Min);


